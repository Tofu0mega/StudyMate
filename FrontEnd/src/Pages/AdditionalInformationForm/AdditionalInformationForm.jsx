import React, { useState } from "react";
import "./AdditionalInformationForm.css";
import { POSTDATA } from "../../utils/APICalls";

export default function AdditionalInformationForm() {
  const [DOB, setDOB] = useState();
  const [Gender, setGender] = useState();
  const [Institute, setInstitute] = useState();
  const [Role, setRole] = useState();
  const [Level, setLevel] = useState();
  const [ProfilePicture, setProfilePicture] = useState();
  const [ProfilePicturePreview, setProfilePicturePreview] = useState();
  const [Error, setError] = useState();

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
        setProfilePicturePreview(URL.createObjectURL(file)); // storing the profile picture as a string (base64)
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    try{
        e.preventDefault()
        const requiredFields = [
            { name: "Institute", value: Institute },
            { name: "Gender", value: Gender },
            { name: "DOB", value: DOB },
            { name: "Role", value: Role },
           
          ];
        
          // Check each field; if any is missing, set an error and stop submission
          for (let field of requiredFields) {
            if (!field.value) {
              setError(`${field.name} is required`);
              return; // Stop submission if any field is missing
            }
          }
        
          // Clear error if all fields are present
          setError("");

        
        const userid = localStorage.getItem("UserId");
        const handledatasubmit = async () => {
            const userdata = {
                DOB: DOB,
                Gender: Gender,
                Institute: Institute,
                Role: Role,
                ProfilePicture: ProfilePicture,
                Level:Level,
            };
            const response = await POSTDATA(
                `users/adddetails/${userid}`,
                userdata
            );
            console.log(1)
      console.log(response)
      if (response.ok) {
          console.log(1)
          window.location.href = "/Home";
        } else {
            const data = await response.json();
            setError(data.message);
        }
    };
    handledatasubmit();
}catch(e){
    console.log(e)
}
};

return (
    <div className="formBody">
      <h1>
        Please Submit Additional Details To Help Us Better Serve Your Study
        Needs
      </h1>
      <form onSubmit={handleSubmit}>
        <h2>Institute</h2>
        <input
          type="text"
          placeholder="Institute"
          onChange={(e) => setInstitute(e.target.value)}
          />

        <h2>Gender</h2>
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
          />

        <h2>Date of Birth</h2>
        <input type="date" onChange={(e) => setDOB(e.target.value)} />

        <h2>Role</h2>
        <select onChange={(e) => setRole(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select Role
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        {Role === "Student" && (
          <>
            <h2>Level</h2>
            <input
              type="text"
              placeholder="Year/Semester"
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            />
          </>
        )}

        <h2>Profile Picture</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />

        {ProfilePicturePreview && (
          <div className="imagePreview">
            <img src={ProfilePicturePreview} alt="Profile Preview" />
          </div>
        )}
    
         {Error && (
        
          <h2 className="ErrorContainer">{Error}</h2>
       
      )}

        <button type="submit" className="SubmitButton">
          Submit
        </button>
      </form>
    </div>
  );
}
