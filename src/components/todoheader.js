import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


class TodoHeader extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handlerInput = (event) => {
    let target = event.target;
    let value = target.value;
    this.setState({
      inputVal : value,
    });
  }

  addItem = () => {
    let {inputVal} = this.state;
    this.props.addItem(inputVal);
  }


  render() {
    // const { inputVal } = this.props;
    return (
      <div className="todos__header">
        <h1>Todo List</h1>
        <div className="form">
          <input
            type="text"
            placeholder="Nhập công việc cần làm"
            name="txtInput"
            onChange={this.handlerInput}
          />
          <button 
            className="btn btn-addItem"
            onClick = { this.addItem }
          >
             Add 
          </button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return{};
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addItem : (inputVal) => {
      dispatch(actions.addItem(inputVal));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)
