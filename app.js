import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDom.render(<TodoBox data={data} />, document.getElementById("app"));

// The above code is to use React at front-end. This code passes TodoBox
// from index.jsx, and data from server that are passed in the id of
// initial-data to the element that has the id of app.
