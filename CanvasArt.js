const myCanvas = document.getElementById("my_canvas");
const ctx = myCanvas.getContext("2d");

// for refrence 
// ctx.fillRect(x,y,width,height);
// ctx.strokeRect(x,y,width,height);

const canvasWidth = myCanvas.width;
const canvasHeight = myCanvas.height;

function runW(gradient) {
    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.moveTo(7, 43);
    ctx.lineTo(31, 43);
    ctx.lineTo(56, 149);
    ctx.lineTo(57, 149);
    ctx.lineTo(90, 43);
    ctx.lineTo(110, 43);
    ctx.lineTo(141, 149);
    ctx.lineTo(170, 43);
    ctx.lineTo(193, 43);
    ctx.lineTo(151, 171);
    ctx.lineTo(130, 171);
    ctx.lineTo(99, 68);
    ctx.lineTo(98, 68);
    ctx.lineTo(66, 171);
    ctx.lineTo(44, 171);
    ctx.lineTo(7, 43);
    ctx.fill();
}

// 1️⃣------------------------ 1st Pattern ----------------------------1️⃣ // 
function firstPattern() {
    ctx.save();
    ctx.scale(0.9, 0.2);

    //for loop | making 165 runW's
    for (let i = 0; i < 165; i++) {
        runW("hsl(268deg,89%," + (((i/165)*100)+50) + "%)");
        ctx.translate(4, 10); 
    }
    ctx.restore();
}

// define the trigger1 function
function trigger1() {
  for (let i = 0; i < 3; i++) {
    ctx.save();
    ctx.translate(Math.random() * 300, Math.random() * 300);
    firstPattern();
    ctx.restore();
  }
}

// run the trigger1 function 10 times per second, using setInterval
let intervalId = setInterval(trigger1, 100);
trigger1();



// 2️⃣------------------------ 2nd Pattern ----------------------------2️⃣ // 


function secondPatternPrep() {
  // Reset the canvas before adding anything
  resetCanvas();
  ctx.translate(-130, -190);
  ctx.scale(3,5);
  secondPattern();
  ctx.translate(230, 290);

}

function secondPattern() {

  // Initialize the scale factor to 1.0
  let scaleFactor = 1;

  for (let i = 0; i < 129; i++) {
    // Scale the canvas along the y-axis by the current scale factor
    ctx.scale(1, scaleFactor);

    // Draw the pattern ... I dont know why $ subsitiutes the + in this scenario, old way ^^ didnt work... found it online, it worked, . I will ask about this next class. Apologize for the lack of explanation for this line here. The reason why I wrote 100, is beacuse the gradient looks better, Im assuming because the gradient is happening in the bigger part when the letter spawns.
    runW(`hsl(268deg,89%,${((i / 9) * 100) + 50}%)`);
    ctx.translate(4, 10);

    // multiplies value of scaleFactor by 0.9 & assigns result back to scaleFactor. (Updates the scale factor for the next iteration)
    scaleFactor *= 0.9;
  }
}


// 3️⃣------------------------ 3rd Pattern ----------------------------3️⃣ // 

function thirdPatternPrep() {
    // Reset the canvas before adding anything
    resetCanvas();
    ctx.scale(0.6, 0.6);
    thirdPattern();
    ctx.scale(0.5, 0.5);
    thirdPattern();




    
}

function thirdPattern() {
    

  // Translate the canvas to the center
  //ctx.translate(canvasWidth / 2, canvasHeight / 2);

  ctx.translate(550,550);
  //rotates the number Ticks
  for(let i=1;i<23;i++) 
  {
    ctx.save();
    ctx.rotate(i*(Math.PI/180)*(360/12));
    ctx.translate(250,0); 
    runW(`hsl(268deg,89%,${((i / 9) * 23) + 50}%)`);
    ctx.restore();
  }


}




    // Rotate the canvas by 90 degrees
    // ctx.rotate(Math.PI / -1);



//buttons Incoming 🔴

// ------------------------ Reset Button ---------------------------- // 


const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetCanvas);

