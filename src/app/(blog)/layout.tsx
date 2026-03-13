export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b-2 border-brass-700 p-4 flex justify-between items-center">
        <h1 className="text-3xl font-serif">⚙️ 蒸汽纪事 ⚜️</h1>
        <nav className="space-x-6">
          <a href="/blog" className="hover:text-brass-300">首页</a>
          <a href="/about" className="hover:text-brass-300">关于</a>
          <a href="/search" className="hover:text-brass-300">搜索</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-brass-700 p-4 text-center text-sm text-brass-500">
        © 2025 齿轮与黄金时代 | 蒸汽朋克×巴洛克
      </footer>
    </>
  )
}
