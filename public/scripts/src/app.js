const ALGOLIA_APP_ID = window.APP_GLOBALS.ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_ONLY_KEY = window.APP_GLOBALS.ALGOLIA_SEARCH_ONLY_KEY;
import algoliasearch from 'algoliasearch';
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
const index = client.initIndex('app_store');
import React from 'react';
import AutocompleteProducts from './components/AutocompleteProducts';

// index
//   .search('book')
//   .then((content) => {
//     console.log(content);
//   })
//   .catch(console.error);

const data = [
  {
    name: 'iBooks',
    image: 'http://a3.mzstatic.com/us/r1000/090/Purple/v4/20/bd/a2/20bda225-6144-cb99-46ef-d0fc15fc456a/mzl.okdjewbf.175x175-75.jpg',
    link: 'http://itunes.apple.com/us/app/ibooks/id364709193?mt=8',
    category: 'Books',
    rank: 1,
  },
  {
    name: 'Kindle – Read Books, Magazines &amp; More – Over 1 Million eBooks &amp; Newspapers',
    image: 'http://a4.mzstatic.com/us/r1000/080/Purple/v4/3f/6d/63/3f6d63e0-368d-c79d-c796-961db576d054/mza_1466682376824365277.175x175-75.jpg',
    link: 'http://itunes.apple.com/us/app/kindle-read-books-magazines/id302584613?mt=8',
    category: 'Books',
    rank: 2,
  },
  {
    name: 'NOOK by Barnes &amp; Noble',
    image: 'http://a3.mzstatic.com/us/r1000/097/Purple/v4/3b/aa/78/3baa78e0-f0a2-4587-9e0b-46782f37c595/mzl.qucshedp.175x175-75.jpg',
    link: 'http://itunes.apple.com/us/app/nook-by-barnes-noble/id373582546?mt=8',
    category: 'Books',
    rank: 3,
  },
  {
    name: 'Cisco AnyConnect',
    image: 'http://a2.mzstatic.com/us/r1000/061/Purple/v4/a9/c6/84/a9c68476-5215-1b16-450a-0e56920c4772/mzl.psgxtqrb.175x175-75.jpg',
    link: 'http://itunes.apple.com/us/app/cisco-anyconnect/id392790924?mt=8',
    category: 'Business',
    rank: 54,
  },
  {
    name: 'Foreclosure Search by USHUD.com',
    image: 'http://a5.mzstatic.com/us/r1000/062/Purple/v4/5f/2c/22/5f2c220c-fcd3-0bb2-16ff-567279754428/mzl.erleprfq.175x175-75.jpg',
    link: 'http://itunes.apple.com/us/app/foreclosure-search-by-ushud.com/id412910736?mt=8',
    category: 'Business',
    rank: 55,
  },
];

React.render(
  <AutocompleteProducts products={data} />,
  document.getElementsByClassName('js-app')[0]
);
