import {useRef, useState} from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../utils/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState (true);
  const [errorMessage, seterrorMessage] = useState (null);

  const dispatch = useDispatch();
  const  name = useRef(null);
  const email = useRef (null);
  const password = useRef (null);



  const handleButtonClick = () => {
    //  Validate the form data

    console.log (email.current.value);
    console.log (password.current.value);

    const message = checkValidData (
      email.current.value,
      password.current.value
    );
    seterrorMessage (message);

    // SignIn /SignUp
    if (!isSignInForm) {
      // Sign up Logic

      createUserWithEmailAndPassword (
        auth,
        email.current.value,
        password.current.value
      )
        .then (userCredential => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
           displayName: name.current.value,
          })
          .then(()=>{
            const {uid, email, displayName} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName
              })
            );
            
          })
          console.log (user);
          
          // ...
        })
        .catch (error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage (errorCode + ' ' + errorMessage);
          // ..
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword (
        auth,
        email.current.value,
        password.current.value
      )
        .then (userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log (user);
         
          // ...
        })
        .catch (error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage (errorCode + '_' + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm (!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={e => e.preventDefault ()}
        className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-8 sm:p-12 bg-black my-24 sm:my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl sm:text-4xl py-4 text-center">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm &&
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 sm:p-4  m-2 w-full  bg-gray-700 rounded-lg "
          />}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 sm:p-4 m-2 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password}
          type="type Password"
          placeholder="password"
          className="p-3 m-2 w-full  bg-gray-700 rounded-lg "
        />
        <p className="text-red-700 font-bold text-lg sm:text-base py-2 px-2">
          {errorMessage}
        </p>

        <button
          className="p-3 sm:p-4 m-2 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <div className="flex items-center m-2 text-gray-400 text-xs sm:text-sm">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 accent-red-600"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <p
          className="py-4 cursor-pointer text-sm sm:text-base"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? 'New to Netflix? Sign Up Now'
            : 'Already User? log In Now'}

        </p>
      </form>
    </div>
  );
};

export default Login;
