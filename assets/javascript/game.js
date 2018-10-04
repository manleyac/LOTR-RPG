//Class Hero constructor
class Hero {
   constructor(name,health,strength,defense) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.defense = defense;
   }
   attack(enemy) {
      if(enemy.health - this.strength < 0) {
         enemy.health = 0;
      } else {
      enemy.health -= this.strength;
      }
   }
   counter(enemy) {
      if(enemy.health - this.defense < 0) {
         enemy.health = 0;
      } else {
         enemy.health -= this.defense;
      }
      enemy.strength += this.defense;
   }
}

function displayStats(heroes) {
   for(let hero of heroes) {
      $("#"+hero.name+" p").text("Health: "+hero.health+" Strength: "+hero.strength+" Defense: "+hero.defense);
   }
   
}
function selectPlayer(event) {
   $("#player").append(this);
   $(this).removeClass(".hero");
   $(this).addClass("border-success");
   $(".hero").off();
   addAttack();
   $("#message").text("Select an Enemy to face");
   selectEnemy();
}

function selectEnemy() {
   $(".hero").on("click", function(event) {
      $("#enemy").append(this);
      $(this).addClass("border-danger");
      $(".hero").off();
      $("#message").text("Click button to Attack");
   });
   
}

function addAttack() {
   var button = $("<button>Attack</button>");
   button.addClass("btn attack");
   $("#player").append(button);
   $(".attack").on("click", attackBttn);
}

function attackBttn(event) {
   var player =  eval($("#player > .card").attr("id"));
   var enemy = eval($("#enemy > .card").attr("id"));
   player.attack(enemy);
   enemy.counter(player);
   displayStats(heroes);
   checkWin(player,enemy);
   
}

function checkWin(player,enemy) {
   if(player.health <= 0) {
      $("#message").text("You Died! Click button to play again.");
      replay();
   }
   else if(enemy.health <= 0) {
      $("#message").text("Enemy Defeated! Choose your next opponent.");
      $(".characters").append($("#enemy > .card"));
      selectEnemy();
   }
   else if(heroes.splice(heroes.indexOf(player),1)[0].health ==0 && heroes[1].health == 0) {
      replay();
   }
}

function replay() {
   var replayBtn = $("<button>Play Again</button>");
   replayBtn.addClass("btn replay")
   $("#message").append(replayBtn);
   $(".replay").on("click", function() {
      $(".attack").remove();
      main();
   });

}

function main() {
   heroes = [];
   Aragorn = new Hero("Aragorn",100,20,15);
   Gandalf = new Hero("Gandalf",150,15,20);
   Saruman = new Hero("Saruman",85,25,20);
   heroes.push(Aragorn, Gandalf, Saruman);
   displayStats(heroes);
   $("#message").text("Select a Player by clicking any Character");
   $(".hero").on("click", selectPlayer);
}

main();



