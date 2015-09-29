# Algolia React autocompletion

The entry point of the client app is `/public/scripts/src/app.js` which load the `AutocompleteProducts` component.

##### Tree view of the components architecture:
+ `AutocompleteProducts`
  + `SearchBar`
  + `ProductList`
    + `ProductCategoryRow`
      + `ProductRow`

##### Features:
+ List results by category
+ Select on click or press Enter
+ Arrows navigation
+ Hide on focus out

##### Possible improvements:
+ Proper error handling (only `console.error` for now)
+ Better design
+ Use of SAS or Less for the css

## Gulp File
Compile ES6 code from `/public/scripts/src/app.js` to ES5 code in `/public/scripts/dist/app.js`

## Linter
[ESLint](http://eslint.org/) with built in jsx support.

### Setup
```
npm install
```
add .env file to root directory with:
```
PORT=3000
ALGOLIA_APP_ID=[ask]
ALGOLIA_SEARCH_ONLY_KEY=[ask]
```
### Run
```
foreman start -f Procfile.dev
```
