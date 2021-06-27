import React, { Component } from 'react';
const NavBar = (props) =>{
    return (
        <div>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            CheckOut
        <span className="badge badge-pill badge-secondary m-2">
                {props.TotalCounters}
        </span>
        </a>
</nav>
</div>
    )
}
 
export default NavBar;
