'use client';

import { ClientWrapper } from '@/components/client-wrapper';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useHeroSlider } from '@/hooks/use-hero-slider';
import {
  useContactForm,
  useContactModal,
  useProductModal,
} from '@/hooks/use-modals';
import { useResize } from '@/hooks/use-resize';
import { useSlider } from '@/hooks/use-slider';
import { useToast } from '@/hooks/use-toast';
import { allCollaborativeRobots } from '@/lib/collaborative-data';
import { allProducts, getProductSlug } from '@/lib/product-data';
import { pageTranslations } from '@/lib/translations';
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Settings,
  Shield,
  ThumbsUp,
  Zap,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

// Lazy load heavy components
const Header = dynamic(
  () => import('@/components/header').then(mod => ({ default: mod.Header })),
  {
    ssr: false,
    loading: () => <div className='h-20 bg-gray-900' />,
  }
);

const Footer = dynamic(
  () => import('@/components/footer').then(mod => ({ default: mod.Footer })),
  {
    ssr: false,
    loading: () => null,
  }
);

const ScrollToTop = dynamic(() => import('@/components/scroll-to-top'), {
  ssr: false,
  loading: () => null,
});

// Page translations are now imported from lib/translations.ts

// Optimized image component with better performance
const OptimizedImage = memo<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  [key: string]: any;
}>(({ src, alt, width, height, className, priority = false, ...props }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    priority={priority}
    quality={75}
    placeholder='blur'
    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    loading={priority ? 'eager' : 'lazy'}
    {...props}
  />
));

OptimizedImage.displayName = 'OptimizedImage';

// Hero slides data
const heroSlides = [
  {
    image: '/img/industrial/JR/HSR-JR603-570.png',
  },
  {
    image: '/img/industrial/JR/HSR-JR607-730.png',
  },
  {
    image: '/img/industrial/JR/HSR-JR607-910.png',
  },
];

