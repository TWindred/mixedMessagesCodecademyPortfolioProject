//Random number generator for selecting the start of the message.
function randomIntro(){
   let randomNum = Math.floor(Math.random() * (intros.length));
   return intros[randomNum];
   };

let intros = ["If life ever gets you down", "When things seem difficult", "If you're ever unsure", "When things appear to be too much to handle"]

//Random number generator for selecting the middle portion of the message.
function randomMiddle(){
   let randomNum = Math.floor(Math.random() * (middles.length));
   return middles[randomNum];
   };

let middles = ["just remember that: ", "think of this:", "take inspiration from this:", "pause to reflect on this:"]

//Random number generator that will select a number corresponding to a quote in the array.
function randomQuote(){
   let randomNum = Math.floor(Math.random() * (quotes.length));
   return quotes[randomNum];
};

//An array of 10 inspirational quotes to be selected at random.
let quotes = ["Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill.",
   "Believe you can and you're halfway there. - Theodore Roosevelt.",
   "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein.",
   "You are never too old to set another goal or to dream a new dream. - C.S Lewis.",
   "Try to be a rainbow in someone else's cloud. - Maya Angelou.",
   "You do not find the happy life. You make it. - Camilla Eyring Kimball.",
   "Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss.",
   "You must do the things you think you cannot do. - Eleanor Roosevelt.",
   "Be the change that you wish to see in the world. - Mahatma Gandhi.",
   "If I cannot do great things, I can do small things in a great way. - Martin Luther King Jr."]

   function randomMessage(){
      return randomIntro() + " " + randomMiddle() + " " + randomQuote() 
   };

   console.log(randomMessage())