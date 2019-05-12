# PWCat-Personal（Profile Website - Personal Editon）
## Introduction - 介绍
### Summary - 概要  
个人主页网站。

### Features - 特性
1. 个人主页网站组成：
- 主要由三个板块构成：home、works、about。
- 想要增加自己需要的页面，只需要修改代码中导航栏中的链接和增加页面即可。
- 网站的背景放在 `img` 文件夹中，命名为 `cool-background.png`，以及其他资源也放在此文件夹中。

2. 效果截图：
- Desktop 截图：  
![Desktop 截图](readme_img/图1.PNG)

- Mobile 截图：  
![Mobile 截图](readme_img/图2.PNG)

## Development - 开发
1. 项目结构概述：
- 主页放在 src 文件夹的根目录
- 其他页面放在对应的文件夹中
- 其中 mokit 为一个单独添加的项目（所以它的 CSS 等文件放在自己的文件夹中）
- 背景图片设置成，当屏幕宽度小于一定值时，背景图片消失，变成咖啡色。防止图片失真（因为背景图片不一定能找到矢量图）。
- 如果当页面元素流式排列足够长时，不需要考虑整个 body 高度的设置，因为在所有大小的屏幕上，都显示不下，可以不用考虑屏幕宽度过小或屏幕高度过高导致页面放不下、撑不开的问题。
- 当页面元素比较少时，需要进行更多响应式方面的考虑：页面放不下、撑不开的问题。前者高度变为无，后者高度变为 100vh 即可解决。以下分别为解决方案的 CSS 和 JavaScript。
```css
.height-add{
    height: 100vh !important;
}
```

```js
/* 当一定宽度下，文档流的高度小于窗口的高度时，添加此样式，让高度充满整个窗口。 */
/* 自己通过浏览器调试，看不同宽度区间对应 body 标签盒模型的高度，写一个宽度到高度的映射表（写成 mapping 函数）。此对应的函数映射中的值是我自己的，需要自己调试修改成自己的（因为元素内容不同，导致文档流宽高度会不同）。 */
 height = document.body.clientHeight;
 width = document.body.clientWidth;

 alert(height);
 alert(width);

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
```

2. CSS 文件结构：
- main.css 为整个网站主要的结构样式（如导航栏、页脚等）
- common.css 为一些通用的样式
- 各自页面独有的样式 CSS 文件

## Support - 支持
### Contact - 联系
- E-mail：Goonecat@foxmail.com

## License - 版权信息
PWCat-Personal is released under the GPL license. See [LICENSE](https://github.com/Marlous/PWCat-Personal/blob/master/LICENSE) for additional details.