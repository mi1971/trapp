import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import NumberHelpers from './NumberHelpers';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



export default class LoanMetrics extends Component {

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

    dailyRepayment(){
        let amt = this.monthlyPayments() / 30;
        return NumberHelpers.formatCommas(amt);
    }

    dailyRepaymentIO(){
        let amt = this.monthlyIO() / 30;
        return NumberHelpers.formatCommas(amt);
    }

    yearlyRepayment(){
        let amt = this.monthlyPayments() *12;
        return NumberHelpers.formatCommas(amt);
    }

    yearlyRepaymentIO(){
        let amt = this.monthlyIO() *12;
        return NumberHelpers.formatCommas(amt);
    }

    lifeRepayment(){
        let amt = this.monthlyPayments() *12*this.props.years;
        return NumberHelpers.formatCommas(amt);
    }

    lifeRepaymentIO(){
        let amt = this.monthlyIO() *12*this.props.years;
        return NumberHelpers.formatCommas(amt);
    }

    render() {


        return (
            <Paper zDepth={2}>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>{NumberHelpers.formatCommas(this.props.amount)} @ {this.props.rate}%</TableHeaderColumn>
                        <TableHeaderColumn>P & I</TableHeaderColumn>
                        <TableHeaderColumn>Int Only</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false} stripedRows={true}>
                    <TableRow>
                        <TableRowColumn>Daily Repayment</TableRowColumn>
                        <TableRowColumn>{this.dailyRepayment()}</TableRowColumn>
                        <TableRowColumn>{this.dailyRepaymentIO()}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Yearly Total</TableRowColumn>
                        <TableRowColumn>{this.yearlyRepayment()}</TableRowColumn>
                        <TableRowColumn>{this.yearlyRepaymentIO()}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Life Total</TableRowColumn>
                        <TableRowColumn>{this.lifeRepayment()}</TableRowColumn>
                        <TableRowColumn>NA</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn colSpan="2">{}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn></TableRowColumn>
                        <TableRowColumn colSpan="2">{}</TableRowColumn>
                    </TableRow>

                    </TableBody>
                </Table>
            </Paper>
        );
    }
}