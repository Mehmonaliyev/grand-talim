import React from 'react'
import logo from '../img/logo.jpg'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
                <div className="container ">
                    <a className="navbar-brand color" href="#"><img src={logo} className='logo' alt='logo' /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Bosh sahifa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Biz haqimizda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#popular-courses">Kurslar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  " href="#oqituvcilar">O'qituvchilar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#aloqa">Aloqa</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
