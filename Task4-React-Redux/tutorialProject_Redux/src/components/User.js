import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props.user;
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};