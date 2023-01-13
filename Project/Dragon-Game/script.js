score = 0;
cross=true;
let audio = new Audio('music.mp3');
let audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000)
document.onkeydown = function (e) {                                                // keydown means any key press ie key press down 
    console.log("key code is ", e.keyCode)
    if (e.keyCode == 38) {                                                         // for upkey code is 38 
        dino = document.querySelector('.dino');                                    // selecting the dino class 
        dino.classList.add('animateDino');                                         // addding animate class to make that dino jump 
        setTimeout(() => {
            dino.classList.remove('animateDino')                                   // removing the class after the dino comes down  so that again if
                                                                                  // we trigger the keycode 38 ie upkey the dino again jumps up              
        }, 700)
    }


    if (e.keyCode == 39) {                                                                // for leftkey code is 39 
        dino = document.querySelector('.dino');                                           // for selecting the dino class  
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))   // we are using dino classs and getting the current left value of dino at moment  
        dino.style.left = (dinoX + 112 )+ "px";                                         // and moving it left we are adding 112 px to it ie as we press left key 
                                                                                       // to the current position of dino 112 px will get added                
    }



    if (e.keyCode == 37) {                                                                // for rightkey code is 37 
        dino = document.querySelector('.dino');                                           // for selecting the dino class 
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))    // we are using dino classs and getting the current left value of dino at moment   
        dino.style.left = (dinoX - 112) + "px";                                           // and for moving it right direction  we are subtracting 112px in it 

    }

}


// SetInterval works when we want to some work to work again in a particular interval or a time 
setInterval(() => {
    dino = document.querySelector('.dino');                                         // we are selecting the dino class
    gameOver = document.querySelector('.gameOver');                                 // we are selecting the gameOver  class 
    obstacle = document.querySelector('.obstacle');                                 // we are selecting the obstacle class

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));     // we are getting the current left value of dino at moment 
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));      // we are gettig the current top value of dino at moment

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));    // we are getting the current left value of obstacle at moment 
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));     // we are getting the current top value of obstacle at moment


    offsetX = Math.abs(dx - ox);                            // we are calculating the difference of the obstalce and dino from left, 
                                                            // so that we find a value which will we helpful to decide us the collision value   
                                                            
     offsetY = Math.abs(dy - oy);                           // same for value on y direction we are calculating the difference in y so that we 
                                                            // we use the min value for collision
    

    if(offsetX<73&&offsetY<52)                                  // here is the condition that we dino didnt maintain the min of 73 in x-direction
    {                                                           // and min of 52 in Y direction they both will collide 
        gameOver.innerHtml="Game Over,Try again!!"              // we use the gameover div and set it as game over      
        obstacle.classList.remove('obstacleAni');               // since its gameover so we are removing the obstalce animation,  
                                                                // so that it goes to it original place
            audiogo.play();                                     // as its game over so we play the game over music 
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },2000)
    }
    else if
        (offsetX <145 && cross){                                  // here is the condition if we do not for the collision 
            score+=1;
            updateScore(score);
            cross=false;
            setTimeout(()=>{
                cross=true;
            },1000);
            setTimeout(()=>{
                aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                newDur=aniDur - 0.1;
                obstacle.style.animationduration=newDur + 's';
                console.log("new Animation duration ",newDur)
            },500)
        }
},100)

function updateScore(score)
{
    console.log(score);
    scoreCount.innerHTML="Your Score :" + score;
}