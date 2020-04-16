import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
    render() {
        return(
            <div>
                <tr style={{backgroundColor:"gray"}}>
                    <td colSpan="2">{this.props.category}</td>
                </tr>
            </div>
        );
    };
}