// I made this a function so when I call the other patterns
function resetCanvas() {
    // clear the interval
    clearInterval(intervalId);
    // clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  };



//1️⃣ Button
// Get a reference to the button with the ID "refresh"
const refreshButton = document.getElementById('refresh');

// Add a click event listener to the refresh button
// When the button is clicked, the function inside the event listener will be called
refreshButton.addEventListener('click', function() {
  // Reload the current page
  location.reload();
});


//2️⃣ Button

const secondPatternButton = document.getElementById('secondPattern');
secondPatternButton.addEventListener('click', secondPatternPrep);


//3️⃣ Button

const thirdPatternButton = document.getElementById('thirdPattern');
thirdPatternButton.addEventListener('click', thirdPatternPrep);










// // // move to a new position before drawing the second pattern
// ctx.translate(Math.random() * 300, Math.random() * 300);

// // // draw the first pattern

// ctx.translate(0,19);
// tireTracks();

// ctx.translate(70,119);
// tireTracks();

// // move to a new position before drawing the second pattern
// ctx.translate(Math.random() * 300, 0);

// // draw the second pattern
// tireTracks();







// create a linear gradient that goes from black to white



// CHESS BUTTON ♜♞♝♛♚♝♞♜

//I had alot of help from chatgpt, I will explain each step as I go
// chessButton.addEventListener("click", function() {
    
//     let resetNum = 9;
//     let squareSize = 50;

//     for(let i = 0; i < resetNum; i++){
//         for(let j = 0; j < resetNum; j++){
//             if((i+j)%2 == 0) {
//                 ctx.fillStyle = "black";
//                 runWalt(); // Call runW() for black squares
//                 ctx.fillStyle = "black";
//                 runW();
//             } else {
//                 ctx.fillStyle = "white";
//                 runLalt(); // Call runL() for white squares
//                 ctx.fillStyle = "white";
//                 runL();
//             }
//             ctx.fillRect(j*squareSize, i*squareSize, squareSize, squareSize);
//         }
//     }
// });

// (i+j)%2 calculates the remainder when i+j is divided by 2. If the remainder is 0, it means that i+j is an even number (since even numbers have a remainder of 0 when divided by 2). If remainder is 1, that MEANS that i+j is an ODD number. THIS IS HOW WE ARE ABLE TO FIND OUT

//ok heres some explanation, I will defenitly need to clarify this once I understand more.

// i -> the row index 
// j -> the column index. 




// lets go with another idea

// const button2 = document.getElementById("2Button");

// button2.addEventListener("click", function() {
//   ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
  
//   let resetNum = 8;
//   for(let i=1;i<resetNum+1;i++)
//   { runL();
//     ctx.translate(0,50);
//   }

//   for(let i=1;i<resetNum+1;i++)
//   { runW();
//     ctx.translate(30,-50);
//   }

//   for(let i=1;i<resetNum+1;i++)
//   { runL();
//     ctx.translate(0,50);
//   }
// }

// );

  

// //RESET BUTTON 🔃🔃🔃🔃🔃🔃🔃





// const resetButton = document.getElementById("reset");

// resetButton.addEventListener("click", function() {
//      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// });





// trash 


// // 3️⃣------------------------ 3rd Pattern ----------------------------3️⃣ // 

// function thirdPatternPrep() {
//     // Reset the canvas before adding anything
//     resetCanvas();
//     ctx.scale(0.3, 0.9);


//     thirdPattern();
//     ctx.translate(-130, -155);
//     thirdPattern();
//     ctx.translate(-230, -255);
//     thirdPattern();
//     ctx.translate(-330, -355);
//     thirdPattern();

    
    

    
// }

// function thirdPattern() {
//     // Initialize the scale factor to 1.0
//     // let scaleFactor = 1;
//     // for (let i = 0; i < 10; i++) {
//     // // Scale the canvas along the y-axis by the current scale factor
//     // ctx.scale(1, scaleFactor);

//     // Translate the canvas to the center
//     ctx.translate(canvasWidth / 2, canvasHeight / 2);

//     // Rotate the canvas by 90 degrees
//     ctx.rotate(Math.PI / -1);

//     runW("white");

// }