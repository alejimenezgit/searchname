import React, { Component } from "react";
import Search from '../Search';
import ResultList from '../ResultList';
import axios from "axios";

const message = {
    error: "Error de carga en la busqueda",
    isloading: "Cargando..."
}

export default class SearchBar extends Component {

    state = {
        list: [],
        isloading: false,
        error: false,
    }

    search = (keyword) => {
        let {isloading, error} = this.state;
        isloading = true;
        if(keyword !== ''){
            axios
            .get(`https://api.github.com/search/users?q=${keyword}`)
            .then((response)=> {
                this.setState({list: response.data.items})
            })
            .catch(()=> {
                error = true;
            })
        }
        else{
            this.setState({list: ''})
        }
    }

    render() {
        const {list,error,isloading} = this.state;
        return ( 
            <div> 
                <Search search={this.search}/>
                {error && <div> {message.error} </div>}
                {!error && isloading && <div> {message.isloading} </div>}
                {!error && !isloading && <ResultList list={list}/>}
            </div>
        )
    }
}