import React,{Component} from 'react';
import '../st/Board.css';

class Board extends Component{
	
    constructor(props){
      super(props);
       
      this.state ={
        result : 0
      }

      this.calculate = this.calculate.bind(this);
    }

   calculate(event){
    var t = event.target.id;
    
    var num;
    console.log(t);

    if(t === "AC"){
      this.setState({
        result:0
      })
    }else if( "0" <=t  && t <= "9"){
       num = parseInt(t);
       
    }else{
      
    }
   }




	render(){
		return(
            <div className="calc">
              <div className ="row">
                <div className="r">
                <p id="res">{this.state.result}</p>
                 </div>
              </div>
              <div className="row">
                   <button type="button" id="AC" className="bt" onClick={this.calculate}>AC</button>
                   <button type="button" id="divide" className="bt" onClick={this.calculate}>&#xF7; </button>
                   <button type="button" id="X" className="bt"onClick={this.calculate} >X</button>
                   <button type="button" id="+" className="bt" onClick={this.calculate}>&#43;</button>
                </div>
                 <div className="row">
                   <button type="button" id="1" className="bt" onClick={this.calculate}>1</button>
                   <button type="button" id="2" className="bt" onClick={this.calculate}>2</button>
                   <button type="button" id="3" className="bt" onClick={this.calculate}>3</button>
                    <button type="button" id="-" className="bt" onClick={this.calculate}>-</button>
                </div>
                 <div className="row">
                   <button type="button" id="4" className="bt" onClick={this.calculate}>4</button>
                   <button type="button" id="5" className="bt" onClick={this.calculate}>5</button>
                   <button type="button" id="6" className="bt" onClick={this.calculate}>6</button>
                    <button type="button" id="0" className="bt" onClick={this.calculate}>0</button>
                </div>
                <div className="row">
                    <button type="button" id="7" className="bt" onClick={this.calculate}>7</button>
                   <button type="button" id="8" className="bt" onClick={this.calculate}>8</button>
                   <button type="button" id="9" className="bt" onClick={this.calculate}>9</button>
                   <button type="button" id="=" className="bt" onClick={this.calculate}>=</button>

                </div>
            </div>
			);
	}
}

export default Board;