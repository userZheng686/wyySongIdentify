# 网易云音乐  歌曲识别算法demo

## 技术来源：

[网易云官方插件](https://fn.music.163.com/g/chrome-extension-home-page-beta/)

## 前置要求：

1.需要下载**[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)**这个库 并且本地运行起来

2.运行起来后 了解如何发送请求  文档[在这](https://neteasecloudmusicapi.vercel.app/#/) 。了解完后先请求登录一次（在服务端记录你的登录状态）

## 用法：

1.先将module里面的文件拷贝到NeteaseCloudMusicApi库下面的module文件夹里面，其中里面的sessionId和realData你可以填页面自动生成的数据 具体的生成方法在页面里面。

2.页面打开会自动播放音乐，里面的音乐链接可以替换成你自己的音乐，指纹大概会6-7s生成一次，页面会自动打印出来。你也可以去fpArr里面取。

3.result.json是对应`https://interface.music.163.com/api/music/audio/match`的请求结果。如果你已经了解过NeteaseCloudMusicApi这个库就已经知道数据都是加密过的，但是这个接口的数据是不用加密的（请求数据和响应数据）

4.Ke是最终生成指纹的方法 将加工后的buffer数据放进去就可以了

## 注意事项：

1.sandbox.js根据你自己的需求改（个人推荐不建议改）里面的getSessionId和createBuffer功能分别是生成sessionId和加工原buff数据（PitchProcessor.js提取的音频数据）

2.不要改wasm里面的代码
