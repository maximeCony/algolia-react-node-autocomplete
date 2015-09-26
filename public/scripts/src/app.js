'use strict';

let ALGOLIA_APP_ID = window.APP_GLOBALS.ALGOLIA_APP_ID;
let ALGOLIA_SEARCH_ONLY_KEY = window.APP_GLOBALS.ALGOLIA_SEARCH_ONLY_KEY;
import algoliasearch from 'algoliasearch';
let client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
let index = client.initIndex('app_store');

index
  .search('book')
  .then((content) => {
    console.log(content);
  })
  .catch(console.error);
