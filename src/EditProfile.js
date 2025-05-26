import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function EditProfile() {
  const storedUser = localStorage.getItem("user");
  const userId = storedUser ? JSON.parse(storedUser).id : null;
  const [updatemessage,setUpdatemessage] = useState("");

  const [user, setUser] = useState({
    surname: "",
    firstname: "",
    othername: "",
    sex: "",
    course: "",
    mode: "",
    email: "",
    password: "",
    profilepics: ""
  });

  useEffect(() => {
    if (!userId) return;
    axios.get(`http://localhost:3000/api/user/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/api/user/${userId}`, user)
      .then(() => setUpdatemessage("Profile updated successfully"))
      .catch(err => console.error(err));
  };

  if (!userId) return <p>Please log in again</p>;

  return (
  <div className="wholeeditprofile">
 
    <div className="edit-profile-container">
	<div className="dashboardlink"><Link to="/dashboard" className="dashboardlink"><button>Dashboard</button></Link></div>
		
      <h2 className="edit-profile-header">Edit Profile</h2>
	  <div className="form-container">
      <label>Surname : </label><input name="surname" value={user.surname} onChange={handleChange} placeholder="Surname" /><br/>
      <label>Firstname : </label><input name="firstname" value={user.firstname} onChange={handleChange} placeholder="First Name" /><br/>
      <label>OtherName : </label><input name="othername" value={user.othername} onChange={handleChange} placeholder="Other Name" /><br/>
      <label>Sex : </label><input name="sex" value={user.sex} onChange={handleChange} placeholder="Sex" /><br/>
      <label>Course : </label><input name="course" value={user.course} onChange={handleChange} placeholder="Course" /><br/>
      <label>Mode Of Entry : </label><input name="mode" value={user.mode} onChange={handleChange} placeholder="Mode" /><br/>
      <label>Email : </label><input name="email" value={user.email} onChange={handleChange} placeholder="Email" /><br/>
      <label>Password : </label><input name="password" value={user.password} onChange={handleChange} placeholder="Password" /><br/>
	  </div>
      
      <button className="update-btn" onClick={handleUpdate}>Update Profile</button>
	  
	  <div className="success-message">{updatemessage}</div>
    </div>
	</div>
  );
}

export default EditProfile;
