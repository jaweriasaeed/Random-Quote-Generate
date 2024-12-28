const quotes = [
    { text: "Wafa ikhlas qurbani mohabbat ab in lafzon ka picha kuin karein hum.", author:"John Elia" },
    { text: "In Black Ink My Love May Still Shine Bright.", author: "William Shakespeare" },
    { text: "Haathon ki Lakeeron pe mat ja ae Galib,Naseeb unke bhi hotai hain jin kai hath nahi hotai.", author: "Mirza Galib" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you’ll always have more.", author: "Oprah Winfrey" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('generate-btn');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = `"${randomQuote.text}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
});