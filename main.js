$(function () {
    
    const vm = new Vue({
        el: '#app',
        data: {
            searching: false,
            showing: 'books',
            books: [],
            book: null,
            author: []
        },
        methods: {
            loadBooks() {
                this.searching = true
                
                this.$http.get('https://openlibrary.org/isbn/123')
                    .then(resp => {
                        this.books = resp.body
                        this.searching = false
                    })
            },
            checkOutBooks(book) {
                this.book = book
                this.author = 'author'
                this.loadAuthor()
            },
            loadAuthor() {
                this.author = []
                this.book.author.forEach(authors => {
                    this.$http.get(author)
                        .then(resp => {
                            this.author.push(resp.body)
                        })
                })
            }  
        }
    })
})