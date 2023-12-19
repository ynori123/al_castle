import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
				<nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
						<a className="font-semibold text-xl tracking-tight" href='/'>百名城観光案内サイト</a>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
							<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
						</button>
					</div>
					<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="text-sm lg:flex-grow">
							<a href="/castles" className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
								百名城一覧
							</a>
							<a href="/routes" className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
								経路検索ツール
							</a>
							<a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white">
								その他
							</a>
						</div>
					</div>
				</nav>

				<main className='container mx-auto'>
					{children}
				</main>
			</body>
    </html>
  )
}
