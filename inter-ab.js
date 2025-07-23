(function () {
    const config = {
        domain: 'groleegni.net',
        zoneId: 9612970,
        scriptPath: '/401/'
    };

    function loadInterstitial() {
        try {
            const script = document.createElement('script');
            script.src = `https://${config.domain}${config.scriptPath}${config.zoneId}`;
            script.setAttribute('data-cfasync', 'false');
            script.async = true;

            script.onload = function () {
                console.log('Interstitial ad script loaded.');
            };

            script.onerror = function () {
                console.error('Failed to load interstitial ad script.');
            };

            // Append when DOM is ready
            const appendTarget = document.body || document.documentElement;
            if (appendTarget) {
                appendTarget.appendChild(script);
            } else {
                document.addEventListener('DOMContentLoaded', () => {
                    const fallbackTarget = document.body || document.documentElement;
                    if (fallbackTarget) fallbackTarget.appendChild(script);
                });
            }
        } catch (err) {
            console.error('Interstitial script initialization error:', err);
        }
    }

    // Load based on DOM state
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        loadInterstitial();
    } else {
        window.addEventListener('DOMContentLoaded', loadInterstitial);
    }
})();
