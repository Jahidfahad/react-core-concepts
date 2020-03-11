import React from "react"

function Hello(props){
    return (
        <div className = "Hello-Doctor">
            <h3>{props.name}</h3>
            <h4>{props.title}</h4>
            <h5>MBBS, FCPS Fellow(Ortho)</h5>
            <h6>Every Friday 10 am to 6 pm</h6>
            <button className="btn">Appointment</button>

        </div>
    )
}

export default Hello