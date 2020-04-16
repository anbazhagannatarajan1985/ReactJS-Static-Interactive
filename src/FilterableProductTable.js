import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { ProductTable } from './ProductTable';

export default class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }

        this.onHandleStockOnly = this.onHandleStockOnly.bind(this);
        this.onHandleFilterText = this.onHandleFilterText.bind(this);
    }

    onHandleStockOnly(event) {
        console.log('******* FilterableProductTable.onHandleStockOnly : ' + event);
        this.setState({
            inStockOnly: event
        });
    }

    onHandleFilterText(filterText) {
        this.setState(
            {
                filterText: filterText
            }
        );
    }

    

    render() {
        let products = this.props.products;
        console.log(products);
        return(
            <div>
                <SearchBar 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onHandleStockOnly={this.onHandleStockOnly}
                onHandleFilterText={this.onHandleFilterText}
                />
                
                <ProductTable 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                 products={products}/>
            </div>
        );
    };
}