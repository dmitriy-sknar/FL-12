class Fighter {

    constructor(arg) {
        this.name = arg.name;
        this.damage = arg.damage;
        this.hp = arg.hp;
        this.strength = arg.strength;
        this.agility = arg.agility;
        this.wins = 0;
        this.losses = 0;
        this.oneHundred = 100;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getStrength() {
        return this.strength;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.hp;
    }

    attack(defender) {
        let probability = defender.getAgility() + defender.getStrength();
        let random = Math.floor(Math.random() * this.oneHundred);

        if (random > probability) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.name} makes ${this.damage} to ${defender.getName()}`);
        } else {
            console.log(`${this.name} attack missed`);
        }
    }

    dealDamage(damage) {
        this.hp -= damage;
    }

    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
    }

    heal(hp) {
        this.hp += hp;
        if (this.hp > this.oneHundred) {
            this.hp = this.oneHundred;
        }
        console.log(`${this.name} was healed with: ${hp} hp`);
    }

    addWin() {
        this.wins += 1;
    }

    addLoss() {
        this.losses += 1;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        return console.log(`${fighter1.getName()} is dead and can't fight`);
    }

    if (fighter2.getHealth() === 0) {
        return console.log(`${fighter2.getName()} is dead and can't fight`);
    }

    let canFight = true;

    while (canFight) {

        let random = Math.random();
        let halfAChance = 0.5;
        let isFighter1AttacksFirst = random <= halfAChance;

        if (isFighter1AttacksFirst) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() < 1) {
                canFight = false;
                console.log(`${fighter1.getName()} has won!`);
                fighter1.addWin();
                fighter2.addLoss();
                break;
            }
        } else {
            fighter2.attack(fighter1);
            if (fighter1.getHealth() < 1) {
                canFight = false;
                console.log(`${fighter2.getName()} has won!`);
                fighter2.addWin();
                fighter1.addLoss();
                break;
            }
        }
    }
}

const myFighter1 = new Fighter({ name: 'BadGuy', damage: 25, hp: 100, strength: 20, agility: 25 });
const myFighter2 = new Fighter({ name: 'GoodGuy', damage: 20, hp: 100, strength: 25, agility: 20 });

battle(myFighter1, myFighter2);
myFighter1.heal(1);
battle(myFighter1, myFighter2);
myFighter2.heal(1);
battle(myFighter1, myFighter2);
myFighter1.heal(1);
battle(myFighter1, myFighter2);
myFighter2.heal(1);

myFighter1.logCombatHistory();
myFighter2.logCombatHistory();