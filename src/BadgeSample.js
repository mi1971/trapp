import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  minWidth: 40
};



const FlatButtonExampleSimple = () => (
  <div>
  <Paper>
    <FlatButton label="MON" style={style} />
    <RaisedButton label="TUE" primary={true} style={style} />
    <FlatButton label="WED" style={style} />
    <FlatButton label="THU" style={style} />
    <FlatButton label="FRI" style={style} />
    <FlatButton label="MORE" style={style} />
    </Paper>


  </div>
);

export default FlatButtonExampleSimple;