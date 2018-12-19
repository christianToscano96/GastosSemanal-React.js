import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';


class App extends Component {

  state = {
    presupuesto : '',
    restante : '',
    gastos: ''
  }

  //creando el metodo para preguntar el presupuesto
  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
   let presupuesto = prompt('Cual es el presupuesto?');

   let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante : presupuesto
      })
    } else {
      this.obtenerPresupuesto();
    }
  }


  //crear el metodo agregar
  //agregar un nuevo gasto al state.
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos}//spret operator para crear una copia del state.

    //agregar al gasto al objeto del state.
    gastos[`gasto${Date.now()}`] = gasto;//crea una fecha

    //restar el presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);

    //ponerlo en el estate
    this.setState({
      gastos//o gastos : gastos, pero como tiene el mismo nombre se lo pone solo eso
    })
  }

  //Restar del presupuesto cuando gasto se crea
  restarPresupuesto = cantidad => {
    //leer el gasto
    let restar = Number(cantidad);//lo combierte en numero

    //tomar una copia del state actual
    let restante = this.state.restante;

    //lo restamos
    restante -= restar;

    restante = String(restante);


    //agregamis el nuevo state
    this.setState({
      restante
    })

  }

  render() {
    return (
      <div className="App container" >
        <Header 
          titulo="Gasto Presupuesto Semanal"
        />
      
        <div className="contenido-principal contenido">
          <div className="row">
                <div className="one-half column">
                  <Formulario 
                  //enviar los los props
                      agregarGasto = {this.agregarGasto}              
                  />

                </div>


                <div className="one-half column">
                    <Listado
                      gastos = {this.state.gastos}
                    />
                    <ControlPresupuesto 
                      presupuesto={this.state.presupuesto}
                      restante={this.state.restante}
                    />
                </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
