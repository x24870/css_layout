let text1_top = 0;
let text2_top = 0;

function init() {
    let h = document.documentElement.scrollHeight;

    text1_top = h * 0.08;
    text2_top = h * 0.4;
    $('#text1').css('top', text1_top + 'px');
    $('#text2').css('top', text2_top + 'px');
    // console.log(text1_top, text2_top);

    $('#bottom-gradient').css('top', h * 0.85 + 'px');
    $('#bottom-gradient').css('height', h * 0.15 + 'px');

    // console.log(document.documentElement.clientHeight,
    //     document.documentElement.offsetHeight,
    //     document.documentElement.scrollHeight)

}

function onResize() {
    $(window).resize(() => {
        init();
    });
}

function onScroll() {
    $(window).scroll(() => {
        let scroll_val = window.scrollY;

        let text1_top_offset = text1_top + scroll_val * 0.6;
        $('#text1').css('top', text1_top_offset + 'px');

        let text2_top_offset = text2_top + scroll_val * 0.45;
        $('#text2').css('top', text2_top_offset + 'px');

        let mount_top_offset = -scroll_val * 0.2;
        $('#mountain').css('top', mount_top_offset + 'px');

        let tree_top_offset = -scroll_val * 0.08;
        $('#tree').css('top', tree_top_offset + 'px');

        // disable scroll prompt
        if (scroll_val > 10) {
            $('.scroll-prompt').css('display', 'none');
        } else {
            $('.scroll-prompt').css('display', 'block');
        }
    });
}

$(document).ready(() => {
    init();
    onResize();
    onScroll();
});