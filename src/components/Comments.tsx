'use client'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export default function Comments() {
  const { theme } = useTheme()
  
  // 请替换为您的 Giscus 配置
  return (
    <div className="mt-8 p-4 bg-black/30 rounded-lg">
      <Giscus
        repo="yourname/your-repo"
        repoId="R_kgDO..."
        category="Announcements"
        categoryId="DIC_kwDO..."
        mapping="pathname"
        term="欢迎评论"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  )
}
