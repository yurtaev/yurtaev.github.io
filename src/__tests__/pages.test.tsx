import renderer from 'react-test-renderer'

import Post from '../../pages/[year]/[month]/[day]/[slug]'
import PostFixturesProps from './PostFixturesProps.json'

test('Page', async () => {
  const tree = renderer.create(<Post {...PostFixturesProps} />)

  expect(tree).toMatchSnapshot('Post')
})
