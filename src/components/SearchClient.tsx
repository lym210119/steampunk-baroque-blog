'use client'

import { useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import { PostData } from '@/lib/posts'

export default function SearchClient({ posts }: { posts: PostData[] }) {
  const [query, setQuery] = useState('')
  const fuse = new Fuse(posts, {
    keys: ['title', 'excerpt', 'tags'],
    includeScore: true,
    threshold: 0.4,
  })
  const results = query ? fuse.search(query).map(r => r.item) : []

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl mb-8">搜索齿轮文库</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-4 bg-black/60 border-2 border-brass-700 rounded-lg text-parchment 
                   placeholder:text-brass-800 focus:outline-none focus:border-brass-400"
        placeholder="输入关键词..."
        autoFocus
      />
      <div className="mt-8 space-y-4">
        {results.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} className="block p-4 border border-brass-800 hover:bg-brass-900/20">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-parchment/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
