import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class DateForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.myCallback = this.props.myCallback.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    var date2 = new Date(date);
    date2 = date2.toLocaleDateString("en-US");
    this.myCallback(date2.toString());
    this.props.setParams();
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}
export default DateForm;