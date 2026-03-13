import { getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Comments from '@/components/Comments'
import { formatDate } from '@/lib/utils'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({ id: post.id }))
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  if (!postData) notFound()

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 baroque-border p-8">
      <header className="mb-8">
        <h1 className="text-5xl mb-4">{postData.title}</h1>
        <div className="flex items-center gap-4 text-brass-500">
          <time dateTime={postData.date}>{formatDate(postData.date)}</time>
          <span>分类：{postData.category}</span>
        </div>
      </header>

      <div 
        className="prose prose-invert prose-headings:font-serif prose-a:text-brass-300 max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />

      <footer className="mt-12 pt-6 border-t-2 border-brass-700">
        <Comments />
      </footer>
    </article>
  )
}
