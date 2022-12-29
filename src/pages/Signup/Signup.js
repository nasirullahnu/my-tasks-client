import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Signup = () => {
    const {createUser, googleLogin, updateUser, loading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();


    // google login
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
          .then((res) => res.json())
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/')
          })
          .catch((error) => console.error(error));
      };


    // signup with email and password 
    const handleEmailLogin = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
    .then(result => {
        const user = result.user
        console.log(user)
        const userInfo ={
            displayName : name
        }
        updateUser(userInfo)
        .then(()=>{})
        .catch(err => console.error(err));
        form.reset();
        navigate('/')
    })
    .catch(e => console.error(e))
    }

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className='flex flex-col justify-center items-center mt-8 '>
<form onSubmit={handleEmailLogin} className='w-1/2 bg-green-600 p-6 shadow-2xl'>

<div className="relative mb-3">
    <input type="text" name='name' id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
</div>


<div className="relative mb-3">
    <input type="email" name='email' id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
</div>


<div className="relative mb-3">
    <input type="password" name='password' id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
    <label for="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
</div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>

</form>
<p>Already have an account? 
    <Link to='/login' className='text-yellow-500 font-semibold'>Login</Link>
</p><hr></hr>
<button onClick={handleGoogleLogin} type="button" className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Signup With Google</button>

</div>
    );
};

export default Signup;