//https://codepen.io/maydie/pen/OVmxZZ
import React from 'react';
import './chart.css';

import Pie from './Pie';


class Chart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

	render() {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

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

export default Chart;