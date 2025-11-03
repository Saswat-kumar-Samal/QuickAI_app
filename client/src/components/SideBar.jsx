import React from 'react';
import {useClerk, useUser} from "@clerk/clerk-react";

const SideBar = ({sidebar, setSidebar}) => {

    const {user} = useUser()
    const {signOut, openUserProfile} = useClerk()

  return (
    <div className={`w-60 bg-white border-r border-gray-500 flex flex-col justify-between items-center 
    max-sm:absolute top-0 bottom-0 ${sidebar ? 'translate-x-10' : '-translate-x-full'} 
    transition-all duration-400 ease-in-out sm:static sm:translate-x-0`}>

        <div className='my-7 w-full'>

            <img src={user.imageUrl} alt="" className={'w-14 rounded-full mx-auto'}/>
            <h1 className='mt-2 text-center' >{user.fullName}</h1>

        </div>

    </div>
  );
};

export default SideBar;
