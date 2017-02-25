import React, { Component } from 'react';
// import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NumberHelpers from './NumberHelpers';
// import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';



const styles = {
    customWidth: {
        width: 100,
        direction: 'ltr',
        textAlign: 'left',
        marginTop: '0px'
    },
    textStyle: {
        width: 120,
        textAlign: 'right'
    }
};





export default class RecurringAmount extends Component {

    constructor(props) {
        super(props);
        let amount = this.props.amount;
        let period = this.props.period;
        this.state = {
            amount:amount,
            period:period,
            textValue: NumberHelpers.formatCommas(amount) + ' ' + period
        };
    }

    periods = [
        { days: 7, period: 'Weekly', abbr: 'pw' },
        { days: 14, period: 'Fortnightly', abbr: 'pf' },
        { days: 30.42, period: 'Monthly', abbr: 'pm' },
        { days: 365, period: 'Yearly', abbr: 'pa' },
    ]

    getAbbr = (days) => {
        if (!days) return '';
        var item = this.periods.find((item) => item.days === days);
        if (!item) return '';
        return item.abbr;

    }
    getDays = (abbr) => {
        if (!abbr) return 0;
        var item = this.periods.find((item) => item.abbr === abbr);
        if (!item) return 0;
        return item.days;
    }

    blurAmount = (event) => {
        this.processNewValue(event.target.value);
    }

    processNewValue = (value) => {

        console.log('value is ', value)

        //   debugger;
        var period = this.state.period;
        if (value.indexOf('a') > -1 || value.indexOf('y') > -1)
            period = 'pa';
        else if (value.indexOf('m') > -1)
            period = 'pm';
        else if (value.indexOf('f') > -1)
            period = 'pf';    
        else if (value.indexOf('w') > -1)
            period = 'pw';

        //value = value.replace('k', '000');
        let numberOfK = (value.match(/k/g) || []).length;
        console.log (numberOfK)

        
        value = value.replace(/[^\d.-]/g, '');

        for(var i=0;i<numberOfK;i++){
            value *= 1000;
        }

        
        let textValue = '';
        if(value > 0) {
            textValue = NumberHelpers.formatCommas(value) + ' ' + period;
        }

        this.setState({ amount: value });
        this.setState({ 'textValue': textValue })
        this.setState({ period: period });
    }

    changeAmount = (event) => {
        this.setState({ 'textValue':event.target.value });
    }

    getTextValue = () => {
        return this.state.amount.toString() + ' ' +
            this.state.period;
    }

    getMenuText = (period) => {
        var currentAmount = this.state.amount
        var currentPeriod = this.state.period;
        var currentDays = this.getDays(currentPeriod);
        var dailyAmount = currentAmount / currentDays;

        var days = this.getDays(period);
        var amount = dailyAmount * days;

        return Math.round(amount).toString() + ' ' + period;
    }

    handleChangeFrequency = (event, index, days) => this.setState({ days });

    handleMenuClick = (event, child) => {
        this.processNewValue(child.props.primaryText);
    }

    render() {
        return (

            <div>

                <TextField 
                    ref="textbox"
                    onBlur={this.blurAmount}
                    onChange={this.changeAmount}
                    onFocus={()=>{this.refs.textbox.select()}}
                    hintText="Amount"
                    floatingLabelText={this.props.label}
                    floatingLabelFixed={true}
                    style={styles.textStyle}
                    value={this.state.textValue}
                    />
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon color='#c0c0c0'/></IconButton>}
                    onItemTouchTap={this.handleMenuClick} >
                    <MenuItem value="pw" primaryText={this.getMenuText('pw')} />
                    <MenuItem value="pf" primaryText={this.getMenuText('pf')} />
                    <MenuItem value="pm" primaryText={this.getMenuText('pm')} />
                    <MenuItem value="pa" primaryText={this.getMenuText('pa')} />
                </IconMenu>

            </div>

        );
    }
}