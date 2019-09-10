import React, { Component } from 'react';
import {connect} from 'react-redux';


import TodoItem from './todoitem';

class TodoBody extends Component {

  render() {
    let { data } = this.props;
    return (
      <div className="todos__body">
        {data.map((item, index) =>
          <TodoItem
            key={index}
            content={item.content}
            isComplete={item.isComplete}
            index={index}
          />
        )}
       

      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
    data : state.allItem
  };
}


export default connect(mapStateToProps,null)(TodoBody);
