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
  const [displayName, setDisplayName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [job, setJob] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationError, setVerificationError] = useState(null);

  const handleSignUp = async () => {
    try {
      // Create user with email and password
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Send email verification
      await user.sendEmailVerification();

      console.log('Verification email sent successfully');

      setShowVerification(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleVerify = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (!user) {
        throw new Error('No user signed in');
      }

      // Apply the verification code
      await user.confirmEmailVerification(verificationCode);

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
      navigate('/login');
    } catch (error) {
      setVerificationError(error.message);
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

      {/* Verification Code Modal */}
      {showVerification && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enter Verification Code</h2>
            {verificationError && <p className="text-red-500 text-xs italic mb-4">{verificationError}</p>}
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
            />
            <button
              onClick={handleVerify}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all duration-300"
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
