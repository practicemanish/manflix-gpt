import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg"
          alt="background-image"
        />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
        <input type='text' placeholder='Email Address' className='p-2 m-2' />
        <input type='text' placeholder='password' className='p-2 m-2 ' />
        <button className='p-4 m-4'>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
