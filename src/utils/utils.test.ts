import { parseDate, formatDate } from '.'

test('parseDate', () => {
  expect(parseDate(new Date(1628599426408))).toMatchInlineSnapshot(`
    Object {
      "day": "10",
      "month": "08",
      "year": "2021",
    }
`)
})


test('formatDate', () => {
  expect(formatDate('2015-07-14 14:44:44')).toMatchInlineSnapshot(`"2015-07-14"`)
})
