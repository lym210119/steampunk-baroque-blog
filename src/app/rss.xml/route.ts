import { getSortedPostsData } from '@/lib/posts'

export async function GET() {
  const posts = getSortedPostsData()
  const baseUrl = 'https://yourblog.com' // 替换为你的域名

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>蒸汽朋克巴洛克博客</title>
      <link>${baseUrl}</link>
      <description>齿轮与黄金的时代</description>
      <language>zh-cn</language>
      <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(post => `
        <item>
          <title>${post.title}</title>
          <link>${baseUrl}/posts/${post.id}</link>
          <guid>${baseUrl}/posts/${post.id}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${post.excerpt || ''}</description>
        </item>
      `).join('')}
    </channel>
  </rss>`

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
