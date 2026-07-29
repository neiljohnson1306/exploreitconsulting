export default function Home(){

    return(

        <>
        <section className="section">

        <div className="container">

        <h1
        style={{
            fontSize:"70px",
            lineHeight:"1.1",
            fontWeight:"800"
        }}
        >

        Empowering Businesses
        <br/>

        <span className="gradient-text">
        Through Technology
        </span>

        </h1>

        <p
        style={{
            maxWidth:700,
            fontSize:"22px",
            marginTop:30,
            color:"#64748b"
        }}
        >

        Explore IT Consulting helps organisations modernise,
        innovate and scale using cloud technologies,
        software engineering,
        AI,
        business analysis and digital transformation.

        </p>

        <div
        style={{
            display:"flex",
            gap:20,
            marginTop:40
        }}
        >

        <a href="#services" className="btn-primary">

        Book Consultation

        </a>

        <a href="#services" className="btn-outline">

        Our Services

        </a>

        </div>

        </div>

        </section>

        </>

    )

}
