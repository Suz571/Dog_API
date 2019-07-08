$(document).ready(function(){

    function getRandomDogPics(){
        let api = 'https://dog.ceo/api/breeds/image/random';
        let userNum = $('#num-dogs').val();    
        let apiPath = api + '/'+ userNum;
        console.log(userNum);
        console.log(apiPath);

        if (userNum > 50){
            throw alert('Too many Dogs! Please choose a number 1-50');
        }else{

        fetch(apiPath)
        .then(response => response.json())
        .then(responseJson =>
            displayNumResults(responseJson))
        .catch(error => alert("Something went wrong, try again."));
        };

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




function runForm(){
    $('form').submit(e => {
        e.preventDefault();
        getRandomDogPics();
        
    });
}

runForm();

})



/*
function displayResults(responseJson){
    let responseArr = responseJson.message;

    document.getElementById('imgContainer').innerHTML = '<img src"'+ responseArr.join('" /><img src = "') + '" />';
}

*/