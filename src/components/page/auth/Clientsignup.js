import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Set display name
    

      // Add user info to Firestore
      await firebase.firestore().collection('clients').doc(user.uid).set({
        email: email,
        name: name,
        password: password,
        number: number,
      });

      console.log('User signed up successfully:', user);
      navigate('/Clientlogin');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 rounded-lg bg-white pt-[130px]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="grid grid-cols-2 gap-4 mb-4">
     
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Number (eg. 0244181826)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
         
     
        </div>
 
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all duration-300"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
