import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';

import NumberHelpers from './NumberHelpers';

export default class LoanInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount:this.props.amount || 100000,
            rate:this.props.rate || 5,
            years:parseInt(this.props.years, 10)
        };

        this.changeAmount = this.changeAmount.bind(this);
        this.changeRate = this.changeRate.bind(this);
        this.changeYears = this.changeYears.bind(this);
    }

    loanChanged() {
        //console.log('amt in lc ' + this.props.amount)
        this.props.onChange(this.state.amount, this.state.rate, this.state.years);
    }

    blurAmount = (event) => {
        //this.processNewValue(event.target.value);
    }

    changeAmount = (event) => {
        console.log(event.target.value)
        this.setState({ amount: NumberHelpers.numbersOnly(event.target.value) }, function(){
            this.loanChanged();
        });
    }

    changeRate = (event) => {
        console.log(event.target.value)
        this.setState({ rate: NumberHelpers.numbersAndDot(event.target.value) }, function(){
            this.loanChanged();
        });
    }

    changeYears = (event, index, value) => {
        console.log(value)
        this.setState({ years: value }, function(){
            this.loanChanged();
        });
    }



   

    // handleMenuClick = (event, child) => {
    //     this.processNewValue(child.props.primaryText);
    // }

    render() {

        const style = {
            display:"flex",
            paddingLeft:"20px",
            paddingBottom:"10px"
        };

        const innerStyle = {
            // border:"solid 1px #c0c0c0"  
        }

        return (

            <Paper zDepth={2}>
            <div style={style}>
                <div style={innerStyle}>
                    <TextField 
                        ref="amount"
                        onBlur={this.blurAmount}
                        onChange={this.changeAmount}
                        hintText="Amount"
                        floatingLabelText="Amount"
                        floatingLabelFixed={true}
                        style={{width:"70px"}}
                        value={NumberHelpers.formatCommas(this.state.amount)}
                    />
                </div>

                <div style={{
                    padding:"4px",
                    paddingTop:"40px",
                    color:'#c0c0c0'
                }}>
                    @
                </div>

                <div style={innerStyle}>
                    <TextField 
            
                        ref="rate"
                        onBlur={this.blurRate}
                        onChange={this.changeRate}
                        hintText="Rate"
                        floatingLabelText="Rate"
                        floatingLabelFixed={true}
                        style={{width:"45px"}}
                        value={this.state.rate}
                    />
                </div>

                <div style={{
                    padding:"5px",
                    paddingTop:"38px",
                    color:'#c0c0c0'
                }}>
                    over
                </div>

                <div>
                    <SelectField
                    style={{width:"40px"}}
                    floatingLabelText="Years"
                    value={this.state.years}
                    onChange={this.changeYears}
                    autoWidth={true} >

                    {[...Array(30)].map((x, i) =>
                        <MenuItem key={i + 1} value={i + 1} primaryText={i+1} />
                    )}

                    </SelectField>
                </div>

            </div>
            </Paper>

        );
    }
}