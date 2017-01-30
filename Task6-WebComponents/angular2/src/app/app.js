import { Component } from '@angular/core';

import '../customElements/x-spinner';
import './app.less';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <button (click)="show()">show</button>
            <button (click)="hide()">hide</button>

            <div class="block block1">
                <x-spinner></x-spinner>
            </div>

            <div class="block block2">
                <x-spinner></x-spinner>
            </div>

            <div class="block block3">
                <x-spinner></x-spinner>
            </div>
        </div>
    `
})
export default class App {

    show() {
        var spinners = document.querySelectorAll('x-spinner');
        [].forEach.call(spinners, spinner => spinner.show());
    }

    hide() {
        var spinners = document.querySelectorAll('x-spinner');
        [].forEach.call(spinners, spinner => spinner.hide());
    }
};
