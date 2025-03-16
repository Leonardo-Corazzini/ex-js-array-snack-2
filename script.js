const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];



// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella conso

// const longBooks = books.filter((b) => b.pages > 300)
// const longBooksTitles = longBooks.map((l) => l.title)
// longBooksTitles.forEach((b) => console.log(b))


// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

// const availableBooks = books.filter((b) => b.available)
// const discountedBooks = availableBooks.map((b) => {
//     const prezzo = parseFloat(b.price.replace('€', ''))
//     const prezzoScontato = prezzo - (prezzo * 0.20).toString() + '€'
//     return {
//         ...b,
//         price: prezzoScontato
//     }
// })
// const fullPricedBook = discountedBooks.find((b) => Number.isInteger(parseFloat(b.price.replace('€', ''))))
// console.log(fullPricedBook)


// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

// const authors = books.map((b) => b.author)

// const areAuthorsAdult = authors.every((b) => b.age >= 18)
// areAuthorsAdult ? authors.sort((a, b) => a.age - b.age) : authors.sort((a, b) => b.age - a.age)
// console.log(authors)

// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.
const ages = books.map((b) => b.author.age)
const sumAge = ages.reduce((acc, curr) => acc + curr)
console.log(sumAge / ages.length)

