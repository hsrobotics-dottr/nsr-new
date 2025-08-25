'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category?: string;
}

interface VideoGridProps {
  videos: Video[];
  title?: string;
  description?: string;
}

export function VideoGrid({ videos, title, description }: VideoGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-7xl mx-auto'>
          {title && (
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                {title}
              </h2>
              {description && (
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Video Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {currentVideos.map(video => (
              <div
                key={video.id}
                className='group bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <div className='relative h-48 bg-gray-50 rounded-t-xl overflow-hidden'>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <Play className='w-8 h-8 text-white ml-1' />
                    </div>
                  </div>
                  <div className='absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded'>
                    {video.duration}
                  </div>
                </div>
                <div className='p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded'>
                      {video.category}
                    </span>
                  </div>
                  <h3 className='text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                    {video.title}
                  </h3>
                  <p className='text-gray-600 text-sm line-clamp-2 mb-4'>
                    {video.description}
                  </p>
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold'>
                    İzle
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className='flex items-center justify-center space-x-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className='flex items-center space-x-1'
              >
                <ChevronLeft className='w-4 h-4' />
                <span>Önceki</span>
              </Button>

              <div className='flex items-center space-x-1'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      size='sm'
                      onClick={() => handlePageChange(page)}
                      className='w-10 h-10'
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant='outline'
                size='sm'
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='flex items-center space-x-1'
              >
                <span>Sonraki</span>
                <ChevronRight className='w-4 h-4' />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
