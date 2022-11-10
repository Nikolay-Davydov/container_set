import Character from '../character';

test('get object Character', () => {
  const description = new Character('Man', 'Bowman');
  const result = {
    name: 'Man',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(description).toEqual(result);
});

test('get object Character no type', () => {
  const description = () => new Character('Man', 'Surfer');
  expect(description).toThrow('Персонаж не существует');
});

test('error name min', () => {
  const description = () => new Character('1', 'Bowman');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('error name max', () => {
  const description = () => new Character('SuperGiperPower');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('levelUp', () => {
  const description = new Character('Man', 'Bowman');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'Man',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 12,
    defense: 12,
  };
  expect(description).toEqual(result);
});

test('levelUp health < 1', () => {
  const description = new Character('Man', 'Bowman');
  description.health = 0;
  const error = () => description.levelUp();

  expect(error).toThrow(
    'Нельзя повысить левел умершего',
  );
});

test('damage', () => {
  const description = new Character('Man', 'Bowman');
  description.damage(50);

  expect(description.health).toBe(50 * (1 - description.defence / 100));
});

test('damage health < 0', () => {
  const description = new Character('Man', 'Bowman');
  description.health = -50;
  const { health } = description;
  description.damage(50);
  expect(description.health).toBe(health);
});
