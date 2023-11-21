import React, { Component } from 'react'

export default class classComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleDecrement = () => {
        this.setState(prevState => {
            if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return{
            count: 0
        }
        }
        });
    }

    handleIncrement = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    handleCart = () => {
        alert( this.state.count+" " + this.props.item + " " + 'added');
    };

  render() {
    return (
      <table>
      <tbody>
        <tr>
            <td><img src={this.props.imgUrl} alt={this.props.item}height="10%" width="10%"></img></td>
            <td>
            <h3>{this.props.item}</h3>
            <p>{this.props.desc}</p>
            </td>
            <td>
            <button onClick={this.handleDecrement}>-</button>
            {this.state.count}
            <button onClick={this.handleIncrement}>+</button>
            </td>
            <td>INR {this.props.price} /-</td>
            <td><button onClick={this.handleCart}>Add to Cart</button></td>
        </tr>
        </tbody>
      </table>
    )
  }
}