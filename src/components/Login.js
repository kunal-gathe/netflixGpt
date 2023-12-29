import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate, validateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constant";

function Login() {
  let [isSignIn, setIsSighIn] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);
  let [nameError, setNameError] = useState(null);
  let dispatch = useDispatch();

  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);

  const handleError = () => {
    !isSignIn && setNameError(validateName(name.current.value));
    const message = setErrorMessage(
      checkValidate(email.current.value, password.current.value)
    );

    if (message) return;

    if (!isSignIn) {
      // sigh up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          }).then(() => {
            // Profile updated!

            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL
            }))
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
          // ..
        });
    } else {
      // sigh in

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src={BG_IMG}
          alt="bg-img"
          className="fixed brightness-50 md:absolute h-screen object-cover md:w-full  "
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-10 ml-5 mb-5  absolute flex flex-col bg-black md:w-1/4 md:h-[73%] top-28 md:left-[37%] px-16 py-12 bg-opacity-60 rounded-lg"
        >
          <h1 className="text-white text-3xl font-bold my-6  ">
            {isSignIn ? "SignIn" : "SighUp"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-3 mb-6 bg-slate-800 rounded-lg text-white"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 mb-6 bg-slate-800 rounded-lg text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 bg-slate-800 rounded-lg text-white"
          />
          <p className="text-red-600 font-medium mb-2">{errorMessage}</p>
          {/* <p className='text-red-600 font-medium mb-2'>{nameError}</p> */}
          <button
            onClick={() => handleError()}
            className="bg-red-600 text-xl font-bold text-white p-3 rounded-lg"
          >
            Submit
          </button>
          <p
            className="mt-4 text-white"
            onClick={() => {
              setIsSighIn(!isSignIn);
            }}
          >
            {isSignIn ? "Account Registered! Sign Up" : "New user? Sign up"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
