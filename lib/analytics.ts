import { AnalyticsEvent } from './types';

// Google Analytics 4 (GA4) implementation
export class Analytics {
  private static instance: Analytics;
  private isInitialized = false;
  private gaId: string | null = null;

  private constructor() {
    this.gaId = process.env.NEXT_PUBLIC_GA_ID || null;
  }

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public init(): void {
    if (this.isInitialized || !this.gaId || typeof window === 'undefined') {
      return;
    }

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
    document.head.appendChild(script);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', this.gaId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;

    this.isInitialized = true;
  }

  public trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameters: event.customParameters,
      });
    }
  }

  public trackPageView(url: string, title?: string): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('config', this.gaId, {
        page_title: title || document.title,
        page_location: url,
      });
    }
  }

  public trackConversion(conversionId: string, conversionLabel: string): void {
    if (!this.isInitialized || typeof window === 'undefined') {
      return;
    }

    const gtag = (window as any).gtag;
    if (gtag) {
      gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
      });
    }
  }
}

// Predefined analytics events
export const AnalyticsEvents = {
  // Page views
  PAGE_VIEW: (page: string) => ({
    name: 'page_view',
    category: 'engagement',
    action: 'page_view',
    label: page,
  }),

  // Button clicks
  BUTTON_CLICK: (buttonName: string, page?: string) => ({
    name: 'button_click',
    category: 'engagement',
    action: 'button_click',
    label: buttonName,
    customParameters: { page },
  }),

  // Form submissions
  FORM_SUBMIT: (formName: string, success: boolean) => ({
    name: 'form_submit',
    category: 'engagement',
    action: 'form_submit',
    label: formName,
    customParameters: { success },
  }),

  // Product interactions
  PRODUCT_VIEW: (productId: string, productName: string) => ({
    name: 'product_view',
    category: 'ecommerce',
    action: 'view_item',
    label: productName,
    customParameters: { product_id: productId },
  }),

  PRODUCT_CLICK: (productId: string, productName: string) => ({
    name: 'product_click',
    category: 'ecommerce',
    action: 'select_item',
    label: productName,
    customParameters: { product_id: productId },
  }),

  // Contact interactions
  CONTACT_CLICK: (method: 'email' | 'phone' | 'form') => ({
    name: 'contact_click',
    category: 'engagement',
    action: 'contact_click',
    label: method,
  }),

  // Search interactions
  SEARCH: (query: string, resultsCount: number) => ({
    name: 'search',
    category: 'engagement',
    action: 'search',
    label: query,
    value: resultsCount,
  }),

  // Download interactions
  DOWNLOAD: (fileName: string, fileType: string) => ({
    name: 'download',
    category: 'engagement',
    action: 'file_download',
    label: fileName,
    customParameters: { file_type: fileType },
  }),

  // Video interactions
  VIDEO_PLAY: (videoName: string) => ({
    name: 'video_play',
    category: 'engagement',
    action: 'video_play',
    label: videoName,
  }),

  VIDEO_PAUSE: (videoName: string) => ({
    name: 'video_pause',
    category: 'engagement',
    action: 'video_pause',
    label: videoName,
  }),

  VIDEO_COMPLETE: (videoName: string) => ({
    name: 'video_complete',
    category: 'engagement',
    action: 'video_complete',
    label: videoName,
  }),

  // Social media interactions
  SOCIAL_SHARE: (platform: string, content: string) => ({
    name: 'social_share',
    category: 'engagement',
    action: 'share',
    label: platform,
    customParameters: { content },
  }),

  SOCIAL_CLICK: (platform: string) => ({
    name: 'social_click',
    category: 'engagement',
    action: 'social_click',
    label: platform,
  }),

  // Navigation interactions
  MENU_CLICK: (menuItem: string) => ({
    name: 'menu_click',
    category: 'navigation',
    action: 'menu_click',
    label: menuItem,
  }),

  // Error tracking
  ERROR: (errorType: string, errorMessage: string) => ({
    name: 'error',
    category: 'error',
    action: 'error',
    label: errorType,
    customParameters: { error_message: errorMessage },
  }),
} as const;

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private analytics: Analytics;

  private constructor() {
    this.analytics = Analytics.getInstance();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public trackWebVitals(): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Track Core Web Vitals
    this.trackLCP();
    this.trackFID();
    this.trackCLS();
    this.trackFCP();
    this.trackTTFB();
  }

  private trackLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;

        this.analytics.trackEvent({
          name: 'lcp',
          category: 'performance',
          action: 'lcp',
          value: Math.round(lastEntry.startTime),
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private trackFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.analytics.trackEvent({
            name: 'fid',
            category: 'performance',
            action: 'fid',
            value: Math.round(entry.processingStart - entry.startTime),
          });
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private trackCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });

        this.analytics.trackEvent({
          name: 'cls',
          category: 'performance',
          action: 'cls',
          value: Math.round(clsValue * 1000) / 1000,
        });
      });

      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private trackFCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as PerformanceEntry;

        this.analytics.trackEvent({
          name: 'fcp',
          category: 'performance',
          action: 'fcp',
          value: Math.round(firstEntry.startTime),
        });
      });

      observer.observe({ entryTypes: ['first-contentful-paint'] });
    }
  }

  private trackTTFB(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.initiatorType === 'navigation') {
            this.analytics.trackEvent({
              name: 'ttfb',
              category: 'performance',
              action: 'ttfb',
              value: Math.round(entry.responseStart - entry.requestStart),
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    }
  }
}

// Utility functions
export const trackEvent = (event: AnalyticsEvent): void => {
  const analytics = Analytics.getInstance();
  analytics.trackEvent(event);
};

export const trackPageView = (url: string, title?: string): void => {
  const analytics = Analytics.getInstance();
  analytics.trackPageView(url, title);
};

export const initAnalytics = (): void => {
  const analytics = Analytics.getInstance();
  analytics.init();
};

export const initPerformanceMonitoring = (): void => {
  const performanceMonitor = PerformanceMonitor.getInstance();
  performanceMonitor.trackWebVitals();
};

// Hook for React components
export const useAnalytics = () => {
  const analytics = Analytics.getInstance();

  return {
    trackEvent: (event: AnalyticsEvent) => analytics.trackEvent(event),
    trackPageView: (url: string, title?: string) => analytics.trackPageView(url, title),
    trackConversion: (conversionId: string, conversionLabel: string) =>
      analytics.trackConversion(conversionId, conversionLabel),
  };
};
