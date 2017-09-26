# cbzw (Coding Berlin Zettelwirtschaft)

That's what we're supposing to build here:

![Zettelwirtschaft](http://blogs.plos.org/thestudentblog/files/2015/07/5141328136_16d8f73ee7_b-1024x680.jpg)

a collaboratively editable visual cardboard for Coding Berlin. Add your own card now and give us a PR to see it live. The production app runs here: https://cbzw.herokuapp.com

### Docker usage

if you don't want to install nodejs locally, this repo comes with a docker-compose file that'll spin up a dev server inside a container and binds to your local port 8080. First install docker and docker-compose on your local machine. Then:

    docker-compose up 

That'll mount your local folder as docker volume to /app, spin up the container, install all dependencies (takes ~3 minutes) and run webpack-dev-server. When you see the line `webpack: Compiled successfully`, point your browser to http://localhost:8080. Webpack's dev-server comes with hot module replacement so as soon as you change anything on any file that should be reflected on the frontend immediately. To execute node cli commands (see below) you can "login" to a bash on your container with:

    docker-compose exec web bash

(which by default starts in the WORKDIR (=/app) which is synced with your local folder)

### _OR_ Install on your own machine.

You only need node/npm >= 6 (Use [NVM](https://github.com/creationix/nvm) if you're new to node, it's *really* uncomfortable to install node, npm or even node-related tools globally regardless that many beginner tutorials tell you so!). 

Then (obvious):

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

which starts webpack-dev-server. Alternatively let webpack create real assets and watch them. Then run the server on your own (this is how the production app works):

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
