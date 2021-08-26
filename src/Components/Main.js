import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import  '../styles/base.scss'

export const Main = () => {



    return (
        <div>
            <NavBar/>

            <div>

                <div className=" portada1 bd-masthead mb-3" id="content">
                    <div className="container px-4 px-md-3">
                        <div className="row align-items-lg-center">
                            
                            <div className="pt-5 pb-5 col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                                <p className="  lead mb-4 link-light">
                                    ¿Andas buscando una limpieza a fondo?
                                </p>
                                <h1 className="  mb-3 link-light">Servicio de Limpieza Profunda para Empresas</h1>
                                <p className="  lead mb-4 link-light">
                                Nos especializamos en la higienización de todas las áreas internas y externas para las compañías en República Dominicana.
                                </p>

                                <div className="d-flex flex-column flex-md-row">
                                <a href="/" className="btn btn-lg btn-success mb-3" >Cotizar ahora.</a>
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className=" portada2 bd-masthead mb-3" id="content">
                    <div className="container px-4 px-md-3">
                        <div className="row align-items-lg-center">
                            <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
                                <div className="d-flex flex-column flex-md-row">
                                    <a href="/" className="btn btn-lg btn-primary mb-3" >Cotizar Servicio.</a>
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                                <h1 className="mb-3 link-success">Te ofrecemos</h1>
                                <h4 className="mb-3 link-primary">Garantizamos los cronogramas de limpieza</h4 >
                                <p className="lead mb-4">
                                Realizamos programas de limpieza que se ajustan a cada necesidad
                                </p>
                                <h4 className="mb-3 link-primary">Equipos de limpieza acorde a las últimas tecnologías</h4 >
                                <p className="lead mb-4">
                                Contamos con equipos de limpieza propios disponibles en todo momento 
                                para distintas labores de limpieza, como el brillado de pisos
                                </p>
                                <h4 className="mb-3 link-primary">Supervisión continua de actividades y del personal</h4 >
                                <p className="lead mb-4">
                                Supervisamos todas las tareas que realiza nuestro personal garantizando la calidad del trabajo
                                </p>
                               

                                
                                
                            </div>
                        </div>
                    
                    </div>
                </div>
               
                <div className="container pb-5">
                    <div className="row">
                    <h4 className="mb-3 link-primary mt-5 ">Nuestros Clientes</h4 >
                    <div className="card mb-3 col me-2 border-0 mt-2" style={{width: 700}} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgzUUDjsgLfWo223dcl94NZXrb7mCSFaDBQ&usqp=CAU" className="img-fluid rounded-circle border border-3" alt="..." style={{width: 200, height: 200}}/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">David Peña</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="card mb-3 col  border-0 mt-2 " style={{width: 700}} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHFzbMlKplawuXSH6LiAdBrisGhiXZ3XHCiYZ03rS7sQq_YbCN_sgVaslgbGS_-rFY30&usqp=CAU" className="img-fluid rounded-circle border border-3" alt="..." style={{width: 200, height: 200}}/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ezequiel Ferreras</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            
                        </div>

                        
                        

                    </div>
                       
                    <div className="row">
                
                    <div className="card mb-3 col me-2 border-0 mt-2" style={{width: 700}} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgzUUDjsgLfWo223dcl94NZXrb7mCSFaDBQ&usqp=CAU" className="img-fluid rounded-circle border border-3" alt="..." style={{width: 200, height: 200}}/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">David Peña</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="card mb-3 col  border-0 mt-2 " style={{width: 700}} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHFzbMlKplawuXSH6LiAdBrisGhiXZ3XHCiYZ03rS7sQq_YbCN_sgVaslgbGS_-rFY30&usqp=CAU" className="img-fluid rounded-circle border border-3" alt="..." style={{width: 200, height: 200}}/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ezequiel Ferreras</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                            
                        </div>

                        
                        

                    </div>
                </div>
                



                
                <div className=" primary bd-masthead mb-3" id="content" style={{backgroundColor: '#052085', height: 400}}>
                    <div className="container px-4 px-md-3 pt-5">
                        <div className="row align-items-lg-center">
                            
                            <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start pt-5">

                                <h1 className="mb-3 link-light fw-bolde" style={{fontFamily: "fantasy"}}>Quienes Somos</h1>
                                
                                
                            </div>

                            <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5 pt-5">
                            
                                <p className="lead mb-4 link-light">
                                Somos una empresa de servicios especializada en administración de condominios, servicios de conserjería y 
                                mantenimientos industriales. Garantizamos que recibirá un trato especializado y que todas las tareas serán 
                                realizadas con el más alto nivel de calidad
                                </p>
                                <div className="d-flex flex-column flex-md-row">
                                    
                                    <a href="/" className="btn btn-lg btn-primary mb-3 border border-3 rounded-0" >Cotizar Servicio.</a>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>





                <div>
                    <a href="https://api.whatsapp.com/send?phone=18097920012&text=Hola%20me%20interesa%20saber%20m%C3%A1s%20informaci%C3%B3n" className="float" target="_blank">
                        <i className="fa fa-whatsapp my-float"></i> 
                        
                    </a>
                </div>
                
                
            </div>
            <Footer/>
        </div>
    )
}
