// src/WebHelloReact.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloReact from './HelloReact';

// Definir el Web Component
class WebHelloReact extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const mountPoint = document.createElement('div');
    shadowRoot.appendChild(mountPoint);

    // Renderizamos el componente React en el Shadow DOM
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<HelloReact />);
  }
}

// Registrar el Web Component
customElements.define('my-web-component', WebHelloReact);
