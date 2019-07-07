$(document).ready(function(){



    function getRandomDogPics(){
        let api = 'https://dog.ceo/api/breeds/image/random';
        let userNum = $('#num-dogs').val();
        //let userNum = document.getElementById('num-dogs');        
        let apiPath = api + '/'+ userNum;
        console.log(userNum);
        //console.log(userNum.value);
        console.log(apiPath);

        fetch(apiPath)
        .then(response => response.json())
        .then(responseJson =>
            displayNumResults(responseJson))
        .catch(error => alert("Something went wrong, try again."));

   }


function displayNumResults(responseJson){
        console.log(responseJson);
        
       //responseJson === {status:" ", message: [""]}
       //output is 3 <img> displayed .results-img

       //for each image URL string within message create <img> html string using URL as src
       let imgHtmlStrings = responseJson.message.map(imgUrlString => { 
       return `<img src="${imgUrlString}" class="results-img"></img>`
       });

       //combine seperate <img> strings into one. 
       let combinedString = imgHtmlStrings.join('');
       //display combined <img> string created in results-img 
       $('.imgContainer').html(combinedString);
       $('.results').removeClass('hidden');
   }

function getDogBreed(){
    let api2 = 'https://dog.ceo/api/breed';
    let userText = $('#breeds').val();
    //let userNum = document.getElementById('num-dogs');        
    let apiPath2 = api2 + '/'+ userText + '/images';
    console.log(userText);
    //console.log(userNum.value);
    console.log(apiPath2);

    fetch(apiPath2)
    .then(response => response.json())
    .then(responseJson =>
        displayBreedResults(responseJson))
    .catch(error => alert("Something went wrong, try again."));

}
function displayBreedResults(responseJson){
    console.log(responseJson);
   let imgHtmlStrings = responseJson.message.map(imgUrlString => { 
   return `<img src="${imgUrlString}" class="results-img"></img>`
   });

   //combine seperate <img> strings into one. 
   let combinedString = imgHtmlStrings.join('');
   //display combined <img> string created in results-img 
   $('.imgContainer2').html(combinedString);
   $('.results2').removeClass('hidden');
}



function runForm(){
    $('form').submit(e => {
        e.preventDefault();
        getRandomDogPics();
        
    });
}

function runForm2(){
    $('form').submit(e=> {
        e.preventDefault();
        getDogBreed();
    });

}

runForm();
runForm2();



})



/*
function displayResults(responseJson){
    let responseArr = responseJson.message;

    document.getElementById('imgContainer').innerHTML = '<img src"'+ responseArr.join('" /><img src = "') + '" />';
}

*/