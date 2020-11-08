import React, { Component } from 'react';
import './gitcard-light.css';
const Gitcard = require('gitcardjs');

class App extends Component{
  
  state = {
    htmlcode:""
  }  
  
  componentDidMount() {
    const fetchUserCard = async () => {
      const response = await Gitcard('token', 'github-username');
      this.setState({
        htmlcode:response
      });
    };
    fetchUserCard();
  }
  
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.htmlcode}}></div>
    )
  }
}

export default App;