const dog_img=document.getElementById("background-image");


// A function that retrieves dog pics from an api and changes the background image of the page
function fetchDogPics() {
    fetch('https://dog.ceo/api/breeds/image/random').then((data) => {
        return data.json();
    }).then((completedata) => {
        dog_img.style.background="linear-gradient(63.71deg, rgba(0, 0, 0, 0.9) 3.36%, rgba(0, 0, 0, 0) 86.41%), linear-gradient(243.59deg, #1A1F91 10.24%, rgba(36, 42, 192, 0) 100%), url("+completedata.message+")";
        dog_img.style.backgroundRepeat="no-repeat";
        dog_img.style.backgroundSize="cover";
    });
}




// ---------------------  Functions call --------------------------------------
fetchDogPics();