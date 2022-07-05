let movie = {
    "apiKey": "c2b7f199",
    fetchMovie: function(name) {
        fetch("https://www.omdbapi.com/?t="
        + name
        + "&apikey="
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayMovie(data));
    },
    displayMovie: function(data) {
        const { Title, Year, Genre, Director, Plot, imdbRating, Poster } = data;
        document.querySelector(".title").innerText = Title;
        document.querySelector(".release").innerText = "Released in: " + Year;
        document.querySelector(".genre").innerText = "Genre: " + Genre;
        document.querySelector(".director").innerText = "Directed by: " + Director;
        document.querySelector(".poster").src = Poster
        document.querySelector(".rating").innerText = "IMDb Rating: " + imdbRating + " / 10";
        document.querySelector(".plot").innerText = Plot;

    },
    search: function () {
        this.fetchMovie(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    movie.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        movie.search();
    }
});

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});