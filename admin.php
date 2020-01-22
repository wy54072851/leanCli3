<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]

// 定义应用目录
define('APP_PATH', dirname(dirname(__DIR__)) . '/fdc/app/');
// 绑定入口模块
define('BIND_MODULE','admin');
// 读取自动生成定义文件
// $build = include __DIR__ . '/build.php';
// 加载框架引导文件
require dirname(dirname(__DIR__)) . '/fdc/thinkphp/start.php';
// 运行自动生成
// think\Build::run($build);
