
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
    services: [
      { url: 'sip:webexuser@countyofgloucester.calls.webex.com', name: 'Clerk' },
      // 'sip:brian.tretler@corebts.webex.com'
    ],
  });

}

document.addEventListener('alpine:init', setup);

