# Meteorite-map

[![Join the chat at https://gitter.im/datadazer/meteorite-map](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/datadazer/meteorite-map?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This meteorite map is dedicated to providing up to date information on where meteorites have fallen. Since meteorites are often hard to distinguish from regular rocks, there are not many that get reported in to NASA or any of the other agencies. As such, the frequency of the updates may appear to take longer than they actually do. The main attraction is going to be the map where visitors can see approximately where the meteorite fell. The next thing is the data table where visitors can sort information based on a variety of factors regarding the meteorites.

There are stretch goals for this project that may never see the light of day, but we would like to meet at some point in the future after we accomplish the main goals of the map.

<a name="toc" />
## Table of Contents
[Prerequisites](#prereq)
[Installation](#install)
[Communication](#comms)
[Running / Development](#dev)
[Purpose](#purpose)
[Further Reading](#read)

<a name="prereq" />
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

In addition to the above software, you **will need to fork** the [repository](https://github.com/datadazer/meteorite-map) to your own GitHub profile.

[Table of Contents](#table)

<a name="install" />
## Installation

#### Unix Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

#### Windows Installation

1. Run the [Git](http://git-scm.com/download/win) installer.
	* During installation, select the option to be able to use git with the command prompt (cmd.exe)
2. Run the [Node.js](http://nodejs.org/) installer.
	* Ensure that the *NPM Package Manager* is selected to be installed
3. Open up the Command Prompt or Power Shell
4. `cd` to wherever you want the parent directory for the repo to be
5. `git clone` your fork of *meteorite-map*
6. cd into the repo and `git remote add upstream git@github.com:datadazer/meteorite-map.git`
7. `npm install`
8. `npm install -g bower`
9. `npm install -g ember-cli`
10. `npm install -g phantomjs`

[Table of Contents](#table)

<a name="comms" />
## Communicatons

We have open communication on Gitter at https://gitter.im/datadazer/meteorite-map

[Table of Contents](#table)

<a name="dev" />
## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### API Keys

|API                    |Key                                      |
|:---------------------:|:---------------------------------------:|
|Google Maps Javascript | AIzaSyBcIcoeFv6bDyZUz7eI-U42wqptWFrmj2A | 

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Probably use [Codeship]()

Possible deployment options:

* [Microsoft Azure]()
* [Heroku]()
* [Digital Ocean]()

[Table of Contents](#table)

<a name="purpose" />
## Purpose

The purpose of meteorite-map is simple: To draw a map to the viewport of meteorites (meteors that survive Earth's atmosphere and strike the crust of our planet). To achieve this, *ember.js* will be used as a way to interface with the map and possibly even draw to it, though we may offload that duty to another third party library. To actually get the reference data for the meteorites, this project will be employing the use of NASA's API and open data sets

#### Extra Credit
Some extra fun that might be worth incorporating into meteorite-map:

1. Generate a list or table of meteorites that can be sorted and filtered
2. Generate a set of landing point that are filterable
3. Generate directions (possibly via Google Maps)
4. Predict where possible meteorites might fall.

[Table of Contents](#table)

## Design

Setting out, we'll be doing the following:

* To avoid spamming API calls to the NASA databases and abusing our access, we should keep a database of all meteorites local and make a request every day (possibly updated once an hour depending).
* EmberJS is the frontend framework of choice we'll be using to drive the interaction and display.
	* According to their page, we'll need to change all controllers to components once components are routable.
* We'll be using Ruby on Rails as our web framework of choice, simply because Ember plays nice with it out of the box.
* SASS will be our preprocessor of choice and we'll be using SCSS files.

[Table of Contents](#table)

<a name="read" />
## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

[Table of Contents](#table)

