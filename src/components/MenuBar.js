import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "../styles/Toolbar.css";
import Logo from '../assets/saber-logo.png';
import { logOut } from '../backend-calls/authentication';
import { useNavigate } from 'react-router-dom';
import ToastCustomContainer from './ToastCustomContainer';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import userContext from '../context/user';

const MenuBar = ()  => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setDropDown] = useState (false);
  const [isDropDown1, setDropDown1] = useState (false);
  const navigate = useNavigate ()
  const toggle = () => setIsOpen(!isOpen);
  const [mode, setMode] = useState ("")
  const {userData} = useContext(userContext);

  useEffect (() => {
    setMode (localStorage.getItem("mode")) 
  }, [])
  const submitLogout = () => {
    localStorage.removeItem("token")
    toast.success("Log Out successfull!!")
    setTimeout(() => {
      navigate ("/login")
    },2500)
  }
  const changeDropDown = () => {
    setDropDown(true)
  }
  const changeDropDownClose = () => {
    setDropDown(false)
  }
  const changeDropDown1 = () => {
    setDropDown1(true)
  }
  const changeDropDownClose1 = () => {
    setDropDown1(false)
  }
  const changeMode = () => {
    const currentMode = localStorage.getItem ("mode")
    if (currentMode === "dark")
      localStorage.setItem("mode", "white")
    else 
      localStorage.setItem("mode", "dark")
    window.location.reload()
  }
  return (
    <div>
      <Navbar className={`box-shadow-${mode}`} expand ="sm" >
        <ToastCustomContainer />
        <NavbarBrand href="/" style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}>
            <img src={Logo} alt="saber-ai" className={`logo-image card-${mode}`} />
            <div className={`logo-name-${mode}`}>SABER AI</div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown onMouseOut={changeDropDownClose} onMouseOver={changeDropDown} nav inNavbar>
              <DropdownToggle className={`toolbar-comp-${mode}`}  nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu className={isDropDown ? `drop-down-show ${mode}` : `${mode}`} right>
                <DropdownItem className={`toolbar-content-${mode}`} href='/email-gen'>Email Gen</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/blog-article'>Blog Article</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/twitter-assist'>Twitter Assist</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/cold-email'>Cold Email</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/social-ads'>Social Ads</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/code-gen'>Code Gen</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/code-debug'>Code Debug</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className={`toolbar-comp-${mode}`} href="/ask-me-anything">
                Ask me Anything
              </NavLink>
            </NavItem>
          </Nav>
          {userData.planName === "Free Plan" && <NavLink className={`toolbar-comp-${mode}`} href="/payments">
            UPGRADE TO PRO
          </NavLink>}
          {localStorage.getItem("token") ? 
          <UncontrolledDropdown onMouseOut={changeDropDownClose1} onMouseOver={changeDropDown1}>
              <DropdownToggle className={`toolbar-comp-${mode}`} nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu className={isDropDown1 ? `drop-down-show ${mode}` : `${mode}`} end>
                <DropdownItem className={`toolbar-content-${mode}`} href='/manage-account'>Manage Account</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} onClick={changeMode}>Change Mode</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/help'>Help</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='/payments'>Pricing</DropdownItem>
                <DropdownItem className={`toolbar-content-${mode}`} href='https://www.saber-ai.com/t-c'>Terms & Policies</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={`toolbar-content-${mode}`} onClick={submitLogout}>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> :
            <NavLink style={{textDecoration:"none"}} href="/login">
              <div className={`toolbar-comp-${mode}`} style={{fontSize:"1rem", margin:"0px", padding:"0.25rem 0.5rem"}}>
               LOGIN
              </div>
            </NavLink>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;