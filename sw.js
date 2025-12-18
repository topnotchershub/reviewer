self.addEventListener('fetch', function(event) {
  // Simple pass-through. Real offline caching for GAS is very complex
  // due to CORS, but this file is required to trigger the "Install" prompt.
});