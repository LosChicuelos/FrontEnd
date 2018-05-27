import React, { Component } from 'react';
import '../style/Search.css';
import Header from './Header';
import SearchList from './SearchList';

export class Search extends Component {
    constructor(props){
        super(props);
        this.state={filter : {search:'',
                    min_price:-1,
                    max_price:50000000
        }}
    }
  
  render() {
    return (
      <div className="container-full" id ="screen">
        <div className="row" id ="display">
            <Header/>
            <div className="col" id="container">
                <div className="row">
                    <div className="col" id="FiltersCol">
                    	<div className = "col"id="filtersearchcol">
                    	    <center>
                    		<input  type="text" name="search" ref="search" className="filterText" id="filterText"/>
                            </center>
                    	</div>
                    	<center>
                            <div className="col-centered">
                                <h1 >Calificación</h1>
                              <fieldset className="ratingS"id="fieldset">
                                <input type="radio" id="star5" name="ratingS" value="5" defaultChecked={this.state.qualification === 5} /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                <input type="radio" id="star4half" name="ratingS" value="4 and a half" defaultChecked={this.state.qualification === 4.5}/><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                <input type="radio" id="star4" name="ratingS" value="4" defaultChecked={this.state.qualification === 4} /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                <input type="radio" id="star3half" name="ratingS" value="3 and a half" defaultChecked={this.state.qualification === 3.5}/><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                <input type="radio" id="star3" name="ratingS" value="3" defaultChecked={this.state.qualification === 3} /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                                <input type="radio" id="star2half" name="ratingS" value="2 and a half" defaultChecked={this.state.qualification === 2.5} /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                <input type="radio" id="star2" name="ratingS" value="2" defaultChecked={this.state.qualification === 2} /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                <input type="radio" id="star1half" name="ratingS" value="1 and a half" defaultChecked={this.state.qualification === 1.5}/><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                <input type="radio" id="star1" name="ratingS" value="1" defaultChecked={this.state.qualification === 1} /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                <input type="radio" id="starhalf" name="ratingS" value="half" defaultChecked={this.state.qualification === 0.5} /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                              </fieldset>
                            </div>
                        </center>
                        <div className="col" id="PriceFilter">
                            <center><h1>Precio</h1>
                            <input type="number" ref="min_price"placeholder="Mínimo"className="pricefilter" min="0"/>
                            <img src="https://orig00.deviantart.net/c11c/f/2013/019/f/6/flechas_png__3_by_nayluu-d5rzdkl.png" className="flecha-logo" alt="logo" />
                            <input type="number" ref="max_price"placeholder="Maximo"className="pricefilter"  min="0" /></center>
                        </div>
                        
                        <center><button className="button button1" onClick={()=>this.searchArticles()}>Buscar</button></center>
                    </div>
                    <div className="col" id="sBodyCol">
                            <SearchList filter={this.state.filter}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  searchArticles(){
      this.setState({filter: {search: this.refs.search.value,
                    min_price: this.refs.min_price.value,
                    max_price: this.refs.max_price.value
      }});
  }
}

export default Search;