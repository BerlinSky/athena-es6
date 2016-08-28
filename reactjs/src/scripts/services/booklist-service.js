import $ from 'jquery';

import axios from 'axios';
import querystring from 'querystring';

import store from '../store';
import { getBooklistAction, removeBookAction, searchBooklistAction } from '../actions/action-creator';

export function getBooklist() {

  return $.ajax({
      url: "http://localhost:3001/booklist",
      dataType: 'json'
    })
    .done (function(response) { 
      store.dispatch(getBooklistAction(response));
    })
    .fail (function() { 
      console.log("Error"); 
    });

}

export function searchBooklist(searchTitle) {

  const serverUrl = "http://localhost:3001";
  const requestUrl = serverUrl + "/master-booklist";

  let params = {
    title: searchTitle
  }

  if (searchTitle === "*") { 
    params = "";
  }

 return $.ajax({
    type: "GET",
    url: requestUrl,
    dataType: 'json',
    data: params
  })
  .done (function(response) { 
    store.dispatch(searchBooklistAction("title", response));
  })
  .fail (function() { 
    console.log("Error"); 
  });
}

export function deleteBook(id) {
  const serverUrl = "http://localhost:3001";
  const requestUrl = serverUrl + "/booklist";

  // return axios.delete(requestUrl + id)
  return axios.delete(`${requestUrl}/${id}`)
    .then(() => {
      store.dispatch(removeBookAction(id));
    });
}

export function addBook(title, author, description, imageUrl) {
  const serverUrl = "http://localhost:3001";
  const requestUrl = serverUrl + "/booklist";

  $.ajax({
      type: 'POST', 
      dataType: 'json', 
      url: requestUrl, 
      headers: {"X-HTTP-Method-Override": "PUT"}, 
      data: '{"title": "Dave"}' 
    })
    .done (function(response) { 
      // store.dispatch(searchBooklistAction("title", response));
    })
    .fail (function() { 
      console.log("Error"); 
    });

  // return axios({
  //     method: 'post',
  //     url: `${requestUrl}`,
  //     data: {
  //       title,
  //       author,
  //       description,
  //       imageUrl
  //     }
  //   })
  //   .then((response) => {
  //     // store.dispatch(removeBookAction(id));
  //     console.log('response', response);
  //   })
  //   .fail (function() { 
  //     console.log("Error"); 
  //   });
}

// $.ajax({
//     type: 'POST', // Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
//     dataType: 'json', // Set datatype - affects Accept header
//     url: "http://example.com/people/1", // A valid URL
//     headers: {"X-HTTP-Method-Override": "PUT"}, // X-HTTP-Method-Override set to PUT.
//     data: '{"name": "Dave"}' // Some data e.g. Valid JSON as a string
// });


