import React from "react";


function Nav(){
    <nav className="nav navbar expand-lg navbar-dark bg-primary">
        <a className="nav-brand" href="/">Googgle Books</a>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-aria-expanded="false" aria-label="Toggle nav">
            <span class="toggler-icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved</a>
            </li>
        </ul>
        </div>
    </nav>
}

export default Nav;