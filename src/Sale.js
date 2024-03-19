import React, { Component } from "react";
import saleImage from './Images/sale.png';
 
class Sale extends Component {
  render() {
    return (
      <div>
        <img src={saleImage} atl="For_Sale" width="450" height="300" />
        <ol>
            <li>Apple</li>
            <li>Arts</li>
            <li>Atheist</li>
            <li>Autos</li>
            <li>Beauty</li>
        </ol>
      </div>
    );
  }
}
 
export default Sale;