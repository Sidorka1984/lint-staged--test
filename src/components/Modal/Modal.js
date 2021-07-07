import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.heandleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.heandleKeyDown);
  }
  heandleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('tach ESC, close modal');
      this.props.onClose();
    }
  };

  heandleBackDropClick = event => {
    // console.log('click on backdrop');
    // console.log('currentTarget:', event.currentTarget);
    // console.log('target', event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.heandleBackDropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
