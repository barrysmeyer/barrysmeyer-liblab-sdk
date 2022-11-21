import axios from 'axios';


const API_URL: string = 'https://the-one-api.dev/v2';
const API_Key: string = 'Bearer jsAowaZXtTw71VS4e06T';

// types used for filter, sort, pagination options
type paginationObj = {
    limit: number;
    page: number;
    offset: number;
}

type sortingObj = {
        columnName : string;
        direction: string;
}

type filterObj = {
    columnName: string;
    controlString : string;
    negateOp : boolean;
}
type options = {
    pagination: paginationObj;
    sorting : sortingObj;

    filtering : filterObj;

};



function createOptionsString (optionObj: options) {
    // convenience function to process request options and convert to API string parameters
    let retString = '';
    if (optionObj.hasOwnProperty('pagination')) {
        if (optionObj.pagination.hasOwnProperty('limit')) retString = retString + 'limit=' + optionObj.pagination.limit;
        if (optionObj.pagination.hasOwnProperty('page')) retString = retString + 'page=' + optionObj.pagination.page;
        if (optionObj.pagination.hasOwnProperty('offset')) retString = retString + 'offset=' + optionObj.pagination.offset;
        retString = retString + '&';
    }
    if (optionObj.hasOwnProperty('sorting')) {
        if (optionObj.sorting.hasOwnProperty('columnName')) retString = retString + 'sort=' + optionObj.sorting.columnName ;
        if (optionObj.sorting.hasOwnProperty('direction')) retString = retString + ':' + optionObj.sorting.direction;
        retString = retString + '&';
    }
    if (optionObj.hasOwnProperty('filtering')) {
        if (optionObj.filtering.hasOwnProperty('columnName')  && optionObj.filtering.hasOwnProperty('controlString')) {
            retString = retString + optionObj.filtering.columnName ;
            if (optionObj.filtering.negateOp) retString = retString + '!';
            retString = retString + '=';
            retString = retString + optionObj.filtering.controlString
        }
    }
    if (retString.length > 0) retString = '?' + retString
    
    return retString;
    
    
}

export function getBooks(optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
      console.log(optionObj)
       axios
      .get(`${API_URL}/book/` + createOptionsString(optionObj))
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getBook(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/book/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /book/{id}/chapter

export function getBookChapters(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/book/${id}/chapter`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /movie
export function getMovies(optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/movie/`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /movie/{id}
export function getMovie(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/movie/${id}`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}


// /movie/{id}/quote
export function getMovieQuotes(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/movie/${id}/quote`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}


// /character
export function getCharacters(optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/character/`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /character/{id}
export function getCharacter(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/character/${id}`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}


// /character/{id}/quote

export function getCharacterQuotes(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/character/${id}/quote`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /quote
export function getQuotes(optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/quote/`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /quote/{id}
export function getQuote(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/quote/${id}`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /chapter

export function getChapters(optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/chapter/`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

// /chapter/{id}
export function getChapter(id: string, optionObj: options): Promise<object> {
  return new Promise((resolve, reject) => {
       axios
      .get(`${API_URL}/chapter/${id}`, {
          headers: {
            'Authorization': API_Key
          }
        })
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}



export default { getBooks, getBook, getBookChapters, 
                 getMovies, getMovie, getMovieQuotes, 
                 getCharacters, getCharacter, getCharacterQuotes, 
                 getQuotes, getQuote,
                 getChapters, getChapter };