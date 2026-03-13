import { getSortedPostsData } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import ClientPagination from '@/components/ClientPagination' // 新建客户端组件

const POSTS_PER_PAGE = 5

export default function BlogHome() {
  const allPosts = getSortedPostsData()
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 relative gear-corner">
      <h1 className="text-5xl mb-12 border-b-4 border-brass-300 pb-4">最新文章</h1>
      <ClientPagination posts={allPosts} postsPerPage={POSTS_PER_PAGE} />
    </div>
  )
}
