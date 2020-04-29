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
    img[i].addEventListener('click', function (e){
        e.target.src = e.target.src2;
    })
}


     