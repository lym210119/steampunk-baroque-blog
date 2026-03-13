import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

// 生成所有可能的标签路径
export async function generateStaticParams() {
  const posts = getSortedPostsData()
  // 提取所有标签，去重
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))
  return allTags.map(tag => ({ tag }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const allPosts = getSortedPostsData()
  const tag = params.tag // params.tag 已经是解码后的值，无需再次解码
  const posts = allPosts.filter(post => post.tags.includes(tag))

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl mb-8">标签：{tag}</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} 
                className="block p-4 border-l-4 border-brass-500 hover:bg-brass-900/20 transition">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-sm text-brass-600">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
