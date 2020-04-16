import React, { Component } from 'react';

export class ProductRow extends Component {
    render() {
        const product  = this.props.product;
        let name = product.stocked ? product.name : 
            <span style={{borderStyle:"solid", borderColor:"red"}}> {product.name} </span>;
            let price = product.stocked ? product.price : 
            <span style={{borderStyle:"solid", borderColor:"red"}}> {product.price} </span>;
        return(
            
            <div>
                <tr>
                    <td> {name}</td>
                    <td> {price}</td>
                </tr>
            </div>
        );
    };
}