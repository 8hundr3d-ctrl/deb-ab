// propellerads-script-3.js
(function() {
    // Configuration
    const config = {
        domain: 'oamoameevee.net', // Reversed domain (likely intentional obfuscation)
        zoneId: 9611751,
        scriptPath: '/400/',
        callbackName: '_mzzzsn' // Preserved callback name
    };

    function loadPropellerAdsScript() {
        try {
            const script = document.createElement('script');
            script.src = `https://${config.domain}${config.scriptPath}${config.zoneId}`;
            
            // Error/success handler
            const handleLoad = () => {
                if (typeof window[config.callbackName] === 'function') {
                    window[config.callbackName]();
                }
            };
            
            script.onerror = handleLoad;
            script.onload = handleLoad;

            // Try to append to body or document element
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