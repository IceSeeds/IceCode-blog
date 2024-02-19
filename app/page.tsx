import Link from 'next/link'
import { getArticles } from '@/lib/newt'
import type { Metadata } from 'next'

import Header from "@/components/Header/header"

export const metadata: Metadata = {
  title: 'IceCode - Blog',
  description: 'IceSeedの技術ブログです',
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <main className="main">
      <Header/>
      <h1>NOTE</h1>
      <ul className="articles">
        {articles.map((article) => {
          return (
            <Link className="articles__item" href={`articles/${article.slug}`} key={article._id}>
              <p className='articles__item-img'><img src={article.coverImage.src} alt="article-img" /></p>
              <div className='articles__item-info'>
                <p className='articles__item-info-date'>{article._sys.raw.publishedAt}</p>
                <p className='articles__item-info-title'>{article.title}</p>
                <ul className='articles__item-info-category'>
                  {article.tags.map( ( category: any ) => {
                    return( <li className='articles__item-info-category__item' key={category._id}>{category.name}</li> )
                  })}
                </ul>
              </div>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}