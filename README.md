# npm-module-base
Base configuration for building and publishing npm modules. (If you see this on [npmjs.com](https://www.npmjs.com), do not use it as a dependency, but go to the GitHub repo and see if it is useful to you.)

## Usage
Fork repo and update the relevant contents of package.json and other files, to fit your module and environment. Or just copy-paste the stuff you want.

The current configuration expects source files to be placed in `./src` and the build is output in `./build`, with `./build/index.js` as the main entry point.

## Credits
The good stuff in here was taken from, or inspired by, [Trevor Miller's](https://trevordmiller.com/) course "Publish JavaScript packages on npm" on [egghead.io](https://egghead.io/courses/publish-javascript-packages-on-npm).
