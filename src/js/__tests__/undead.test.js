import Undead from '../undead';

test('get object Undead', () => {
  const description = new Undead('Man', 'Undead');
  const result = {
    name: 'Man',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(description).toEqual(result);
});
