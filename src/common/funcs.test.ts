/* 
common funcs
tests:{
    checkEmptyValues should return true on object with all "truthy" values
    checkEmptyValues should return false on object with some "falsy" values
    checkEmptyValues should return true for an array of objects where all params "value" is "truthy"
    checkEmptyValues should return folse for an array of objects where some of params "value" is "falsy"

    findTitle should return correct title
    findTitle should return empty string if has no value in array
}
*/
import {checkEmptyValues, findTitle} from './funcs';

describe('common/funcs checkEmptyValues', () => {
  test('checkEmptyValues should return true on object with all "truthy" values', () => {
    const testObj = {
        val1: 'a',
        val2: 1,
        val3: true,
        val4: [],
        val5: {}
    };

    expect(checkEmptyValues(testObj)).toStrictEqual(true);
  });

  test('checkEmptyValues should return false on object with some "falsy" values', () => {
    const testObj = {
        val1: 'a',
        val2: null,
        val3: '',
        val4: 0
    };

    expect(checkEmptyValues(testObj)).toStrictEqual(false);
  });

  test('checkEmptyValues should return true for an array where all values is "truthy"', () => {
    const testArr = [
        1,
        'a',
        true,
        [],
        {}
    ];
        
    expect(checkEmptyValues(testArr)).toStrictEqual(true);
  });

  test('checkEmptyValues should return folse for an array where some of values is "falsy"', () => {
    const testArr = [
        1,
        '',
        false,
        0
    ];
    expect(checkEmptyValues(testArr)).toStrictEqual(false);
  });
});

describe('common/funcs findTitle', () => {
    const testArr = [
        {title: 'test1', value: '1'},
        {title: 'test2', value: '2'},
    ];

    test('findTitle should return correct title', () => {
      expect(findTitle(testArr, testArr[1].value)).toStrictEqual(testArr[1].title);
    });

    test('findTitle should return empty string if has no value in array', () => {
        expect(findTitle(testArr, '3')).toStrictEqual('');
    });
});
