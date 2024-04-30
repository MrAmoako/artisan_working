import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import background from '../../actualcomp/images/a1.png';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch all users from Firestore
        const usersCollection = await db.collection('users').get();
        const fetchedUsers = usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(fetchedUsers);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (

    <div className="container mx-auto  mt-10 h-screen flex justify-center items-center">
      {loading ? ( // Show loading animation if data is still loading
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-500 inline-block mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.707 5.293h2.58a1 1 0 110 2h-2.58a6 6 0 106.001 6.001h-2.58a1 1 0 110-2h2.58a3.999 3.999 0 11-3.292 1.707z"></path>
          </svg>
      
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-[1rem] pt-[120px]">
          {users.map((user, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg w-[300px] ">
              <img src={background} className='rounded-t-lg'/>
              <div className="p-6 rounded-b" style={{background: 'linear-gradient(to bottom right, #3182CE, #8B5CF6)'}} >
                <h2 className="font-bold mb-1 text-2xl text-left text-white">{user.name}</h2>
                <p className="text-black mb-1 text-left text-white">{user.job}</p>
                <button onClick={() => setSelectedUser(user)} className='bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300 ' >View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        // Popup to display details of the selected user
        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center justify-center min-h-screen p-4 ">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full" style={{background: 'linear-gradient(to bottom right, #3182CE, #8B5CF6)'}}>
              <div className=" px-4 py-2">
                <h2 className="font-bold text-2xl text-white">{selectedUser.name}</h2>
                <p className="text-gray-600 text-white">{selectedUser.job}</p>
              </div>
              <div className="px-4 py-2">
                <p className="text-gray-800 text-white">Number: {selectedUser.number}</p>
                <p className="text-gray-800 text-white">Description: {selectedUser.description}</p>
                {/* Add more details here as needed */}
              </div>
              <div className=" px-4 py-2">
                <a href={`/gallery/${selectedUser.id}`} className="text-white bg-blue-500 hover:bg-indigo-500 py-2 px-4 rounded ml-2 transition-all duration-300">Gallery</a> {/* Link to Gallery */}
                <button onClick={() => setSelectedUser(null)} className="text-white bg-blue-500 hover:bg-indigo-500 py-2 px-4 rounded transition-all duration-300">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Client;
