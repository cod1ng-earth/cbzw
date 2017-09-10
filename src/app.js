import './main.scss';
import _forEach from 'lodash/forEach';
import * as Elmariachi111 from './elmariachi111';

$(() => {
    let $canvas = $('#canvas');

    let cards = {
        elmariachi111: new Elmariachi111.Card()
    }

    _forEach(cards, (card, id) => {
        const $el = $(`<div class="card ${id}"></div>`)
        card.render($el);
        $canvas.append($el);
    })
    
});
