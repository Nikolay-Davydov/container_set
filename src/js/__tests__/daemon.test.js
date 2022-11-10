import Daemon from '../daemon';

test('get object Daemon', () => {
  const description = new Daemon('Man', 'Daemon');
  const result = {
    name: 'Man',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(description).toEqual(result);
});
