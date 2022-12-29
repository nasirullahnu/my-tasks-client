import React from 'react';

const Footer = () => {
    return (
        
<div className='mt-11 mx-8'>
<footer className="p-4 mb-0 mt-0  bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Nasir Ullah™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://cozy-toffee-fbf04b.netlify.app/?fbclid=IwAR3cISYf0SSmJ3mqgPYwHPmEVcrkcFdJz1Hr9cKcHmu22xRbdoHSok8TpqQ" className="mr-4 hover:underline md:mr-6 ">Portfolio</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/nasir-u-5399221b0/" className="mr-4 hover:underline md:mr-6">LinkedIN</a>
        </li>
        <li>
            <a href="https://drive.google.com/file/d/1Qy6Nb6edHV3gH8_vKLscS5MgkNHgpBJR/view?usp=share_link" className="mr-4 hover:underline md:mr-6">Resume</a>
        </li>
        <li>
            <a href="mailto:nasirullah878@gmail.com" className="hover:underline">Mail</a>
        </li>
    </ul>
</footer>
</div>

    );
};

export default Footer;