import React, { Component } from "react";

const message = "busca usarios";

export default class SearchBar extends Component {

  render() {
      const {list} = this.props;
      console.log('results',list.length > 0, list.length,list)
    return ( 
        <div> 
            {list.length === 0 && 
                <div> {message} </div>}

            {list.length > 0 &&
                list.map((user, index) => {
                    return <div key={index}> {user.login} </div>
                })
            }
        </div>
    )
  }
}