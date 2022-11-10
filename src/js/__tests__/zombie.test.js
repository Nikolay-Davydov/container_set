import Zombie from '../zombie';

test('get object Zombie', () => {
  const description = new Zombie('Man', 'Zombie');
  const result = {
    name: 'Man',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  };
  expect(description).toEqual(result);
});
