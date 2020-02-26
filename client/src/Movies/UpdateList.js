import React, { Component } from "react";
import MovieList from "./MovieList";
import axios from 'axios'


class UpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title:'',
            director: '',
            metascore: '',
        
        }
    }
    changeHandler = e => {
        this.setState({[e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
        .put('http://localhost:5000/api/movies/{this.state.id}', MovieList)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error), [])
    }

    render() {
        const { id, title, director, metascore } = this.state;
        return (
            <div>
              <form onSubmit={this.submitHandler}>
                <div>
                  <input placeholder="id" type="text" name="id" value={id} onChange={this.changeHandler} />
                </div>
                <div>
                  <input  placeholder="title" type="text" name="title" value={title} onChange={this.changeHandler}/>
                </div> 
                <div>
                  <input  placeholder="director" type="text" name="director" value={director} onChange={this.changeHandler}/>
                </div>
                <div>
                  <input  placeholder="metascore" type="text" name="metascore" value={metascore} onChange={this.changeHandler}/>
                </div>
                <button>Submit</button>
              </form>
            </div>
          );
        }
      }
      
      export default UpdateForm;