import React, { Component } from 'react';
import { ProductRow } from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export class ProductTable extends Component {
    render() {
        let rows = [];
        let lastCategory = null;
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;

console.log('****** ProductTable.inStockOnly : ' + inStockOnly);
        console.log('****** '  +this.props.products);
        this.props.products.forEach(product => {
            
            if (product.name.indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !product.stocked) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }

            rows.push(<ProductRow product={product} key={product.name}/>)

            lastCategory = product.category;
        });

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price </td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
               
            </div>
        );
    }
}