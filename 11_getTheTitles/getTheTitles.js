// return array of titles
// 
// const books = [{title: 'Book', author: 'Name'},{title: 'Book2', author: 'Name2'}]
// commented out code works, but map method works much better.
    



const getTheTitles = function(array) {
 /*   let titles = []
    for (const book of array){
        const booktitles = Object.getOwnPropertyDescriptors(book);
        titles.push(booktitles.title.value);
    }
    return titles;*/
    const map1 = array.map(books => books.title);
    return map1;
};
// Do not edit below this line
module.exports = getTheTitles;
