#!/usr/bin/env node
const yargs = require('yargs')
const fs = require('fs-extra')
const process = require('process');

const colors = [
    '#4BF9FF',
    '#89E845',
    '#FFC958',
    '#E84745',
    '#B59DFF'
]

const args = yargs.requiresArg('name')
    .usage('$0 <your nickname>')
    .help()
    .argv
    ;

if (args._.length != 1) {
    yargs.showHelp()
} else { //lets go
    const name = args._[0];

    //copy
    fs.copySync('template', 'src/' + name, {
        errorOnExist: true,
        overwrite: false
    });

    //add to modules
    let modulesJs = fs.readFileSync('src/modules.js', {'encoding': 'utf8'});
    modulesJs = `import * as ${name} from './${name}';` + '\n' + modulesJs;
    modulesJs = modulesJs.replace('}', `\t,${name} \n}`);
    fs.writeFileSync('src/modules.js', modulesJs);

    //modify scss
    let scss = fs.readFileSync('src/'+name+'/card.scss', {'encoding': 'utf8'});
    scss = scss.replace('.template', '.' + name);
    let left = Math.floor(Math.random() * 800);
    scss = scss.replace('#left#',left);

    let top = Math.floor(Math.random() * 600);
    scss = scss.replace('#top#',top);

    let randomColor = colors[~~(Math.random() * colors.length)]
    scss = scss.replace('#color#',randomColor);

    fs.writeFileSync(`src/${name}/card.scss`, scss);

    //modify js
    let js = fs.readFileSync('src/'+name+'/index.js', {'encoding': 'utf8'});
    js = js.replace("{name: ''}", "{name: '"+name+"'}");
    fs.writeFileSync(`src/${name}/index.js`, js);

}
