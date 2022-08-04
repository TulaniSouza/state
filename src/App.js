import React, { Component } from 'react';

export default class state extends Component{
  state = {
    nome: 'tulani',
    idade: 20,
    comidaFavorita: 'massas',
    musica: ['pop', 'rock', 'kPop']
  }
}
render(){
  return(
    <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
      </div>
  )
}