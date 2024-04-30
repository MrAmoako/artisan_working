import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOD71J0RWnNiPM9ly9GxqeUdzKfLfgYTA",
  authDomain: "artisans-774fd.firebaseapp.com",
  projectId: "artisans-774fd",
  storageBucket: "artisans-774fd.appspot.com",
  messagingSenderId: "93179578940",
  appId: "1:93179578940:web:b8cbf8431c9cd6ba241139",
  measurementId: "G-T6LZ472YEY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ImageDisplay = ({ userId }) => {
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');

  // Fetch image URLs for the user's profile pictures
  useEffect(() => {
    const fetchImageUrl = async (imageNumber) => {
      try {
        // Get user document from Firestore
        const userDoc = await firebase.firestore().collection('users').doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          // Update state with the image URL for the corresponding imageNumber
          if (userData && userData[`profilePictureURL${imageNumber}`]) {
            switch (imageNumber) {
              case 1:
                setImageUrl1(userData.profilePictureURL1);
                break;
              case 2:
                setImageUrl2(userData.profilePictureURL2);
                break;
              case 3:
                setImageUrl3(userData.profilePictureURL3);
                break;
              default:
                break;
            }
          } else {
            // If no image URL found, set state to an empty string
            switch (imageNumber) {
              case 1:
                setImageUrl1('');
                break;
              case 2:
                setImageUrl2('');
                break;
              case 3:
                setImageUrl3('');
                break;
              default:
                break;
            }
          }
        }
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    // Fetch URLs for all three images
    fetchImageUrl(1);
    fetchImageUrl(2);
    fetchImageUrl(3);
  }, [userId]);

  // Handle image upload
  const handleImageUpload = async (e, imageNumber) => {
    try {
      const file = e.target.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`profile_images/${userId}/image${imageNumber}`);
      // Upload image to Firebase Storage
      await fileRef.put(file);
      // Get the download URL of the uploaded image
      const imageUrl = await fileRef.getDownloadURL();
      // Update Firestore document with the image URL
      const userDocRef = firebase.firestore().collection('users').doc(userId);
      await userDocRef.update({
        [`profilePictureURL${imageNumber}`]: imageUrl
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-3 gap-4">
          {/* Input for uploading first image */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 1)}
              style={{ display: "none" }}
              id="upload1"
            />
            <label htmlFor="upload1" className="block cursor-pointer">
              {/* Display uploaded image or loading message */}
              {imageUrl1 ? (
                <img src={imageUrl1} alt="User" className="w-full h-60 rounded-lg" />
              ) : (
                <div className="bg-gray-200 flex justify-center items-center w-full h-60">
                  <p className="text-gray-500 text-sm">Loading...</p>
                </div>
              )}
            </label>
          </div>
          {/* Input for uploading second image */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 2)}
              style={{ display: "none" }}
              id="upload2"
            />
            <label htmlFor="upload2" className="block cursor-pointer">
              {/* Display uploaded image or loading message */}
              {imageUrl2 ? (
                <img src={imageUrl2} alt="User" className="w-full h-60 rounded-lg" />
              ) : (
                <div className="bg-gray-200 flex justify-center items-center w-full h-60">
                  <p className="text-gray-500 text-sm">Loading...</p>
                </div>
              )}
            </label>
          </div>
          {/* Input for uploading third image */}
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 3)}
              style={{ display: "none" }}
              id="upload3"
            />
            <label htmlFor="upload3" className="block cursor-pointer">
              {/* Display uploaded image or loading message */}
              {imageUrl3 ? (
                <img src={imageUrl3} alt="User" className="w-full h-60 rounded-lg" />
              ) : (
                <div className="bg-gray-200 flex justify-center items-center w-full h-60">
                  <p className="text-gray-500 text-sm">Loading...</p>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
