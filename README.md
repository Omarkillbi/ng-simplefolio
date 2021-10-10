<h1 align="center">
  🔥 ng-simplefolio 🔥
</h1>

<h2 align="center">
  A clean, beautiful and responsive portfolio template for Developers!
</h2>

ng-simplefolio is the angular version of [Simplefolio](https://github.com/cobidev/simplefolio)(with few lightweight changes).
 
 ## Features
 
 ⚡️ Modern UI Design + Reveal Animations\
 ⚡️ One Page Layout\
 ⚡️ Fully Responsive\
 ⚡️ Valid HTML5 & CSS3\
 ⚡️ Well organized documentation
 
 To view a demo example, **[click here](https://dhiatr.github.io/ng-simplefolio/)**
 
---

See the instructions down below to know how to: 
* Personalise the Project to your needs
* Get a copy running on a local server
* Deploy on github pages

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com), [angular/cli](https://angular.io/guide/setup-local) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
angular/cli@8 or higher
```

## How To Use 🔧

From your command line, first clone ng-Simplefolio:

```bash
# Clone this repository
$ git clone https://github.com/cobidev/simplefolio

# Go into the repository
$ cd simplefolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ ng serve
```

Drop your picture and projects screenshots in the `/src/assets` folder

Fill in your info in `src/app/data.ts` file:
  * your personal info
  * images names (not the path only the name without the extension)
  * the projects infos
  * the gradiant colors

Once your server has started, go to this url `http://localhost:4200/` and you will see the website running on a Development Server:

---


## Deployment on Github Pages 📦

Run `npm run build` then wait for the project to build.

Push the project to github

Set github pages (source branch: main, root folder: docs)

Note: It might take time or extra commit for the page to appear.

## Authors

- **Trabelsi Dhia** - [https://github.com/DhiaTr](https://github.com/DhiaTr)

## Technologies/resources used

- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [Font Aweome](https://sass-lang.com/documentation) - Icons library


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
