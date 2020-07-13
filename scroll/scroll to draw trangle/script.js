const triangle = document.getElementById('triangle');
const length = triangle.getTotalLength();

// start position of the drawing
triangle.style.strokeDasharray = length;

// hide the triangle by offsetting dash
triangle.style.strokeDashoffset = length;

window.addEventListener('scroll', showTriangle);
function showTriangle(){
    /* following log are printed out by Chrome */
    console.log(document.body.scrollHeight);//always 2000
    console.log(document.body.scrollTop);//always 0
console.log(document.documentElement.scrollTop);// 0 ~ 1267 (scroll position)
console.log(document.documentElement.scrollHeight);// always 2030 (scroll bar height)
console.log(document.documentElement.clientHeight);// always 762 (the height of scroll)
    /* document.body.scrollTop and document.documentElement.scrollTop only take effect of eachone, it's little trick to adapt on different browser */
    let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollpercent);
    let draw = length * scrollpercent;
    triangle.style.strokeDashoffset = length - draw;
}

// reference: https://shubo.io/element-size-scrolling/
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_svg_scrolldrawing