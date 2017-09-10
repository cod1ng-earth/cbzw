import _join from 'lodash/join';
import Test from './test';
import '../scss/main.scss';

const component = function() {
    let element = document.createElement('div');
    let t = new Test(5);

    element.innerHTML = _join(['Hello', 'webpack', t.behave()], ' ');
    return element;
} 
  
document.body.appendChild(component());