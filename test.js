const lotrapi = require('lotr_sdk');

let options = {
    pagination : {
        limit: 3
    },
    sorting : {
        columnName: 'name',
        direction: 'asc'
    }
};

lotrapi.getBooks(options).then((booklist) => {
  console.log(booklist.docs);
  lotrapi.getBook(booklist.docs[0]["_id"]).then((book) => {
      console.log(book);
    });
});



lotrapi.getMovies().then((Movielist) => {
  console.log(Movielist.docs[0]);

});

lotrapi.getCharacters().then((Characterlist) => {
  console.log(Characterlist.docs[0]);

});

lotrapi.getChapters().then((ChapterList) => {
  console.log(ChapterList.docs[0]);
  lotrapi.getChapter(ChapterList.docs[0]['_id']).then((chapter) => {
      console.log(chapter);
    
    });

});

lotrapi.getQuotes().then((QuoteList) => {
  console.log(QuoteList.docs[0]);

});


