import Bowman from '../bowman';

test('get object Bowman', () => {
  const description = new Bowman('Man', 'Bowman');
  const result = {
    name: 'Man',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  };
  expect(description).toEqual(result);
});
