import Test from './test';
import '../scss/main.scss';

$(() => {
    let $container = $('#canvas');
    let $el = $('<div>');
    let t = new Test(4);
    $el.html('test ' + t.behave());
    $container.append($el);
})

//const canvas = document.body.appendChild(component());