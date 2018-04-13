/*global fetch*/
/*global Headers*/
/*global Request*/
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/Article.css';

class Article extends Component {
  constructor(props){
      super(props);
  }
  render(){
      return(
        <div className ="col">
            <div className="row">
                <img src="http://cdn.latribuna.hn/wp-content/uploads/2017/04/tomate-2-770x470.jpg"/>
            </div>
            <div className="row">
                <h2>Tomate</h2>
                <p>Precio kg: 2400</p>
            </div>
        </div>
      )
  }
    async addArticle(data){
        
            const headers = new Headers();
            headers.append('Content-Type','application/json');
            
            const options = {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            }
            const request = new Request('http://backend-bsdiaza.c9users.io/users',options);
            const response = await fetch(request);
            const status = await response.status;
            if(status === 201){
                const response = await fetch('http://backend-bsdiaza.c9users.io/users');
                console.log(await response.json());
            }
        console.log(data);
    }
}

export default Article;