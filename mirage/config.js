export default function() {

  this.namespace = 'api';
  
  this.get('/authors', () => {
    return {
      "data": [
        {
          "id": 1,
          "type": "authors",
          "attributes": {
            "photo": "https://randomuser.me/api/portraits/men/75.jpg",
            "first-name": "Edgar Alan",
            "last-name": "Poe",
            "nationality": "United State",
            "birth-date": "7/10/1849"
          },
          "relationships": {
            "books": {
              "self": "/authors/1/relationships/books",
              "related": "/authors/1/books"
            },
            "data": [{
              "type": "books",
              "id": "1" 
            },{
              "type": "books",
              "id": "2"
            }]
          }
        }, {
          "id": 2,
          "type": "authors",
          "attributes": {
            "photo": "https://randomuser.me/api/portraits/men/76.jpg",
            "first-name": "Howard Phillips",
            "last-name": "Lovecraft",
            "nationality": "United State",
            "birth-date": "20/10/1820"
          },
          "relationships": {
            "books": {
              "self": "/authors/1/relationships/books",
              "related": "/authors/1/books"
            },
            "data": [{
              "type": "books",
              "id": "1" 
            },{
              "type": "books",
              "id": "2"
            }]
          }
        }
      ]    
    };
  });

  this.get('/authors/:id', () => {
    return {
      "data": {
        "id": 1,
        "type": "authors",
        "attributes": {
          "photo": "https://randomuser.me/api/portraits/men/75.jpg",
          "first-name": "Edgar Alan",
          "last-name": "Poe",
          "nationality": "United State",
          "birth-date": "7/10/1849"
        },
        "relationships": {
          "books": {
            "self": "/authors/1/relationships/books",
            "related": "/authors/1/books"
          },
          "data": [{
            "type": "books",
            "id": "1" 
          },{
            "type": "books",
            "id": "2"
          }]
        }
      },
      "included": [{
        "type": "books",
        "id": "1",
        "attributes": {
          "name": "The black Cat",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/10"
        }
      }, {
        "type": "books",
        "id": "2",
        "attributes": {
          "name": "The black Cat 2",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/9"
        }
      }]
    };
  });

  this.get('/books/:id', () => {
    return {
      "data": {
        "type": "books",
        "id": "1",
        "attributes": {
          "name": "The black Cat 2",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/articles/1"
        },
        "relationships": {
          
        }
      }
    };   
  });

  this.get('/authors/:id/books', () => {
    return {
      "data":[ {
        "type": "books",
        "id": "1",
        "attributes": {
          "name": "The black Cat",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/1"
        },
        "relationships": {
          
        }
      }, {
        "type": "books",
        "id": "2",
        "attributes": {
          "name": "The black Cat 2",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/1"
        },
        "relationships": {
          
        }
      }]
    };   
  });

  this.get('/books', () => {
    return {
      "data":[ {
        "type": "books",
        "id": "1",
        "attributes": {
          "name": "The black Cat",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/1"
        },
        "relationships": {
          
        }
      }, {
        "type": "books",
        "id": "2",
        "attributes": {
          "name": "The black Cat 2",
          "gender": "Terror"
        },
        "links": {
          "self": "http://example.com/books/1"
        },
        "relationships": {
          
        }
      }]
    };   
  });

  this.del('/authors/:id', (request) => {
    return { "data": [
      { "type": "authors", "id": request.id }
    ]};
  });

  this.post('/authors/', (request) => {
    return { "data": [
      { "type": "authors", "id": 123 }
    ]};
  });

  this.patch('/authors/:id', (request) => {
    return { "data": [
      { "type": "authors", "id": 123 }
    ]};
  });
  
}

