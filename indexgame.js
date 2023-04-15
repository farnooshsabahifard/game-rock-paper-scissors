 const yourChoice =prompt ("rock paper scissors")
 console.log(yourChoice)
 const computerChoises = ["rock" ,"paper" ,"scissors"]
 const computerChoise = computerChoises[Math.round(Math.random()*2)]
 console.log(computerChoise)


 if(yourChoice) {
    if(yourChoice===computerChoise){
        console.log("tie")
    }else
        if(yourChoice==="rock" && computerChoise==="paper"){
            console.log("you lose")
        }
        if(yourChoice==="rock" && computerChoise==="scissors") {
            console.log("you win")
        }
        if(yourChoice==="paper" && computerChoise==="rock") {
            console.log("you win")
        }
        if(yourChoice==="paper" && computerChoise==="scissors") {
            console.log("you lose")
        }
        if(yourChoice==="scissors" && computerChoise==="rock") {
            console.log("you lose")
        }
        
        if(yourChoice==="scissors" && computerChoise==="paper") {
            console.log("you win")
        } 
    
 }else(console.log("you cheated"))
