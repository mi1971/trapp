import React, { Component } from 'react';
import FlatButtonExampleSimple from './BadgeSample.js'
import RecurringAmount from './RecurringAmount.js'
import LoanInputs from './LoanInputs.js'
import LoanRepayments from './LoanRepayments.js'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        amount: 300000,
        rate: 4.0,
        years: 30
    }
  }

  loanChanged(amount, rate, years){
      console.log('amount changed to ' + amount);
  }

  render() {
    return (
      <MuiThemeProvider>

  
      <div className="App">

        <FlatButtonExampleSimple />

        <RecurringAmount amount="48500" period="pa" label="Salary" />
        <RecurringAmount amount="400" period="pw" label="Rental Income"/>

        <div style={{padding:50}}>
          <LoanInputs amount={this.state.amount} rate={this.state.rate} years={this.state.years} onChange={this.loanChanged}/>
          <div style={{width:"400px", paddingTop:"20px"}}>
            <LoanRepayments/>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
