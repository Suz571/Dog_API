$(document).ready(function(){
    
    function getDogPics(){
        fetch('https://dog.ceo/api/breeds/image/random/3');
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert("Something went wrong, try again."));

   }


function displayResults(responseJson){
        console.log(responseJson);
        $('.results-img').replaceWith(<img src="${responseJson.message}" class="results-img">
        </img>)
        $('.results').show();
   }

function runForm(){
    $('form').submit(e => {
        e.preventDefault();
        getDogPics();
    });
}

runForm();






})