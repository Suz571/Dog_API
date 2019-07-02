$(document).ready(function(){



    function getDogPics(){
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
            displayResults(responseJson))
        .catch(error => alert("Something went wrong, try again."));

   }


function displayResults(responseJson){
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
       //$('.results').removeClass('hidden');
   }



function runForm(){
    $('form').submit(e => {
        e.preventDefault();
        getDogPics();
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