import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const facilities = this.props.facilities;
    const checkboxItems = facilities.map((facility, index) => (
      <div key={index} className="form-check">
        <label>
          <input
            className="form-check-input"
            type="checkbox"
            value="{facility}"
            onClick={e => this.props.onChange(facility, e.checked)}
          />
          {facility}
        </label>
      </div>
    ));
    return (
      <form>
        <label>Filter by facilities: </label>
        {checkboxItems}
      </form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.array.isRequired
};

export default Filter;
