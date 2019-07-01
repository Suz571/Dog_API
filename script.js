$(document).ready(function(){
    
    function getDogPics(){
        fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert("Something went wrong, try again."));

   }


function displayResults(responseJson){
        console.log(responseJson);
        /*
        for (i =0; i< responseJson.message.length; i++){
            $('.results-img').replaceWith(`<img src="${responseJson.message}" class="results-img"></img>`);
            $('.results').removeClass('hidden');
        }
        */
       //responseJson === {status:" ", message: [""]}
       //output is 3 <img> displayed .results-img

       //for each image URL string within message create <img> html string using URL as src
       let imgHtmlStrings = responseJson.message.map(imgUrlString => { 
       return `<img src="${imgUrlString}" class="results-img"></img>`
       });
       //combine seperate <img> strings into one. 
       let combinedString = imgHtmlStrings.join('');
       //display combined <img> string created in results-img 
       $('.results-img').html(combinedString);
       $('.results').removeClass('hidden');
   }

function runForm(){
    $('form').submit(e => {
        e.preventDefault();
        getDogPics();
    });
}

runForm();






})