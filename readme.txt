Welcome to The Lord Of the Rings SDK

This SDK will allow you to access information about the books and movies written by J.R.R. Tolkien stored in a remote repository

Installation
------------------
The SDK has not been published.  To install you will need to download or use git pull to copy the SDK files to your local machine.
You can then add the SDK to your project by using 'npm install <path to the sdk directory>'.

The SDK can then be used by your node application by require, as shown in the included file test.js.

const lotrapi = require('lotr_sdk');

---------------------------------------------------------------------------------------------------------------------------------
Instance Methods

getBooks([options]) - returns a list of books

getBook(id,[options]) - returns entry for a single book given the book ID 

getBookChapters(id,[options]) - returns a list of chapters for a single book given the book ID 

getMovies([options]) - returns a list of the movies made from the books 

getMovie(id,[options]) - returns entry for a single movie given the movie ID 

getMovieQuotes(id,[options]) - returns a list of quotes for a movie given the movie ID

getCharacters([options]) - returns a list of characters from The Lord of the Rings

getCharacter(id,[options]) - returns entry for a character given the character ID 

getCharacterQuotes(id,[options]) - returns a list of quotes for a character given the character ID

getQuotes([options]) - return a list of quotes

getQuote(id,[options]) - return entry for a quote given the quote ID

getChapters([options]) - return a list of chapters 

getChapter(id,[options]) - return entry for a specific chapter

------------------------------

Options

The options object allows for three different types of control, sorting, pagination, and filtering, and has an embedded object for each 
which accept control values.  

OptionObj {
    sorting {
        columnName : string,
        direction : 'asc'|'desc'
    }
    pagination {
        limit : number,
        page: number,
        offset: number
    }
    filtering {
        columnName: string;
        controlString : string;
        negateOp : boolean;
    }
}

Sorting will sort responses against a specified column and in ascending or descending order.
Pagination will allow specification of page size, page number, and offset.
Filtering allows for application of control strings such as a specific string to match against, a comma separated list to match agaist, or 
a regular expression to match against, as well as a negation operation.
