
var score = [0,0];
var turn = 0;
var score_holder = 0;
var pre_dice;
var pre_dice1;
var win = 100;
var game = true;

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6)+1;
    var dice1 = Math.floor(Math.random()*6)+1;
    if(game){
    score_holder +=dice+dice1;
    let dice_src = 'dice-'+dice+'.png';
    let dice1_src = 'dice-'+dice1+'.png';
    document.getElementById('score-'+turn).innerHTML = score_holder;
    document.querySelector('.dice').src =  dice_src;
    document.querySelector('.dice-1').src =  dice1_src;
    if(dice === 6 && pre_dice===6 || dice1 === 6 && pre_dice1 === 6 ){
        turn = turn==0?1:0;
        if(turn===1){
            score_holder = 0;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }
        else{
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        } 
    }
    else if(dice==1 ||dice1==1){
        score_holder =0;
        turn = turn==0?1:0;
        if(turn===1){
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
        }
        else{
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }
    }
    pre_dice = dice;
    pre_dice1 = dice;
    }
});

document.querySelector('.btn-win').addEventListener('click',function(){
    win = prompt("Enter the winning score:",100);
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(game){
    score[turn] += score_holder;
    document.getElementById('current-'+turn).innerHTML = score[turn];
    document.getElementById('score-'+turn).innerHTML = 0;
    if(score[turn]>=Number(win)){
        document.getElementById('name-'+turn).textContent = "Winner!!!";
        game = false;
    }
    score_holder = 0;
    turn = turn==0?1:0;
    if(turn===1){
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }
    else{
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
}
});


document.querySelector('.btn-new').addEventListener('click',function(){
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    score_holder = 0;
    turn = 0;
    score = [0,0];
    game = true;
    var player1Name = prompt("Enter Player 1 Name");
    var player2Name = prompt("Enetr Player 2 Name");
    document.getElementById('name-0').textContent = player1Name;
    document.getElementById('name-1').textContent = player2Name;
});
