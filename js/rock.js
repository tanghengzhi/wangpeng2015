$(document).ready(function(){
    $(window).scroll( function() {               //滚动时触发
        var top = $(document).scrollTop(),       //获取滚动条到顶部的垂直高度
            height = $(window).height();         //获得可视浏览器的高度
        if(top > 100){
                $("#backtop").css({
                    bottom: '140px', 
                    display: 'inline'
                });
        }
    });

    $('#backtop').hover(function() {
    	/* Stuff to do when the mouse enters the element */
		$(this).css({
			background: 'url(../images/backtop2.png) left top no-repeat'
		});
    }, function() {
    	$(this).css({
			background: 'url(../images/backtop1.png) left top no-repeat'
		});
    });

    /*点击回到顶部*/
    $('#backtop').click(function(){
    	$(this).css({
			background: 'url(../images/backtop2.png) left top no-repeat'
		});
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

});
