import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actives from '../actions/index';

class TodoFooter extends Component {


  onHandleChange = (event) => {
    let target = event.target;
    let value = parseInt(target.value);// ep kieu so nguyen 
    this.props.onFilterChange(value);
  }

  render() {
    const { filter } = this.props;
    // console.log( filter );
    return (
      <div className="todos__fooder">
        <div className="filter">
          <h3 className="finter-content">Chọ bộ lọc để hiển thị</h3>
          <div className="filter-picker">
            <input
              type="radio"
              name="filter"
              id="1"
              value={1}
              onChange={this.onHandleChange}
              checked={filter === 1}
            />
            <label htmlFor="1">Đã hoàn thành</label>
            <input
              type="radio"
              name="filter"
              id="-1"
              value={-1}
              onChange={this.onHandleChange}
              checked={filter === -1}

            />
            <label htmlFor="-1">Chưa hoàn thành</label>
            <input
              type="radio"
              name="filter"
              id="0"
              value={0}
              onChange={this.onHandleChange}
              checked={filter === 0}
            />
            <label htmlFor="0">Tất cả</label>

          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    filter : state.filter
  };
}

const mapDispatchToProps = (despatch, props) => {
  return {
    onFilterChange: (value) => {
      if (value === 0) {
        despatch(actives.filterAll(value))
      }
      if (value === 1) {
        despatch(actives.filterActive(value))
      }
      if (value === -1) {
        despatch(actives.filterNoActive(value))
      }
    }

  };
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
// export default Todoooder;
