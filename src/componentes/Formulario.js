import React, { Component } from 'react';
import PropTypes from 'prop-types';

class formularioGasto extends Component {

    //creamos kos refs para los campos
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    //creamos el metodo crearGasto
    crearGasto = (e) => {

        //prevenir el default
        e.preventDefault();

        //crear el objeto con los gastos
        const gasto = {
            nombreGasto : this.nombreGasto.current.value,
            cantidadGasto : this.cantidadGasto.current.value
        }
       
        //agregar y enviarlos por this.props.
        this.props.agregarGasto(gasto);
        
        //resetear el formulario (opcional)
        e.currentTarget.reset();
    }
    render() {
        return(
            < form onSubmit={this.crearGasto}>              
                    <h2 > Agrega tus gastos aqui </h2>

                    <div className = "campo" >                       
                        <label > Nombre Gasto </label> 
                        <input ref={this.nombreGasto} className = "u-full-width"
                        type = "text"
                        placeholder = "Ej. Transporte" />                  
                    </div>
                    <div className = "campo" >
                    
                        <label > Cantidad </label> 
                        <input ref={this.cantidadGasto}className = "u-full-width"
                        type = "text"
                        placeholder = "Ej. 300" / >  
                    </div>                  
                    <input className = "button-primary u-full-width"
                        type = "submit"
                        value = "Agregar" / >                   
                </form>
        )
    }

}
formularioGasto.propTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default formularioGasto;