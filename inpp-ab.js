// propellerads-script-4.js
(function() {
    // Configuration
    const config = {
        domain: 'saptorge.com', // Reversed domain (likely "engineer" or similar)
        zoneId: 9614131,
        scriptPath: '/400/',
        callbackName: '_mlgwnj' // Preserved callback name
    };

    function loadPropellerAdsScript() {
        try {
            const script = document.createElement('script');
            script.src = `https://${config.domain}${config.scriptPath}${config.zoneId}`;
            
            // Combined error/success handler
            const handleLoad = () => {
                if (typeof window[config.callbackName] === 'function') {
                    window[config.callbackName]();
                }
            };
            
            script.onerror = handleLoad;
            script.onload = handleLoad;

            // Try to append to document
            const target = document.body || document.documentElement;
            if (target) {
                target.appendChild(script);
            } else {
                // Fallback if DOM isn't ready
                document.addEventListener('DOMContentLoaded', () => {
                    (document.body || document.documentElement).appendChild(script);
                });
            }
        } catch (error) {
            console.error('Error loading PropellerAds script:', error);
            if (typeof window[config.callbackName] === 'function') {
                window[config.callbackName]();
            }
        }
    }

    // Initialize based on document ready state
    if (document.readyState === 'complete' || 
        document.readyState === 'interactive') {
        loadPropellerAdsScript();
    } else {
        window.addEventListener('DOMContentLoaded', loadPropellerAdsScript);
    }
})();