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