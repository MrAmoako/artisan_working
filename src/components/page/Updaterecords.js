import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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

function Updaterecords() {
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState('');
  const [job, setJob] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

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
        setDescription(userData.description || '');
        setNumber(userData.number || '');
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const updateDescription = async () => {
    // Check if user is logged in
    if (!currentUser) {
      console.log("User not logged in!");
      return;
    }

    try {
      // Update description and number fields
      await db.collection("users").doc(currentUser.uid).set({
        description: description,
        number: number
      }, { merge: true });

      console.log("Description successfully updated!");
    } catch (error) {
      console.error("Error updating description: ", error);
    }
  };

  const addJob = async () => {
    // Check if user is logged in
    if (!currentUser) {
      console.log("User not logged in!");
      return;
    }

    try {
      // Add job to user's job list
      await db.collection("users").doc(currentUser.uid).update({
        jobs: firebase.firestore.FieldValue.arrayUnion(job)
      });

      console.log("Job successfully added!");
      setJob('');
    } catch (error) {
      console.error("Error adding job: ", error);
    }
  };

  return (
    <div>
      <div className="flex h-screen justify-left items-center ml-20">
        {currentUser ? (
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome, {currentUser.displayName || currentUser.email}!</h1>

            <textarea 
              type="text" 
              id="description" 
              name="description" 
              placeholder='update description'
              value={description} 
              onChange={handleDescriptionChange} 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue mb-5"
            />
            <textarea 
              type="number" 
              id="number" 
              name="number" 
              placeholder='update number'
              value={number} 
              onChange={handleNumberChange} 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
             <input 
              type="text" 
              id="job" 
              name="job" 
              placeholder='add job'
              value={job} 
              onChange={handleJobChange} 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
            <button onClick={updateDescription} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mr-5 transition-all duration-300">
              Update Description
            </button>

           
            <button onClick={addJob} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5 transition-all duration-300">
              Add Job
            </button>
          </div>
        ) : (
          <p className="text-xl font-bold">loading.</p>
        )}
      </div>
    </div>
  );
}

export default Updaterecords;
