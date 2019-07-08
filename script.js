$(document).ready(function(){

function getDogBreed(){
    let api2 = 'https://dog.ceo/api/breed';
    let userText = $('#breeds').val();
    let apiPath2 = api2+'/'+userText+'/images/random';
    console.log(userText);
    console.log(apiPath2);

    fetch(apiPath2)
    .then(status)
    .then(response => response.json())
    .then(responseJson =>
        displayBreedResults(responseJson))
    //.catch(error => alert("Breed not found, try again."));

}
function status(response){
    if(!response.ok){
        throw alert("Breed not found, try again.");
    }
    return response;
}

function displayBreedResults(responseJson){
     console.log(responseJson);
    let imgHtmlStrings = `<img src="${responseJson.message}" class= "results-img"></img>`;
    console.log(imgHtmlStrings);
    $('.imgContainer').html(imgHtmlStrings);
    $('.results').removeClass('hidden');
}


function runForm2(){
    $('form').submit(e=> {
        e.preventDefault();
        getDogBreed();
    });

}


runForm2();



})

/*
function displayBreedResults(responseJson){
    console.log(responseJson);
   let imgHtmlStrings = responseJson.message.map(imgUrlString => { 
   return `<img src="${imgUrlString}" class="results-img"></img>`
   });

   //combine seperate <img> strings into one. 
   let combinedString = imgHtmlStrings.join('');
   //display combined <img> string created in results-img 
   $('.imgContainer').html(combinedString);
   $('.results').removeClass('hidden');
}
*/

/*
function displayResults(responseJson){
    let responseArr = responseJson.message;

    document.getElementById('imgContainer').innerHTML = '<img src"'+ responseArr.join('" /><img src = "') + '" />';
}

*/