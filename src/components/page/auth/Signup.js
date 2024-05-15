import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import backgroundImage from '../../images/back2.jpg'; // Import your background image

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
  const [displayName, setDisplayName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [job, setJob] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
<<<<<<< Updated upstream
=======
  const [error, setError] = useState(null);
>>>>>>> Stashed changes

  const handleSignUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Set display name
      await user.updateProfile({
        displayName: displayName,
      });

      // Add user info to Firestore
      await firebase.firestore().collection('users').doc(user.uid).set({
        email: email,
        displayName: displayName,
        age: age,
        job: job,
        country: country,
        name: name,
        password: password,
        description: description,
        number: number,
      });

      console.log('User signed up successfully:', user);
      navigate('/login')
    } catch (error) {
<<<<<<< Updated upstream
      console.error('Error signing up:', error.message);
=======
      setError(error.message);
>>>>>>> Stashed changes
    }
  };

  return (
<<<<<<< Updated upstream
    <div className="flex justify-center items-center h-screen">
    <div className="w-80 bg-gray-100 p-6 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 ">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="block w-full px-4 py-2 mb-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full px-4 py-2 mb-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full px-4 py-2 mb-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full px-4 py-2 mb-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
       <input
        type="text"
        placeholder="number.eg 0244181826"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="block w-full px-4 py-2 mb-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="block w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Artisan/Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className="block w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
       <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="block w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea 
        type="text"
        placeholder="Write About yourself"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSignUp}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 trasition-all duration-300"
      >
        Sign Up
      </button>
      <p>Already have an account?<a href={'/login'}>Login</a> </p>
    </div>
=======
    <div
      className="flex justify-center items-center p-2"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="w-full max-w-md p-6 rounded-lg bg-white pt-[20px]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
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
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Artisan/Job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="col-span-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          placeholder="Write About yourself"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 mb-4 rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
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
>>>>>>> Stashed changes
    </div>
  );
};

export default SignUp;
