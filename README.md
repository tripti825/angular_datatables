# Assign1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#setup data tables [https://l-lin.github.io/angular-datatables/#/getting-started]

## npm install angular-datatables --save

## install the dataTables script files
npm install datatables.net --save
npm install datatables.net-dt --save

## npm install @types/jquery --save-dev
## npm install @types/datatables.net --save-dev

## install the responsive feature of data tables
npm install datatables.net-responsive --save
npm install datatables.net-responsive-dt --save

## install the buttons feature of dataTables
npm install datatables.net-buttons --save
npm install datatables.net-buttons-dt --save

## install the select feature of dataTables
npm install datatables.net-select --save
npm install datatables.net-select-dt --save

After installing these, include the required js and css files in the `scripts` and `styles` property in 
`apps[{}]` in angular-cli.json file.

Next, `import { DataTablesModule } from 'angular-datatables';` in app.module.ts and include`DataTablesModule` in `imports`.

#setup MEANstack [https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli]

## install node

## install angular cli => npm install -g @angular/cli

## create new project => ng new mean-app => cd mean-app

## run command => ng build
## this is to create the "dist" folder, to which the node server will point to run the app 

## install express framework for node server => npm install --save express body-parser

## create a server file at root directory => server.js with the following (basic) configuration 

<!--
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
-->

## create a folder at root called "server". Create two sub folders within it "routes" and "models"
## [we have included "routes" folder in our server.js file]

## in "routes" create a file "api.js" with the following (basic) configuration
## [this file will include the routes and their respective backend functionalities]

<!--
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
-->

## to run the app, run the "node server.js" command

## install mongodb

## install mongoose using npm => npm install mongoose --save

## install bluebird using npm => npm install bluebird --save

## establish (basic) connection to mongodb by writing the following in the server.js file
<!--
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/first-app');
mongoose.Promise = require('bluebird');
-->

## inside folder "server/models", create your collection file
## if you have a collection (relational equivalent : table) called user, create a file User.js with the following
<!--
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String, required: true},
  address: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
-->

