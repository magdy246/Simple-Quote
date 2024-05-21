function addQuote() {
  var allQuotes = [
    /*======= Frist Author ========= */
    `<p>
    “Be yourself; everyone else is already taken.”
    </p>
    <p>
    ― Oscar Wilde
    </p>
    <img src="image/images (1).jpeg.jpg" alt="images-1">`,
    /*======= Second Author ========= */
    `<p>
    “You only live once, but if you do it right, once is enough.”
    </p>
    <p>
    ― Mae West
    </p>
    <img src="image/images (2).jpeg.jpg" alt="images-3">`,
    /*======= Third Author ========= */
    `<p>
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    </p>
    <p>
    ― Albert Einstein
    </p>
    <img src="image/images (3).jpeg.jpg" alt="images-3">`,
    /*======= Forth Author ========= */
    `<p>
    “A room without books is like a body without a soul.”
    </p>
    <p>
    ― Marcus Tullius Cicero
    </p>
    <img src="image/images (4).jpeg.jpg" alt="images-3">`,
    /*======= Fifth Author ========= */
    `<p>
    “If you tell the truth, you don't have to remember anything.”
    </p>
    <p>
    ― Mark Twain
    </p>
    <img src="image/images (5).jpeg.jpg" alt="images-3">`,
    /*======= Sixth Author ========= */
    `<p>
    “Live as if you were to die tomorrow. Learn as if you were to live forever.”
    </p>
    <p>
    ― Mahatma Gandhi
    </p>
    <img src="image/images (6).jpeg.jpg" alt="images-3">`,
    /*======= Seventh Author ========= */
    `<p>
    “A friend is someone who knows all about you and still loves you.”
    </p>
    <p>
    ― Elbert Hubbard
    </p>
    <img src="image/images (7).jpeg.jpg" alt="images-3">`,
    /*======= Eighth Author ========= */
    `<p>
    “I have not failed. I've just found 10,000 ways that won't work.”
    </p>
    <p>
    ― Thomas A. Edison
    </p>
    <img src="image/images (8).jpeg.jpg" alt="images-3">`,
  ];

  var quoteNumber = Math.floor(Math.random() * allQuotes.length);
  var Quout = allQuotes[quoteNumber];

  document.getElementById("newQuote").innerHTML = Quout;
}
