let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const display = document.getElementById("msg");
// function for generation of random choice of computer 
const gencompchoice = () =>{
    const options =["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw = ()=>{
    console.log("game draw");
    display.innerText = "Game draw!"
    display.style.backgroundColor = "#7d7dbb"
    
    
}

const showwinner = (userwin , userchoice , compchoice) =>{
    if (userwin == true) {
        user_score++;
        userscore.innerText = user_score;
        console.log("you win! ");
        display.innerText = `you win! ${userchoice} beats ${compchoice}`
        display.style.backgroundColor = "#61d661"
    }
    else {
        comp_score++;
        compscore.innerText = comp_score;
        console.log("you lose");
        display.innerText = `you lose!  your ${compchoice} beats your ${userchoice}`
        display.style.backgroundColor = "red"
    }
}

// main function
const playgame = (userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = " , compchoice)


    if (compchoice === userchoice) {
        draw();
    }
    else{
        let userwin = true;
        if (userchoice === "rock") {
            // then comp choice cant be rock otherwisw it will be draw so comp cjoice can be either paper or scissors
            userwin = compchoice === "paper" ?false: true;
        }else if (userchoice === "paper") {
            userwin = compchoice === "rock"?true: false;
        } else if (userchoice === "scissor") {
            userwin = compchoice === "rock"?false : true;
        }
        showwinner(userwin , userchoice , compchoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked " , userchoice)
        playgame(userchoice);
    })
})



// Math.random() is a function which will generate a random choice from 0 to 1 
// and it only works for number so store some choices in an array and generate it through help of an array
// so if we want to generate number from 0 to 2 (as  in an array there are inc=dexes )
// then multiply it by 3 
// if we multiply it by n , then it will generate a random number from 0 to n-1
// and these are decimal numbers so to generate whole number use Math.floor(Math.random()*3)




