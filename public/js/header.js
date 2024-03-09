window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;

    // Calculate opacity (1 when at top, 0 when scrolled past header)
    const opacity = 1 - scrollPosition / headerHeight;

    // Apply opacity and move header up
    header.style.opacity = Math.max(opacity, 0);
    header.style.transform = `translateY(-${scrollPosition}px)`;
});