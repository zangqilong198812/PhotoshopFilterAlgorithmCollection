# Blend Filter

* BasicBlend 不透明叠加
* colorBurnBlend 颜色加深
* colorDodge 颜色减弱
* LinearBurn 线性加深
* LinearDodge 线性减弱
* Lighten 变亮
* Darkten 变暗
* Overlay 叠加
* SoftLight 柔光
* HardLight 强光
* Screen 滤色


# 如何调试shader

当然方法和工具很多了。
我说说我的方法。
效果如何
![](https://ws3.sinaimg.cn/large/006tNc79ly1fmwsolf2zcg30x20gi7wh.gif)
## glslViewer

glslViewer是我们用到的第一个工具。
github地址如下。
https://github.com/patriciogonzalezvivo/glslViewer

功能也很容易理解
> Live-coding console tool that renders GLSL Shaders. Every file you use (frag/vert shader, images and geometries) are watched for modification, so they can be updated on the fly.

实时渲染shader文件。

mac上怎么安装呢？


```
brew update
brew upgrade
brew install glslviewer
```

只要安装了brew非常简单。

怎么跑shader呢？
在命令行找到你的shader文件。
`glslViewer test.frag`
成了。

问题是我的预览图为啥不用命令行？
因为你还需要安装一个sublime。

## sublime Text3

sublime Text3我就不多介绍了。名气太大了。
利用sublime Text3的一个插件`glslViewer`（名字一样）就可以实时渲染shader了。

插件地址：https://packagecontrol.io/packages/glslViewer

安装方法用package control即可。

## 代码高亮

也是sublime的一个插件。
`OpenGL Shading Language (GLSL)`

安装方法如下。

	1	Open up the Command Palette. (Command+Shift+P or Control+Shift+P)
	2	Run Package Control: Install Package command, find and install OpenGL Shading Language (GLSL) package.
	3	Restart Sublime Text. (if required)


## 如何加载纹理
很简单。把需要装载的纹理图片和shader文件放在同一个文件目录。
![](https://ws2.sinaimg.cn/large/006tNc79ly1fmwsyn6jvzj30ct026wei.jpg)
这时候用sublime 打开shader文件。
sublime就会提示你是否加载纹理。
![](https://ws4.sinaimg.cn/large/006tNc79ly1fmwszjvoknj30i303kjre.jpg)
按回车即可。
最后他会提示你，纹理名字和纹理分辨率是多少。
复制粘贴进我们的代码就行了。
![](https://ws4.sinaimg.cn/large/006tNc79ly1fmwt0f9kxuj30g0047q3e.jpg)


## 最后效果就是下面这样啦

![](https://ws3.sinaimg.cn/large/006tNc79ly1fmwsuvijdjj30bj08r3zh.jpg)


