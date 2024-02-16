
function ind() {
    const defaultLanguage = navigator.language || navigator.browserLanguage;
    return defaultLanguage.split('-')[0];
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: ind(), includedLanguages: 'fr,en,es,de,it'},
        'google_translate_element'
    );
}

document.addEventListener('DOMContentLoaded', function () {
    const d = document.querySelector('.goog-te-combo')
    console.log(d)
})