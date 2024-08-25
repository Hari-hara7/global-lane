// GSAP Animations for Hero Section
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".btn-primary", { duration: 1, y: 100, opacity: 0, delay: 1, ease: "power2.out" });

// GSAP Hover Effect for Services Icons
document.querySelectorAll('.services .service i').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, { duration: 0.3, scale: 1.3 });
    });
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, { duration: 0.3, scale: 1 });
    });
});




if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}




let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
// Prevent the mini-infobar from appearing on mobile
e.preventDefault();
// Stash the event so it can be triggered later.
deferredPrompt = e;

// Show the download prompt after 3 seconds
setTimeout(() => {
    // Create a custom prompt
    if (deferredPrompt) {
        // Create a custom notification or modal
        const promptContainer = document.createElement('div');
        promptContainer.innerHTML = `
            <div style="position: fixed; bottom: 20px; left: 20px; background: #fff; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <p>Install our app for a better experience!</p>
                <button id="install-btn">Install</button>
            </div>
        `;
        document.body.appendChild(promptContainer);
        
        document.getElementById('install-btn').addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        });
    }
}, 3000);
});

window.addEventListener('appinstalled', () => {
console.log('PWA installed');
});

