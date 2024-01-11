/********************
    Quote Array
 ********************/

let quotes = [
    {
        quote: 'It aint my birthday but I got my name on the cake', source: 'Lil Wayne',citation: 'Stuntin Like My Daddy', year: 2006
    },   
    {
        quote: 'Reach for the stars so if you fall you land on the clouds', source: 'Kanye West',citation: 'Homecoming', year: 2007
    },   
    {
        quote: 'To appreciate the sun, you gotta know what rain is', source: 'J. Cole', citation: 'Im Coming Home', year: 2010
    },   
    {
        quote: 'Take advantage, do your best. Dont stress, you was granted everything inside this planet. Anything you imagine, you possess', source: 'Kendrick Lamar', citation: 'Blessed', year: 2012
    }, 
    {
        quote: 'Cause everybody dies, but not everybody lives', source: 'Drake', citation: 'Moment 4 Life', year: 2010
    },  
    {
        quote: 'If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people dont appreciate the moment until its passed', source: 'Kanye West', citation: 'Grammys Award Speech', year: 2005
    },
    {
        quote: 'Thank God I breathe', source: 'Travis Scott', citation: 'Thank God', year: 2023
    },  
];

/****************************
    getRandomQuote Function
 ****************************/

    function getRandomQuote () {
        let randomNum = Math.floor (Math.random()*quotes.length);
        let randomQuote = quotes[randomNum];
        return randomQuote;
    }

/****************************
    printQuote Function
 ****************************/

    function printQuote () {
        let randomQuote = getRandomQuote ();
        let quoteBox = document.getElementById("quote-box");
        let html = `<p class="quote"> ${randomQuote.quote}</p>
                    <p class="source">  ${randomQuote.source}
                    <span class="citation"> ${randomQuote.citation}</span>
                    `;
        if(randomQuote.year != 'unkown'){
            html += `<span class="year"> ${randomQuote.year}</span>`;
        }
        html += `</p>`;
        quoteBox.innerHTML = html;
        return document.body.style.backgroundColor=getColor();
    }

// Create random Color backgrounds on each click

    function getColor(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgbColor =`rgb(${r}, ${g}, ${b})`
        return (rgbColor);
    }

// Create automatic timer for every 5 secs

    let timer = setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);