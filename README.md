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

If you're done: commit, push and open a pull request.

### Run
    npm run watch

alternatively let webpack create real assets and watch them. Then run the server on your own
(this is how the production app works):

```
webpack --watch --config webpack.dev.js
npm start
```


