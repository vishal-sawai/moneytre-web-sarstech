import React from 'react'
import Topbar from '../Component/Topbar';
import Header from '../Component/Header';

const Profile = () => {
    // Fetch the user's profile information from the local storage
    const profileObj = JSON.parse(localStorage.getItem('profileObj'));

    // Check if the profile information exists
    if (!profileObj) {
        return <p>No user is logged in</p>;
    }

    return (
        <>
            <Topbar />
            <Header />
            <div className='container d-flex justify-content-center align-items-center mt-3'>
                <div className='border text-center py-5 rounded-3' style={{ height: "500px", width: "500px" }}>
                    <img className='rounded-circle mx-auto d-block' style={{ height: "100px" }} src={profileObj.imageUrl} alt="Profile" />
                    <h2 className='mt-2'>{profileObj.name}</h2>
                    <p className='text-center'>{profileObj.email}</p>
                </div>
            </div>
        </>
    )
}

export default Profile;