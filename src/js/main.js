 /* 当一定宽度下，文档流的高度小于窗口的高度时，添加 height-add 样式（height 为 100vh），让高度充满整个窗口。 */
 height = document.body.clientHeight;
 width = document.body.clientWidth;

 if(mapping(width) < height)
 {
    $("body").addClass("height-add");
 }

 function mapping(width_param)
 {
     if(width_param >= 768)
     {
        return 411.7;
     }
     if((width_param < 767) && (width_param >= 540))
     {
        return 616.7;
     }
     if((width_param < 540) && (width_param >= 472))
     {
        return 636.2;
     }
     if((width_param < 472) && (width_param >= 342))
     {
        return 679.2;
     }
     if(width_param < 342)
     {
        return 703.2;
     }
 }