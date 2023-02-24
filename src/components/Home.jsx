import React from 'react'
import ardilla from '../Assets/ardilla.jpg';

const Home = () => {
    return (
        <div className="container ">

<div className="ardilla-container">
            <img src={ardilla.jpg} alt="" />
            </div>

            <div className="container">
                <h1 className="container">
                    Formulario para Postulacion Call Center
                </h1>
                <p className="container">
                    Si tu perfil queda seleccionado(a) debes estar muy pendiente a tu celular.
                </p>
                <button className='text-center '>
                    <h5>Animate!!</h5>
                </button>

            </div>
            <div className="home-image-section">
            <img src={ardilla.jpg} alt="" />
            </div>

        </div>
    );
};

export default Home;