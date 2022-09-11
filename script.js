const dog_img = document.getElementById("background-image");



// A function that retrieves dog pics from an api and changes the background image of the page
function fetchDogPics() {
    fetch('https://dog.ceo/api/breeds/image/random').then((data) => {
        return data.json();
    }).then((completedata) => {
        dog_img.style.background = "linear-gradient(63.71deg, rgba(0, 0, 0, 0.9) 3.36%, rgba(0, 0, 0, 0) 86.41%), linear-gradient(243.59deg, #1A1F91 10.24%, rgba(36, 42, 192, 0) 100%), url(" + completedata.message + ")";
        dog_img.style.backgroundRepeat = "no-repeat";
        dog_img.style.backgroundSize = "cover";
    });
}


// A function that gets gender prediction according to a certain name and displays it on the webpage
function fetchGenderPredic(name_input) {
    fetch(`https://api.genderize.io?name=${name_input}`).then((data) => {
        return data.json();
    }).then((completedata) => {
        console.log(completedata.gender);
        document.getElementById("gender-pred").innerHTML = completedata.gender;
    });
}


//A function that gets age prediction according to a certain name and displays it on the webpage
function fetchAgePredic(name_input) {
    fetch(`https://api.agify.io/?name=${name_input}`).then((data) => {
        return data.json();
    }).then((completedata) => {
        document.getElementById("age-pred").innerHTML = completedata.age;
    });
}


//A function that gets 2 nationality predictions according to a certain name and displays them on the webpage
function fetchNationPredic(name_input) {
    fetch(`https://api.nationalize.io/?name=${name_input}`).then((data) => {
        return data.json();
    }).then((completedata) => {
        document.getElementById("nation-pred-1").innerHTML = JSON.stringify(completedata.country[0].country_id).replace(/[""]+/g,"");
        document.getElementById("nation-pred-2").innerHTML = JSON.stringify(completedata.country[1].country_id).replace(/[""]+/g,"");


    });
}
//-------------------------------------------- Main Function --------------------------------------------------------

// A function that gets the inputed name and displays : age, gender and nationalities predictions
function main() {
    document.getElementById("submit-btn").onclick = function () {
       var  name_to_fetch = document.getElementById("user_name").value; //to ask about this one
        console.log("NAMEEEEEE " + name_to_fetch);
        fetchGenderPredic(name_to_fetch);
        fetchAgePredic(name_to_fetch);
        fetchNationPredic(name_to_fetch);
    }
}




// ---------------------  Function calls ------------------------------------------------------------------------------
fetchDogPics();
main();