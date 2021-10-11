//random number generator taking an input number and multiplying it by a random number between 1 and 10.
const randomNumGen = (num) => {
   let randomNum = Math.floor(Math.random() * num);
   return randomNum
};

