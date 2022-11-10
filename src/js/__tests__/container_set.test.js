import Team from '../container_set';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magicain';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('add a hero in the team', () => {
  const hero = new Daemon('Man', 'Daemon');
  const team = new Team();
  team.add(hero);
  expect(team.members.has(hero)).toBe(true);
});

test('error replay hero', () => {
  const hero = new Magician('Man', 'Magician');
  const team = new Team();
  team.add(hero);
  expect(() => {
    team.add(hero);
  }).toThrow('Such a character is already in the team');
});

test('two hero in team', () => {
  const ice = new Bowman('IceMan', 'Bowman');
  const fire = new Swordsman('FireMan', 'Swordsman');

  const team = new Team();
  team.addAll(ice, fire);
  expect(team.members.size).toBe(2);
});

test('addAll', () => {
  const ice = new Bowman('IceMan', 'Bowman');
  const fire = new Swordsman('FireMan', 'Swordsman');

  const team = new Team();
  team.addAll(ice, fire);
  expect(() => {
    team.addAll(ice, fire);
  });
  expect(team.members.size).toBe(2);
});

test('converting to an array', () => {
  const ice = new Undead('IceMan', 'Undead');
  const fire = new Zombie('FireMan', 'Zombie');

  const team = new Team();
  team.addAll(ice, fire);
  const received = team.toArray();
  const result = [
    {
      name: 'IceMan',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    },
    {
      name: 'FireMan',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defense: 10,
    },
  ];
  expect(received).toEqual(result);
});
