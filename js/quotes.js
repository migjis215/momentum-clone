const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you are busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen"
    },
    {
        quote: "The way I see it, if you wnat the rainbow, you gotta put up with the rain.",
        author: "Dolly Parton"
    },
    {
        quote: "You get what you give.",
        author: "Jennifer Lopez"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "That which does not kil us makes us stronger.",
        author: "Friedrich Nietzsche"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;