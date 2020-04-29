/*var pic =document.getElementById('test');

pic.addEventListener('click', function(e){
pic.src ="./img/pic7";
})*/

var deck = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
    .map ( p =>[p,Math.random()])
    .sort ((deck,b) => deck[1]-b[1])
    .map(p => p[0])

console.log(deck);

var img =document.getElementsByTagName('img');

for(let i=0; i <img.length; i++){
    img[i].src2 = 'img/pic' + deck[i] + '.jpg';
    
    }

var step =1;
var p1,p2;

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

            break;

        case 3:
            if (p1.src2==p2.src2){
                p1.replaceWith( document.createElement('span'))
                p2.replaceWith( document.createElement('span'))
            }

            else{
                p2.src = p1.src ='img/pic0.jpg';
            }

            step =1;
            break;
    }
})


     