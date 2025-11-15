// Fallback to prevent runtime errors when Google gtag is blocked or not yet loaded
(function(){
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      window.gtag = function(){ window.dataLayer.push(arguments); };
    }
  }
})();