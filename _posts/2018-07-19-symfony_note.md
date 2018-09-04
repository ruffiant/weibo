---
layout: post
title:   symfony 官方视频整理
date:    2018-7-19 10:24:20
categories: [php] 
tag: [教程] 
---

* content
{:toc}


#创建symfony
===============


      composer create-project symfony/skeleton the_spacebar      

>the_spacebar为项目名

>执行项目
      php -S 127.0.0.1:8000 -t public

      If you want to use Nginx or Apache for local development, you can! See http://bit.ly/symfony-web-servers.
      

#phpstorm 设置
===============

>服务器安装

      composer require server

>服务器运行
  ./bin/console server:run

>安装插件

      PHP Annotations
      PHP Toolbox
      Symfony Plugin

#路由
===============

>安装注释路由

      composer require annotations

/**
     * @Route("/news/{slug}/heart", name="article_toggle_heart", methods={"POST"})
     */


#Installing the Security Checker 安全检查程序
===============

[https://knpuniversity.com/screencast/symfony/flex-recipes#play]({{ "/screencast/symfony/flex-recipes#play" | prepend: https://knpuniversity.com}} "备注")

[https://symfony.sh/]({{ "/" | prepend: symfony.sh }} "symfony.sh")

composer require logger. 安装日志
composer require mailer. 安装email

      Flex Aliases 
      The first superpower is the alias system. Find your browser and go to symfony.sh.
      
      This is the Symfony "recipe" server: we'll talk about what that means next. Search for "security". Ah, here's a package called sensiolabs/security-checker. And below, it has aliases: sec-check, sec-checker, security-check and more.
      
      Thanks to Flex, we can say composer require sec-checker, or any of these aliases, and it will translate that into the real package name. Yep, it's just a shortcut system. But the result is really cool. Need a logger? composer require logger. Need to send emails? composer require mailer. Need a tractor beam? composer require, wait, no, we can't help with that one.
      
      Back in composer.json, yep! Composer actually added sensiolabs/security-checker:
>安装
      composer require sec-checker
>可以执行
      php bin/console security:check


#安装模板引擎
===============
[https://twig.symfony.com/]({{ "/" | prepend: https://twig.symfony.com }} "模板引擎网站")
      

      composer require twig

使用模板引擎 需要在 controller 引用 AbstractController

      ... lines 1 - 8
      class ArticleController extends AbstractController
      {
      ... lines 11 - 21
          public function show($slug)
          {
              return $this->render('article/show.html.twig', [
      ... line 25
              ]);
          }
      }

     
# Web Debug Toolbar & the Profiler! debug插件Profiler
===============

>安装

      composer require profiler --dev

在controller  `dump($slug, $this);` 可以打印相关信息
 在模板 twig `{{ dump() }}` 可以打印相关信息
 

#Debugging & Packs
===============

    composer require debug --dev  安装
    composer unpack debug   删除

#Assets: CSS & JavaScript
===============

安装
composer require asset

     >         {-% block stylesheets %-}
     > ... line 10
     >                <link rel="stylesheet" href="{-{ asset('css/font-awesome.css') }-}">
     > ... line 12
     >         {-% endblock %-}


#生成URLs
===============

>查看路由列表

      ./bin/console debug:router
      路由写法
          /**
           * @Route("/news/{slug}", name="article_show")
           */
            
      {-{ path('article_show', {slug: 'why-asteroids-taste-like-bacon'}) }-}使用路由


#JavaScript & Page-Specific Assets
===============



{-% block javascripts %-}
    {-{ parent() }-}  继承parent 添加js
    <script src="{-{ asset('js/article_show.js') }-}"></script>

{-% endblock %-}


#JSON API Endpoint 列表(重点)
===============


return new Response(json_encode(['hearts' => 5])).
return new JsonResponse(['hearts' => rand(5, 100)]:


#  Services   (重点)
===============

查看日志
tail -f var/log/dev.log


      class ArticleController extends AbstractController
      {
      ... lines 13 - 38
          /**
           * @Route("/news/{slug}/heart", name="article_toggle_heart", methods={"POST"})
           */
          public function toggleArticleHeart($slug, LoggerInterface $logger)
          {
      ... lines 44 - 48
          }
      }