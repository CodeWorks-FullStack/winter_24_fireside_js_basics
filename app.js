let hero = {
  name: 'Derance',
  img: '',
  health: 100,
  weapons: [{
    name: 'fist',
    damage: 1,
    isBroken: false,
    isEquipped: true
  }, {
    name: 'Dagger of Death',
    damage: 1000,
    isBroken: true,
    isEquipped: true
  },{
    name: 'Whip',
    damage: 452,
    isBroken: false,
    isEquipped: true
  }]
}

let enemies = [
  { name: 'goblin', img: '', health: 1 },
  { name: 'orc', img: '', health: 3 }
]

function attackHero() {
  hero.health -= 50


  // CLAMP
  if (hero.health < 0) {
    hero.health = 0
  }

  console.log(hero)
}

function attackEnemies() {

  let heroAttackDamage = calculateHeroAttack()
  console.log('how much damage is the hero doing?', heroAttackDamage)
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i]
    enemy.health -= heroAttackDamage
    if (enemy.health < 0) {
      enemy.health = 0
    }
  }
  checkForVictory()
}

function calculateHeroAttack() {
  // this is the total of the til prior to scanning items 🛒
  let runningTotal = 0
  for (let i = 0; i < hero.weapons.length; i++) {
    let weapon = hero.weapons[i]
    if (!weapon.isBroken && weapon.isEquipped) {
      runningTotal += weapon.damage
    }

    console.log('runningTotal', runningTotal)
  }

  return runningTotal // full stop 🛑
}




function checkForVictory() {

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i]
    if (enemy.health > 0) {
      return // FULL STOP 🛑
    }
  }
  console.log('you are winner')
}