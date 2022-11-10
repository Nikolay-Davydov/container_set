export default class Character {
  constructor(name, type) {
    const typeHeroes = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    this.type = type;
    this.name = name;
    this.level = 1;
    this.health = 100;

    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
    }
    if (!typeHeroes.includes(type)) {
      throw new Error('Персонаж не существует');
    }
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defense *= 1.2;
  }

  damage(points) {
    if (this.health < 0) {
      return;
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
