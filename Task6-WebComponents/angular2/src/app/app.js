import { Component } from '@angular/core';
import './app.less';

@Component({
    selector: 'my-app',
    templateUrl: "src/app/app.html"
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
