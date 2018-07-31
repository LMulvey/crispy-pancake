var crispy = require('./index.js');

describe('pancake methods', () => {
  it('returns a string', () => {
    expect(typeof crispy.pancake()).toEqual('string');
  });
});

describe('waffle methods', () => {
  it('returns a string', () => {
    expect(typeof crispy.waffle()).toEqual('string');
  });
});

