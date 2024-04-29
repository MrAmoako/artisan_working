import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const UploadPage = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  // Effect to set current user on authentication change
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // Function to handle file change
  const handleFileChange = (e, fileNumber) => {
    const selectedFile = e.target.files[0];
    switch (fileNumber) {
      case 1:
        setFile1(selectedFile);
        break;
      case 2:
        setFile2(selectedFile);
        break;
      case 3:
        setFile3(selectedFile);
        break;
      default:
        break;
    }
  };

  // Function to handle file upload
  const handleUpload = async (file, fileNumber) => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    try {
      // Upload file to Firebase Storage
      const storageRef = firebase.storage().ref(`userImages/${currentUser.uid}/image${fileNumber}`);
      const uploadTask = storageRef.put(file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Error uploading file: ', error);
          setUploading(false);
        },
        async () => {
          // Get download URL for the uploaded file
          const downloadURL = await storageRef.getDownloadURL();

          // Update user document in Firestore with the download URL
          await db.collection('users').doc(currentUser.uid).update({
            [`profilePictureURL${fileNumber}`]: downloadURL
          });

          setUploading(false);
          setUploadProgress(0);
          alert('File uploaded successfully!');
        }
      );
    } catch (error) {
      console.error('Error uploading file: ', error);
      setUploading(false);
    }
  };

  // Render the upload form
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Upload Page</h2>
      <div className="mb-4">
        <input type="file" onChange={(e) => handleFileChange(e, 1)} />
        <button onClick={() => handleUpload(file1, 1)} disabled={uploading} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'>
          Upload Image 1
        </button>
      </div>
      <div className="mb-4">
        <input type="file" onChange={(e) => handleFileChange(e, 2)} />
        <button onClick={() => handleUpload(file2, 2)} disabled={uploading} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'>
          Upload Image 2
        </button>
      </div>
      <div className="mb-4">
        <input type="file" onChange={(e) => handleFileChange(e, 3)} />
        <button onClick={() => handleUpload(file3, 3)} disabled={uploading} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'>
          Upload Image 3
        </button>
      </div>
      {uploading && <div>Uploading... {uploadProgress}%</div>}
      <a href='/already' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300'>See your already uploaded works</a>
    </div>
  );
};

export default UploadPage;
