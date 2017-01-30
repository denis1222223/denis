import React from 'react';

import Hello from '../Hello';
import '../customElements/x-spinner';
import './app.less';

class App extends React.Component {

    show() {
        var spinners = document.querySelectorAll('x-spinner');
        [].forEach.call(spinners, spinner => spinner.show());
    }

    hide() {
        var spinners = document.querySelectorAll('x-spinner');
        [].forEach.call(spinners, spinner => spinner.hide());
    }

    render() {
        return (
            <div>
                <button onClick={this.show}>show</button>
                <button onClick={this.hide}>hide</button>

                <div className="block block1">
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />
                    <Hello name="World" />
                    <x-spinner></x-spinner>
                </div>

                <div className="block block2">
                    <Hello name="friend" />
                    <x-spinner></x-spinner>
                </div>

                <div className="block block3">
                    <Hello name="Denis" />
                    <x-spinner></x-spinner>
                </div>
            </div>
        );
    }
}

export default App;