import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import './sideBar.less';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sprints = this.props.sprints;
        var sprintsList = sprints.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={"/sprint?id=" + item.id} className={this.props.sprintId == item.id ? "active":""}>
                        {item.name}
                    </Link>
                </li>
            );
        });
        
        return (
            <div className='sideBar'>
                <ul>
                    {sprintsList}
                </ul>
            </div>
        );
    }
}

SideBar.propTypes = {};

export default SideBar;