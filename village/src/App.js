import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {Route, Link} from "react-router-dom"
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from "./components/SmurfPage";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      addedSmurf: {
        name: '',
        age: '',
        height: '',
      },

    };
  }

  handleAdd = e => {
    this.setState({
      addedSmurf: {...this.state.addedSmurf, [e.target.name]: e.target.value}
    })
  }

  addSmurf = e => {
    axios.post("http://localhost:3333/smurfs", e)
    .then(() => {axios.get("http://localhost:3333/smurfs")
      .then(res => {this.setState({
        smurfs: res.data,
       })
      })
    })
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home </Link>
          <Link to="/smurfform"> Add Smurf </Link>
          <Link exact to="/smurfs"> See Smurfs </Link>
        </nav> 

        <Route exact path='/' component={Home}/>
        <Route path='/smurfform' render = { rprops => {
         return <SmurfForm
          rprops ={rprops}
          addedSmurf={this.state.addedSmurf}
          handleAdd={this.handleAdd}
          addSmurf={this.addSmurf}
        /> }}
        />
        <Route exact path='/smurfs' render = {() => <Smurfs smurfs={this.state.smurfs}/> } />
        <Route exact path='/smurfs/:id' render = {(props) => <SmurfPage {...props} smurfs={this.state.smurfs}/> } />

      </div>
    );
  }
}

export default App;
