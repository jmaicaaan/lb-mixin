'use strict';

module.exports = function(Book) {

  Book.disableRemoteMethod('create', true);

  Book.addBook = (title, author, published, callback) => {
    let data = {
      title,
      author,
      published
    }
    return Book.create(data);
  }

  Book.remoteMethod('addBook', {
    http: { path: '/', verb: 'post' },
    accepts: [
      { arg: 'title', type: 'string' },
      { arg: 'author', type: 'string' },
      { arg: 'published', type: 'date' }
    ],
    returns: { arg: 'data', root: true },
    description: 'Add new book'
  });
};
