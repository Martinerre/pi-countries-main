import React from "react";
import { Link, useLocation } from "react-router-dom";


export function Detail(props) {
    const location = useLocation();
    return (
        <div >
            <div >
                {
                    location.pathname === '/home'
                        ? <button onClick={props.onClose}>X</button>
                        : null
                }
                <Link to={`/detail/${props.id}`}>
                    <h5 >{props.name}</h5>
                </Link>
            </div >
            <img src={props.image} alt="Imagen la bandera" />
            <div >
                <h2 >{props.continent}</h2>
            </div>
        </div >
    )
}
