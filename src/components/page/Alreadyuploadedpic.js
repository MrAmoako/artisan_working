import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

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

const Alreadyuploadedpic = () => {
  const [user, setUser] = useState(null);
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const storageRef = firebase.storage().ref(`userImages/${user.uid}`);
      storageRef.listAll()
        .then(result => {
          // Get download URLs of all images in the user's folder
          const promises = result.items.map(item => item.getDownloadURL());
          Promise.all(promises)
            .then(urls => {
              setUserImages(urls);
            })
            .catch(error => {
              console.error('Error getting download URLs: ', error);
            });
        })
        .catch(error => {
          console.error('Error listing images: ', error);
        });
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center pt-[7rem]  text-4xl">Images Uploaded by User</h2>
      <div className="flex flex-wrap justify-center">
        {userImages.length > 0 ? (
          userImages.map((imageUrl, index) => (
            <div key={index} className="max-w-sm m-4 pt-[2rem] ">
              <div className="bg-white shadow-md hover: rounded-lg duration-300">
                <img className="w-full h-64 object-cover object-center rounded-lg" src={imageUrl} alt={`Image ${index}`} />
              </div>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Alreadyuploadedpic;
