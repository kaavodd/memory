
var deck = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
.map ( p =>[p,Math.random()])
.sort ((deck,b) => deck[1]-b[1])
.map(p => p[0])

console.log(deck);

var img =document.getElementsByTagName('img');
var endScore = document.getElementById('score');
var score =0;
var step =1;
var p1,p2;
var timer = null;


for(let i=0; i <img.length; i++){
img[i].src2 = 'img2/pic' + deck[i] + '.jpg';

}

document.addEventListener('click', function(e){

switch(step){
    case 1: /* premier clique*/ 
        if (e.target.tagName=='IMG'){
            e.target.src = e.target.src2;
            p1 = e.target;
            step = 2;
        }

        break;

    case 2: /*deuxième clique*/ 
        if (e.target.tagName=='IMG'){
            e.target.src = e.target.src2;
            p2 = e.target;
            step = 3;
        }
        timer = setTimeout(check, 900);
        break; 

    case 3:
        
        clearTimeout(timer);
        check();

        break;
}

}); 

function check(){
if (p1.src2==p2.src2){
    p1.replaceWith( document.createElement('span'))
    p2.replaceWith( document.createElement('span'))
    score +=10;
}

else{
    p2.src = p1.src ='img2/pic0.png';
    score = Math.max(0,score-2);
}

step =1;
endScore.textContent =score;
if (document.getElementsByTagName('img').length==0){
    endScore.textContent += "BIEN JOUÉ BG ! ";

}

}


 