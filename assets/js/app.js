async function loadBooks() {

const container = document.getElementById("booksContainer");

if(!container) return;

const response = await fetch("data/books.json");

const books = await response.json();

container.innerHTML = "";

books.forEach(book=>{

container.innerHTML += `

<div class="book-card">

<img src="${book.cover}" alt="${book.title}">

<div class="book-info">

<div class="book-title">

${book.title}

</div>

<div class="book-author">

${book.author}

</div>

<a class="read-btn" href="reader.html?book=${book.id}">

قراءة الكتاب

</a>

</div>

</div>

`;

});

}

loadBooks();
