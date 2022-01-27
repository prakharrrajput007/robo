import React ,{ Component} from 'react';
import CardList from './CardList';
import { robots} from './robots';
import SearchBox from './SearchBox';
import'./App.css';
class App extends Component{
	constructor(){ 
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	searchrecord=(event)=>{
		this.setState({ searchfield: event.target.value})
	}
	render(){  
		const filterCats=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	 	return(
	 		<div className='tc'>
	 			<h1>CatFriends</h1>
	 			<SearchBox searchrecord={this.searchrecord} />
		 		<CardList robots={filterCats}/>
	 		</div>
	 	);
	}
}

export default App;