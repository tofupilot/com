import { getAllPostsSlugs, getPostBySlug } from '@/app/(sanity)/lib/client'
import PostPage from './default'
import { urlForImage } from '@/app/(sanity)/lib/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  if (!post?.slug) {
    notFound()
  }
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: [urlForImage(post.mainImage)]
    }
  }
}

export default async function PostDefault({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)
  return <PostPage post={post} />
}

export const revalidate = 60
