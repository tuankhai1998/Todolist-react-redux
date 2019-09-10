import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import TodoHeader from './components/todoheader';
import TodoBody from './components/todobody';
import TodoFooder from './components/todofooder';


class App extends Component {
 
  onData = () => {
    if (localStorage.getItem('todoItems')) {
      return JSON.parse(localStorage.getItem('todoItems'));
    } else {
      return [];
    }
  }

  render() {

    return (
      <div className="App">
        <div className="todos">
          <TodoHeader />
          <TodoBody/>
          <TodoFooder />
          
        </div>
      </div>
        );
      }
    
    }
    
const mapStateToProps = state => {
  return {};
      }
      
const mapDispatchToProps = (despatch, props) => {
  return {};
      }
      
      export default connect(mapStateToProps,mapDispatchToProps)(App);
