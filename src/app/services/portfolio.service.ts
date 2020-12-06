import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData: Portfolio[] = [

    {
      id: 1,
      titulo: 'Lista de tareas',
      descripcion: "Aplicación para gestionar una “lista de tareas”.",
      img: 'assets/images/todo.jpeg',
      ruta: 'https://guzmandata.github.io/todo/',
      tecnologias: ['Javascript', 'html', 'css']
    },
    {
      id: 2,
      titulo: 'Juego Blackjack',
      descripcion: 'Divertido juego de blackjack hecho con javascript.',
      img: 'assets/images/blackjack.png',
      ruta: 'https://grgrimales.github.io/Blackjack/',
      tecnologias: ['webpack', 'Javascript', 'html', 'css']

    },
    

  ]

  constructor() { }

  getPortfolio() {
    return this.portfolioData;
  }
}


export interface Portfolio {
  id: number,
  titulo: string,
  img: string,
  descripcion: string,
  ruta: string,
  tecnologias: string[]

};