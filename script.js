$(document).ready(function () {

    const quotes = [
        ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", "Albert Einstein"],
        ["So many books, so little time.", "Frank Zappa"],
        ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch"],
        ["A room without books is like a body without a soul.", "Marcus Tullius Cicero"],
        ["You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", "William W. Purkey"],
        ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", " Dr. Seuss"],
        ["You only live once, but if you do it right, once is enough.", "Mae West"]
    ]

    // get random element from quote
    let randomIndex = getrandomIndex()
    console.log('>>> random index', randomIndex)

    let currentText = quotes[randomIndex][0]
    let currentAuthor = quotes[randomIndex][1]

    $('#text').text(currentText)
    $('#author').text(currentAuthor)


    // listerner for click new quote
    $("#new-quote").click(function () {
        randomIndex = getrandomIndex()
        currentText = quotes[randomIndex][0]
        currentAuthor = quotes[randomIndex][1]

        $('#text').text(currentText)
        $('#author').text(currentAuthor)
    });

    function getrandomIndex(){
        return Math.floor(Math.random() * (quotes.length - 1));
    }


});