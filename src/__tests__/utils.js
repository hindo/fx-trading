import { composeHeader, composeValue, floatToInteger, randomizer } from '../utils'

describe('Utils', () => {
  describe('composeHeader', () => {
    it('should work as expected', () => {
      const inputData = [{
        prefix: 'Test',
        pair: '1 2'
      }, {
        prefix: 'Test',
        pair: 'jeden dwa'
      }, {
        prefix: 'Test',
        pair: 'ttt'
      }, {
        prefix: 'Test',
        pair: ''
      }, {
        prefix: '',
        pair: '1 3 4'
      }]

      const expectedData = ['Test 1', 'Test jeden', 'Test ttt', 'Test', '1']

      inputData.forEach((input, idx) => {
        expect(composeHeader(input.pair, input.prefix)).toBe(expectedData[idx]);
      })
    })
  })

  describe('composeValue', () => {
    it('should work as expected', () => {
      const inputData = [0.2, 12.01, 0.30303, 111.3303, 1000.22, 10000000]

      const expectedData = [
        { first: '0.20', second: '00', third: '0' },
        { first: '12.0', second: '10', third: '0' },
        { first: '0.30', second: '30', third: '3' },
        { first: '111.', second: '33', third: '0' },
        { first: '1000', second: '.2', third: '2' },
        { first: '1000', second: '00', third: '0' },
      ]

      inputData.forEach((input, idx) => {
        expect(composeValue(input)).toMatchObject(expectedData[idx]);
      })
    })
  })

  describe('floatToInteger', () => {
    it('should work as expected', () => {
      const inputData = [0.2, 12.01, 0.30303, 111.3303, 1000.22, 10000000]

      const expectedData = [{
        integerValue: 2,
        exponent: 1
      }, {
        integerValue: 1201,
        exponent: 2
      }, {
        integerValue: 30303,
        exponent: 5
      }, {
        integerValue: 1113303
      }, {
        integerValue: 100022
      }, {
        integerValue: 10000000,
        exponent: 0
      }]

      inputData.forEach((input, idx) => {
        expect(floatToInteger(input)).toMatchObject(expectedData[idx]);
      })
    })
  })

  describe('randomizer', () => {
    it('should work as expected', () => {
      const inputData = [0.2, 12.01, 0.30303, 111.3303, 1000.22, 10000000]
      // const inputData = [0.2, 12.01, 0.30303, 111.3303, 1000.22, 10000000]

      const expectedData = [{
        top: 0.22,
        bottom: 0.18
      }, {
        top: 13.211,
        bottom: 10.809
      }, {
        top: 0.333333,
        bottom: 0.272727
      }, {
        top: 122.46333,
        bottom: 100.19727
      }, {
        top: 1100.242,
        bottom: 900.198
      }, {
        top: 11000000,
        bottom: 9000000
      }]

      inputData.forEach((input, idx) => {
        const output = randomizer(input, 0.1)
        expect(output).toBeLessThan(expectedData[idx].top);
        expect(output).toBeGreaterThan(expectedData[idx].bottom);
      })
    })
  })
})

