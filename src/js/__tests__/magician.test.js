import Magician from '../magicain';

test('get object Magician', () => {
  const description = new Magician('Man', 'Magician');
  const result = {
    name: 'Man',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(description).toEqual(result);
});
