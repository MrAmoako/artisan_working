import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import background from '../../actualcomp/images/a1.png'
import { useParams } from 'react-router-dom';
import gsap from 'gsap';

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

const db = firebase.firestore();

const Client = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await db.collection('users').get();
        const fetchedUsers = usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
   
}, [])
  const handleOpenPopup = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-4 gap-[1rem]">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg w-[300px]">
            <img src={background} className='rounded-t-lg'/>
            <div className="p-6 ">
              <h2 className="font-bold mb-1 text-2xl text-left">{user.name}</h2>
              <p className="text-black mb-1 text-left">{user.job}</p>
              <button onClick={() => handleOpenPopup(user)} className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' >View Details</button>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
  <div className="fixed z-10 inset-0 overflow-y-auto ">
    <div className="flex items-center justify-center min-h-screen p-4 ">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className=" px-4 py-2">
          <h2 className="font-bold text-2xl">{selectedUser.name}</h2>
          <p className="text-gray-600 ">{selectedUser.job}</p>
        </div>
        <div className="px-4 py-2">
          <p className="text-gray-800 ">Number: {selectedUser.number}</p>
          <p className="text-gray-800 ">Description: {selectedUser.description}</p>
          {/* Add more details here as needed */}
        </div>
        <div className=" px-4 py-2">
        <a href={`/gallery/${selectedUser.id}`} className="text-white bg-blue-500 hover:bg-indigo-500 py-2 px-4 rounded ml-2 transition-all duration-300">Gallery</a> {/* Link to Gallery */}
          <button onClick={handleClosePopup} className="text-white bg-blue-500 hover:bg-indigo-500 py-2 px-4 rounded transition-all duration-300">Close</button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Client;