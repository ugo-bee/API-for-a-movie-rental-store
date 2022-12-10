class MovieStore {
    constructor() {
    //initialize the movie array
        this.movies = [];
    }
    
    addMovie(movie) {
    // add a movie to the array
        this.movies.push(movie);
    }
    
    removeMovie(movie) {
    //remove a movie from movie array
    this.movies = this.movies.filter(m => m.title !== movie.title);
    }
    
    getMovies() {
    //show all available movies
    return this.movies;
    }
    
    rentMovie(movie) {
        //check if movie is available
        const foundMovie = this.movies.find(m => m.title === movie.title);
        // if movie avialable,set rented property to true and return the movie
        if (foundMovie) {
        foundMovie.rented = true;
        return foundMovie;
    } else {
        //if it isn't,throw an error
    console.log(`Sorry, ${movie.title} is not available for rent.`);
    }
    }
    
    returnMovie(movie) {
        //first check if movie is available 
        const foundMovie = this.movies.find(m => m.title === movie.title);
        if (foundMovie) {
        //if it is set rented property to false and return movie
        foundMovie.rented = false;
        return foundMovie;
    } else {
        //if it isn't,throw an error
    console.log(`Sorry, ${movie.title} is not a valid movie.`);
    }
    }
    }
    
    //instantiate an object
    const store = new MovieStore();
    
    //add movies to store
    store.addMovie({title: 'Godzilla', rented: false});
    store.addMovie({title: 'Titanic', rented: false});
    store.addMovie({title:'Wakanda forever',rented: false});
    store.addMovie({title:'Superman',rented: false});
    store.addMovie({title:'The Woman King',rented: false});
    store.addMovie({title:'John Wick',rented: false});
    
    //rent a movie
    store.rentMovie({title:'John Wick'});
    console.log(store.getMovies());  
    
    //return rented movie
    store.returnMovie({title:'John Wick'});
    console.log(store.getMovies());

    //remove a movie from store
    store.removeMovie({title: 'Titanic'});
    console.log(store.getMovies()); 
    
    
    
    