import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import NumberHelpers from './NumberHelpers';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



export default class LoanRepayments extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {


        return (
            <Paper zDepth={2}>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn>P & I</TableHeaderColumn>
                        <TableHeaderColumn>Int Only</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>Monthly</TableRowColumn>
                        <TableRowColumn>$2,455</TableRowColumn>
                        <TableRowColumn>$1,900</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Monthly / 2</TableRowColumn>
                        <TableRowColumn>$2,455</TableRowColumn>
                        <TableRowColumn>$1,900</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Fortnightly</TableRowColumn>
                        <TableRowColumn>$2,455</TableRowColumn>
                        <TableRowColumn>$1,900</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Monthly / 4</TableRowColumn>
                        <TableRowColumn>$2,455</TableRowColumn>
                        <TableRowColumn>$1,900</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Weekly</TableRowColumn>
                        <TableRowColumn>$2,455</TableRowColumn>
                        <TableRowColumn>$1,900</TableRowColumn>
                    </TableRow>

                    </TableBody>
                </Table>
            </Paper>
        );
    }
}