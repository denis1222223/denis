import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import App from './app';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        App
    ],
    bootstrap: [ App ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
