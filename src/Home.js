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
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
function Home(props){
	const momenu="logooo.png";
	const SiteName="SirBlessing";
	const image= "logooo.png";
	const card1="blog4.jpg";
	const card2="blog2.jpg";
	const heroimage= "smoke.png";
	const b1value="Read More";
	const herobg="school-template-curriculum-img-1.jpg"

	return(
	<div>
	<div className="test">
	<Hero bg={herobg} />
	</div>
	
	<div><Section3/></div>
	
	<div><Section5/></div>
	<div><SubscribeSec/></div>
	
	{/*<div><Register logo={image}/></div>*/}
	</div>
	);
}
export default Home; 