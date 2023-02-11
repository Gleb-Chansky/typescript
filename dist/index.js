class Book {
  constructor(name, genre, pageAmount) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}
const books = [
  new Book("Harry Potter", "fantasy", 900),
  new Book("Warcraft", "andventure", 600),
  new Book("Game of thrones", "drama", 400),
  new Book("Adventure", "fantasy", 300),
];
const findBook = (genre, page, multipleRecommends = true) => {
  const findAlgorithm = (book) => {
    return book.genre === genre && book.pageAmount <= page;
  };
  if (multipleRecommends) {
    return books.filter(findAlgorithm);
  } else {
    return books.find(findAlgorithm);
  }
};
console.log(findBook("fantasy", 900));
