import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>

              <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                 </ul>
                 <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </button>
              </nav>
            </div>
        );
    }

}

export default Header;
