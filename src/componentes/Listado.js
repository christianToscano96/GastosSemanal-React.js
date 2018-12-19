import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';


class Listado extends Component {
    render(){
        return(
           <div className="gastos-realizados">
             <h2>Listado</h2>
             {Object.keys(this.props.gastos).map(key => (
                <Gasto
                    key={key}//guarda los key(valores) en una nueva variable
                    gasto={this.props.gastos[key]}
                />  
             ) ) }
          

           </div>
        )
    }
}
Listado.propType = {
    gastos: PropTypes.object.isRequired
}
export default Listado;