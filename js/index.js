var Quotes =[
    {
        quote:"Its not what happens to you but how you react to it htat matters .",
        author:"-- Epictetus"
    },
    {
        quote:"Resentment is link drinking poison and waiting for your enemies to die .",
        author:" -- Nelson Mandela"
    },
    {
        quote:"The best revenge is massive success.",
        author:"-- Frank Sinanatra"
    },
    {
        quote:"Do not take life too seriously you will not get out alive",
        author:" -- Elbert Hubbard"
    },
    {
        quote:"You miss 100% of the shots you dont take",
        author:"-- Wayne Gretzy"
    },

]


function getquotes () {
   var newindex =Math.round(Math.random() * Quotes .length)
    console.log(newindex);
    
document.getElementById('Quote') .innerHTML = Quotes [newindex].quote;
document.getElementById('auther') .innerHTML = Quotes [newindex].author;

}
