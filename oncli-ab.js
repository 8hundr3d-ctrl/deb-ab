(function () {
    // Your official PropellerAds zone ID
    const zoneId = "9612964"; // use your Popunder zone here

    function initPropellerAds() {
        try {
            const script = document.createElement('script');
            script.src = `https://oamoameevee.net/2/${zoneId}`;
            script.setAttribute('data-cfasync', 'false');
            script.async = true;

            // Optional: Debugging support
            script.onerror = function () {
                console.error('PropellerAds script failed to load.');
            };
            script.onload = function () {
                console.log('PropellerAds loaded successfully.');
            };

            document.head.appendChild(script);
        } catch (error) {
            console.error('PropellerAds init error:', error);
        }
    }

    if (document.readyState === 'complete') {
        initPropellerAds();
    } else {
        window.addEventListener('load', initPropellerAds);
    }
})();
