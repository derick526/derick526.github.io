const watchLiveBtn = document.getElementById('watch-live-btn');

watchLiveBtn.addEventListener('click', () => {
    const watchLiveSection = document.getElementById('watch-live-now');
    watchLiveSection.scrollIntoView({ behavior: 'smooth' });
});