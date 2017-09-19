require('./card.scss');
const tpl = require('./card.hbs')

export default class Card {
    render($el) {
        const markup = tpl({name: 'theartistformerlyknownaselmariachi'});
        $el.html(markup);
    }
}