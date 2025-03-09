
    let playerpoint=0;
    let computerpoint=0;

function compute(userchoice){
    let choice = ["Rock","Paper","Scissor"];
    let random = (Math.floor(Math.random()*3));
    let computerchoice = choice[random];
    let result="";

    if (userchoice === computerchoice) {
        result= "It's a Tie";
        document.getElementsByClassName("result")[0].innerText=`${result}`;
        document.getElementsByClassName("result")[0].style.color="blue"
        document.getElementsByClassName("Player-display")[0].innerText = `Player: ${userchoice}`;
        document.getElementsByClassName("Computer-display")[0].innerText = `Computer: ${computerchoice}`;
        return;
    }else{
        switch (userchoice) {
            case "Rock":
                result=computerchoice === "Scissor" ? "You Win" : "You Lose";
                break;
        
            case "Paper":
                result=computerchoice === "Rock" ? "You Win" : "You Lose";
                break;
            case "Scissor":
                result=computerchoice === "Paper" ? "You Win" : "You Lose";
                break;
            default:
                 result = "Invalid choice!";
        }
    
        if(result=="You Win"){
            document.getElementsByClassName("result")[0].innerText=`${result}`;
            document.getElementsByClassName("result")[0].style.color="green";
            playerpoint+=1
        }else{
            document.getElementsByClassName("result")[0].innerText=`${result}`;
            document.getElementsByClassName("result")[0].style.color="red";
            computerpoint+=1;
        }

    }
    

    document.getElementsByClassName("Player-display")[0].innerText=`Player:${userchoice}`
    document.getElementsByClassName("Computer-display")[0].innerText=`Computer:${computerchoice}`;


    
    document.getElementsByClassName("points")[0].innerText=`Player:${playerpoint}\nComputer:${computerpoint}`
    
 
}







// document.getElementsByClassName("choice")[0].addEventListener();