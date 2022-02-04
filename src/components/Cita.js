import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
<div className="cita">
    <p>Mascota<span>{Cita.mascota}</span></p>
    <p>Dueño<span>{Cita.propietario}</span></p>
    <p>Fecha<span>{Cita.fecha}</span></p>
    <p>Hora<span>{Cita.hora}</span></p>
    <p>Sintomas <span>{cita.sintomas}</span></p>

    <button 
   className="button eliminar u-full-width"
   onClick= { () => eliminarCita(cita.id) }
>Eliminar &times;</button>
</div>
);

Cita.propTypes = {
   cita: PropTypes.object.isRequired,
   eliminarCita: PropTypes.func.isRequired 
}
 
export default Cita;