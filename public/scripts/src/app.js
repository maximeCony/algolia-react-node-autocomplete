import React from 'react';
import AutocompleteProducts from './components/AutocompleteProducts';

React.render(
  <AutocompleteProducts />,
  document.getElementsByClassName('js-app')[0]
);
document.getElementsByClassName('js-searchInput')[0].focus();
