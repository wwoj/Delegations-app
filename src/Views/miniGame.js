import React, { Component } from "react";
import Snake from "../Components/snake";
import Food from "../Components/food";

export default class Game extends Component {
    
  state = initialState

  componentDidMount() {
      setInterval(this.moveSnake,this.state.speed)
      document.onkeydown = this.onKeyDown;
  }
  componentDidUpdate(){
      this.checkIfOutOfBorder();
      this.checkIfCollapsed();
      this.checkIfEat();
  }
  onKeyDown = (e) =>{
    e=e || window.event;
    switch(e.keyCode)
    {
        case 38:
            this.setState({direction:"UP"});
            break;
        case 40:
            this.setState({direction:"DOWN"});
            break;
        case 37:
            this.setState({direction:"LEFT"});
            break;
        case 39 :
            this.setState({direction:"RIGHT"});
            break;
    }
  }
  moveSnake = ()=>{
      let dots= [...this.state.snakeDots];
      let head = dots[dots.length-1];

      switch(this.state.direction){
          case 'RIGHT':
              head= [head[0]+2,head[1]];
              break;
          case 'LEFT':
              head= [head[0]-2,head[1]];
              break;
          case 'UP':
              head= [head[0],head[1]-2];
              break;
          case 'DOWN':
              head= [head[0],head[1]+2];
              break;
      }
      dots.push(head);
      dots.shift();
      this.setState({snakeDots:dots})
  }

  checkIfOutOfBorder = () =>{
    let head = this.state.snakeDots[this.state.snakeDots.length-1];
    if (head[0]>=100 || head[1]>=100 || head[0]<0 || head[1]<0)
    {
        
        this.onGameOver();
    }
  }
  onGameOver(){
      alert(`Game over! Snage length is ${this.state.snakeDots.length}`);
        this.setState(initialState)
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] == food[0] && head[1] == food[1]) {
          this.setState({
            food: getRandomCordinates()
          })
          this.enlargeSnake();
          this.increaseSpeed();
        }
      }
      enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
          snakeDots: newSnake
        })
      }
      increaseSpeed() {
        if (this.state.speed > 10) {
          this.setState({
            speed: this.state.speed - 10
          })
        }
      }
    checkIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
          if (head[0] == dot[0] && head[1] == dot[1]) {
            this.onGameOver();
          }
        })
      }
  render() {
    return (
      <div className="container-contact">
        Stronka z grą snake
        <div className="game-area">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
          <div><h1>{this.state.direction}</h1></div>
        </div>
      </div>
    );
  }
}

const getRandomCordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
    food: getRandomCordinates(),
    snakeDots: [
      [0, 0],
      [2, 0] 
    ],
    direction: 'RIGHT',
    speed:80
}