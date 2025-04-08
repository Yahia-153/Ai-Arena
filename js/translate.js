const translationCache = new Map();

async function translatePage() {
    const targetLang = document.getElementById('langSelect').value;
    document.body.classList.add('translating');

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                if (node.parentNode.tagName === 'SCRIPT' || 
                    node.parentNode.tagName === 'STYLE') {
                    return NodeFilter.FILTER_REJECT;
                }
                return node.textContent.trim() ? 
                    NodeFilter.FILTER_ACCEPT : 
                    NodeFilter.FILTER_SKIP;
            }
        }
    );

    let node;
    while (node = walker.nextNode()) {
        const text = node.textContent.trim();
        const cacheKey = `${text}_${targetLang}`;
        
        if (translationCache.has(cacheKey)) {
            node.textContent = translationCache.get(cacheKey);
            continue;
        }

        try {
            const response = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&dt=bd&dt=qc&dt=rm&dt=ex&q=${encodeURIComponent(text)}`
            );
            const data = await response.json();
            if (data?.[0]?.[0]?.[0]) {
                let translatedText = data[0][0][0];
                if (targetLang === 'ar') {
                    translatedText = translatedText
                        .replace(/\s+/g, ' ')
                        .replace(/(\d+)/g, '$1')
                        .trim();
                }
                translationCache.set(cacheKey, translatedText);
                node.textContent = translatedText;
            }
        } catch (error) {
            console.error('Translation failed:', error);
        }
        await new Promise(resolve => setTimeout(resolve, ));
    }

    document.body.classList.remove('translating');
}
