const ALGOLIA_APP_ID = window.APP_GLOBALS.ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_ONLY_KEY = window.APP_GLOBALS.ALGOLIA_SEARCH_ONLY_KEY;
import algoliasearch from 'algoliasearch';
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
const index = client.initIndex('app_store');
import React from 'react';

index
  .search('book')
  .then((content) => {
    console.log(content);
  })
  .catch(console.error);

React.render(
  <h1>Hello, React!</h1>,
  document.getElementsByClassName('js-app')[0]
);
