function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

/*
include('./static/js/components/chat.js');
include('./static/js/constants.js');
include('./static/js/components/cardsCarousel.js');
include('./static/js/components/botTyping.js');
include('./static/js/components/charts.js');
include('./static/js/components/collapsible.js');
include('./static/js/components/dropDown.js');
include('./static/js/components/location.js');
include('./static/js/components/pdfAttachment.js');
include('./static/js/components/quickReplies.js');
include('./static/js/components/suggestionButtons.js');
*/
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/chat.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/constants.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/cardsCarousel.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/botTyping.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/charts.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/collapsible.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/dropDown.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/location.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/pdfAttachment.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/quickReplies.js');
include('https://cdn.jsdelivr.net/gh/Frank-Sin99/test@main/ChatbotWidget-main3/static/js/components/suggestionButtons.js');