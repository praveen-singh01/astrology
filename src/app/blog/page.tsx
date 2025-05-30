'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { OmIcon, LotusIcon } from '@/components/icons/SacredIcons'

const BlogPage: React.FC = () => {
  const articles = [
    {
      title: 'Understanding Your Birth Chart: A Beginner\'s Guide',
      excerpt: 'Learn how to read and interpret your birth chart with this comprehensive guide to Vedic astrology basics.',
      date: '2024-01-15',
      category: 'Astrology Basics',
      readTime: '5 min read'
    },
    {
      title: 'The Power of Mantras in Daily Life',
      excerpt: 'Discover how ancient mantras can transform your spiritual practice and bring peace to your daily routine.',
      date: '2024-01-12',
      category: 'Spirituality',
      readTime: '7 min read'
    },
    {
      title: 'Gemstones and Their Healing Properties',
      excerpt: 'Explore the mystical world of gemstones and learn how they can enhance your spiritual energy.',
      date: '2024-01-10',
      category: 'Gemstones',
      readTime: '6 min read'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-saffron-50 via-temple-gold-50/50 to-lotus-pink-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <OmIcon size={100} className="text-saffron-400 om-pulse" />
          </div>
          <div className="absolute bottom-10 right-10">
            <LotusIcon size={120} className="text-lotus-pink-400" />
          </div>
        </div>
        
        <div className="spiritual-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 gradient-text">
              Spiritual Insights
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Explore articles on astrology, spirituality, and ancient wisdom
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="spiritual-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spiritual-card-enhanced"
              >
                <div className="mb-4">
                  <span className="text-xs bg-saffron-100 text-saffron-700 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-xl font-serif font-bold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link href={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`} className="spiritual-button text-sm py-2 px-4">
                  Read More
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
