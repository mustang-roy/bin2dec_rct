import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {
   
    constructor(props){
        super(props);

        this.state = {
            tipoA_valor: "",
            tipoB_valor: 0,
        }
        
        this.converter = this.converter.bind(this);

    }

    converter(){

        let tamanho_bin = this.state.tipoA_valor.length

        let valor_decimal = 0

        console.log(tamanho_bin)

        for (let index = 0; index < tamanho_bin; index++) {
            
            let elemento = +this.state.tipoA_valor.substr(index,1)

            valor_decimal += elemento * (2**(tamanho_bin-1-index))

            console.log(elemento, typeof elemento)
            
        }

        let tipoB_valor = valor_decimal
        
        this.setState({tipoB_valor})

        


    }

    render() {
        return (
            <div className="conversor">
               <h2>{this.props.tipoA} 2 {this.props.tipoB}</h2>
               <input type="text" onChange={(event) => {this.setState({tipoA_valor:event.target.value})}}></input>
               <input type="button" value="Converter" onClick = {this.converter}></input>
                <h2>{this.state.tipoB_valor}</h2>
            </div>
        )
    }
}
