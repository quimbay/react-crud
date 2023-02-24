import React, { useState, useEffect } from 'react'
//import Home from './Home';





export const Formulario = () => {

    const obtenerRegistros = () => {
        const datos = localStorage.getItem("registrosls");
        if (datos) {
            return JSON.parse(datos);
        } else {
            return [];
        }
    }


    const [registrosls, setRegistrosLS] = useState(obtenerRegistros());

    const [nombre, setNombre] = useState("");
    const [celular, setCelular] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [estudios, setEstudios] = useState("");
    const [terminos, setTerminos] = useState("");
    const [experienciaLaboral, setExperienciaLaboral] = useState("");


    const botonGuardar = (e) => {
        e.preventDefault();
        const miObjeto = { nombre,celular, edad, sexo, estudios, terminos, experienciaLaboral }
        setRegistrosLS([...registrosls, miObjeto]);
        limpiarFormulario();
    }


    useEffect(() => {
        localStorage.setItem("registrosls", JSON.stringify(registrosls));
    }, [registrosls]);


    const limpiarFormulario = () => {
        setNombre("");
        setCelular("");
        setEdad("");
        setSexo("");
        setEstudios("");
        setTerminos("");
        setExperienciaLaboral("");
        document.getElementById("miFormulario").reset();
    }


    const botonEliminar = (miIndex) => {
        if (window.confirm("¿Está Seguro De Querer Eliminar El Registro?")) {
            const registrosFiltrados = registrosls.filter((e, index) => {
                return miIndex !== index
            });
            setRegistrosLS(registrosFiltrados);
        }
    }


    return (

        <div className="container">
            <h1> Servicio Call Center</h1>
            <form id="miFormulario" onSubmit={botonGuardar}>
                <div className="row">
                    <div className="col-8">
                        <div className="form-floating mb-6">
                            <input type="text" className="form-control" id="txtnom" placeholder=" " onChange={(e) => setNombre(e.target.value)} required />
                            <label htmlFor="txtnom"> Nombre y Apellido </label>
                        </div>

                        <div className="form-floating mb-6">
                            <input type="number"  className="form-control" id="txtcelular" placeholder=" " onChange={(e) => setCelular(e.target.value)} required />
                            <label htmlFor="txtcelu"> Numero Celular </label>
                        </div>

                        <div className="form-floating mb-6">
                            <input type="number" min={1} max={150} className="form-control" id="txteda" placeholder=" " onChange={(e) => setEdad(e.target.value)} required />
                            <label htmlFor="txteda">Tu Edad</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="opsex" id="op1" value="Masculino" onChange={(e) => setSexo(e.target.value)} required />
                            <label className="form-check-label" htmlFor="op1">Hombre</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="opsex" id="op2" value="Femenino" onChange={(e) => setSexo(e.target.value)} />
                            <label className="form-check-label" htmlFor="op2">Mujer</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="opsex" id="op3" value="No Especifica" onChange={(e) => setSexo(e.target.value)} />
                            <label className="form-check-label" htmlFor="op3">No Especifica</label>
                        </div>
                        <br />
                        <select className="form-select" id="cboest" name="cboest" defaultValue="" onChange={(e) => setEstudios(e.target.value)} required>
                            <option value=""> Nivel De Estudios</option>
                            <option id="cboop1" value="Sin Estudios">Sin Estudios</option>
                            <option id="cboop2" value="Basica">Basica</option>
                            <option id="cboop3" value="Media">Media</option>
                            <option id="cboop4" value="Superior">Superior</option>

                        </select>
                        <br />
                        <select className="form-select" id="cboest" name="cboest" defaultValue="" onChange={(e) => setExperienciaLaboral(e.target.value)} required>
                            <option value="">Tienes Experiencia Laboral Call Center</option>
                            <option id="cboop1" value="Si ">Si</option>
                            <option id="cboop2" value="No">No</option>


                        </select>

                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="chk1" name="chk1" onChange={(e) => setTerminos(e.target.checked)} required />
                            <label className="form-check-label" htmlFor="chk1">Acepto Los Términos y Condiciones</label>
                        </div>

                        <br />
                        <input type="submit" id="btnsave" value="Guardar" className="btn btn-primary" />
                        &nbsp;
                        <input type="reset" id="btnclean" value="Limpiar Campos" className="btn btn-primary" onClick={() => (limpiarFormulario())} />

                    </div>
                </div>
            </form>

            <br />

            <div className="table-responsive col-8">

                {registrosls.length > 0 &&

                    <>
                        <table className="table table-bordered table-hover">
                            <thead className="table-primary text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Nombre y Apellido</th>
                                    <th>Celular</th>
                                    <th>Edad</th>
                                    <th>Sexo</th>
                                    <th>Estudios</th>
                                    <th>ExperienciaLaboral</th>
                                    
                                  

                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody className="text-center align-baseline">
                                {
                                    registrosls.map((miObjeto, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{miObjeto.nombre}</td>
                                            <td>{miObjeto.celular}</td>
                                            <td>{miObjeto.edad}</td>
                                            <td>{miObjeto.sexo}</td>
                                            <td>{miObjeto.estudios}</td>
                                            <td>{miObjeto.experienciaLaboral}</td>
                                            
                                           
                                            <td className="text-center">

                                                <button type="button" className="btn btn-outline-danger" onClick={() => botonEliminar(index)}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <button type="button" className="btn btn-danger btn-md col-12" onClick={() => setRegistrosLS([])}>
                            <h5>Borrar Todos Los Elementos!!</h5>
                        </button>
                    </>

                }


                {registrosls.length < 1 && <><h2 className='text-center'>No Hay Registros Para Listar!!</h2></>}


            </div>

        </div>

    )
}
