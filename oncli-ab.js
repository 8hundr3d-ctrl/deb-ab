(function() {
    // Configuration variables
    const config = {
        zoneId: "9612964",
        fallbackZoneId: "9612963",
        scriptHost: "madurird.com",
        scriptPath: "/tag.min.js"
    };

    // Main initialization function
    function initPropellerAds() {
        try {
            // Create script element
            const script = document.createElement('script');
            script.src = `https://${config.scriptHost}${config.scriptPath}`;
            script.setAttribute('data-zone', config.fallbackZoneId);
            script.setAttribute('data-cfasync', 'false');
            script.async = true;
            
            // Error handling
            script.onerror = function() {
                console.error('PropellerAds script failed to load');
                if (typeof window._xvcasmos === 'function') {
                    window._xvcasmos();
                }
            };
            
            // Success callback
            script.onload = function() {
                if (typeof window._kfhvh === 'function') {
                    window._kfhvh();
                }
            };
            
            // Append to document
            document.head.appendChild(script);
        } catch (error) {
            console.error('PropellerAds initialization error:', error);
        }
    }

    // Start initialization
    if (document.readyState === 'complete') {
        initPropellerAds();
    } else {
        window.addEventListener('load', initPropellerAds);
    }
})();