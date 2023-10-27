








// function randomRgb(){
//     // Using math.round we select a random number between 0 and 255
//     let randNum = Math.round(0xffffff * Math.random());

//     // Using the ranges to select each portion of the number generated
//     let r = randNum >> 16;
//     let g = randNum >> 8 & 255;
//     let b = randNum & 255;

//     // Concatenate them into rgb(r,b,g);
//     rgb = 'rgb('+ r + ',' +  g +',' + b +')';
//     return rgb;
// }

// function createGrid(x){
//     // This finds the specified pixel size for the container div where the grid will be created
//     let divH = getComputedStyle(document.getElementById("container")).height;
//     let divW = getComputedStyle(document.getElementById("container")).width;
    
//     // This parses the data to an int value and stores it for later calculation
//     divHeight = parseInt(divH);
//     divWidth = parseInt(divW);

//     for (let rows = 0; rows < x; rows++){
//         for (let columns = 0; columns < x; columns++){
//             $("#container").append("<div class='grid'></div>");
//         }
//     }

//     // Calculates size based on provided container size and row/column count.
//     $(".grid").width(divHeight/x);
//     $(".grid").height(divWidth/x);
// };

// function clearGrid(){
//     $(".grid").css("background-color", "white");
// };

// function refreshGrid(){
//     // Prompt for size from 0 to 100
//     let gridSize = prompt("New Grid Size (0 to 100): ");
//     // If size is valid, clear current grid and create new
//     if (0 < gridSize && gridSize <= 100){
//         clearGrid();
//         createGrid(gridSize);
//     }
//     else {
//         // If not valid, prompt until valid
//         refreshGrid();
//     }
// };

// // Function to render grid on initial page load - 16x16 Grid
// $(document).ready(function() {
//     createGrid(16);

//     // On mouseover, the grid tile becomes black
//     $(".grid").mouseover(function() {
//         // When clicking the random button it toggles between black/random color
//         if (!rbgToggle == 1){
//             $(this).css("background-color", "black");
//         }
//         else {
//             randColor = randomRgb();
//             $(this).css("background-color", randColor);
//         }
//     });

//     // New grid size and mouseover functionality persists in new grid.
//     $(".newGrid").click(function() {
//         refreshGrid();

//         $(".grid").mouseover(function() {
//         if (!rbgToggle == 1){
//             $(this).css("background-color", "black");
//         }
//         else {
//             randColor = randomRgb();
//             $(this).css("background-color", randColor);
//         }
//         });
//     });
// });
