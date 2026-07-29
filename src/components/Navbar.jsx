import "./Navbar.css";

import { useEffect, useState } from "react";

import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar() {

const [scrolled,setScrolled]=useState(false);

const [dark,setDark]=useState(false);

const [open,setOpen]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>40);

};

window.addEventListener("scroll",handleScroll);

return()=>window.removeEventListener("scroll",handleScroll);

},[]);

useEffect(()=>{

document.documentElement.classList.toggle("dark",dark);

},[dark]);

return(

<nav className={scrolled ? "navbar scrolled":"navbar"}>

<div className="nav-container">

<a className="logo" href="/">

<span>Explore</span> IT

</a>

<div className={open ? "menu open" : "menu"}>

<a href="#">Home</a>

<a href="#services">Services</a>

<a href="#industries">Industries</a>

<a href="#about">About</a>

<a href="#process">Process</a>

<a href="#contact">Contact</a>

</div>

<div className="actions">

<button
className="icon-btn"
onClick={()=>setDark(!dark)}
>

{dark ? <Sun size={20}/> : <Moon size={20}/>}

</button>

<a
href="#contact"
className="consult-btn"
>

Book Consultation

</a>

<div
className="mobile"
onClick={()=>setOpen(!open)}
>

{open ? <X/> : <Menu/>}

</div>

</div>

</div>

</nav>

)

}
