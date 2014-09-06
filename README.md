# Octobox

Octobox is a web app that helps people collect images, bookmarks and notes in a simple and visually pleasing way. It requires a Dropbox account and uses it almost exclusively for storage.

The app is live and functional! You can create an account at [http://app.useoctobox.com](http://app.useoctobox.com).

To read about current areas of focus and contributing to the project head over to the [Assembly page](https://assembly.com/octobox).

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).
* Redis - Download and Install [Redis](http://redis.io). Redis is used for session storage. Make sure `redis-server /usr/local/etc/redis.conf` is running on the port 6379.

### Tools Prerequisites
* NPM - Node.js package manager; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```
* Grunt - Download and Install [Grunt](http://gruntjs.com).

```
$ npm install -g grunt-cli
```
* SASS - [SASS](http://sass-lang.com) is a CSS extension language used for styling Octobox frontend. You'll need the latest version of the SASS Ruby gem in order to build the stylesheets.

```
$ sudo gem install sass
```


## Running the project
After downloading the repo and installing these dependencies you'll need to run:

```
$ npm install 
$ bower install
```
to download all the necessary project packages. After this step is complete, run `grunt` from the project directory to fire up a server that will run both the frontend and backend. You can then visit `http://localhost:3000/` to access Octobox. 

## Troubleshooting
During install some of you may encounter some issues.

Most issues can be solved by one of the following tips, but if are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```
$ npm update -g npm
```

* Updating Grunt:
```
$ npm update -g grunt-cli
```

* Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```
$ npm cache clean
```

* Bower Clean Cache:
```
$ bower cache clean
```


## Tracking progress and issues

A more complete and more carefully managed list of TODOs and bugs is available on the Assembly [project page](http://www.assembly.com/octobox/). Please always update your progress there and use GitHub to hold more technical discussions regarding specific issues, Pull Requests and setup. 

## Contributing

Have a look at existing projects and tasks or start a discussion about what you’d like to be working on - you can do that on the [Assembly](http://www.assembly.com/octobox/) project page. 

1. [Create a Task](https://assembly.com/octobox/wips/new) that describes what you want to do. This gives others the opportunity to help and provide feedback.
2. Fork the repo
3. Create your feature branch `git checkout -b my-new-feature`
4. Commit your changes `git commit -am 'Add some feature’`
5. Push to the branch `git push origin my-new-feature`
6. Create new Pull Request which references the Task number.

We will accept patches that:

* Don’t break existing functionality.
* Are well documented and commented.
* Don’t add unnecessary dependencies - on the frontend don't use Bootstrap or jQuery, but use Angular jQlite, Lodash, Bourbon and Neat instead. 
* Are written in strict Javascript only (no Coffeescript, sorry)

## More Information
Visit Octobox project page on [Assembly](http://www.assembly.com/octobox/).

## License
[The AGPL v3 License](http://www.gnu.org/licenses/agpl-3.0.html)


