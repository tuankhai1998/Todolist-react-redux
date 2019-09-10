import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class TodoItem extends Component {

    onUpdateStatus = () => {
        let { index } = this.props;
        this.props.onUpdateStatus(index);
    }

    removeItem = () => {
        let { index } = this.props;
        this.props.removeItem(index);
    }

    render() {
        const { isComplete, content } = this.props;
        return (
            <div className={`todos__item ${isComplete === true ? `active` : ``}`}>
                <div
                    className="item-state"
                    onClick={this.onUpdateStatus}
                >
                    {isComplete === true ?
                        <i className="fas fa-check-square"
                        ></i>
                        : <i className="far fa-check-square"
                        ></i>}

                </div>
                <h3 className="item-content">{content}</h3>
                <div
                    className="btn btn-remove"
                    onClick={this.removeItem}
                >
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (despatch, props) => {
    return {
        onUpdateStatus : (index) => {
            despatch(actions.handerStatus(index))
        },
        removeItem : (index) => {
            despatch(actions.deleteItem(index))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);