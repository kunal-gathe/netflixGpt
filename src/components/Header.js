import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, languageKeys } from "../utils/constant";
import { toggleGptSearch } from "../utils/moviesSlice";
import { addLangKey } from "../utils/configureSlice";

const Header = () => {
  let user = useSelector((store) => store.user);
  let gpt = useSelector((store) => store.movies.gptSearch);
console.log(gpt);
  let navigate = useNavigate();
  let dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(()=>{
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName,photoURL} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }))

          navigate('/browse')


        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });

    return ()=>{
      unsubscribe()
    }

  },[])

  const handleGptSearchToggle = ()=>{
    dispatch(toggleGptSearch())
  }

  const handleSupportLanguage =(e)=>{
   dispatch(addLangKey(e.target.value))
  }

  return (
    <div className="flex  flex-col">
      <img
        src={LOGO}
        alt="logo"
        className="w-32 md:w-52 md:backdrop:mx-16 md:my-4 bg-opacity-70 z-30 absolute "
      />
      {user && (
        <div>
          {
            gpt && <select className=" right-28 text-xs absolute z-50 md:right-52 my-4 bg-transparent text-white md:p-2"
            onChange={handleSupportLanguage}
            >
             {
              languageKeys.map((lang)=>{
                return  <option value={lang.identifier} key={lang.identifier} className="text-black">{lang.name}</option>
              })
             }
            </select>
          }
          <button
            className="w-12 absolute z-50 text-white cursor-pointer right-12 text-xs md:right-28 md:bg-gray-800 md:font-medium md:px-2 mt-4 mx-4 rounded-lg md:p-2 md:text-md md:w-16 "
            onClick={() => handleGptSearchToggle()}
          >
           {gpt ? "Home"  : "Search" }
          </button>
          <img
            className=" hidden md:inline-block absolute z-50 text-white right-20 w-10 h-6  font-bold px-2 mt-4 mx-4 rounded-lg md:right-16 md:top-1"
            src={user.photoURL}
            alt="userPhoto"
          />
          <button
            className="w-12 p-0 text-xs absolute z-50 text-white cursor-pointer right-0 md:bg-red-600 md:font-bold md:px-2 mt-4 mx-4 rounded-lg md:p-2 md:text-md md:w-16"
            onClick={() => handleSignOut()}
          >
            logout
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Header;
