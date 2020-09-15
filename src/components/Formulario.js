import React, {Fragment, useState} from 'react';

const Formulario = () => {

    //Crear State en Citas
    const [cita, actualizarCita] = useState ({
         mascota: '',
         propietario: '',
         fecha: '',
         hora: '',
         sintomas: ''
    });


    //Segundo State de errores
    const [ error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada vez que el susuario esacribe un input
     const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
     }

    //Extraer valores
    const { mascota, propietario, fecha, hora, sintomas} = cita
    //Enviar formulario
    const submitCita = (e) => {
        e.preventDefault();
        
        //Validacion
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
           || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true)
            return;
        }
        
        //Asignar ID

        //Crear la cita

        //Reiniciar el form
    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>   : null }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                ></input>

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                ></input>

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                ></input>

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-wifth"
                    onChange={actualizarState}
                    value={hora}
                ></input>

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                
                <button
                   type="submit"
                   className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>

     );
}
 
export default Formulario;