// 当页面滚动时 注册滚动那事件
$(window).scroll(function () {
    // 判断页面滚动的距离是否大于零
    $(window).scrollTop() > 0 ? $('.elevator').fadeIn() : $('.elevator').fadeOut();
    // console.log(($('.three').offset().top));

    // if ($(window).scrollTop() >= $('.seven').offset().top) {
    //     $('.elevator ul li').eq(6).addClass('active');
    // }
    // 页面滚动的距离,对应的li 高亮显示
    if ($(window).scrollTop() >= $('.seven').offset().top) {
        active (6);
    }else if ($(window).scrollTop() >= $('.six').offset().top){
        active (5);
    }else if ($(window).scrollTop() >= $('.five').offset().top){
        active (4);
    }else if ($(window).scrollTop() >= $('.four').offset().top){
        active (3);
    }else if ($(window).scrollTop() >= $('.three').offset().top){
        active (2);
    }else if ($(window).scrollTop() >= $('.two').offset().top){
        active (1);
    }else if ($(window).scrollTop() >= $('.one').offset().top){
        active (0);
    }
    // 
    // active (,5);
    // active (,4);
    // active ('.four',3);
    // active ('.three',2);
    // active ('.two',1);
    // active ('.one',0);
    

});

// 获取每一层的高度 封装函数
function getTop(index, div) {
    // 给每一层li 注册点击事件 页面滚动到相应的高度
    $('.elevator ul li').eq(index).on('click', function () {
        $('html,body').animate({
            scrollTop: $(div).offset().top
        })
    });
};
getTop(0, '.one');
getTop(1, '.two');
getTop(2, '.three');
getTop(3, '.four');
getTop(4, '.five');
getTop(5, '.six');
getTop(6, '.seven');
// 点击back按钮  回到顶部
$('.elevator ul li').eq(7).on('click', function () {
    $('.elevator ul li').removeClass('active');
    $('html,body').animate({
        scrollTop: 0
    },200)
});


// 封装滚动  距离 对应li高亮显示
function active (index) {
        $('.elevator ul li').eq(index).addClass('active').siblings().removeClass('active');    
};