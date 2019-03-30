export const createScroller = (
  observerCb: (el: Element) => (IntersectionObserverCallback) => void,
  options: IntersectionObserverInit,
) =>
  document.querySelectorAll('.target-section').forEach(el => {
    const checkMission = observerCb;
    const cb = checkMission(el);
    const observer = new IntersectionObserver(cb, options);
    return observer.observe(el);
  });
