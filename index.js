var workshopper = require('workshopper')
var path = require('path')

workshopper({
    name: 'astronaut'
  , title: 'MANIPULATE THE AST TO GET SUPERPOWERS'
  , appDir: __dirname
  , helpFile: path.join(__dirname, 'help.txt')
}).init()
