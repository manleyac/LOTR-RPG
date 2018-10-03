//Class Hero constructor
class Hero {
   constructor(name,health,strength,defense) {
      this.name = name;
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

function displayStats(heroes) {
   for(let hero of heroes) {
      $("#"+hero.name+" p").text("Health: "+hero.health+" Strength: "+hero.strength);
   }
   
}
function selectPlayer(event) {
   $("#player").append(this);
   $(this).removeClass(".hero");
   $(this).addClass("border-success");
   $(".hero").off();
   selectEnemy();
}

function selectEnemy() {
   $("#message").text("Select an Enemy to face");
   $(".hero").on("click", function(event) {
      $("#enemy").append(this);
      $(this).addClass("border-danger");
      $(".hero").off();
      addAttack();
   });
   
}

function addAttack() {
   var button = $("<button>Attack</button>");
   button.addClass("btn");
   $("#player").append(button);
}

function main() {
   var heroes = [];
   var Aragorn = new Hero("Aragorn",100,20,15);
   var Gandalf = new Hero("Gandalf",150,15,20);
   var Saruman = new Hero("Saruman",85,25,20);
   heroes.push(Aragorn, Gandalf, Saruman);
   displayStats(heroes);
   $("#message").text("Select a Player by clicking any Character");
   $(".hero").on("click", selectPlayer);
}

main();



