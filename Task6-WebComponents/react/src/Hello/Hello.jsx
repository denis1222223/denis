import React from 'react';

import './hello.less';

export default class Hello extends React.Component {
	render () {
		return (
			<p>Hello, <span className="hello-name">{this.props.name}</span>!</p>
		);
	}
}
