// conditionals - creating a magic 8ball

let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
                                                            
let userQuestion = 'are you ok?';

console.log(`the user asked ${userQuestion}`);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'zero';
    break;
    
  case 1:
    eightBall = 'one';
    break;
    
    case 2:
    eightBall = 'two';
    break;
    
    case 3:
    eightBall = 'three';
    break;
    
    case 4:
    eightBall = 'four';
    break;
    
    case 5:
    eightBall = 'five';
    break;
    
    case 6:
    eightBall = 'six';
    break;
    
    case 7:
    eightBall = 'seven';
    break;
    
      case 8:
    eightBall = 'eight';
    break;
    
}

console.log(eightBall);
