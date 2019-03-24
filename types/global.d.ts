declare const shallow: any;
declare const mount: any;
declare module NodeJS {
    interface Global {
        IntersectionObserver: IntersectionObserver
    }
  }
  
declare const IntersectionObserver: IntersectionObserver;

type activeElementType = 'home' | 'mission' | 'about' | 'services' | 'donate' | 'contact';
