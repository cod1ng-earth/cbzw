require('./card.scss');
const tpl = require('./card.hbs')

const COINDESK_API = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export default class Card {
    render($el) {
        this.$el = $el;
        this.$el.on('click', () => {
            this.$el.toggleClass('zaxis').toggleClass('yaxis');
        });
        this.$el.addClass('zaxis');
        this.refresh();
    }

    _render() {
        const markup = tpl({name: 'Elmariachi111', bitcoin: this.bitcoinRate});
        this.$el.html(markup);
        this._events();
    }

    _events() {
        this.$el.find('a[rel=refresh]').on('click', (evt) => {
            evt.stopPropagation();
            evt.preventDefault();
            this.refresh(this.$el);
            return false;
        });
    }

    refresh() {
        this.fetchBitcoinRate().then(rate => {
            this.bitcoinRate = rate;
            this._render();
        }).catch(() => {
            console.log('ups');
        })
    }

    fetchBitcoinRate() {
        return new Promise((resolve, reject) => {
            fetch(COINDESK_API).then(response => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject();
                }
            });
        });
    }
}