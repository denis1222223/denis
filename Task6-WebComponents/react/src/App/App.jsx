import React from 'react';

import Hello from '../Hello';
import '../customElements/x-spinner';
import './app.less';

class App extends React.Component {

    switch() {
        var spinners = document.querySelectorAll('x-spinner');
        [].forEach.call(spinners, function (spinner) {
            spinner.switch();
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.switch}>Switch</button>
                <button onClick={this.switch}>Switch</button>

                <div className="block block1">
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />

                    <x-spinner show="true"></x-spinner>
                </div>

                <div className="block block2">
                    <Hello name="friend" />

                    <x-spinner show="false"></x-spinner>
                </div>

                <div className="block block3">
                    <Hello name="Denis" />
                </div>
            </div>
        );
    }
}

export default App;