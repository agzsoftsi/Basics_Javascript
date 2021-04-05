const op = require('./script');

// eslint-disable-next-line no-undef
describe('Test SUM', () => {
  // eslint-disable-next-line no-undef
  test('SUM 1 + 2 = 3', () => {
    // eslint-disable-next-line no-undef
    expect(op.sum(1, 2)).toBe(3);
  });
});

// eslint-disable-next-line no-undef
describe('Test RES', () => {
  // eslint-disable-next-line no-undef
  test('RES 1 - 2 = -1', () => {
    // eslint-disable-next-line no-undef
    expect(op.res(1, 2)).toBe(-1);
  });
});

// eslint-disable-next-line no-undef
describe('Test MUL', () => {
  // eslint-disable-next-line no-undef
  test('MUL 1 * 2 = 2', () => {
    // eslint-disable-next-line no-undef
    expect(op.mul(1, 2)).toBe(2);
  });
});

// eslint-disable-next-line no-undef
describe('Test DIV', () => {
  // eslint-disable-next-line no-undef
  test('DIV 1 / 2 = 0.5', () => {
    // eslint-disable-next-line no-undef
    expect(op.div(1, 2)).toBe(0.5);
    // eslint-disable-next-line no-undef
    expect(op.div(1, 0)).toBe('Math Error');
  });
});
