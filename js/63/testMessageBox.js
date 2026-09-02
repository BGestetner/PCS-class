'use strict'
import messageBox from './messageBox.js';
const buttons = ['OK', 'cancel', 'exit'];
messageBox('testing 1,2', buttons, () => {
    console.log('you pressed a button');
});