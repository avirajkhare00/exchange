import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

class Main extends Component {
	render() {
		return (
			<div>
				{renderRoutes(this.props.route.routes)}			
			</div>
		);
	}
}

export default Main