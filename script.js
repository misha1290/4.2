function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  function changeImageSize(value) {
    const image = document.querySelector('.slider__image');
    image.style.width = value + '%';
  }
  function changeImageSize(value) {
    const image = document.querySelector('.slider__image');
    const newSize = value * 3;
    image.src = `https://via.placeholder.com/${newSize}x${newSize}`;
  }
  const sliderInput = document.querySelector('.slider__input');
  
  sliderInput.addEventListener('input', debounce((event) => {
    const newSize = event.target.value;
    changeImageSize(newSize);
  }, 100));

const box = document.getElementById('box');

function moveBox(event) {
  const x = event.clientX - box.offsetWidth / 2;
  const y = event.clientY - box.offsetHeight / 2;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}
const debouncedMoveBox = _.debounce(moveBox, 100);
document.addEventListener('mousemove', debouncedMoveBox);
