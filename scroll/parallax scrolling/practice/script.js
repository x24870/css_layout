function init() {
  // let w = $('body').width();
  let h = document.documentElement.scrollHeight;
  // console.log(w, h);

  let text1_top = Math.floor(h / 4) + 'px';
  $('#text1').css('top', text1_top);
  let text2_top = Math.floor(h / 1.5) + 'px';
  $('#text2').css('top', text2_top);
  // console.log(text1_top, text2_top);
}

function onResize() {
  $(window).resize(() => {
    init();
  });
}

function onScroll() {
  $(window).scroll(() => {
    let val = window.scrollY;
    
    let top = $('#text1').css('top');
    top = parseInt(top.slice(0, -2)) + 1;
    $('#text1').css('top', top+'px');
    console.log(top);
  });
}

$(document).ready(() => {
  init();
  onResize();
  onScroll();
});