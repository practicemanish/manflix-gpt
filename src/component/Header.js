import {onAuthStateChanged, signOut} from 'firebase/auth';
import React, {useEffect} from 'react';
import {auth} from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch ();
  const navigate = useNavigate ();
  const user = useSelector (store => store.user);
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

  useEffect (() => {
    onAuthStateChanged (auth, user => {
      if (user) {
        // user is signed in, see docs for a list of available properties
        //
        const {uid, email, displayName} = user.uid;
        dispatch (
          addUser ({
            uid: uid,
             email: email,
              displayName: displayName
            })
          );
          navigate("/browse");
      } else {
        // user is signed oult
        dispatch (removeUser ());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-28 sm:w-36 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user &&
        <div>
          <img src="https://icons8.com/icon/59781/exit
" alt="" />
          <button onClick={handleSignOut} className="font-bold  text-white">
            (Sign Out)
          </button>
        </div>}
    </div>
  );
};

export default Header;
