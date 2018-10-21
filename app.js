/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a '1' or two times 6 consecutively, all his ROUND score gets lost. After that, it's the next player's turn.
- And also, if the player rolls '6' two times consecutively, all his TOTAL score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 200 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying ;


init();

var lastDice;





document.querySelector('.btn-roll').addEventListener('click' , function(){
   
    if(gamePlaying){

         //1. Random number
         
        var dice = Math.floor(Math.random() * 6) +1;

        // Display result
        var diceDOM =  document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';

        // Two times 6
        if(dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        // 3. Update the round score if the rolled was NOT 1
        }else if(dice !== 1){
            //Add Score
            roundScore += dice;
            document.querySelector('#current-' +activePlayer).textContent = roundScore;
        } else{
            //Next Player
            nextPlayer();
        };
        lastDice= dice;


      }
   

      });

      
      
      document.querySelector('.btn-hold').addEventListener('click' , function(){
            
        if(gamePlaying){
            //Add current Score to global score
            scores[activePlayer] += roundScore;
            lastDice = 0;

            //Update the UI
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
           
                //check if player won the game
            if(scores[activePlayer] >= 100){
                document.querySelector ('#name-' + activePlayer).textContent = 'Winner!' ;
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
                } else{
                     //Next Player
                nextPlayer();
                }
        }
        
            
            });

      function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
      }

        // New Game
      document.querySelector('.btn-new').addEventListener('click', init);

        function init(){
            scores = [0, 0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;

                document.querySelector('.dice').style.display = 'none';

                document.getElementById('score-0').textContent = '0';
                document.getElementById('score-1').textContent = '0';
                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';

                document.getElementById ('name-0').textContent = 'Player 1' ;
                document.getElementById ('name-1').textContent = 'Player 1' ;

                document.querySelector('.player-0-panel').classList.remove('winner');
                document.querySelector('.player-1-panel').classList.remove('winner')
                document.querySelector('.player-0-panel').classList.remove('active');;
                document.querySelector('.player-0-panel').classList.add('active');
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
                
        }








      //document.querySelector('#current-' +activePlayer).textContent = dice;

//var x = document.querySelector('.dice').style.display = 'none';
//console.log(x);