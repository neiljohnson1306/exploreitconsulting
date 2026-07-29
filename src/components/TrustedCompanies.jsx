import { companies } from "../data/companies";
import "./TrustedCompanies.css";

export default function TrustedCompanies(){

return(

<section className="trusted">

<div className="container">

<h3>

Trusted Technology Ecosystem

</h3>

<div className="company-grid">

{

companies.map(company=>(

<div className="company" key={company}>

{company}

</div>

))

}

</div>

</div>

</section>

)

}
