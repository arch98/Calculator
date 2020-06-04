import React,{Component} from 'react';
import Board from './Comp/Board';
import './App.css';

class App extends Component{
	render(){
		return(
		<div className ="App">
		   <h1>Calculator</h1>
		   <Board onClick = {this.onClick}/>
		   </div>
		   );
	}
}

export default App;
