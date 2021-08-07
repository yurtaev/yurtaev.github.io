import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import { parseDate } from './'

export const POSTS_PATH = path.join(process.cwd(), 'data/_posts')
export const LEGACY_POSTS_PATH = path.join(process.cwd(), 'data/_legacy')

export const getSourceOfFile = (fileName, PATH) => {
  return fs.readFileSync(path.join(PATH, fileName))
}

export const getAllPosts = (PATH = POSTS_PATH) => {
  return fs
    .readdirSync(PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName, PATH)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(source)

      return {
        meta: { ...data, date: data.date.toString() },
        slug: slug,
      }
    })
}

export const getAllLegacyPosts = () => {
  const posts = getAllPosts(LEGACY_POSTS_PATH)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
    .map((post) => {
      const { year, month, day } = parseDate(new Date(post.meta.date))
      post.meta.path = `/${year}/${month}/${day}/${post.slug}`
      return post
    })
  return posts
}

export const getSinglePost = async (slug, PATH = POSTS_PATH) => {
  const source = getSourceOfFile(slug + '.mdx', PATH)

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  })

  return {
    meta: { ...frontmatter, date: frontmatter.date.toString() },
    code,
  }
}

export const getSingleLegacyPost = (slug) => getSinglePost(slug, LEGACY_POSTS_PATH)
