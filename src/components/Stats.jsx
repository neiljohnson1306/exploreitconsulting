import { stats } from "../data/stats";
import "./Stats.css";

export default function Stats(){

return(

<section className="stats">

<div className="container stats-grid">

{

stats.map((item)=>(

<div className="stat-card" key={item.title}>

<h2>{item.number}</h2>

<p>{item.title}</p>

</div>

))

}

</div>

</section>

)

}
