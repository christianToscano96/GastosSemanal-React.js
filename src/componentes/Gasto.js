import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render() {

        //ponerle un gasto y cantidad
        const {cantidadGasto, nombreGasto} = this.props.gasto;

          return(
               <li className="gastos-realizados">
                    <p>
                         {nombreGasto}
                         <span className="gasto"> $ {cantidadGasto}</span>
                    </p>      
               </li>
          )
    }
}
Gasto.propType = {
     gasto: PropTypes.object.isRequired
}
export default Gasto;