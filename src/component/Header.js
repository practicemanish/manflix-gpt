import {signOut} from 'firebase/auth';
import React from 'react';
import {auth} from '../utils/firebase';
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate ();
  const handleSignOut = () => {
    signOut (auth)
      .then (() => {
        //Sign out successful
        navigate ('/');
      })
      .catch (error => {
        // an error occured
        navigate ('/error');
      });
  };
  return (
    <div className="absolute w-full top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-28 sm:w-36 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        <img src="https://icons8.com/icon/59781/exit
" alt="" />
        <button onClick={handleSignOut} className="font-bold  text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
