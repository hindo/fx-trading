import { RANDOMIZE_DATA, randomizeItems } from '../actions'
import { data } from '../reducers'

const stateBefore = () => ({
  items: [
    { "pair": "USD CHF", "buy": 0.99143, "sell": 0.99043 },
  ]
})

const action_RANDOMIZE_DATA = {
  type: RANDOMIZE_DATA,
  payload: {
    items: [
      { "pair": "USD CHF", "buy": 0.99243, "sell": 0.99143 },
    ]
  }
}

describe('reducers', () => {
  describe('rendomize_data', () => {
    it('should work as expected', () => {
      const actual = data(stateBefore(), action_RANDOMIZE_DATA)
      const expected = {
        items: [
          { "pair": "USD CHF", "buy": 0.99243, "sell": 0.99143 },
        ]
      }
      expect(actual).toEqual(expected)
    })

    it('should add direction prop when buy price changes', () => {
      const actual = data(stateBefore(), action_RANDOMIZE_DATA)
      const randomizedItems = randomizeItems(actual.items)

      actual.items.forEach((item, idx) => {
        const dir = item.buy < randomizedItems[idx].buy ? 'up' : 'down'
        expect(randomizedItems[idx].direction).toEqual(dir)
      })

    })
  })
})
