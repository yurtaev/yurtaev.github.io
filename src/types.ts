export type PostMeta = {
  title: string;
  date: string
  path?: string
};

export type Post = {
    slug: string
    meta: PostMeta
};
