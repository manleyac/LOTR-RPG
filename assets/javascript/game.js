//Class Hero constructor
class Hero {
   constructor(health,strength,defense) {
      this.health = health;
      this.strength = strength;
      this.defense = defense;
   }
   attack(enemy) {
      enemy.health -= this.strength;
   }
   counter(enemy) {
      enemy.health -= this.defense;
   }
   
}
function selectPlayer(event) {
   $("#player").append(this);
   $(this).removeClass(".hero");
   $(".hero").off();
   selectEnemy();
}

function selectEnemy() {
   $("#message").text("Select an Enemy to face");
   $(".hero").on("click", function(event) {
      $("#enemy").append(this);
      $(".hero").off();
      addAttack();
   });
   
}

function addAttack() {
   var button = $("<button>Attack</button>");
   $("#player").append(button);
}

function main() {
   var Aragorn = new Hero(100,20,15);
   var Gandalf = new Hero(150,15,20);
   var Saruman = new Hero(85,25,20);
   $("#message").text("Select a Player by clicking any Character");
   $(".hero").on("click", selectPlayer);
}

main();



