class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = null;
  }

  set state(status) {
    if (status < 0) {
      this._state = 0;
    } else if (status > 100) {
      this._state = 100;
    } else {
      this._state = status;
    }
  }

  get state() { return this._state; }

  fix() {
    if (this.state === 0 || this.state === 100) { return; }
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) { this.books.push(book); }
    else { return; }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) { return book; }
    }
    return null;
  }

  giveBookByName(bookName) {
    let temp = [];
    let tempBook = null;
    for (let book of this.books) {
      if (book.name === bookName) {
        tempBook = book;
        continue;
      }
      temp.push(book);
    }
    this.books = temp;
    return tempBook;
  }
}