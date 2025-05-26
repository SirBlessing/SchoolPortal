import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

function Layout() {
  return (
    <>
	<div>
      <Nav name="SirBlessing" logo="logooo.png" />
      <Outlet /> 
      <Footer />
	  </div>
    </>
  );
}

export default Layout;
