// ******************Grid Script*************************************

//Top row (A B C D ......)
let topRow = document.querySelector(".top-row");
//empty string
let str = "";
//for loop upto 26 character
for (let i = 0; i < 26; i++) {
    // add in str
    // String.fromCharCode(65 + i)  => convert number to character
    str += `<div class='col'>${String.fromCharCode(65 + i)}</div>`;
}
//add html
topRow.innerHTML = str;

//Left column ( 1 2 3 4 ....)
let leftCol = document.querySelector(".left-col");
//empty string
str = "";
//for loop to col counting
for (let i = 0; i < 100; i++) {
    // i+1 = number , where i = index no.
    str += `<div class='left-col_box'>${i + 1}</div>`
}
//add html
leftCol.innerHTML = str;


// grid of row * column
let grid = document.querySelector(".grid");
//empty string
str = "";
//2 d array
for (let i = 0; i < 100; i++) {
    str += `<div class="row">`
    for (let j = 0; j < 26; j++) {
        //add attribute (rid , cid) 
        str += `<div class='col' rid=${i} cid=${j} contenteditable="true"></div>`
    }
    str += "</div>";
}
//add html
grid.innerHTML = str;