import { getSortedPostsData } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'

const POSTS_PER_PAGE = 5

export default function BlogHome({ searchParams }: { searchParams: { page?: string } }) {
  const allPosts = getSortedPostsData()
  const currentPage = Number(searchParams.page) || 1
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 relative gear-corner">
      <h1 className="text-5xl mb-12 border-b-4 border-brass-300 pb-4">最新文章</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
