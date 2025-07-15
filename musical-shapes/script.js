document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');
  const container = document.querySelector('.keys');
  let currentlyPlayingAudio = null;

  keys.forEach(key => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.random() * (containerWidth - 100);
    const randomY = Math.random() * (containerHeight - 100);
    key.style.left = `${randomX}px`;
    key.style.top = `${randomY}px`;
  });

  document.querySelectorAll('.key img').forEach(img => {
    img.addEventListener('click', function () {
      const key = this.parentNode.dataset.key;
      const audio = document.querySelector(`audio[data-key="${key}"]`);
      if (!audio) return;

      if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
        document.querySelector('.key.playing')?.classList.remove('playing');
      }

      if (audio.paused) {
        audio.play();
        this.parentNode.classList.add('playing');
        currentlyPlayingAudio = audio;
      } else {
        audio.pause();
        this.parentNode.classList.remove('playing');
        currentlyPlayingAudio = null;
      }
    });
  });

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
