# cbzw (Coding Berlin Zettelwirtschaft)

a collaboratively editable visual cardboard for Coding Berlin. 
Add your own card now and give us a PR to see it live. 
You only need node/npm >= 6 (Use NVM if you're new to node!). 

The production app runs here: https://cbzw.herokuapp.com

### Install

Clone / fork the repo (it's all about the pull requests!). Then (obvious):

    npm install

### Create a new card
    ./scaffold.js <your name>

creates a new folder containing your basic code in `src/<your name>`.

Edit everything you like inside that folder, be creative! Declare all your
styles inside the base scss class (.<your-name>). Your js file should only
export the Card class that we have scaffolded. But you're completely free to add
as much code as you want.

### Run
    npm run watch

which starts webpack-dev-server. Alternatively let webpack create real assets and 
watch them. Then run the server on your own (this is how the production app works):

```
webpack --watch --config webpack.dev.js
npm start
```

If you're done: commit, push and open a pull request.

### Technologies used

* Webpack module bundler
* es6 (import, promise, [Features](http://es6-features.org/))
* SCSS
* [Cash DOM](https://github.com/kenwheeler/cash/) as jQuery dropin. 
* use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and its promise interface for remote calls

Note that calls to remote APIs will most likely be restricted by CORS headers.
If you want to proxy an API request, implement that proxy in expressjs first (request it!).
Note that you should **never** disclose your private API keys. Add them as Heroku environment
variables instead and inform the maintainer to add them to the app's environment / app.json.

### Ideas
* display [tweets](https://dev.twitter.com/web/embedded-timelines)
* display [weather data](http://www.openweathermap.com/appid)
* display a chart / cryptocurrency [exchange rate](https://www.coindesk.com/api/)
* display the next [meetups](https://www.meetup.com/meetup_api/) in Berlin
* embed a [sound file](https://developers.soundcloud.com/docs/api/html5-widget#playground)
* implement [xeyes](https://stackoverflow.com/questions/14835722/eyes-follow-mouse-cursor-mootools-jquery)
* show a [fortune cookie](http://fortunecookieapi.herokuapp.com/)
* add some [fancy animation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
