let playbutton = document.querySelector("#playbutton");
let opencontainer = document.querySelector("#open-container");
let btn = document.querySelectorAll(".btn");
let buttonaudio = new Audio("click.mp3")
let gamesound = new Audio("gameopening.mp3")
let wins = new Audio("winning.mp3")
let newgame = document.querySelector("#new");
let resetgame = document.querySelector("#reset");
let win = document.querySelector("#win");
let draw = new Audio("game-over-arcade-6435.mp3")
let popupp = document.querySelector("#pop-up");
let htp = document.querySelector("#how-to-playa");
let h = document.querySelector(".how-to-plays");
let closebtn = document.querySelector("#close");
let ct = document.querySelector("#playgame");
//------------------------- Patterns For Checking The Conditon Of winning ----------------------------//
const pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// ---------------------------------------------------------------------------------------------------//
// -----------------To add animation Class In button element ---------------------------------------------------------------//
playbutton.addEventListener("click", (e) => {
  e.preventDefault();
  gamesound.play();//on click play button start music
  opencontainer.classList.add("Moveup");
});
// ---------------------------------------------------------------------------------------------------//

let s = true;
let count=0;//To check No of button click's 
let flag=0;// to check Condition winning or draw 

//------------------------ Funtion to fill block with O or X ---------------------------------//

btn.forEach((element) => {
  element.addEventListener("click", (e) => {
    count++;//increment button click
    e.preventDefault();
    if (s) {
      element.innerText = "O";
      element.style.color = "#18cc27";
      s = false;
    } else {
      element.innerText = "X";
      element.style.color = "rgba(255, 0, 0, 0.863)";
      s = true;
    }
    buttonaudio.play();//button sound on click
    element.disabled = true; // to disable used button 
    winner();
    // console.log(count,flag);
    if(count===9&&flag===0){ //onlyif condition is true when count =9 and flag =0
      gamesound.pause();//pause game sound
      win.classList.add("winning");// add winning class
      drawmessage();//draw message function call
      draw.play();//draw sound play
    }

  });
});
// ---------------------------------------------------------------------------//
// ---------------------------Function to disable all button ------------------------------------------------//
const disablebtn = ()=>{
  btn.forEach((e)=>{
    e.disabled=true;
  })
}
// ---------------------------------------------------------------------------//
// ---------------------------Function to disable all button ------------------------------------------------//
const enablebtn = ()=>{
  btn.forEach((e)=>{
    e.disabled=false;
  })
}
// ---------------------------------------------------------------------------//
// --------------------------------- funtion of winnning ------------------------------------------//
const winner = () => {
  for (let p of pattern) {
    let p1 = btn[p[0]].innerText;//store inner text of 3 button in p1 p2 p3  
    let p2 = btn[p[1]].innerText;
    let p3 = btn[p[2]].innerText;
    if (p1 !== "" && p2 !== "" && p3 !== "") {//if p1 and p2 and  p3 contain text then it enter in this condition 
      if (p1 === p2 && p2 === p3) {//if p1 innertext and p2 innertext and p3 inner text are equal then it enters in this contion
        flag=1; // Flag for Checking The winner and draw condition
        if(p1==="O"){
          console.log(p1,"O");
          btn[p[0]].style.backgroundColor = "#2f8d46";
          btn[p[0]].style.color = "white";
          btn[p[1]].style.backgroundColor="#2f8d46";
          btn[p[1]].style.color = "white";
          btn[p[2]].style.backgroundColor="#2f8d46";
          btn[p[2]].style.color = "white";
        }else{
          btn[p[0]].style.backgroundColor="red";
          btn[p[0]].style.color = "white";
          btn[p[1]].style.backgroundColor="red";
          btn[p[1]].style.color = "white";
          btn[p[2]].style.backgroundColor="red";
          btn[p[2]].style.color = "white";
        }
        gamesound.pause();//gamesound pause after winning
        winmessage(p1);//function to call winning message
        win.classList.add("winning");
        wins.play();
        disablebtn();//After winning diable all button
        break;
      }else{
        flag=0;
      }
    }
  }
};
// ------------------------------------funtion of new game-------------------------------------------------------//
newgame.addEventListener("click",()=>{
  enablebtn();
  btn.forEach((ele)=>{
    ele.innerText="";
    ele.style.backgroundColor="rgba(255, 255, 255, 0.761)";
    count=0;
    s=true;
    gamesound.play();
  })
})
// -------------------------------funtion of reset game------------------------------------------------------------//
resetgame.addEventListener("click",()=>{
  enablebtn();
  btn.forEach((ele)=>{
    ele.innerText="";
    ele.style.backgroundColor="rgba(255, 255, 255, 0.761)";
    count=0;
    s=true;
    gamesound.play();
  })
})
// ------------------------------------ Function to remove that classes that are added -----------------------------------------------------//
win.addEventListener("click",()=>{
  win.classList.remove("winning");//remove class
  win.removeChild(win.children[1]);//remove h1 tag
  win.removeChild(win.children[0]);//remove image tag
})
// ----------------------------------------------------------------------------------------------------------------//
// ------------------------------------ Function to print win message -------------------------------------------------------------//
const winmessage = (p)=>{
  const h =document.createElement("h1");
  const i =document.createElement("img");
  const textnode =document.createTextNode(`Winner Is ${p}'s`);
  i.setAttribute("src","/dubu.gif");
  i.setAttribute("alt","winning gif");
  h.appendChild(textnode);
  win.appendChild(h);
  win.appendChild(i);
}
// ----------------------------------------------------------------------------------------------------------------//
// ------------------------------------ Function to print Draw message -------------------------------------------------------------//
const drawmessage = ()=>{
  const h =document.createElement("h1");
  const i =document.createElement("img");
  const textnode =document.createTextNode(`Draw  !!`);
  i.setAttribute("src","/tkthao219-bubududu.gif");
  i.setAttribute("alt","Draw gif");
  h.appendChild(textnode);
  win.appendChild(h);
  win.appendChild(i);
}
// ----------------------------------------------------------------------------------------------------------------//
// -------------------------------------- funtion to add class in pop up----------------------------------------------------------------//
htp.addEventListener("click",()=>{
  popupp.classList.add("active");
})
// ----------------------------------------------------------------------------------------------------------------//
// -------------------------------------Function to add class activehtp in how to play button ------------------------------------------//

htp.addEventListener("click",()=>{
  h.classList.add("activehtp");
})
// ----------------------------------------------------------------------------------------------------------------//
// --------------------------------------Function to remove added class's-----------------------------------------------------//
closebtn.addEventListener("click",()=>{
  h.classList.remove("activehtp");
  popupp.classList.remove("active");
})
// ----------------------------------------------------------------------------------------------------------------//