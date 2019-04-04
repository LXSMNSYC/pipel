/* eslint-disable no-undef */
import assert from 'assert';

import pipel from '../src/index';

describe('pipel', () => {
  it('should create a function given a value.', () => {
    assert(typeof pipel() === 'function');
    assert(typeof pipel(true) === 'function');
    assert(typeof pipel(1) === 'function');
    assert(typeof pipel('Hello') === 'function');
    assert(typeof pipel([]) === 'function');
    assert(typeof pipel({}) === 'function');
    assert(typeof pipel(null) === 'function');
  });
  it('should return the expected result.', () => {
    const result = pipel(1)(
      x => `Next: ${x}`,
      x => x.length,
    );

    const expected = 'Next: 1'.length;

    assert(result === expected);
  });
  it('should return ignore any non-functions.', () => {
    const result = pipel(1)(
      x => `Next: ${x}`,
      true,
      1,
      [],
      {},
      null,
      x => x.length,
    );

    const expected = 'Next: 1'.length;

    assert(result === expected);
  });
});
