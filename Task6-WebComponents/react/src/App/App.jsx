import React from 'react';

import Hello from '../Hello';
import '../customElements/x-spinner';
import './app.less';

class App extends React.Component {
    render() {
        return (
            <div>
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