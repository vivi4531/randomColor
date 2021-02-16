"use strict"; 

window.addEventListener("DOMContentLoaded", randomBackground);
console.log("Der er hul igennem 👏🏻"); 

//Random Color - Designing with functions exercise

//sets the background to a random color
function randomBackground(){

    //Calls randomColor to get an rgb object
    randomColor(); 

    //Calls rgbToCSS with that object
    rgbToCSS(); 

    //Uses the return value as value for body.style.backgroundColor, thus setting the background color to a random value.
    document.querySelector.body.style.backgroundColor

    let randomcolor = (document.querySelector("body").style.backgroundColor = target.value);
}

const rgbObject = randomColor();
console.log(rgbObject); 

//returns a random rgb color object
function randomColor(){

    //creates three values for r, g, b  
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   let randomcolor = {r, g, b};

    // console.log(r); 
    // console.log(g); 
    // console.log(b); 

    //return color values as an object
    return randomcolor; 
}


//converts a rgb color object into a CSS color string
function rgbToCSS( randomcolor ){

    //receives rgb object 

    //convert object to string (toString)
    randomcolor.toString();
    console.log(`${randomcolor}`);
    
    //return string
    return randomcolor; 

}


//displays color
function displayRandomColor(){

}