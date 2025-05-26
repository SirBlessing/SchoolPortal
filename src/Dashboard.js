import React, { useState, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import abimg from './image/abimg.jpg';
import Dashfinancard from './Dashfinancard';
import galimg2 from './image/galimg2.jpg';
import galimg3 from './image/galimg3.jpg';
import group1 from './image/group1.png';
import PC from './image/PC.png';
import group16 from './image/group16.png';
import Enrolledcoursecard from './Enrolledcoursecard';
import collegestudent from './image/collegestudent.png';
import schoolscrol from './image/schoolscrol.png';
import Backpack from './image/Backpack.png';
import HamburgerMenu from "./HamburgerMenu";
import ProfilePicUpload from './ProfilePicUpload';
import $ from 'jquery';


function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
	const [profilepics, setProfilepics] = useState(abimg);
	const [profileres, setProfileres]= useState();
	const [totalPayable, setTotalPayable] = useState(100000); // Start from the original amount

	const cardimg="group1.png";
	const firstcardcardprice = totalPayable.toLocaleString(); 
	const firstcardtext="Total Payable";
	const secondcardimg="group.png";
	const secondcardprice="100,000";
	const secondcardtext="Total Paid";
	const thirdcardimg="group3.png";
	const thirdcardcardprice="5,000";
	const thirdcardtext="Others";
	const enrollcardtext="Object oriented programming";
	const enrollcardimage="PC.png";
	const enrollcardtext2="Fundamentals of database systems";
	const enrollcardimage2="group16.png"
	
   
	
	useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // ✅ Set profile pic from localStorage
        if (parsedUser.profilepics) {
            setProfilepics(parsedUser.profilepics);
        }
    } else {
        navigate("/login");
    }
}, [navigate]);


 useEffect(() => {
  const storedPayable = localStorage.getItem("totalPayable");
  if (storedPayable !== null) {
    setTotalPayable(parseInt(storedPayable));
  }
}, []);


    if (!user) {
        return <h2>Loading...</h2>;
    }
	function CurrentDate() {
    const today = new Date().toLocaleDateString("en-GB", { day: '2-digit', month: 'long', year: 'numeric' });

    return <p> {today}</p>;
	
}

  if (!user) return <h2>Loading...</h2>;
  
  


 $(document).ready(function(e){
$(".buton").off("submit").on('submit',(function(e){
e.preventDefault();
 let formData = new FormData(this);
        formData.append("email", user.email); // ✅ Add user email


$.ajax({
url: "http://localhost:3000/uploads",
type: "POST",
data: formData,
contentType: false,
processData: false,
success: function(data){
console.log(data);
setProfileres(data.message);
setProfilepics(`http://localhost:3000/uploads/${data.file.filename}`);
// ✅ Update user profile in localStorage
                let updatedUser = { ...user, profilepics: data.fileUrl };
                localStorage.setItem("user", JSON.stringify(updatedUser));

                // ✅ Force component re-render with new profile pic
                setUser(updatedUser);

}
});
}));
  });


  
  
    return (
        <div>
		<div className="dashboardhead">
		
		<div><h1>Dasboard</h1></div>
		<div className="Profileimage"><img src={profilepics} alt="profilepics" /> <p><strong>Email:</strong> {user.email}</p> </div>
		
		
		</div>
		
		<div className="profileres"><p >{profileres}</p></div>
      <div className="changeprofilepicssec">
	  
	  <form className="buton"  >
        <label for="file" id="filelabel">Change Profile Picture</label>
        <input type="file" name="file" id="file" /><br/>
		<button type="submit" >upload</button>
	  </form>
      </div>
	  <div ><Link to="/editprofile" className="editprofilelink"><button>Edit Profile</button></Link></div>
		
		{/*<div className="changeprofilepicssec"><label>Change Profile Picture</label><input type="file" enctype="multipart/form-data"/></div>*/}
		
		 {/*<div>
           
            <ProfilePicUpload />
        </div>*/}
		
		
		
		<div className="dasborddetails">
		<div className="welcomedet">
		<p className="date">{CurrentDate()}</p>
		<h1>Welcome back,{user.firstname}! </h1>
		<p>Always stay updated in your student portal</p>
		</div>
		<div className="placeholderdisplay">
		<img src={schoolscrol}/>
		<img src={collegestudent}/>
		<img src={Backpack}/>
		</div>
		</div>
		<div className="financediv">
		<p className="dasfp"> <b>Finances</b></p>
		
		<div className="impcarddiv">
		<Dashfinancard image={cardimg} cardprice={firstcardcardprice} cardtext={firstcardtext}/>
		<Dashfinancard image={secondcardimg} cardprice={secondcardprice} cardtext={secondcardtext}/>
		<Dashfinancard image={thirdcardimg} cardprice={thirdcardcardprice} cardtext={thirdcardtext}/>
		
		<div >
		
		<h4>Course instructors</h4>
		<div className="textdashdiv">
		<img src={galimg3}/>
		<img src={galimg2}/>
		<img src={galimg3}/>
		
		</div>
		
		
		
		<div className="dailyNotice"><p><b>Daily Notice</b></p> <p className="seeall"><Link to="/seeall"><b>See All</b></Link></p></div>
		</div>
		
		
		</div>
		<center><div className="makepaymentbutton"><Link to="/PaymentForm"><button>Make Payment</button></Link></div></center>
		<div className="enrolldiv"><p className="dasec"> <b>Enrolled Courses</b></p> <p className="seeall"><Link to="/seeall"><b>See All</b></Link></p></div>
		<div className="enrrolll">
		<Enrolledcoursecard cardtext={enrollcardtext} image={enrollcardimage} />
		<Enrolledcoursecard cardtext={enrollcardtext2} image={enrollcardimage2}/>
		</div>
		</div>
		
		
		
		{/*<h2>Welcome, {user.firstname} {user.surname}!</h2>//}
			{//<p><strong>Course:</strong> {user.course}</p>//}
				{// <p><strong>Email:</strong> {user.email}</p>*/}
        </div>
    );
}

export default Dashboard;
