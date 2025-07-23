// propellerads-script-2.js
(function() {
    // Configuration
    const config = {
        domain: 'groleegni.net',
        zoneId: 9612970,
        scriptPath: '/401/'
    };

    function loadPropellerAdsScript() {
        try {
            // Create script element
            const script = document.createElement('script');
            script.src = `https://${config.domain}${config.scriptPath}${config.zoneId}`;
            
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
        }
    }

    // Initialize
    if (document.readyState === 'complete' || 
        document.readyState === 'interactive') {
        loadPropellerAdsScript();
    } else {
        window.addEventListener('DOMContentLoaded', loadPropellerAdsScript);
    }
})();