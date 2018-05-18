import React, { Component } from 'react';
import '../style/Search.css';
import Header from './Header';
import SearchList from './SearchList';

export class Search extends Component {
    constructor(props){
        super(props);
        this.state={search:''}
    }
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
            <Header/>
            <div className="col" id="container">
                <div className="col" id="sBodyCol">
                    <div className="row">
                    <div className="col" id="FiltersCol">
                    	<div className = "col"id="filtersearchcol">
                    		<input  type="text" name="search" ref="search" className="filterText" id="filterText"/>
                            <button className="roundedbutton"  id="filterbutton"onClick={()=>this.searchArticles()}/>
                    	</div>
                    </div>
                    <div className="col" id="ResultCol">
                        <SearchList filterText={this.state.search}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  searchArticles(){
      this.setState({search: this.refs.search.value});
      console.log(this.state.search);
  }
}

export default Search;