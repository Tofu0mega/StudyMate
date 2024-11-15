import React, { useState, useEffect } from 'react';
import { GETDATA } from '../../utils/APICalls';
import "./Profile.css"

export default function Profile() {
    const [UserData, setUserData] = useState({});

    useEffect(() => {
        const datafetch = async () => {
            const Id = localStorage.getItem("UserId");
            const response = await GETDATA(`users/${Id}`);
            const data = await response.json();
            setUserData(data);
        };

        datafetch(); // Fetch user data on component mount
    }, []);

    return (
        <div className="profile-container">
            <div className="profileshowcard">
                <div className="profile-header">
                    {/* Profile Picture */}
                    {UserData.ProfilePicture ? (
                        <img
                            src={UserData.ProfilePicture}
                            alt="Profile"
                            className="profile-picture"
                        />
                    ) : (
                        <div className="profile-picture-placeholder">No Image</div>
                    )}
                    <h2>{UserData.Username}</h2>
                    <p>{UserData.role}</p>
                </div>

                <div className="profile-details">
                    <p><strong>Email:</strong> {UserData.Email}</p>
                    <p><strong>Institution:</strong> {UserData.Institution}</p>
                    {UserData.role==="Student"&&(<p><strong>Level:</strong> {UserData.Level}</p>)}
                    <p><strong>Date of Joining:</strong> {new Date(UserData.dateOfJoining).toLocaleDateString()}</p>
                    <p><strong>Gender:</strong> {UserData.gender}</p>
                    <p><strong>Date of Birth:</strong> {UserData.dob ? new Date(UserData.dob).toLocaleDateString() : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}
