import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import {useState,useEffect} from 'react';
import Hero from './Hero';
import Section3 from './Section3';
import Section5 from './Section5';
import SubscribeSec from './SubscribeSec'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from './Layout';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Dashfinancard from './Dashfinancard';
import PaymentForm from './PaymentForm';
import EditProfile from './EditProfile';
import PaymentComponent from './PaymentComponent';
import PaymentSuccess from "./PaymentSuccess";

function App() {
	const momenu="logooo.png";
	const SiteName="SirBlessing";
	const image= "logooo.png";
	const card1="blog4.jpg";
	const card2="blog2.jpg";
	const heroimage= "smoke.png";
	const b1value="Read More";
	const herobg="school-template-curriculum-img-1.jpg"
  return (
    <div className="App">
	 <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
		  <> <Route path="gallery" element={<Gallery />} /></>
         <> <Route path="about" element={<About />} /></>
		 <Route path="/dashboard" element={<Dashboard/>} />
		 <Route path="/contact" element={<Contact />} />
		 <Route path="/paymentForm" element={<PaymentForm />} />
		 <Route path="/editprofile" element={<EditProfile />} />
		<Route path="/payment-success" element={<PaymentSuccess />} />

        </Route>

        <Route path="/paymentComponent" element={<PaymentComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
	</div>
  );
}

export default App;
