import React from 'react'
import Head from 'next/head'

import { getMDXComponent } from 'mdx-bundler/client'

import { getAllLegacyPosts, getSingleLegacyPost } from '@/utils/mdx'

import { parseDate, formatDate } from '@/utils'
import { Code } from '@/Components'

type Params = {
  params: {
    slug: string
  }
}

const components = {
  code: Code,
}

const Post = ({ code, meta }: any) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <title>{meta.title} | @yurtaev</title>
      </Head>
      <article>
        <header>
          <h1>{meta.title}</h1>
          <small>
            {'> '}
            <time>{formatDate(meta.date)}</time>
          </small>
        </header>
        <Component components={components as any} />
      </article>
    </>
  )
}

export const getStaticProps = async ({ params }: Params) => {
  const post = await getSingleLegacyPost(params.slug)
  return {
    props: { ...post },
  }
}

/* Legacy paths */
export const getStaticPaths = async () => {
  const paths = getAllLegacyPosts().map(({ slug, meta }) => {
    const { year, month, day } = parseDate(new Date(meta.date))
    return { params: { slug, year, month, day } }
  })
  return {
    paths,
    fallback: false,
  }
}

export default Post
