import { getSortedPostsData } from '@/lib/posts'
import SearchClient from '@/components/SearchClient'

export default function SearchPage() {
  const posts = getSortedPostsData()
  return <SearchClient posts={posts} />
}
