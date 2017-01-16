import React, { PropTypes as T, Component} from 'react'
import { Button } from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import './login.less';

export class Login extends Component {
    static propTypes = {
        location: T.object,
        auth: T.instanceOf(AuthService)
    };

    render() {
        const { auth } = this.props;
        return (
            <div className="login">
                <Button bsStyle="primary" onClick={() => auth.login()}>Login</Button>
            </div>
        )
    }
}

export default Login;