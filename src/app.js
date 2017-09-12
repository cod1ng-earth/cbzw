import './main.scss';
import * as modules from './modules';

$(() => {
    let $canvas = $('#canvas');
    for (let id in modules) {
        const card = new modules[id].default;
        const $el = $(`<div class="card ${id}"></div>`)
        card.render($el);
        $canvas.append($el);
    }
});
