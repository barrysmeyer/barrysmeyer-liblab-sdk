"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChapter = exports.getChapters = exports.getQuote = exports.getQuotes = exports.getCharacterQuotes = exports.getCharacter = exports.getCharacters = exports.getMovieQuotes = exports.getMovie = exports.getMovies = exports.getBookChapters = exports.getBook = exports.getBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://the-one-api.dev/v2';
const API_Key = 'Bearer jsAowaZXtTw71VS4e06T';
function createOptionsString(optionObj) {
    // convenience function to process request options and convert to API string parameters
    let retString = '';
    if (optionObj.hasOwnProperty('pagination')) {
        if (optionObj.pagination.hasOwnProperty('limit'))
            retString = retString + 'limit=' + optionObj.pagination.limit;
        if (optionObj.pagination.hasOwnProperty('page'))
            retString = retString + 'page=' + optionObj.pagination.page;
        if (optionObj.pagination.hasOwnProperty('offset'))
            retString = retString + 'offset=' + optionObj.pagination.offset;
        retString = retString + '&';
    }
    if (optionObj.hasOwnProperty('sorting')) {
        if (optionObj.sorting.hasOwnProperty('columnName'))
            retString = retString + 'sort=' + optionObj.sorting.columnName;
        if (optionObj.sorting.hasOwnProperty('direction'))
            retString = retString + ':' + optionObj.sorting.direction;
        retString = retString + '&';
    }
    if (optionObj.hasOwnProperty('filtering')) {
        if (optionObj.filtering.hasOwnProperty('columnName') && optionObj.filtering.hasOwnProperty('controlString')) {
            retString = retString + optionObj.filtering.columnName;
            if (optionObj.filtering.negateOp)
                retString = retString + '!';
            retString = retString + '=';
            retString = retString + optionObj.filtering.controlString;
        }
    }
    if (retString.length > 0)
        retString = '?' + retString;
    return retString;
}
function getBooks(optionObj) {
    return new Promise((resolve, reject) => {
        console.log(optionObj);
        axios_1.default
            .get(`${API_URL}/book/` + createOptionsString(optionObj))
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBooks = getBooks;
function getBook(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/book/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBook = getBook;
// /book/{id}/chapter
function getBookChapters(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/book/${id}/chapter`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getBookChapters = getBookChapters;
// /movie
function getMovies(optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getMovies = getMovies;
// /movie/{id}
function getMovie(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getMovie = getMovie;
// /movie/{id}/quote
function getMovieQuotes(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getMovieQuotes = getMovieQuotes;
// /character
function getCharacters(optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getCharacters = getCharacters;
// /character/{id}
function getCharacter(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getCharacter = getCharacter;
// /character/{id}/quote
function getCharacterQuotes(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getCharacterQuotes = getCharacterQuotes;
// /quote
function getQuotes(optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getQuotes = getQuotes;
// /quote/{id}
function getQuote(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getQuote = getQuote;
// /chapter
function getChapters(optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getChapters = getChapters;
// /chapter/{id}
function getChapter(id, optionObj) {
    return new Promise((resolve, reject) => {
        axios_1.default
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
exports.getChapter = getChapter;
exports.default = { getBooks, getBook, getBookChapters,
    getMovies, getMovie, getMovieQuotes,
    getCharacters, getCharacter, getCharacterQuotes,
    getQuotes, getQuote,
    getChapters, getChapter };
