/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget){
        this.movieTitle = title;
        this.movieDirector = director;
        this.movieBudget = +prompt('What is your movie budget?', 0);
    }
    wasExpensive() {
        if (this.movieBudget > 100000000) {
        return true;}
        else {
            return false
        }
    }
}
    const info = new Movie ();
    alert(info.wasExpensive())
       

