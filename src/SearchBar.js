import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.onHandleStockOnly = this.onHandleStockOnly.bind(this);
        this.onHandleFilterText = this.onHandleFilterText.bind(this);
    }

    onHandleStockOnly(event) {
        console.log('********* SearchBar.onHandleStockOnly : ' + event.target.checked);
        this.props.onHandleStockOnly(event.target.checked);
    }

    onHandleFilterText(event) {
      this.props.onHandleFilterText(event.target.value);
    }


    render() {
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;

        return(
            <div>
                <input type="text" placeholder="Search..." onChange={this.onHandleFilterText}/>
                <p>
                    <input type="checkbox" onChange={this.onHandleStockOnly}/> {' '} Show only stocked items
                </p>
            </div>
        );
    };
}