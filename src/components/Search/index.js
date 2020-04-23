import React, { Component } from "react";

export default class SearchBar extends Component {

    state = {
        keyword: '',
    };

    handleInput = (e) => {
        this.setState({
            keyword: e.target.value
        })
      }

    render() {
        const {keyword} = this.state;
        const {search} = this.props;
        return ( 
            <div> 
                <input onChange={this.handleInput}/>
                <button onClick={ () => {search(keyword)}}> Search </button>
            </div>
        )
  }
}