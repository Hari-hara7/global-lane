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
