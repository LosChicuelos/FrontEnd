import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
        console.log("Holaaaa22")
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    alert(date);
    console.log(date);
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}
export default MyComponent;