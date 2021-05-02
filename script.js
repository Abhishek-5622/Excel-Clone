// Store Reference
let addbtnContainer = document.querySelector(".add-sheet_container");
let sheetList = document.querySelector(".sheets-list");
let firstSheet = document.querySelector(".sheet");
let Allcells = document.querySelectorAll(".grid .col");
let addressBar = document.querySelector(".address-box");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let centerBtn = document.querySelector(".center");
let fontBtn = document.querySelector(".font-size");
let boldBt = document.querySelector(".bold");
let italicBt = document.querySelector(".Italic");
let underlineBt = document.querySelector(".underline");
let fontFamilyBt =  document.querySelector(".font-family");
let textColorBt =  document.querySelector(".color");
let bgColorBt =  document.querySelector(".bg-color");

//sheet manage script
firstSheet.addEventListener("click", handleActiveSheet)

//click on plus button to add more sheet
addbtnContainer.addEventListener("click", function () {
    //array of all sheets.
    let sheetsArr = document.querySelectorAll(".sheet");
    //get last sheet
    let lastSheetElem = sheetsArr[sheetsArr.length - 1];
    //get last sheet idx in string
    let idx = lastSheetElem.getAttribute("sheetIdx");
    //Convert string to number
    idx = Number(idx);
    //create div for new sheet
    let NewSheet = document.createElement("div");
    //Add attribute(class , sheetIdx) to div 
    NewSheet.setAttribute("class", "sheet");
    NewSheet.setAttribute("sheetIdx", idx + 1);
    //set sheet with sheet no(idx+1) in div
    NewSheet.innerText = `Sheet ${idx + 1}`;
    //add new sheet to sheetlist
    sheetList.appendChild(NewSheet);
    //click on new sheet
    NewSheet.addEventListener("click", handleActiveSheet)
})

function handleActiveSheet(e) {
    //e.currentTarget => New Sheet ( jis par addEventListener call ho)
    let MySheet = e.currentTarget;
    //array of sheets
    let sheetsArr = document.querySelectorAll(".sheet");
    //remove active-sheet class from all sheets.
    sheetsArr.forEach(function (sheet) {
        sheet.classList.remove("active-sheet");
    })
    // MySheet.classList[0]=> sheet
    // MySheet.classList[1]=>undefined
    // !undefined = true
    //add active sheet class
    if (!MySheet.classList[1]) {
        MySheet.classList.add("active-sheet");
    }
}

//when we click on any cell, it address is shown on address bar
for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("click", function handleCell() {
        //get attribute
        let rid = Number(Allcells[i].getAttribute("rid"));
        let cid = Number(Allcells[i].getAttribute("cid"));
        //evalute attribute value to get row address and column address.
        let rowAdd = rid + 1;
        let colAdd = String.fromCharCode(cid + 65);
        //cell address
        let address = colAdd + rowAdd;
        // set address in address bar
        addressBar.value = address;
    });
}

//when we click on left alignment
leftBtn.addEventListener("click", function () {
    //get address
    let address = addressBar.value;
    //get row id and column id 
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to left alignment 
    cell.style.textAlign = "left"
})

//when we click on left alignment
rightBtn.addEventListener("click", function () {
    //get address
    let address = addressBar.value;
    //get row id and column id 
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to right alignment
    cell.style.textAlign = "right"
})

//when we click on center alignment
centerBtn.addEventListener("click", function () {
    //get address
    let address = addressBar.value;
    //get row id and column id 
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to center alignment
    cell.style.textAlign = "center"
})

//when we click on Bold
boldBt.addEventListener("click",function()
{
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to bold(fontweigth)
    cell.style.fontWeight = "900";
})

//when we click on Italic
italicBt.addEventListener("click",function()
{
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to italic
    cell.style.fontStyle = "italic";
})

underlineBt.addEventListener("click",function()
{
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to underline
    cell.style.textDecoration = "underline overline";
})

//when we select font size then font size will change of that cell.
fontBtn.addEventListener("change", function () {
    //get font size value
    let fontSize = fontBtn.value;
    //get address
    let address = addressBar.value;
    //get row id and column id 
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to font size
    cell.style.fontSize = fontSize+"px";
})

//when we select font family then font family will change of that cell.
fontFamilyBt.addEventListener("change", function () {
    //get font size family
    let fontFamilyName = fontFamilyBt.value;
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
     //set styleing to font Family
    cell.style.fontFamily = fontFamilyName;
})

//when we select color then font color will change of that cell.
textColorBt.addEventListener("change", function () {
    //get font color
    let textColor = textColorBt.value;
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to font color
    cell.style.color = textColor;
})

//when we select background color then background color will change of that cell.
bgColorBt.addEventListener("change", function () {
    //get background color
    let bgColor = bgColorBt.value;
    //get address
    let address = addressBar.value;
    //get row id and column id
    let { rid, cid } = getRIdCIdfromAddress(address);
    // find desired cell
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //set styleing to background color
    cell.style.backgroundColor = bgColor;
})


//function that is used to find row id and column id from address.
function getRIdCIdfromAddress(adress) {
    //address => A1
    // adress.charCodeAt(0) => to get character at 0 index in address
    let cellColAdr = adress.charCodeAt(0);
    //complete address without index 0 element
    let cellrowAdr = adress.slice(1);
    //convert char to number
    let cid = cellColAdr - 65;
    //convert number to index
    let rid = Number(cellrowAdr) - 1;
    // return statement
    return { cid, rid };

}

//By default active cell is A1
Allcells[0].click();