// 引入node内置http模块
const http = require('http');

// 配置端口
const PORT = 3000;

// 创建http服务
const server = http.createServer((req, res) => {
  // 设置响应头：文本html，编码utf-8
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  // 获取当前服务器时间
  const serverTime = new Date().toLocaleString('zh-CN');

  // HTML页面内容
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body {
            font-family: "Microsoft Yahei", sans-serif;
            text-align: center;
            margin-top: 100px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <div>Hello World！我是杨景壬，我的第一个AI开发的网站</div>
    <div style="margin-top:30px;font-size:20px;color:#555;">
        当前服务器时间：${serverTime}
    </div>
</body>
</html>
  `;

  // 返回页面
  res.end(html);
});

// 启动监听
server.listen(PORT, () => {
  console.log(`服务器启动成功！访问地址：http://localhost:${PORT}`);
});