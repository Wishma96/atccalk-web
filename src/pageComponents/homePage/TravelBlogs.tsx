'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogs } from '@/data/blogs';
import { getBlogSlug } from '@/utils/blogSlug';

const TravelBlogs = () => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; 
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Travel Blogs</h2>
        <p className="text-gray-400">
          Discover incredible destinations and travel experiences through our curated collection of travel stories.
        </p>
      </div>

      {isHomePage ? (
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group cursor-pointer"
                onClick={() => router.push(`/blog/${getBlogSlug(blog)}`)}
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={blog.heroImage || blog.image || '/assets/images/blog/blog1.jpeg'}
                    alt={blog.title}
                    width={800}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-sm text-white/90">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <div className="text-sm text-gray-400">
                  {blog.date} · by {blog.author}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div ref={scrollContainerRef} className="overflow-x-auto pb-6 hide-scrollbar overscroll-x-contain">
              <div className="flex gap-5 w-max">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="group cursor-pointer w-[360px] lg:w-[400px]"
                    onClick={() => router.push(`/blog/${getBlogSlug(blog)}`)}
                  >
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={blog.heroImage || blog.image || '/assets/images/blog/blog1.jpeg'}
                        alt={blog.title}
                        width={800}
                        height={400}
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-sm text-white/90 mb-2">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="text-sm text-gray-400">
                      {blog.date} · by {blog.author}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white dark:bg-[#1C2537] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-lg hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white dark:bg-[#1C2537] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-lg hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="group cursor-pointer"
              onClick={() => router.push(`/blog/${getBlogSlug(blog)}`)}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={blog.heroImage || blog.image || '/assets/images/blog/blog1.jpeg'}
                  alt={blog.title}
                  width={800}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-sm text-white/90 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                {blog.title}
              </h3>
              <div className="text-sm text-gray-400">
                {blog.date} · by {blog.author}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TravelBlogs;