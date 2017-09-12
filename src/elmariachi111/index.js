require('./card.scss');
const tpl = require('./card.hbs')

export default class Card {
    render($el) {
        const markup = tpl({name: 'Elmariachi111'});
        
        $el.html(markup);
        $el.addClass('zaxis');
        $el.on('click', () => {
            $el.toggleClass('zaxis').toggleClass('yaxis');
        })
    }
}