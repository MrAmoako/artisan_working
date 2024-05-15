import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

function Profilepic() {
  const [currentUser, setCurrentUser] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Firebase listener for user authentication state
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        fetchUserData(user.uid);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const fetchUserData = async (uid) => {
    try {
      const docRef = db.collection("users").doc(uid);
      const doc = await docRef.get();

      if (doc.exists) {
        const userData = doc.data();
        setImageUrl(userData.imageUrl || '');
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = () => {
    if (!image) return;

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
            // Update user document with image URL
            db.collection("users").doc(currentUser.uid).update({
              imageUrl: url
            });
          });
      }
    );
  };

  return (
    <div>
      <div className="flex h-screen justify-left items-center ml-20">
        {currentUser ? (
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome, {currentUser.displayName || currentUser.email}!</h1>

            {imageUrl && <img src={imageUrl} alt="User" className="w-40 h-40 object-cover rounded-full mb-5" />}

            
            <input type="file" onChange={handleImageChange} className="mb-5" />
            <button onClick={uploadImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-5 transition-all duration-300">
              Upload Image
            </button>
            <progress value={progress} max="100" className="mb-5"></progress>
          </div>
        ) : (
          <p className="text-xl font-bold">loading.</p>
        )}
      </div>
    </div>
  );
}

export default Profilepic;
