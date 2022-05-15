let book1 = new Book("Crime and Punishment", "Fyodor Dostoevsky", 671, true)
let book2 = new Book("The Metamorphosis", "Franz Kafka", 201, true)
let book3 = new Book("War and Peace", "Leo Tolstoy", 1392, true)
let book4 = new Book("1984", "George Orwell", 298, true)
let book5 = new Book("Les Misérables", " Victor Hugo", 1463, false)
let book6 = new Book("Don Quixote", "Miguel de Cervantes Saavedra", 1023, false)

function Book (title, author, pages, read, info){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (read == true) {
        return String("'" + title + " by " + author + ", " + pages + " pages, " + "already read" + "'")
        } else if (read == false ){
        return String("'" + title + " by " + author + ", " + pages + " pages, " + "not read yet" + "'")
    }   
}
}    

console.log(book6.info())