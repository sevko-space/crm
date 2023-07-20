$(document).ready(function () {
  let position = 0;
  let slidesToShow = 5;
  const slidesToScroll = 2;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.slider-btn-prev');
  const btnNext = $('.slider-btn-next');
  const itemsCount = item.length;
  const itemWidth = container.width() / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  item.each(function (index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });
  btnNext.click(function () {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    console.log(itemsLeft, itemWidth);
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  btnPrev.click(function () {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };
  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
  };
  checkBtns();
});

$(document).ready(function () {
  if (document.documentElement.clientWidth < 1100) {
    let position = 0;
    let slidesToShowMob = 3;
    const slidesToScroll = 2;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.slider-btn-prev');
    const btnNext = $('.slider-btn-next');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShowMob;
    const movePosition = slidesToScroll * itemWidth;
    item.each(function (index, item) {
      $(item).css({
        minWidth: itemWidth,
      });
    });

    btnNext.click(function () {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShowMob * itemWidth) / itemWidth;
      console.log(itemsLeft, itemWidth);
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
    });

    btnPrev.click(function () {
      const itemsLeft = Math.abs(position) / itemWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      track.css({
        transform: `translateX(${position}px)`
      });
    };

    const checkBtns = () => {
      btnPrev.prop('disabled', position === 0);
      btnNext.prop('disabled', position <= -(itemsCount - slidesToShowMob) * itemWidth);
    };
    checkBtns();
  };
});