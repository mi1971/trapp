import React, { Component } from 'react';
// import FlatButtonExampleSimple from './BadgeSample.js'
// import RecurringAmount from './RecurringAmount.js'
import LoanInputs from './LoanInputs.js'
import LoanRepayments from './LoanRepayments.js'
import LoanMetrics from './LoanMetrics.js'
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
      this.setState({
        amount: amount,
        rate: rate,
        years: years
      })
  }

  render() {
    return (
      <MuiThemeProvider>

  
      <div className="App">

        <div style={{padding:40}}>
          <LoanInputs amount={this.state.amount} rate={this.state.rate} years={this.state.years} onChange={this.loanChanged.bind(this)}/>
          <div style={{width:"100%", maxWidth:"500px", paddingTop:"20px"}}>
            <LoanRepayments amount={this.state.amount} rate={this.state.rate} years={this.state.years}/>
          </div>
          <div style={{width:"100%", maxWidth:"500px", paddingTop:"20px"}}>
            <LoanMetrics amount={this.state.amount} rate={this.state.rate} years={this.state.years}/>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