export default function HomePage() {
  const { currentLang } = useLanguage();
  const { toast } = useToast();
  const t = pageTranslations[currentLang];

  // Custom hooks for state management
  const heroSlider = useHeroSlider(heroSlides.length);
  const {
    currentSlide: currentProductSlide,
    itemsPerView: productsPerView,
    nextSlide: nextProductSlide,
    prevSlide: prevProductSlide,
    goToSlide: goToProductSlide,
    canSlideNext,
    canSlidePrev,
  } = useSlider(allProducts.length, 3);

  const {
    currentSlide: currentCollabSlide,
    itemsPerView: collabPerView,
    nextSlide: nextCollabSlide,
    prevSlide: prevCollabSlide,
    goToSlide: goToCollabSlide,
    canSlideNext: canCollabSlideNext,
    canSlidePrev: canCollabSlidePrev,
  } = useSlider(allCollaborativeRobots.length, 3);

  const productModal = useProductModal();
  const contactModal = useContactModal();
  const { form: contactForm, updateForm, resetForm } = useContactForm();

  // Extract modal states and functions
  const {
    isOpen: isProductModalOpen,
    openModal: openProductModal,
    closeModal: closeProductModal,
  } = productModal;
  const {
    isOpen: isContactModalOpen,
    openModal: openContactModal,
    closeModal: closeContactModal,
  } = contactModal;

  // Performance states
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Modal states (from hooks)
  const { selectedProduct } = productModal;
  const isContactFormOpen = isContactModalOpen;

  // Data aliases
  const productData = allProducts;
  const collaborativeRobotsData = allCollaborativeRobots;

  // Memoized feature icons
  const featureIcons = [
    { icon: Shield, label: 'Güvenlik Sistemi' },
    { icon: Eye, label: 'Görsel Tanıma' },
    { icon: Settings, label: 'Akıllı Kontrol' },
    { icon: Award, label: 'Hassas Üretim' },
    { icon: ThumbsUp, label: 'Güvenilir' },
    { icon: Zap, label: 'Yüksek Verim' },
  ];

  // Slider control functions
  const setCurrentProductSlide = (index: number) => goToProductSlide(index);
  const setCurrentCollabSlide = (index: number) => goToCollabSlide(index);

  // Video refs
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Optimized image preloading
  const preloadImages = useCallback(async () => {
    try {
      const imagePromises = heroSlides.slice(0, 2).map(slide => {
        return new Promise<void>(resolve => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = slide.image;
        });
      });

      await Promise.allSettled(imagePromises);
      setImagesLoaded(true);
    } catch (error) {
      setImagesLoaded(true);
    }
  }, []);

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    const forceTimer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    preloadImages();

    return () => {
      clearTimeout(timer);
      clearTimeout(forceTimer);
    };
  }, [preloadImages]);

  // Resize handler for responsive design
  useResize((width: number) => {
    // This will be handled by individual sliders
  });

  // Contact form submission handler
  const handleContactSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (
        !contactForm.name.trim() ||
        !contactForm.email.trim() ||
        !contactForm.message.trim()
      ) {
        toast({
          title: 'Hata',
          description: 'Lütfen tüm zorunlu alanları doldurun.',
          variant: 'destructive',
        });
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactForm.email)) {
        toast({
          title: 'Hata',
          description: 'Lütfen geçerli bir email adresi girin.',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Başarılı!',
        description:
          'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
        variant: 'success',
      });

      closeContactModal();
      resetForm();
    },
    [contactForm, toast, closeContactModal, resetForm]
  );

  // Video handlers
  const handleVideoMouseEnter = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video && video.readyState >= 2) {
      video.play().catch(() => {});
    }
  }, []);

  const handleVideoMouseLeave = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  // Touch handlers for mobile video interaction
  const handleVideoTouchStart = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video && video.readyState >= 2) {
      video.play().catch(() => {});
    }
  }, []);

  const handleVideoTouchEnd = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  // Loading state check
  if (isLoading) {
    return (
      <div className='min-h-screen bg-white'>
        <div className='hero-section' />
        <div className='container mx-auto max-w-7xl xl:max-w-8xl py-16'>
          <div className='h-8 w-64 mx-auto mb-8 bg-gray-200 rounded animate-pulse' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='h-64 bg-gray-200 rounded animate-pulse' />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
      <Header />
      <main id='main-content' tabIndex={-1} className='pt-16' role='main'>
        {/* Hero Section */}
        <ClientWrapper>
          <section className='relative text-white pt-8 md:pt-12 pb-8 md:pb-12 overflow-hidden z-10 hero-section'>
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
            ></div>
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='container mx-auto max-w-7xl xl:max-w-8xl relative z-10'>
              <div className='relative min-h-[500px] md:min-h-[600px] flex items-center'>
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 gpu-layer ${
                      index === heroSlider.currentSlide
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full'>
                      <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
                        <div className='space-y-4 md:space-y-6'>
                          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                            <span className='block'>
                              {t.hero.slides[index]?.title || ''}
                            </span>
                            <span className='block text-blue-400'>
                              {t.hero.slides[index]?.subtitle || ''}
                            </span>
                            <span className='block text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300 mt-4'>
                              {t.hero.slides[index]?.description || ''}
                            </span>
                          </h1>
                          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <Link
                              href='/products'
                              className='bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center'
                            >
                              {t.hero.buttons.explore}
                              <ArrowRight className='ml-2 w-5 h-5' />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className='relative flex justify-center items-center'>
                        <div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                          <OptimizedImage
                            src={slide.image}
                            alt={t.hero.slides[index]?.title || 'Robot Image'}
                            width={400}
                            height={400}
                            className='w-full h-full object-contain transform hover:scale-105 transition-transform duration-500'
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Controls */}
                <div className='absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-30'>
                  <button
                    onClick={heroSlider.prevSlide}
                    className='p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300'
                    aria-label='Önceki slayt'
                    type='button'
                  >
                    <ChevronLeft className='w-4 h-4 md:w-5 md:h-5 text-white' />
                  </button>

                  <div className='flex space-x-3'>
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => heroSlider.goToSlide(index)}
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-300 flex items-center justify-center ${
                          index === heroSlider.currentSlide
                            ? 'bg-blue-400 scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Slayt ${index + 1}'e git`}
                        type='button'
                        aria-current={
                          index === heroSlider.currentSlide ? 'true' : 'false'
                        }
                      >
                        <span className='sr-only'>Slayt {index + 1}</span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={heroSlider.nextSlide}
                    className='p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300'
                    aria-label='Sonraki slayt'
                    type='button'
                  >
                    <ChevronRight className='w-4 h-4 md:w-5 md:h-5 text-white' />
                  </button>
                </div>

                <div className='absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20'>
                  <div
                    className='h-full bg-blue-400 transition-all duration-100 ease-linear'
                    style={{ width: `${heroSlider.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </ClientWrapper>

        {/* Product Center Section */}
        <section
          className='py-16 md:py-20 bg-gray-50'
          aria-labelledby='product-center-heading'
        >
          <div className='container mx-auto max-w-7xl xl:max-w-8xl text-center'>
            <div className='max-w-4xl mx-auto space-y-6'>
              <h2
                id='product-center-heading'
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800'
              >
                {t.productCenter.title}
              </h2>

              <p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
                {t.productCenter.description}
              </p>
            </div>
          </div>
        </section>

        {/* Industrial Robot Section */}
        <section
          className='py-16 md:py-20 bg-white'
          aria-labelledby='industrial-robots-heading'
        >
          <div className='container mx-auto max-w-7xl xl:max-w-8xl'>
            <div className='grid lg:grid-cols-2 gap-12 md:gap-16 items-center'>
              <div className='space-y-6 md:space-y-8'>
                <div className='space-y-4'>
                  <h3
                    id='industrial-robots-heading'
                    className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'
                  >
                    {t.industrialRobots.title}
                  </h3>
                  <p className='text-sm sm:text-base md:text-lg text-gray-600'>
                    {t.industrialRobots.subtitle}
                  </p>
                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                    {t.industrialRobots.description}
                  </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                  {featureIcons.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-3 group hover:scale-105 transition-transform duration-300'
                    >
                      <div className='w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-blue-700 flex-shrink-0'>
                        <feature.icon className='w-6 h-6 text-white' />
                      </div>
                      <span className='text-sm text-gray-700 font-medium'>
                        {currentLang === 'en'
                          ? t.industrialRobots.features[index]
                          : feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='relative'>
                <div className='relative rounded-3xl overflow-hidden bg-gray-50 p-8 flex items-center justify-center'>
                  <OptimizedImage
                    src='/img/industrial/JR/HSR-JR603-570.png'
                    alt={t.industrialRobots.title}
                    width={500}
                    height={400}
                    className='max-w-full max-h-96 object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Slider Section */}
        <section
          className='py-16 md:py-20 bg-gray-50'
          aria-labelledby='product-series-heading'
        >
          <div className='container mx-auto max-w-7xl xl:max-w-8xl'>
            <div className='text-center mb-12 md:mb-16'>
              <h2
                id='product-series-heading'
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'
              >
                {t.productSeries.title}
              </h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                {t.productSeries.description}
              </p>
            </div>

            <div className='relative px-8 md:px-16'>
              <div className='absolute top-1/2 -translate-y-1/2 left-0 z-20'>
                <button
                  onClick={prevProductSlide}
                  disabled={!canSlidePrev}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                    canSlidePrev
                      ? 'hover:shadow-xl transform hover:scale-110 text-gray-600 hover:text-blue-600'
                      : 'opacity-50 cursor-not-allowed text-gray-400'
                  }`}
                  aria-label='Önceki ürünler'
                  type='button'
                >
                  <ChevronLeft className='w-4 h-4 md:w-5 md:h-5' />
                </button>
              </div>

              <div className='absolute top-1/2 -translate-y-1/2 right-0 z-20'>
                <button
                  onClick={nextProductSlide}
                  disabled={!canSlideNext}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                    canSlideNext
                      ? 'hover:shadow-xl transform hover:scale-110 text-gray-600 hover:text-blue-600'
                      : 'opacity-50 cursor-not-allowed text-gray-400'
                  }`}
                  aria-label='Sonraki ürünler'
                  type='button'
                >
                  <ChevronRight className='w-4 h-4 md:w-5 md:h-5' />
                </button>
              </div>

              <div className='overflow-hidden rounded-2xl'>
                <div
                  className='flex transition-transform duration-700 ease-out'
                  style={{
                    transform: `translateX(-${
                      (currentProductSlide * 100) / productsPerView
                    }%)`,
                  }}
                >
                  {productData.map((robot, index) => (
                    <div
                      key={index}
                      className='flex-shrink-0 px-2 md:px-4'
                      style={{ width: `${100 / productsPerView}%` }}
                    >
                      <div className='group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative z-10 mb-8'>
                        <div className='relative h-48 md:h-64 bg-gray-50 overflow-hidden p-4 flex items-center justify-center'>
                          <OptimizedImage
                            src={robot.image}
                            alt={`${robot.model} robot görseli`}
                            width={300}
                            height={300}
                            className='max-w-full max-h-full object-contain'
                          />
                          <div className='absolute inset-0 bg-gradient-to-t from-black/5 to-transparent'></div>
                        </div>

                        <div className='p-4 md:p-6 space-y-4'>
                          <div className='space-y-2'>
                            <h3 className='text-lg md:text-xl font-bold text-gray-800'>
                              {robot.model}
                            </h3>
                          </div>

                          <div className='grid grid-cols-3 gap-3'>
                            <div className='bg-blue-100 p-3 rounded-lg text-center'>
                              <div className='text-xs text-gray-600 mb-1'>
                                {t.productSeries.specs.dof}
                              </div>
                              <div className='text-sm md:text-lg font-bold text-blue-700'>
                                {robot.specs.dof}
                              </div>
                            </div>
                            <div className='bg-blue-50 p-3 rounded-lg text-center'>
                              <div className='text-xs text-gray-600 mb-1'>
                                {t.productSeries.specs.payload}
                              </div>
                              <div className='text-sm md:text-lg font-bold text-blue-600'>
                                {robot.payload}
                              </div>
                            </div>
                            <div className='bg-blue-25 p-3 rounded-lg text-center'>
                              <div className='text-xs text-gray-600 mb-1'>
                                {t.productSeries.specs.reach}
                              </div>
                              <div className='text-sm md:text-lg font-bold text-blue-500'>
                                {robot.reach}
                              </div>
                            </div>
                          </div>

                          <Link
                            href={`/products/${getProductSlug(robot.model)}`}
                            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2'
                          >
                            <ExternalLink className='w-4 h-4' />
                            <span>{t.productSeries.specs.details}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Needs Section */}
            <div className='text-center mt-12 md:mt-16'>
              <div className='group bg-blue-50 hover:bg-blue-100 rounded-3xl p-6 md:p-8 text-gray-800 relative overflow-hidden transition-all duration-500 cursor-pointer'>
                <div className='absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl transition-all duration-700 group-hover:translate-x-1/3 group-hover:scale-110'></div>
                <div className='absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 w-64 h-64 bg-blue-400/30 rounded-full blur-2xl transition-all duration-500 group-hover:translate-x-1/4 group-hover:scale-125'></div>
                <div className='absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-32 h-32 bg-blue-500/40 rounded-full blur-xl transition-all duration-300 group-hover:translate-x-1/6 group-hover:scale-150'></div>

                <div className='relative z-10'>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-700 transition-colors duration-300'>
                    {t.productSeries.specialNeeds.title}
                  </h3>
                  <p className='text-gray-600 mb-6 max-w-2xl mx-auto group-hover:text-gray-700 transition-colors duration-300'>
                    {t.productSeries.specialNeeds.description}
                  </p>
                  <Button
                    onClick={openContactModal}
                    className='bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  >
                    {t.productSeries.specialNeeds.button}
                    <ArrowRight className='ml-2 w-5 h-5' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborative Robots Section */}
        <section
          className='py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden'
          aria-labelledby='collaborative-robots-heading'
        >
          <div className='absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-blue-500/30 via-blue-400/20 to-transparent blur-3xl transform translate-x-1/2 animate-pulse'></div>

          <div className='container mx-auto max-w-7xl xl:max-w-8xl relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 md:gap-16 items-center'>
              <div className='relative order-2 lg:order-1'>
                <div className='relative rounded-3xl overflow-hidden bg-gray-800/50 p-8 flex items-center justify-center'>
                  <OptimizedImage
                    src='/img/Collaborative/CO/HSR-CO605-1000.png'
                    alt={`${t.collaborativeRobots.title} işbirlikçi robot görseli`}
                    width={500}
                    height={400}
                    className='max-w-full max-h-96 object-contain'
                  />
                </div>
              </div>

              <div className='space-y-6 md:space-y-8 order-1 lg:order-2'>
                <div className='space-y-4'>
                  <h3
                    id='collaborative-robots-heading'
                    className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'
                  >
                    {t.collaborativeRobots.title}
                  </h3>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300'>
                    {t.collaborativeRobots.subtitle}
                  </p>
                  <p className='text-sm sm:text-base text-gray-300 leading-relaxed'>
                    {t.collaborativeRobots.description}
                  </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                  {featureIcons.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-3 group'
                    >
                      <div className='w-12 h-12 bg-blue-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-blue-600/30 transition-all duration-300 flex-shrink-0'>
                        <feature.icon className='w-6 h-6 text-blue-400' />
                      </div>
                      <span className='text-sm text-gray-300 font-medium'>
                        {currentLang === 'en'
                          ? t.industrialRobots.features[index]
                          : feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Collaborative Robots Product Slider */}
            <div className='mt-16 md:mt-20'>
              <div className='text-center mb-12 md:mb-16'>
                <h2
                  id='collaborative-robots-series-heading'
                  className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'
                >
                  {t.collaborativeRobots.seriesTitle}
                </h2>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
                  {t.collaborativeRobots.seriesDescription}
                </p>
              </div>

              <div className='relative px-8 md:px-16'>
                <div className='absolute top-1/2 -translate-y-1/2 left-0 z-20'>
                  <button
                    onClick={prevCollabSlide}
                    disabled={!canCollabSlidePrev}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                      canCollabSlidePrev
                        ? 'hover:bg-white/20 transform hover:scale-110 text-white hover:text-blue-400'
                        : 'opacity-50 cursor-not-allowed text-gray-500'
                    }`}
                    aria-label='Previous collaborative robots'
                  >
                    <ChevronLeft className='w-4 h-4 md:w-5 md:h-5' />
                  </button>
                </div>

                <div className='absolute top-1/2 -translate-y-1/2 right-0 z-20'>
                  <button
                    onClick={nextCollabSlide}
                    disabled={!canCollabSlideNext}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                      canCollabSlideNext
                        ? 'hover:bg-white/20 transform hover:scale-110 text-white hover:text-blue-400'
                        : 'opacity-50 cursor-not-allowed text-gray-500'
                    }`}
                    aria-label='Next collaborative robots'
                  >
                    <ChevronRight className='w-4 h-4 md:w-5 md:h-5' />
                  </button>
                </div>

                <div className='overflow-hidden rounded-2xl'>
                  <div
                    className='flex transition-transform duration-700 ease-out'
                    style={{
                      transform: `translateX(-${
                        (currentCollabSlide * 100) / collabPerView
                      }%)`,
                    }}
                  >
                    {collaborativeRobotsData.map((robot, index) => (
                      <div
                        key={index}
                        className='flex-shrink-0 px-2 md:px-4'
                        style={{ width: `${100 / collabPerView}%` }}
                      >
                        <div className='group collaborative-robot-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden relative z-10 mb-8 hover:bg-white/15 transition-all duration-300'>
                          <div className='relative h-48 md:h-64 image-container bg-gray-800/50 overflow-hidden p-4 flex items-center justify-center'>
                            <OptimizedImage
                              src={robot.image}
                              alt={robot.model}
                              width={300}
                              height={300}
                              className='max-w-full max-h-full object-contain'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                          </div>

                          <div className='p-4 md:p-6 space-y-4'>
                            <div className='space-y-2'>
                              <h3 className='text-lg md:text-xl font-bold text-white'>
                                {robot.model}
                              </h3>
                            </div>

                            <div className='grid grid-cols-3 gap-3'>
                              <div className='dof-box bg-blue-400/10 backdrop-blur-sm border border-blue-200/20 p-3 rounded-lg text-center'>
                                <div className='text-xs text-blue-200 mb-1'>
                                  {t.productSeries.specs.dof}
                                </div>
                                <div className='text-sm md:text-lg font-bold text-blue-200'>
                                  {robot.specs.dof}
                                </div>
                              </div>
                              <div className='payload-box bg-blue-400/10 backdrop-blur-sm border border-blue-200/20 p-3 rounded-lg text-center'>
                                <div className='text-xs text-blue-200 mb-1'>
                                  {t.productSeries.specs.payload}
                                </div>
                                <div className='text-sm md:text-lg font-bold text-blue-200'>
                                  {robot.payload}
                                </div>
                              </div>
                              <div className='reach-box bg-blue-400/10 backdrop-blur-sm border border-blue-200/20 p-3 rounded-lg text-center'>
                                <div className='text-xs text-blue-200 mb-1'>
                                  {t.productSeries.specs.reach}
                                </div>
                                <div className='text-sm md:text-lg font-bold text-blue-200'>
                                  {robot.reach}
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/products/${getProductSlug(robot.model)}`}
                              className='w-full bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-blue-500/30'
                            >
                              <ExternalLink className='w-4 h-4' />
                              <span>{t.productSeries.specs.details}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          className='py-16 md:py-20 bg-white'
          aria-labelledby='solutions-heading'
        >
          <div className='container mx-auto max-w-7xl xl:max-w-8xl'>
            <div className='text-center mb-12 md:mb-16'>
              <h2
                id='solutions-heading'
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'
              >
                {t.solutions.title}
              </h2>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
                {t.solutions.description}
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {t.solutions.sectors.map((solution, index) => (
                <Link
                  key={index}
                  href={solution.href}
                  className='group sector-card relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105'
                  onMouseEnter={() => handleVideoMouseEnter(index)}
                  onMouseLeave={() => handleVideoMouseLeave(index)}
                  onTouchStart={() => handleVideoTouchStart(index)}
                  onTouchEnd={() => handleVideoTouchEnd(index)}
                >
                  <div className='relative h-64 md:h-72 overflow-hidden'>
                    <video
                      ref={el => {
                        if (videoRefs.current) {
                          videoRefs.current[index] = el;
                        }
                      }}
                      src={solution.video}
                      className='sector-video w-full h-full object-cover'
                      muted
                      loop
                      playsInline
                      preload='metadata'
                      webkit-playsinline='true'
                      x5-playsinline='true'
                      x5-video-player-type='h5'
                      onLoadedData={() => {
                        // Video loaded
                      }}
                      onError={e => {
                        // Video error
                        console.error('Video loading error:', e);
                      }}
                    ></video>
                    {/* Fallback background for mobile */}
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                    <div className='absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>

                  <div className='absolute bottom-0 left-0 right-0 p-6'>
                    <h3 className='sector-title text-xl md:text-2xl font-bold text-white mb-2'>
                      {solution.title}
                    </h3>
                    <div className='flex items-center text-white/80 group-hover:text-white transition-colors duration-300'>
                      <span className='text-sm'>{t.solutions.viewDetails}</span>
                      <ArrowRight className='ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300' />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {isProductModalOpen && selectedProduct && (
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
            <div className='bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
              <div className='p-6 md:p-8'>
                <div className='flex justify-between items-start mb-6'>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    {selectedProduct.model}
                  </h2>
                  <button
                    onClick={closeProductModal}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
                    aria-label={t.modal.close}
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                  <div className='space-y-6'>
                    <div className='bg-gray-50 rounded-xl p-6 flex items-center justify-center'>
                      <OptimizedImage
                        src={selectedProduct.image}
                        alt={`${selectedProduct.model} ürün detay görseli`}
                        width={400}
                        height={400}
                        className='max-w-full max-h-80 object-contain'
                      />
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-blue-50 p-4 rounded-lg text-center'>
                        <div className='text-sm text-gray-600 mb-1'>
                          {t.productSeries.specs.payload}
                        </div>
                        <div className='text-2xl font-bold text-blue-600'>
                          {selectedProduct.payload}
                        </div>
                      </div>
                      <div className='bg-blue-25 p-4 rounded-lg text-center'>
                        <div className='text-sm text-gray-600 mb-1'>
                          {t.productSeries.specs.reach}
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          {selectedProduct.reach}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-xl font-bold text-gray-800 mb-4'>
                        {t.modal.technicalSpecs}
                      </h3>
                      <div className='space-y-3'>
                        {Object.entries(selectedProduct.specs).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className='flex justify-between py-2 border-b border-gray-100'
                            >
                              <span className='text-gray-600 capitalize'>
                                {key === 'dof'
                                  ? t.modal.specs.dof
                                  : key === 'repeatability'
                                    ? t.modal.specs.repeatability
                                    : key === 'maxSpeed'
                                      ? t.modal.specs.maxSpeed
                                      : key === 'weight'
                                        ? t.modal.specs.weight
                                        : key}
                              </span>
                              <span className='font-semibold text-gray-800'>
                                {value as string}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-bold text-gray-800 mb-4'>
                        {t.modal.features}
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProduct.features.map(
                          (feature: string, index: number) => (
                            <span
                              key={index}
                              className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium'
                            >
                              {feature}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className='text-xl font-bold text-gray-800 mb-4'>
                        {t.modal.applications}
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProduct.applications.map(
                          (app: string, index: number) => (
                            <span
                              key={index}
                              className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'
                            >
                              {app}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className='flex space-x-4 pt-4'>
                      <Button
                        onClick={openContactModal}
                        className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300'
                      >
                        {t.modal.getQuote}
                      </Button>
                      <Button
                        variant='outline'
                        className='flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold transition-all duration-300 bg-transparent'
                      >
                        {t.modal.downloadBrochure}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {isContactFormOpen && (
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
            <div className='bg-white rounded-2xl max-w-md w-full'>
              <div className='p-6 md:p-8'>
                <div className='flex justify-between items-start mb-6'>
                  <h2 className='text-2xl font-bold text-gray-800'>
                    {t.contact.title}
                  </h2>
                  <button
                    onClick={closeContactModal}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
                    aria-label={t.modal.close}
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleContactSubmit} className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t.contact.form.name}
                    </label>
                    <input
                      type='text'
                      required
                      value={contactForm.name}
                      onChange={e =>
                        updateForm({ ...contactForm, name: e.target.value })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t.contact.form.email}
                    </label>
                    <input
                      type='email'
                      required
                      value={contactForm.email}
                      onChange={e =>
                        updateForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t.contact.form.phone}
                    </label>
                    <input
                      type='tel'
                      value={contactForm.phone}
                      onChange={e =>
                        updateForm({
                          ...contactForm,
                          phone: e.target.value,
                        })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t.contact.form.message}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={e =>
                        updateForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none'
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105'
                  >
                    {t.contact.form.send}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
