fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => {
    const quote = data.quote;
    const author = data.author;
    document.getElementById("footer-quote").innerHTML = quote;
    document.getElementById("footer-author").innerHTML = author;
});
getQuote();