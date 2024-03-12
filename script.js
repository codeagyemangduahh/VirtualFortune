// Arrays of quotes
let quotes = {
  love: [
    { quote: "Love is not just a feeling; it's an action.", author: "Unknown" },
    { quote: "In the arithmetic of love, one plus one equals everything.", author: "Mignon McLaughlin" },
    { quote: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
    { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { quote: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown, Jr." }
  ],
  motivation: [
    { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" }
  ],
  life: [
    { quote: "Life is what happens when you're busy making other plans.", author: "Allen Sanders" },
    { quote: "In three words I can sum up everything I've learned about life: It goes on.", author: "Robert Frost" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
  ]
};




// Function to generate a random quote from a given category
function generateQuote(category) {
  let randomIndex = Math.floor(Math.random() * quotes[category].length);
  let selectedQuote = quotes[category][randomIndex];
  return `${selectedQuote.quote} - ${selectedQuote.author}`;
}

// Event listeners for each category button
document.getElementById('loveBtn').addEventListener('click', function () {
  displayQuote('love');
});

document.getElementById('motivationBtn').addEventListener('click', function () {
  displayQuote('motivation');
});

document.getElementById('lifeBtn').addEventListener('click', function () {
  displayQuote('life');
});

// Function to display the generated quote
function displayQuote(category) {
  let quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = generateQuote(category);
}



// Function to share the quote on Instagram
function shareOnInstagram(quote) {
  let instagramUrl = `https://www.instagram.com/?text=${encodeURIComponent(quote)}`;
  window.open(instagramUrl, '_blank');
}

// Function to share the quote on Twitter
function shareOnTwitter(quote) {
  let twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  window.open(twitterUrl, '_blank');
}

// Function to share the quote on Facebook
function shareOnFacebook(quote) {
  let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quote)}`;
  window.open(facebookUrl, '_blank');
}

// Event listeners for social share buttons
document.getElementById('instagramBtn').addEventListener('click', function () {
  let quote = document.getElementById('quoteDisplay').textContent;
  shareOnInstagram(quote);
});

document.getElementById('twitterBtn').addEventListener('click', function () {
  let quote = document.getElementById('quoteDisplay').textContent;
  shareOnTwitter(quote);
});

document.getElementById('facebookBtn').addEventListener('click', function () {
  let quote = document.getElementById('quoteDisplay').textContent;
  shareOnFacebook(quote);
});
