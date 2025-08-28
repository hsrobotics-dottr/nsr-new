// Type definitions for the homepage components
export interface HeroSlide {
  image: string;
}

export interface FeatureIcon {
  icon: any; // Lucide icon component
  label: string;
}

export interface ProductSpecs {
  dof: string;
  repeatability: string;
  maxSpeed: string;
  weight: string;
}

export interface Product {
  model: string;
  payload: string;
  reach: string;
  image: string;
  specs: ProductSpecs;
  features: string[];
  applications: string[];
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SliderState {
  currentSlide: number;
  itemsPerView: number;
}

export interface ModalState {
  isOpen: boolean;
  selectedProduct: Product | null;
}

export interface HomePageState {
  hero: {
    currentSlide: number;
    progress: number;
  };
  products: SliderState;
  collaborative: SliderState;
  modals: {
    product: ModalState;
    contact: boolean;
  };
  form: ContactForm;
  performance: {
    isLoading: boolean;
    imagesLoaded: boolean;
  };
}

// Action types for reducer
export type HomePageAction =
  | { type: 'SET_HERO_SLIDE'; payload: number }
  | { type: 'SET_HERO_PROGRESS'; payload: number }
  | { type: 'SET_PRODUCT_SLIDE'; payload: number }
  | { type: 'SET_PRODUCTS_PER_VIEW'; payload: number }
  | { type: 'SET_COLLAB_SLIDE'; payload: number }
  | { type: 'SET_COLLAB_PER_VIEW'; payload: number }
  | { type: 'OPEN_PRODUCT_MODAL'; payload: Product }
  | { type: 'CLOSE_PRODUCT_MODAL' }
  | { type: 'TOGGLE_CONTACT_MODAL' }
  | { type: 'UPDATE_FORM'; payload: Partial<ContactForm> }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_IMAGES_LOADED'; payload: boolean };

// Optimized image component props
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

// Hook return types
export interface UseSliderReturn {
  currentSlide: number;
  itemsPerView: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  canSlideNext: boolean;
  canSlidePrev: boolean;
}

export interface UseHeroSliderReturn extends UseSliderReturn {
  progress: number;
  setProgress: (progress: number) => void;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
}

// Video ref type
export type VideoRef = (HTMLVideoElement | null)[];

// Interval ref type
export type IntervalRef = React.MutableRefObject<NodeJS.Timeout | null>;

// Resize timeout ref type
export type ResizeTimeoutRef = React.MutableRefObject<NodeJS.Timeout | null>;

// Analytics event type
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}
