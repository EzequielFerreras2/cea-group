import React from 'react'

export const NavBar = () => {
    return (

        <div>

            <nav className="navbar navbar-light bg-light">

                <div className="container-fluid">
                    <img className='' src='https://ceagrouprd.com/wp-content/uploads/2019/10/CEA-Logo.png' style={{ height: 60}} alt='logo'/>
                    <form className="d-flex">
                    <a href="/" className="nav-link link-success fs-5 fw-bold"> <i className="fab fa-whatsapp"></i> 809-123-4567</a>
                        <button className="btn btn-primary fw-bold" type="submit">HAZ TU CITA</button>
                    </form>
                </div>

            </nav>

        </div>
    )
}
