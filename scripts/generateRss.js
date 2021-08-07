import fs from 'fs'
import { Feed } from 'feed'

import * as R from 'ramda'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { getMDXComponent } from 'mdx-bundler/client'

import { getAllLegacyPosts as getAllPosts, getSingleLegacyPost as getSinglePost } from '../src/utils/mdx'

const FEED_COUNT = 10

async function generate() {
  console.info('Generate `atom.xml`', new Date())
  const feed = new Feed({
    title: '@yurtaev',
    description: 'My most recent blog posts @yurtaev',
    id: 'https://yurtaev.link/',
    link: 'https://yurtaev.link',
    favicon: 'https://yurtaev.link/favicon.png',
    feedLinks: {
      atom: 'https://yurtaev.link/atom.xml',
    },
    author: {
      name: 'Egor Yurtaev',
      email: 'yurtaev.egor+blog@gmail.com',
      link: 'https://yurtaev.link',
    },
  })

  const posts = getAllPosts()

  const entries = await Promise.all(
    R.pipe(
      R.take(FEED_COUNT),
      R.map(async (post) => {
        const { meta, slug } = post
        const { code } = await getSinglePost(slug)

        const Component = getMDXComponent(code)

        return {
          meta,
          source: <Component />,
        }
      }),
    )(posts),
  )

  entries.forEach(({ meta, source }) => {
    feed.addItem({
      title: meta.title,
      guid: meta.slug,
      link: `https://yurtaev.link${meta.path}`,
      date: new Date(meta.date),
      content: ReactDOMServer.renderToStaticMarkup(source),
    })
  })

  fs.writeFileSync('./public/atom.xml', feed.atom1())
  console.info('Generated `atom.xml`', new Date())
}

generate()
