let redDiv = document.getElementById("red")
let blueDiv = document.getElementById("blue")
let greenDiv = document.getElementById("green")
let yellowDiv = document.getElementById("yellow")
let pinkDiv = document.getElementById("pink")
let res = document.getElementById("btn")

let redCount = 0;
let blueCount = 0;
let greenCount = 0;
let yellowCount = 0;
let pinkCount = 0;





redDiv.onclick = () =>{
    redCount++
    blocks.innerHTML = '<h2>Red Pressed <h2>'
}

blueDiv.onclick = () =>{
    blueCount++
    blocks.innerHTML = '<h2>Blue Pressed <h2>'
}

greenDiv.onclick = () =>{
    greenCount++
    blocks.innerHTML = '<h2>Green Pressed <h2>'
}

yellowDiv.onclick = () =>{
    yellowCount++
    blocks.innerHTML = '<h2>Yellow Pressed <h2>'
}

pinkDiv.onclick = () =>{
    pinkCount++
    blocks.innerHTML = '<h2>Pink Pressed </h2>'
}

res.onclick = () =>{

    let ans = "Red : "+ redCount +" |   Blue : "+ blueCount +" |   Green : " +greenCount +" |   Yellow : "+ yellowCount +" |   Pink : "+ pinkCount

   result.innerHTML = `<h3>${ans}<h3>`
   
   redCount = 0;
   blueCount = 0;
   greenCount = 0;
   yellowCount = 0;
   pinkCount = 0;
}
