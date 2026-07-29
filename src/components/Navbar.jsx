import { Link } from "react-router-dom";

export default function Navbar(){

return(

<nav
style={{

position:"sticky",
top:0,
background:"rgba(255,255,255,.9)",
backdropFilter:"blur(12px)",
padding:"18px 0",
zIndex:1000,
borderBottom:"1px solid #e5e7eb"

}}

>

<div
className="container"

style={{

display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}

>

<h2>

<span className="gradient-text">

Explore IT

</span>

 Consulting

</h2>

<div
style={{
display:"flex",
gap:30
}}
>

<Link to="/">Home</Link>

<Link to="/">Services</Link>

<Link to="/">About</Link>

<Link to="/">Contact</Link>

</div>

</div>

</nav>

)

}
