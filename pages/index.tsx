import Link from 'next/link'
import Head from 'next/head'

import { getAllLegacyPosts } from '@/utils/mdx'
import { Post } from '@/types'
import { formatDate } from '@/utils'

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>@yurtaev</title>
      </Head>

      <h1>Blog</h1>
      <h2>Legacy</h2>

      <ul>
        {posts.map((post, index) => (
          <li key={index} role="article">
            <time>{formatDate(post.meta.date)}</time> –{' '}
            <Link prefetch={false} href={post.meta.path || `posts/${post.slug}`}>
              {post.meta.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllLegacyPosts()

  return {
    props: { posts },
  }
}
