/********************
    Caption Array
 ********************/

    let caption = [
        {
            caption: 'It ain\'t my birthday but I got my name on the cake'
        }, 
        {
            caption: 'Reach for the stars so if you fall you land on the clouds'
        },
        {
            caption: 'To appreciate the sun, you gotta know what rain is'
        },
        {
            caption: 'Take advantage, do your best. Don\'t stress, you were granted everything inside this planet. Anything you imagine, you possess'
        },
        {
            caption: 'Cause everybody dies, but not everybody lives'
        },
        {
            caption: 'If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don\'t appreciate the moment until it\'s passed'
        },
        {
            caption: 'Thank God I breathe'
        },
    ];
    
    /****************************
        getRandomCaption Function
     ****************************/
    
    function getRandomCaption() {
        let randomNum = Math.floor(Math.random() * caption.length);
        return caption[randomNum];
    }
    
    /****************************
        printCaption Function
     ****************************/
    
    function printCaption(captionId, backgroundColorId) {
        let randomCaption = getRandomCaption();
        let captionBox = document.getElementById(captionId);
        let html = `<p class="caption">${randomCaption.caption}</p>`;
    
        if (randomCaption.source) {
            html += `<p class="source">${randomCaption.source}`;
    
            if (randomCaption.citation) {
                html += `<span class="citation">${randomCaption.citation}</span>`;
            }
    
            if (randomCaption.year && randomCaption.year !== 'unknown') {
                html += `<span class="year">${randomCaption.year}</span>`;
            }
    
            html += '</p>';
        }
        document.body.style.backgroundColor = getColor();
    }
    
    // Create random Color backgrounds on each click
    
    function getColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        let rgbColor = `rgb(${r}, ${g}, ${b})`;
        return rgbColor;
    }
    
    // Create automatic timer for every 5 secs
    
    // Create automatic timer for every 5 secs
let timer = setInterval(function () {
    printCaption('your-caption-id', 'your-background-color-id');
}, 5000);

document.getElementById('load-caption').addEventListener("click", function () {
    printCaption('your-caption-id', 'your-background-color-id');
}, false);