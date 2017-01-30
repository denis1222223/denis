import React from 'react';
import { render } from 'react-dom';

class Spinner extends HTMLElement {
    constructor() {
        super();
        this.shadowRoot = this.createShadowRoot();
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'show') {
            this.render(newVal);
        }
        var root = 10;
      //  this.shadowRoot = root;
    }

    render(show) {
        if (show) {
            console.log("attach");
         //   this.shadowRoot = this.createShadowRoot();
            // var shadowRoot = this.createShadowRoot();
            // render(
            //     <div className="spinner-wrapper">
            //         <div className="spinner"></div>
            //     </div>,
            //     shadowRoot
            // );
            // this.setStyle(shadowRoot);
        } else {
            console.log("detach");
        }
    }

    createdCallback() {

        console.log("created");
        this.render();
    }

    switch() {
        var show = this.getAttribute("show");
        console.log(show);
        console.log(this.shadowRoot);
    }

    // attachedCallback() {
    //     console.log("attach " + this.getAttribute("show"));
    // }

    setStyle(element) {
        element.innerHTML += `
            <style>
                .spinner-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%)
                }
            
                .spinner { 
                    width: 30px;
                    height: 30px;
                    background-color: #f6fff7;
                    
                    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
                    animation: sk-rotateplane 1.2s infinite ease-in-out;
                }
        
                @-webkit-keyframes sk-rotateplane {
                  0% { -webkit-transform: perspective(120px) }
                  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
                  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
                }
        
                @keyframes sk-rotateplane {
                  0% {
                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
                  } 50% {
                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); 
                    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
                  } 100% {
                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                  }
                }
            </style>
        `;
    }
}

document.registerElement("x-spinner", Spinner);