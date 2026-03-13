import Link from 'next/link'
import { PostData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function PostCard({ post }: { post: PostData }) {
  return (
    <article className="post-card">
      <h2 className="text-3xl mb-2">
        <Link href={`/posts/${post.id}`} className="hover:text-brass-200 transition">
          {post.title}
        </Link>
      </h2>
      <div className="flex gap-4 text-sm text-brass-500 mb-4">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>· 分类: {post.category}</span>
      </div>
      <p className="text-parchment/80 mb-4">{post.excerpt}</p>
      <div className="flex gap-2 flex-wrap">
        {post.tags.map(tag => (
          <Link key={tag} href={`/tags/${tag}`} 
                className="px-3 py-1 text-xs border border-brass-700 rounded-full hover:bg-brass-900/50">
            #{tag}
          </Link>
        ))}
      </div>
    </article>
  )
}
