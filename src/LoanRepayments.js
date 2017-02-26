import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import NumberHelpers from './NumberHelpers';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



export default class LoanRepayments extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    monthlyPayments(){
        let pmt = NumberHelpers.monthlyPayments(this.props.amount, this.props.rate, this.props.years);
        console.log('monthly is ' + pmt)
        return pmt;
    }

    monthlyIO(){
        let pmt = NumberHelpers.monthlyIO(this.props.amount, this.props.rate);
        console.log('monthly is ' + pmt)
        return pmt;
    }

    formattedPayments(frequency){
        switch(frequency) {
        case 'Monthly':
            return NumberHelpers.formatCommas(this.monthlyPayments());
        case 'Monthly / 2':
            return NumberHelpers.formatCommas(this.monthlyPayments() / 2);
        case 'Fortnightly':
            return NumberHelpers.formatCommas(this.monthlyPayments() * 12 / 26);
        case 'Monthly / 4':
            return NumberHelpers.formatCommas(this.monthlyPayments() / 4);
        case 'Weekly':
            return NumberHelpers.formatCommas(this.monthlyPayments() * 12 / 52);
        default:
            return 'Unknown'
        }
    }

    formattedIO(frequency){
        switch(frequency) {
        case 'Monthly':
            return NumberHelpers.formatCommas(this.monthlyIO());
        case 'Monthly / 2':
            return NumberHelpers.formatCommas(this.monthlyIO() / 2);
        case 'Fortnightly':
            return NumberHelpers.formatCommas(this.monthlyIO() * 12 / 26);
        case 'Monthly / 4':
            return NumberHelpers.formatCommas(this.monthlyIO() / 4);
        case 'Weekly':
            return NumberHelpers.formatCommas(this.monthlyIO() * 12 / 52);
        default:
            return 'Unknown'
        }
    }

    render() {


        return (
            <Paper zDepth={2}>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>{this.props.amount} @ {this.props.rate}%</TableHeaderColumn>
                        <TableHeaderColumn>P & I</TableHeaderColumn>
                        <TableHeaderColumn>Int Only</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false} stripedRows={true}>
                    <TableRow>
                        <TableRowColumn>Monthly</TableRowColumn>
                        <TableRowColumn>{this.formattedPayments('Monthly')}</TableRowColumn>
                        <TableRowColumn>{this.formattedIO('Monthly')}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Monthly / 2</TableRowColumn>
                        <TableRowColumn>{this.formattedPayments('Monthly / 2')}</TableRowColumn>
                        <TableRowColumn>{this.formattedIO('Monthly / 2')}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Fortnightly</TableRowColumn>
                        <TableRowColumn>{this.formattedPayments('Fortnightly')}</TableRowColumn>
                        <TableRowColumn>{this.formattedIO('Fortnightly')}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Monthly / 4</TableRowColumn>
                        <TableRowColumn>{this.formattedPayments('Monthly / 4')}</TableRowColumn>
                        <TableRowColumn>{this.formattedIO('Monthly / 4')}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Weekly</TableRowColumn>
                        <TableRowColumn>{this.formattedPayments('Weekly')}</TableRowColumn>
                        <TableRowColumn>{this.formattedIO('Weekly')}</TableRowColumn>
                    </TableRow>

                    </TableBody>
                </Table>
            </Paper>
        );
    }
}