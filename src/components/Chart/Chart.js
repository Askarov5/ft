//https://codepen.io/maydie/pen/OVmxZZ
import React from 'react';
import PropTypes from 'prop-types';

import './Chart.css';
import Pie from './Pie';


class Chart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
	}
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.data !== this.props.data) return true;
		else return false;
	}

	render() {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C', '#34495e', '#2980b9'];

		return (
		<div>
			<Pie
				data={ this.state.data }
				radius={ 150 }
				hole={ 50 }
				colors={ colors }
				labels={ true }
				percent={ true }
				strokeWidth={ 3 }
				stroke={ '#fff' }
			/>
		</div>
		);
	}
};

Chart.propTypes = {
	data: PropTypes.arrayOf(PropTypes.number)
}

export default Chart;