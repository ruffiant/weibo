---
layout: post
title:  LINUX命令整理(中文)
date:    2017-11-6 13:17:30+0800
categories: [系统] 
tag: [linux] 
---
* content
{:toc}


#简单命令
===============
在云服务器 ECS Linux CentOS 7 下重启服务不再通过 service  操作，而是通过 systemctl 操作
systemctl restart network 启动网卡
      echo － 显示一行文本
      date

      查看磁盘剩余空间的数量，输入 df:
      同样地，显示空闲内存的数量，输入命令 free。
      pwd — 打印出当前工作目录名
      
      which 
#cd — 更改目录
===============
    
      快捷键	运行结果
      cd	更改工作目录到你的家目录。
      cd -	更改工作目录到先前的工作目录。
      cd ~user_name	更改工作目录到用户家目录。例如, cd ~bob 会更改工作目录到用户“bob”的家目录。

#ls — 列出目录内容
===============

      表 4-1: ls 命令选项
      选项	长选项	描述
      -a	--all	列出所有文件，甚至包括文件名以圆点开头的默认会被隐藏的隐藏文件。
      -d	--directory	通常，如果指定了目录名，ls 命令会列出这个目录中的内容，而不是目录本身。 把这个选项与 -l 选项结合使用，可以看到所指定目录的详细信息，而不是目录中的内容。
      -F	--classify	这个选项会在每个所列出的名字后面加上一个指示符。例如，如果名字是 目录名，则会加上一个'/'字符。
      -h	--human-readable	当以长格式列出时，以人们可读的格式，而不是以字节数来显示文件的大小。
      -l		以长格式显示结果。
      -r	--reverse	以相反的顺序来显示结果。通常，ls 命令的输出结果按照字母升序排列。
      -S		命令输出结果按照文件大小来排序。
      -t		按照修改时间来排序。
      
      表 4-2: ls 长格式列表的字段
      字段	含义
      -rw-r--r--	对于文件的访问权限。第一个字符指明文件类型。在不同类型之间， 开头的“－”说明是一个普通文件，“d”表明是一个目录。其后三个字符是文件所有者的 访问权限，再其后的三个字符是文件所属组中成员的访问权限，最后三个字符是其他所 有人的访问权限。这个字段的完整含义将在第十章讨论。
      1	文件的硬链接数目。参考随后讨论的关于链接的内容。
      root	文件属主的用户名。
      root	文件所属用户组的名字。
      32059	以字节数表示的文件大小。
      2007-04-03 11:05	上次修改文件的时间和日期。
      oo-cd-cover.odf	文件名。



#用 less 浏览文件内容
===============

    less 命令是一个用来浏览文本文件的程序。纵观 Linux 系统，有许多人类可读的文本文件。less 程序为我们检查文本文件 提供了方便。

      less 命令是这样使用的：
      less filename


      表 4-3: less 命令
      命令	行为
      Page UP or b	向上翻滚一页
      Page Down or space	向下翻滚一页
      UP Arrow	向上翻滚一行
      Down Arrow	向下翻滚一行
      G	移动到最后一行
      1G or g	移动到开头一行
      /charaters	向前查找指定的字符串
      n	向前查找下一个出现的字符串，这个字符串是之前所指定查找的
      h	显示帮助屏幕
      q	退出 less 程序
      


# Linux 系统中的目录
===============

      目录	评论
      /	根目录，万物起源。
      /bin	包含系统启动和运行所必须的二进制程序。
      /boot	
      包含 Linux 内核、初始 RAM 磁盘映像（用于启动时所需的驱动）和 启动加载程序。
      
      有趣的文件：
      
      /boot/grub/grub.conf or menu.lst， 被用来配置启动加载程序。
      /boot/vmlinuz，Linux 内核。
      /dev	这是一个包含设备结点的特殊目录。“一切都是文件”，也适用于设备。 在这个目录里，内核维护着所有设备的列表。
      /etc	
      这个目录包含所有系统层面的配置文件。它也包含一系列的 shell 脚本， 在系统启动时，这些脚本会开启每个系统服务。这个目录中的任何文件应该是可读的文本文件。
      
      有趣的文件：虽然/etc 目录中的任何文件都有趣，但这里只列出了一些我一直喜欢的文件：
      
      /etc/crontab， 定义自动运行的任务。
      /etc/fstab，包含存储设备的列表，以及与他们相关的挂载点。
      /etc/passwd，包含用户帐号列表。
      /home	在通常的配置环境下，系统会在/home 下，给每个用户分配一个目录。普通用户只能 在自己的目录下写文件。这个限制保护系统免受错误的用户活动破坏。
      /lib	包含核心系统程序所使用的共享库文件。这些文件与 Windows 中的动态链接库相似。
      /lost+found	每个使用 Linux 文件系统的格式化分区或设备，例如 ext3文件系统， 都会有这个目录。当部分恢复一个损坏的文件系统时，会用到这个目录。除非文件系统 真正的损坏了，那么这个目录会是个空目录。
      /media	在现在的 Linux 系统中，/media 目录会包含可移动介质的挂载点， 例如 USB 驱动器，CD-ROMs 等等。这些介质连接到计算机之后，会自动地挂载到这个目录结点下。
      /mnt	在早些的 Linux 系统中，/mnt 目录包含可移动介质的挂载点。
      /opt	这个/opt 目录被用来安装“可选的”软件。这个主要用来存储可能 安装在系统中的商业软件产品。
      /proc	这个/proc 目录很特殊。从存储在硬盘上的文件的意义上说，它不是真正的文件系统。 相反，它是一个由 Linux 内核维护的虚拟文件系统。它所包含的文件是内核的窥视孔。这些文件是可读的， 它们会告诉你内核是怎样监管计算机的。
      /root	root 帐户的家目录。
      /sbin	这个目录包含“系统”二进制文件。它们是完成重大系统任务的程序，通常为超级用户保留。
      /tmp	这个/tmp 目录，是用来存储由各种程序创建的临时文件的地方。一些配置导致系统每次 重新启动时，都会清空这个目录。
      /usr	在 Linux 系统中，/usr 目录可能是最大的一个。它包含普通用户所需要的所有程序和文件。
      /usr/bin	/usr/bin 目录包含系统安装的可执行程序。通常，这个目录会包含许多程序。
      /usr/lib	包含由/usr/bin 目录中的程序所用的共享库。
      /usr/local	这个/usr/local 目录，是非系统发行版自带，却打算让系统使用的程序的安装目录。 通常，由源码编译的程序会安装在/usr/local/bin 目录下。新安装的 Linux 系统中，会存在这个目录， 但却是空目录，直到系统管理员放些东西到它里面。
      /usr/sbin	包含许多系统管理程序。
      /usr/share	/usr/share 目录包含许多由/usr/bin 目录中的程序使用的共享数据。 其中包括像默认的配置文件、图标、桌面背景、音频文件等等。
      /usr/share/doc	大多数安装在系统中的软件包会包含一些文档。在/usr/share/doc 目录下， 我们可以找到按照软件包分类的文档。
      /var	除了/tmp 和/home 目录之外，相对来说，目前我们看到的目录是静态的，这是说， 它们的内容不会改变。/var 目录是可能需要改动的文件存储的地方。各种数据库，假脱机文件， 用户邮件等等，都位于在这里。
      /var/log	这个/var/log 目录包含日志文件、各种系统活动的记录。这些文件非常重要，并且 应该时时监测它们。其中最重要的一个文件是/var/log/messages。注意，为了系统安全，在一些系统中， 你必须是超级用户才能查看这些日志文件。


#文件操作
===============


##cp — 复制文件和目录
===============
cp item1 item2


##cp 选项
===============

      选项	意义
      -a, --archive	复制文件和目录，以及它们的属性，包括所有权和权限。 通常，复本具有用户所操作文件的默认属性。
      -i, --interactive	在重写已存在文件之前，提示用户确认。如果这个选项不指定， cp 命令会默认重写文件。
      -r, --recursive	递归地复制目录及目录中的内容。当复制目录时， 需要这个选项（或者-a 选项）。
      -u, --update	当把文件从一个目录复制到另一个目录时，仅复制 目标目录中不存在的文件，或者是文件内容新于目标目录中已经存在的文件。
      -v, --verbose	显示翔实的命令操作信息

## cp 实例
===============

      命令	运行结果
      cp file1 file2	复制文件 file1 内容到文件 file2。如果 file2 已经存在， file2 的内容会被 file1 的内容重写。如果 file2 不存在，则会创建 file2。
      cp -i file1 file2	这条命令和上面的命令一样，除了如果文件 file2 存在的话，在文件 file2 被重写之前， 会提示用户确认信息。
      cp file1 file2 dir1	复制文件 file1 和文件 file2 到目录 dir1。目录 dir1 必须存在。
      cp dir1/* dir2	使用一个通配符，在目录 dir1 中的所有文件都被复制到目录 dir2 中。 dir2 必须已经存在。
      cp -r dir1 dir2	复制目录 dir1 中的内容到目录 dir2。如果目录 dir2 不存在， 创建目录 dir2，操作完成后，目录 dir2 中的内容和 dir1 中的一样。 如果目录 dir2 存在，则目录 dir1 (和目录中的内容)将会被复制到 dir2 中。
      

##mv — 移动/重命名文件和目录
===============

mv item1 item2

      mv 选项
      选项	意义
      -i --interactive	在重写一个已经存在的文件之前，提示用户确认信息。 如果不指定这个选项，mv 命令会默认重写文件内容。
      -u --update	当把文件从一个目录移动另一个目录时，只是移动不存在的文件， 或者文件内容新于目标目录相对应文件的内容。
      -v --verbose	当操作 mv 命令时，显示翔实的操作信息。

   mv 实例
      mv file1 file2	移动 file1 到 file2。如果 file2 存在，它的内容会被 file1 的内容重写。 如果 file2 不存在，则创建 file2。 每种情况下，file1 不再存在。
      mv -i file1 file2	除了如果 file2 存在的话，在 file2 被重写之前，用户会得到 提示信息外，这个和上面的选项一样。
      mv file1 file2 dir1	移动 file1 和 file2 到目录 dir1 中。dir1 必须已经存在。
      mv dir1 dir2	如果目录 dir2 不存在，创建目录 dir2，并且移动目录 dir1 的内容到 目录 dir2 中，同时删除目录 dir1。如果目录 dir2 存在，移动目录 dir1（及它的内容）到目录 dir2。

##mkdir — 创建目录
===============

mkdir directory...


##rm — 删除文件和目录
===============

         rm 选项
      选项	意义
      -i, --interactive	在删除已存在的文件前，提示用户确认信息。 如果不指定这个选项，rm 会默默地删除文件
      -r, --recursive	递归地删除文件，这意味着，如果要删除一个目录，而此目录 又包含子目录，那么子目录也会被删除。要删除一个目录，必须指定这个选项。
      -f, --force	忽视不存在的文件，不显示提示信息。这选项覆盖了“--interactive”选项。
      -v, --verbose	在执行 rm 命令时，显示翔实的操作信息。

      rm 实例
      命令	运行结果
      rm file1	默默地删除文件
      rm -i file1	除了在删除文件之前，提示用户确认信息之外，和上面的命令作用一样。
      rm -r file1 dir1	删除文件 file1, 目录 dir1，及 dir1 中的内容。
      rm -rf file1 dir1	同上，除了如果文件 file1，或目录 dir1 不存在的话，rm 仍会继续执行。


##ln — 创建硬链接和符号链接
===============


      ln file link
      硬链接
      ln fun fun-hard
      软连接
      ln -s fun fun-sym

#通配符
===============

      通配符	意义
      *	匹配任意多个字符（包括零个或一个）
      ?	匹配任意一个字符（不包括零个）
      [characters]	匹配任意一个属于字符集中的字符
      [!characters]	匹配任意一个不是字符集中的字符
      [[:class:]]	匹配任意一个属于指定字符类中的字符




##普遍使用的字符类
===============

      字符类	意义
      [:alnum:]	匹配任意一个字母或数字
      [:alpha:]	匹配任意一个字母
      [:digit:]	匹配任意一个数字
      [:lower:]	匹配任意一个小写字母
      [:upper:]	匹配任意一个大写字母

##通配符范例
===============

      模式	匹配对象
      *	所有文件
      g*	文件名以“g”开头的文件
      b*.txt	以"b"开头，中间有零个或任意多个字符，并以".txt"结尾的文件
      Data???	以“Data”开头，其后紧接着3个字符的文件
      [abc]*	文件名以"a","b",或"c"开头的文件
      BACKUP.[0-9][0-9][0-9]	以"BACKUP."开头，并紧接着3个数字的文件
      [[:upper:]]*	以大写字母开头的文件
      [![:digit:]]*	不以数字开头的文件
      *[[:lower:]123]	文件名以小写字母结尾，或以 “1”，“2”，或 “3” 结尾的文件


#重定向
===============

      ls -l /bin/usr > ls-output.txt
      使用”>>“操作符，将导致输出结果添加到文件内容之后。如果文件不存在，文件会 被创建，就如使用了”>”操作符。把它放到测试中：
      ls -l /usr/bin >> ls-output.txt
      错误定向输出
      ls -l /bin/usr > ls-output.txt 2>&1

      重定向标准错误缺乏专用的重定向操作符。为了重定向标准错误，我们必须参考其文件描述符。 一个程序可以在几个编号的文件流中的任一个上产生输出。虽然我们已经将这些文件流的前 三个称作标准输入、输出和错误，shell 内部分别将其称为文件描述符0、1和2
      
      
##cat － 连接文件
===============

      cat 命令读取一个或多个文件，然后复制它们到标准输出，就像这样:
      
      cat [file]



##sort － 排序文本行
===============



##uniq － 报道或省略重复行
===============



##grep － 打印匹配行
===============

      grep 是个很强大的程序，用来找到文件中的匹配文本。这样使用 grep 命令：
      grep pattern [file...]

##wc － 打印文件中换行符，字，和字节个数
===============



##head － 输出文件第一部分
===============

head -n 5 ls-output.txt


##tail - 输出文件最后一部分
===============


##tee - 从标准输入读取数据，并同时写到标准输出和文件
===============

ls /usr/bin | tee ls.txt | grep zip


#echo 
===============

       算术操作符
      操作符	说明
      +	加
      -	减
      *	乘
      /	除（但是记住，因为展开只是支持整数除法，所以结果是整数。）
      %	取余，只是简单的意味着，“余数”
      **	取幂


##花括号展开
===============

      [me@linuxbox ~]$ mkdir Pics
      [me@linuxbox ~]$ cd Pics
      [me@linuxbox Pics]$ mkdir {2007..2009}-0{1..9} {2007..2009}-{10..12}
      [me@linuxbox Pics]$ ls
      2007-01 2007-07 2008-01 2008-07 2009-01 2009-07
      2007-02 2007-08 2008-02 2008-08 2009-02 2009-08
      2007-03 2007-09 2008-03 2008-09 2009-03 2009-09
      2007-04 2007-10 2008-04 2008-10 2009-04 2009-10
      2007-05 2007-11 2008-05 2008-11 2009-05 2009-11
      2007-06 2007-12 2008-06 2008-12 2009-06 2009-12

      命令替换允许我们把一个命令的输出作为一个展开模式来使用：
      
      [me@linuxbox ~]$ echo $(ls)
      Desktop Documents ls-output.txt Music Pictures Public Templates
      Videos


###双引号
===============

如果你把文本放在双引号中， shell 使用的特殊字符，都失去它们的特殊含义，被当作普通字符来看待

      [me@linuxbox ~]$ ls -l two words.txt
      ls: cannot access two: No such file or directory
      ls: cannot access words.txt: No such file or directory

###单引号
===============
      [me@linuxbox ~]$ echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
      text /home/me/ls-output.txt a b foo 4 me
      [me@linuxbox ~]$ echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER"
      text ~/*.txt   {a,b} foo 4 me
      [me@linuxbox ~]$ echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER'
      text ~/*.txt  {a,b} $(echo foo) $((2+2)) $USER


###转义字符
===============

      [me@linuxbox ~]$ echo "The balance for user $USER is: \$5.00"
      The balance for user me is: $5.00
      

      转义序列	含义
      \a	响铃（”警告”－导致计算机嘟嘟响）
      \b	退格符
      \n	新的一行。在类 Unix 系统中，产生换行。
      \r	回车符
      \t	制表符
      

#clear － 清空屏幕
===============



#history － 显示历史列表内容
===============
      在默认情况下，bash 会存储你所输入的最后 500 个命令。在随后的章节里，我们会知道 怎样调整这个数值。比方说我们想要找到列出目录 /usr/bin 内容的命令。一种方法，我们可以这样做：
      
      [me@linuxbox ~]$ history 
       grep /usr/bin

       历史命令
      按键	行为
      Ctrl-p	移动到上一个历史条目。类似于上箭头按键。
      Ctrl-n	移动到下一个历史条目。类似于下箭头按键。
      Alt-<	移动到历史列表开头。
      Alt->	移动到历史列表结尾，即当前命令行。
      Ctrl-r	反向递增搜索。从当前命令行开始，向上递增搜索。
      Alt-p	反向搜索，不是递增顺序。输入要查找的字符串，然后按下 Enter，执行搜索。
      Alt-n	向前搜索，非递增顺序。
      Ctrl-o	执行历史列表中的当前项，并移到下一个。如果你想要执行历史列表中一系列的命令，这很方便。


##历史展开命令
===============

序列	行为
!!	重复最后一次执行的命令。可能按下上箭头按键和 enter 键更容易些。
!number	重复历史列表中第 number 行的命令。
!string	重复最近历史列表中，以这个字符串开头的命令。
!?string	重复最近历史列表中，包含这个字符串的命令。

#光标移动命令
===============

      按键	行动
      Ctrl-a	移动光标到行首。
      Ctrl-e	移动光标到行尾。
      Ctrl-f	光标前移一个字符；和右箭头作用一样。
      Ctrl-b	光标后移一个字符；和左箭头作用一样。
      Alt-f	光标前移一个字。
      Alt-b	光标后移一个字。
      Ctrl-l	清空屏幕，移动光标到左上角。clear 命令完成同样的工作。


#修改文本
===============
      按键	行动
      Ctrl-d	删除光标位置的字符。
      Ctrl-t	光标位置的字符和光标前面的字符互换位置。
      Alt-t	光标位置的字和其前面的字互换位置。
      Alt-l	把从光标位置到字尾的字符转换成小写字母。
      Alt-u	把从光标位置到字尾的字符转换成大写字母。

#剪切和粘贴命令
===============
      按键	行动
      Ctrl-k	剪切从光标位置到行尾的文本。
      Ctrl-u	剪切从光标位置到行首的文本。
      Alt-d	剪切从光标位置到词尾的文本。
      Alt-Backspace	剪切从光标位置到词头的文本。如果光标在一个单词的开头，剪切前一个单词。
      Ctrl-y	把剪切环中的文本粘贴到光标位置。
      

#自动补全命令
===============

      按键	行动
      Alt-?	显示可能的自动补全列表。在大多数系统中，你也可以完成这个通过按 两次 tab 键，这会更容易些。
      Alt-*	插入所有可能的自动补全。当你想要使用多个可能的匹配项时，这个很有帮助。


#权限
===============
http://billie66.github.io/TLCL/book/chap10.html


id – 显示用户身份号



chmod – 更改文件模式


umask – 设置默认的文件权限



su – 以另一个用户的身份来运行 shell



sudo – 以另一个用户的身份来执行命令




##chown – 更改文件所有者
===============
      chown 参数实例
      参数	结果
      bob	把文件所有者从当前属主更改为用户 bob。
      bob:users	把文件所有者改为用户 bob，文件用户组改为用户组 users。
      :admins	把文件用户组改为组 admins，文件所有者不变。
      bob:	文件所有者改为用户 bob，文件用户组改为用户 bob 登录系统时所属的用户组。
      
      


chgrp – 更改文件组所有权



passwd – 更改用户密码


#进程
===============

##      进程状态
===============

      状态	含义
      R	运行中。这意味着，进程正在运行或准备运行。
      S	正在睡眠。进程没有运行，而是，正在等待一个事件， 比如说，一个按键或者网络分组。
      D	不可中断睡眠。进程正在等待 I/O，比方说，一个磁盘驱动器的 I/O。
      T	已停止. 已经指示进程停止运行。稍后介绍更多。
      Z	一个死进程或“僵尸”进程。这是一个已经终止的子进程，但是它的父进程还没有清空它。 （父进程没有把子进程从进程表中删除）
      <	一个高优先级进程。这可能会授予一个进程更多重要的资源，给它更多的 CPU 时间。 进程的这种属性叫做 niceness。具有高优先级的进程据说是不好的（less nice）， 因为它占用了比较多的 CPU 时间，这样就给其它进程留下很少时间。
      N	低优先级进程。 一个低优先级进程（一个“好”进程）只有当其它高优先级进程被服务了之后，才会得到处理器时间。
      
##ps – 报告当前进程快照
===============


       BSD 风格的 ps 命令列标题
      标题	含义
      USER	用户 ID. 进程的所有者。
      %CPU	以百分比表示的 CPU 使用率
      %MEM	以百分比表示的内存使用率
      VSZ	虚拟内存大小
      RSS	进程占用的物理内存的大小，以千字节为单位。
      START	进程启动的时间。若它的值超过24小时，则用天表示。


##top – 显示任务
===============
[显示任务]( http://billie66.github.io/TLCL/book/chap11.html )
            top 命令信息字段
            行号	字段	意义
            1	top	程序名。
            14:59:20	当前时间。
            up 6:30	这是正常运行时间。它是计算机从上次启动到现在所运行的时间。 在这个例子里，系统已经运行了六个半小时。
            2 users	有两个用户登录系统。
            load average:	加载平均值是指，等待运行的进程数目，也就是说，处于可以运行状态并共享 CPU 的进程个数。 这里展示了三个数值，每个数值对应不同的时间段。第一个是最后60秒的平均值， 下一个是前5分钟的平均值，最后一个是前15分钟的平均值。若平均值低于1.0，则指示计算机 工作不忙碌。
            2	Tasks:	总结了进程数目和这些进程的各种状态。
            3	Cpu(s):	这一行描述了 CPU 正在进行的活动的特性。
            0.7%us	0.7% 的 CPU 被用于用户进程。这意味着进程在内核之外。
            1.0%sy	1.0%的 CPU 时间被用于系统（内核）进程。
            0.0%ni	0.0%的 CPU 时间被用于"nice"（低优先级）进程。
            98.3%id	98.3%的 CPU 时间是空闲的。
            0.0%wa	0.0%的 CPU 时间来等待 I/O。
            4	Mem:	展示物理内存的使用情况。
            5	Swap:	展示交换分区（虚拟内存）的使用情况。

jobs – 列出活跃的任务

bg – 把一个任务放到后台执行

fg – 把一个任务放到前台执行

kill – 给一个进程发送信号

killall – 杀死指定名字的进程

shutdown – 关机或重启系统

#vi
===============
            vi 使用 ex 命令来执行查找和替代操作（vi 中叫做“替换”）。将整个文件中的单词“Line”更改为“line”， 输入以下命令：
      
      {% highlight PHP %}
:%s/Line/line/g
{% endhighlight %}


##编程配置
===============

打开语法高亮 :set syntax=sh。// syntax=sh

:set hlsearch 查找标记为高亮

:set tabstop=4 设置tab空格数

:set autoindent

打开 “auto indent” 功能。这导致 vim 能对新的文本行缩进与刚输入的文本行相同的列数。 对于许多编程结构来说，这就加速了输入。停止缩进，输入 Ctrl-d。

通过把这些命令（没有开头的冒号字符）添加到你的 ~/.vimrc 文件中，这些改动会永久生效。


##光标移动按键
===============

      按键	移动光标
      l or 右箭头	向右移动一个字符
      h or 左箭头	向左移动一个字符
      j or 下箭头	向下移动一行
      k or 上箭头	向上移动一行
      0 (零按键)	移动到当前行的行首。
      ^	移动到当前行的第一个非空字符。
      $	移动到当前行的末尾。
      w	移动到下一个单词或标点符号的开头。
      W	移动到下一个单词的开头，忽略标点符号。
      b	移动到上一个单词或标点符号的开头。
      B	移动到上一个单词的开头，忽略标点符号。
      Ctrl-f or Page Down	向下翻一页
      Ctrl-b or Page Up	向上翻一页
      numberG	移动到第 number 行。例如，1G 移动到文件的第一行。
      G	移动到文件末尾。


##      文本删除命令
===============

      命令	删除的文本
      x	当前字符
      3x	当前字符及其后的两个字符。
      dd	当前行。
      5dd	当前行及随后的四行文本。
      dW	从光标位置开始到下一个单词的开头。
      d$	从光标位置开始到当前行的行尾。
      d0	从光标位置开始到当前行的行首。
      d^	从光标位置开始到文本行的第一个非空字符。
      dG	从当前行到文件的末尾。
      d20G	从当前行到文件的第20行。

##复制命令
===============

      命令	复制的内容
      yy	当前行。
      5yy	当前行及随后的四行文本。
      yW	从当前光标位置到下一个单词的开头。
      y$	从当前光标位置到当前行的末尾。
      y0	从当前光标位置到行首。
      y^	从当前光标位置到文本行的第一个非空字符。
      yG	从当前行到文件末尾。
      y20G	从当前行到文件的第20行。


##查找
===============


条目	含义
:	冒号字符运行一个 ex 命令。
%	指定要操作的行数。% 是一个快捷方式，表示从第一行到最后一行。另外，操作范围也 可以用 1,5 来代替（因为我们的文件只有5行文本），或者用 1,$ 来代替，意思是 “ 从第一行到文件的最后一行。” 如果省略了文本行的范围，那么操作只对当前行生效。
s	指定操作。在这种情况下是，替换（查找与替代）。
/Line/line	查找类型与替代文本。
g	这是“全局”的意思，意味着对文本行中所有匹配的字符串执行查找和替换操作。如果省略 g，则 只替换每个文本行中第一个匹配的字符串。

##替换确认按键
===============

      按键	行为
      y	执行替换操作
      n	跳过这个匹配的实例
      a	对这个及随后所有匹配的字符串执行替换操作。
      q or esc	退出替换操作。
      l	执行这次替换并退出。l 是 “last” 的简写。
      Ctrl-e, Ctrl-y	分别是向下滚动和向上滚动。用于查看建议替换的上下文。

##文件之间转换
===============


      从这个文件转到下一个文件，使用这个 ex 命令：
      
     {% highlight PHP %}
 :n
{% endhighlight %}

      
      
      回到先前的文件使用：
      
   {% highlight PHP %}
   :N
{% endhighlight %}

      另外，上面所描述的转换方法，vim（和一些版本的 vi）也提供了一些 ex 命令，这些命令使 多个文件更容易管理。我们可以查看正在编辑的文件列表，使用:buffers 命令。运行这个 命令后，屏幕顶部就会显示出一个文件列表：


#软件包管理
===============

例如：搜索一个 yum 资源库来查找 emacs 文本编辑器，使用以下命令：

yum search emacs


##软件包安装命令
===============

风格	|命令
Debian	|apt-get update; apt-get install package_name
Red Hat	|yum install package_name


##通过软件包文件来安装软件
===============


底层软件包安装命令
风格	|命令
Debian	|dpkg --install package_file
Red Hat	|rpm -i package_file

注意：因为这项技术使用底层的 rpm 程序来执行安装任务，所以没有运行依赖解析。 如果 rpm 程序发现缺少了一个依赖，则会报错并退出。


##卸载软件
===============


软件包删除命令
风格	|命令
Debian	|apt-get remove package_name
Red Hat	|yum erase package_name


##经过资源库来更新软件包
===============


 软件包更新命令
风格	|命令
Debian	|apt-get update; apt-get upgrade
Red Hat	|yum update

经过软件包文件来升级软件

如果已经从一个非资源库网站下载了一个软件包的最新版本，可以安装这个版本，用它来 替代先前的版本：


##底层软件包升级命令
===============

风格	|命令
Debian	|dpkg --install package_file
Red Hat	|rpm -U package_file

注意：rpm 程序安装一个软件包和升级一个软件包所用的选项是不同的，而 dpkg 程序所用的选项是相同的。


##列出所安装的软件包
===============


列出所安装的软件包命令
风格	|命令
Debian	|dpkg --list
Red Hat	|rpm -qa


##确定是否安装了一个软件包
===============


软件包状态命令
风格	|命令
Debian	|dpkg --status package_name
Red Hat	|rpm -q package_name


##显示所安装软件包的信息
===============


查看软件包信息命令
风格	|命令
Debian	|apt-cache show package_name
Red Hat	|yum info package_name


##查找安装了某个文件的软件包
===============


包文件识别命令
风格	|命令
Debian	|dpkg --search file_name
Red Hat	|rpm -qf file_name



#归档和备份
===============


##gzip – 压缩或者展开文件
===============
gzip |选项
 选项 	|说明
-c |	把输出写入到标准输出，并且保留原始文件。也有可能用--stdout 和--to-stdout 选项来指定。
-d 	|解压缩。正如 gunzip 命令一样。也可以用--decompress 或者--uncompress 选项来指定.
-f 	|强制压缩，即使原始文件的压缩文件已经存在了，也要执行。也可以用--force 选项来指定。
-h |	显示用法信息。也可用--help 选项来指定。
-l |	列出每个被压缩文件的压缩数据。也可用--list 选项。
-r |	若命令的一个或多个参数是目录，则递归地压缩目录中的文件。也可用--recursive 选项来指定。
-t |测试压缩文件的完整性。也可用--test 选项来指定。
-v |	显示压缩过程中的信息。也可用--verbose 选项来指定。
-number |	设置压缩指数。number 是一个在1（最快，最小压缩）到9（最慢，最大压缩）之间的整数。 数值1和9也可以各自用--fast 和--best 选项来表示。默认值是整数6。 
      
      测试了压缩文件 的完整性，使用了-t 和-v 选项
      [me@linuxbox ~]$ ls -l /etc 
       gzip > foo.txt.gz
      浏览压缩文本文件的内容
      [me@linuxbox ~]$ zcat foo.txt.gz \|  less

bzip2 – 块排序文件压缩器

正如我们所看到的，bzip2 程序使用起来和 gzip 程序一样。我们之前讨论的 gzip 程序的所有选项（除了-r） ，bzip2 程序同样也支持。注意，然而，压缩级别选项（-number）对于 bzip2 程序来说，有少许不同的含义。 伴随着 bzip2 程序，有 bunzip2 和 bzcat 程序来解压缩文件。bzip2 文件也带有 bzip2recover 程序，其会 试图恢复受损的 .bz2 文件。


##归档程序：
===============

http://billie66.github.io/TLCL/book/chap19.html

###tar – 磁带打包工具
===============

tar mode[options] pathname...

 tar |模式 
模式 	|说明
c 	|为文件和／或目录列表创建归档文件。
x 	|抽取归档文件。
r 	|追加具体的路径到归档文件的末尾。
t 	|列出归档文件的内容。

要想列出归档文件的内容，我们可以这样做：
      [me@linuxbox ~]$ tar tvf playground.tar

抽取单个文件
tar xf archive.tar pathname


     find playground -name 'file-A' \| tar cf - --files-from=-   \| gzip > playground.tgz

在这个例子里面，我们使用 find 程序产生了一个匹配文件列表，然后把它们管道到 tar 命令中。 如果指定了文件名“-”，则其被看作是标准输入或输出，正是所需（顺便说一下，使用“-”来表示 标准输入／输出的惯例，也被大量的其它程序使用）。这个 --file-from 选项（也可以用 -T 来指定） 导致 tar 命令从一个文件而不是命令行来读入它的路径名列表。最后，这个由 tar 命令产生的归档 文件被管道到 gzip 命令中，然后创建了压缩归档文件 playground.tgz。此 .tgz 扩展名是命名 由 gzip 压缩的 tar 文件的常规扩展名。有时候也会使用 .tar.gz 这个扩展名。






###zip – 打包和压缩文件
===============


还有文件同步程序：

rsync – 同步远端文件和目录

      rsync options source destination

让我们试着对一些本地文件使用 rsync 命令。首先，清空我们的 foo 目录：

[me@linuxbox ~]$ rm -rf foo/*
下一步，我们将同步 playground 目录和它在 foo 目录中相对应的副本
rsync -av playground foo

我们包括了-a 选项（递归和保护文件属性）和-v 选项（冗余输出）， 来在 foo 目录中制作一个 playground 目录的镜像。当这个命令执行的时候， 我们将会看到一系列的文件和目录被复制。在最后，我们将看到一条像这样的总结信息：


#正则表达式
===============

http://billie66.github.io/TLCL/book/chap20.html

##grep
===============
grep [options] regex [file...]

grep -l bzip dirlist*.txt

grep |选项
 选项 |	描述
-i |	忽略大小写。不会区分大小写字符。也可用--ignore-case 来指定。
-v |	不匹配。通常，grep 程序会打印包含匹配项的文本行。这个选项导致 grep 程序只会打印不包含匹配项的文本行。也可用--invert-match 来指定。
-c 	|打印匹配的数量（或者是不匹配的数目，若指定了-v 选项），而不是文本行本身。 也可用--count 选项来指定。
-l 	|打印包含匹配项的文件名，而不是文本行本身，也可用--files-with-matches 选项来指定。
-L 	|相似于-l 选项，但是只是打印不包含匹配项的文件名。也可用--files-without-match 来指定。
-n 	|在每个匹配行之前打印出其位于文件中的相应行号。也可用--line-number 选项来指定。
-h 	|应用于多文件搜索，不输出文件名。也可用--no-filename 选项来指定。 



##元字符和文本
===============


#文本处理
===============

cat – 连接文件并且打印到标准输出
按照格式输出文件内容



##sort – 给文本行排序
===============


常见的 sort 程序选项 
选项 	|长选项 	|描述
-b 	|--ignore-leading-blanks |	默认情况下，对整行进行排序，从每行的第一个字符开始。这个选项导致 sort 程序忽略 每行开头的空格，从第一个非空白字符开始排序。
-f 	|--ignore-case| 	让排序不区分大小写。
-n 	|--numeric-sort| 	基于字符串的数值来排序。使用此选项允许根据数字值执行排序，而不是字母值。
-r |	--reverse |	按相反顺序排序。结果按照降序排列，而不是升序。
-k 	|--key=field1[,field2] 	|对从 field1到 field2之间的字符排序，而不是整个文本行。看下面的讨论。
-m 	|--merge 	|把每个参数看作是一个预先排好序的文件。把多个文件合并成一个排好序的文件，而没有执行额外的排序。
-o |	--output=file 	|把排好序的输出结果发送到文件，而不是标准输出。
-t |	--field-separator=char |	定义域分隔字符。默认情况下，域由空格或制表符分隔。



##uniq – 报告或者省略重复行
===============


uniq 会删除任意重复行，并且把结果发送到标准输出。 它常常和 sort 程序一块使用，来清理重复的输出。

常用的 uniq 选项
 选项 |	说明
-c 	|输出所有的重复行，并且每行开头显示重复的次数。
-d 	|只输出重复行，而不是特有的文本行。
-f n |	忽略每行开头的 n 个字段，字段之间由空格分隔，正如 sort 程序中的空格分隔符；然而， 不同于 sort 程序，uniq 没有选项来设置备用的字段分隔符。
-i 	|在比较文本行的时候忽略大小写。
-s n| 	跳过（忽略）每行开头的 n 个字符。
-u 	|只输出独有的文本行。这是默认的。



##cut – 从每行中删除文本区域
===============




这个 cut 程序被用来从文本行中抽取文本，并把其输出到标准输出。它能够接受多个文件参数或者 标准输入。

cut 程序选择项 
选项 	|说明
-c char_list |	从文本行中抽取由 char_list 定义的文本。这个列表可能由一个或多个逗号 分隔开的数值区间组成。
-f field_list 	|从文本行中抽取一个或多个由 field_list 定义的字段。这个列表可能 包括一个或多个字段，或由逗号分隔开的字段区间。
-d delim_char| 	当指定-f 选项之后，使用 delim_char 做为字段分隔符。默认情况下， 字段之间必须由单个 tab 字符分隔开。
--complement 	|抽取整个文本行，除了那些由-c 和／或-f 选项指定的文本。 


##paste – 合并文件文本行
===============



##join – 
===============

基于某个共享字段来联合两个文件的文本行


##comm – 逐行比较两个有序的文件
===============





##diff – 逐行比较文件
===============


diff 更改命令 
改变 |	说明
r1ar2 |	把第二个文件中位置 r2 处的文件行添加到第一个文件中的 r1 处。
r1cr2 |	用第二个文件中位置 r2 处的文本行更改（替代）位置 r1 处的文本行。
r1dr2 |	删除第一个文件中位置 r1 处的文本行，这些文本行将会出现在第二个文件中位置 r2 处。

diff 上下文模式更改指示符 
指示符 	|意思
blank 	|上下文显示行。它并不表示两个文件之间的差异。
- |	删除行。这一行将会出现在第一个文件中，而不是第二个文件内。
+ |	添加行。这一行将会出现在第二个文件内，而不是第一个文件中。
! |	更改行。将会显示某个文本行的两个版本，每个版本会出现在更改组的各自部分。


##patch – 给原始文件打补丁*
===============





##tr – 翻译或删除字符*
===============




##sed – 用于筛选和转换文本的流编辑器*
===============





##aspell – 交互式拼写检查器*
===============


#格式化输出
===============
http://billie66.github.io/TLCL/book/chap22.html




##nl – 添加行号
===============





##fold – 限制文件列宽
===============




##fmt – 一个简单的文本格式转换器
===============





##pr – 让文本为打印做好准备
===============





##printf – 格式化数据并打印出来
===============





##groff – 一个文件格式化系统
===============



#打印
===============


    
##pr —— 转换需要打印的文本文件
===============




   
## lpr —— 打印文件
===============




  
##  lp —— 打印文件（System V）
===============




    
##a2ps —— 为 PostScript 打印机格式化文件
===============




    
##lpstat —— 显示打印机状态信息
===============




    
##lpq —— 显示打印机队列状态
===============



   
## lprm —— 取消打印任务
===============
    
##cancel —— 取消打印任务（System V）
===============


#编译程序
===============


##make - 维护程序的工具
===============

      tar tzvf tarfile \| head ---  
      ./configure
      make
make install

      注意：因为我们是这个源码的“维护者”，当我们编译它的时候，我们把它保存在 ~/src 目录下。 由你的系统发行版源码会把源码安装在 /usr/src 目录下，而供多个用户使用的源码，通常安装在 /usr/local/src 目录下。


#ftp下载文件
===============

      [me@linuxbox ~]$ mkdir src
      [me@linuxbox ~]$ cd src
      [me@linuxbox src]$ ftp ftp.gnu.org
      Connected to ftp.gnu.org.
      220 GNU FTP server ready.
      Name (ftp.gnu.org:me): anonymous
      230 Login successful.
      Remote system type is UNIX.
      Using binary mode to transfer files.
      ftp> cd gnu/diction
      250 Directory successfully changed.
      ftp> ls
      200 PORT command successful. Consider using PASV.
      150 Here comes the directory listing.
      -rw-r--r-- 1 1003 65534 68940 Aug 28 1998 diction-0.7.tar.gz
      -rw-r--r-- 1 1003 65534 90957 Mar 04 2002 diction-1.02.tar.gz
      -rw-r--r-- 1 1003 65534 141062 Sep 17 2007 diction-1.11.tar.gz
      226 Directory send OK.
      ftp> get diction-1.11.tar.gz
      local: diction-1.11.tar.gz remote: diction-1.11.tar.gz
      200 PORT command successful. Consider using PASV.
      150 Opening BINARY mode data connection for diction-1.11.tar.gz
      (141062 bytes).
      226 File send OK.
      141062 bytes received in 0.16 secs (847.4 kB/s)
      ftp> bye
      221 Goodbye.
      [me@linuxbox src]$ ls
      diction-1.11.tar.gz


# Shell 脚本
===============

      \#!/bin/bash  开头


##添加PATH变量
===============

export PATH=~/bin:"$PATH"




#IF
===============


{% highlight ssh %}
      if commands; then
           commands
      [elif commands; then
           commands...]
      [else
           commands]
      fi
{% endhighlight %}


##测试      
===============


test expression


###测试文件表达式 
===============

表达式 	|如果下列条件为真则返回True
file1 -ef file2 |	file1 和 file2 拥有相同的索引号（通过硬链接两个文件名指向相同的文件）。
file1 -nt file2| 	file1新于 file2。
file1 -ot file2| 	file1早于 file2。
-b file |	file 存在并且是一个块（设备）文件。
-c file |	file 存在并且是一个字符（设备）文件。
-d file |	file 存在并且是一个目录。
-e file |	file 存在。
-f file |	file 存在并且是一个普通文件。
-g file |	file 存在并且设置了组 ID。
-G file |	file 存在并且由有效组 ID 拥有。
-k file |	file 存在并且设置了它的“sticky bit”。
-L file |	file 存在并且是一个符号链接。
-O file |	file 存在并且由有效用户 ID 拥有。
-p file |	file 存在并且是一个命名管道。
-r file |	file 存在并且可读（有效用户有可读权限）。
-s file |	file 存在且其长度大于零。
-S file |	file 存在且是一个网络 socket。
-t fd 	fd| 是一个定向到终端／从终端定向的文件描述符 。 这可以被用来决定是否重定向了标准输入／输出错误。
-u file |	file 存在并且设置了 setuid 位。
-w file |	file 存在并且可写（有效用户拥有可写权限）。
-x file |	file 存在并且可执行（有效用户有执行／搜索权限）。



###测试字符串表达式
===============

 表达式 |	如果下列条件为真则返回True
string |	string 不为 null。
-n string| 	字符串 string 的长度大于零。
-z string |	字符串 string 的长度为零。

string1 = string2

string1 == string2
	string1 和 string2 相同。 单或双等号都可以，不过双等号更受欢迎。
string1 != string2 |	string1 和 string2 不相同。
string1 > string2 |	sting1 排列在 string2 之后。
string1 < string2 |	string1 排列在 string2 之前。


      警告：当与 test 一块使用的时候， > 和 < 表达式操作符必须用引号引起来（或者是用反斜杠转义）。 如果不这样，它们会被 shell 解释为重定向操作符，造成潜在的破坏结果。 同时也要注意虽然 bash 文档声明排序遵从当前语系的排列规则，但并不这样。将来的 bash 版本，包含 4.0， 使用 ASCII（POSIX）排序规则。
      


### 测试整数表达式 
===============

表达式 |	如果为真...
integer1 -eq integer2 	|integer1 等于 integer2。
integer1 -ne integer2 |	integer1 不等于 integer2。
integer1 -le integer2 |	integer1 小于或等于 integer2。
integer1 -lt integer2 |	integer1 小于 integer2。
integer1 -ge integer2| 	integer1 大于或等于 integer2。
integer1 -gt integer2 |	integer1 大于 integer2。



      这里是一个演示以上表达式用法的脚本：
      
{% highlight shell %}
      #!/bin/bash
      # test-integer: evaluate the value of an integer.
      INT=-5
      if [ -z "$INT" ]; then
          echo "INT is empty." >&2
          exit 1
      fi
{% endhighlight %}

  
使用 [[ ]] 和 =~ 字符串表达式操作符，我们能够这样来改进脚本：

if [[ "$INT" =~ ^-?[0-9]+$ ]]; then

匹配正则表达式


#读取键盘输入
===============


##read 
===============



 read 选项 
选项 |说明
-a array |	把输入赋值到数组 array 中，从索引号零开始。我们 将在第36章中讨论数组问题。
-d delimiter |	用字符串 delimiter 中的第一个字符指示输入结束，而不是一个换行符。
-e 	|使用 Readline 来处理输入。这使得与命令行相同的方式编辑输入。
-n num 	|读取 num 个输入字符，而不是整行。
-p prompt |	为输入显示提示信息，使用字符串 prompt。
-r 	|Raw mode. 不把反斜杠字符解释为转义字符。
-s |Silent mode. 不会在屏幕上显示输入的字符。当输入密码和其它确认信息的时候，这会很有帮助。
-t seconds 	|超时. 几秒钟后终止输入。若输入超时，read 会返回一个非零退出状态。
-u fd |	使用文件描述符 fd 中的输入，而不是标准输入。



##while 
===============


{% highlight shell%}
      #!/bin/bash
      # while-count: display a series of numbers
      count=1
      while [ $count -le 5 ]; do
          echo $count
          count=$((count + 1))
      done
      echo "Finished."

{% endhighlight %}



##until 
===============

until 命令与 while 非常相似，除了当遇到一个非零退出状态的时候， while 退出循环， 而 until 不退出。一个 until 循环会继续执行直到它接受了一个退出状态零。在我们的 while-count 脚本中， 我们继续执行循环直到 count 变量的数值小于或等于5。我们可以得到相同的结果，通过在脚本中使用 


#检查错误
===============

http://billie66.github.io/TLCL/book/chap31.html


#case 分支
===============

{% highlight PHP %}
case word in
    [pattern [| pattern]...) commands ;;]...
esac
{% endhighlight %}

      case 模式实例
 模式 	|描述
a) 	|若单词为 “a”，则匹配
[[:alpha:]]) |	若单词是一个字母字符，则匹配
???) 	|若单词只有3个字符，则匹配
*.txt) 	|若单词以 “.txt” 字符结尾，则匹配
*) 	|匹配任意单词。把这个模式做为 case 命令的最后一个模式，是一个很好的做法， 可以捕捉到任意一个与先前模式不匹配的数值；也就是说，捕捉到任何可能的无效值。 


#for 循环
===============

      for variable [in words]; do
          commands
      done
      
       C 语言中的 for 语法格式
      for (( expression1; expression2; expression3 )); do
          commands
      done
      

实例
{% highlight shell%}
    for i in $dir_list; do
        total_files=$(find $i -type f | wc -l)
        total_dirs=$(find $i -type d | wc -l)
        total_size=$(du -sh $i | cut -f 1)
        echo "<H3>$i</H3>"
        echo "<PRE>"
        printf "$format" "Dirs" "Files" "Size"
        printf "$format" "----" "-----" "----"
        printf "$format" $total_dirs $total_files $total_size
        echo "</PRE>"
    done


{% endhighlight %}


#字符串和数字
===============

$a

${a}
${11}

${parameter:-word}
${parameter:=word}
${parameter:?word}
${parameter:+word}

${!prefix*}
${!prefix@}

${#parameter}


##截取字符
===============

${parameter:offset}
${parameter:offset:length}


##清除文本
===============

${parameter#pattern}
${parameter##pattern}

${parameter%pattern}
${parameter%%pattern}


##替换字符串
===============

${parameter/pattern/string}
${parameter//pattern/string}
${parameter/#pattern/string}
${parameter/%pattern/string}


##declare 强制大写小写
===============

大小写转换参数展开 
格式 |	结果
${parameter,,} |	把 parameter 的值全部展开成小写字母。
${parameter,}|	仅仅把 parameter 的第一个字符展开成小写字母。
${parameter^^} |	把 parameter 的值全部转换成大写字母。
${parameter^} |	仅仅把 parameter 的第一个字符转换成大写字母（首字母大写）。



##算术求值和展开
===============

$((expression))


###javascript:void(0);
===============

 运算符 |	描述
+ |加
- 	|减
* 	|乘
/ 	|整除
** 	|乘方
% 	|取模（余数）



### 位运算符 
===============

运算符 	|描述
~ 	|按位取反。对一个数字所有位取反。
<< |位左移. 把一个数字的所有位向左移动。
>> |	位右移. 把一个数字的所有位向右移动。
& 	|位与。对两个数字的所有位执行一个 AND 操作。
| 	|位或。对两个数字的所有位执行一个 OR 操作。
^ 	|位异或。对两个数字的所有位执行一个异或操作。



###比较运算符 
===============

运算符 |	描述
<= |	小于或相等
>= |大于或相等
< 	|小于
> 	|大于
== 	|相等
!= 	|不相等
&& 	|逻辑与
|| 	|逻辑或
expr1?expr2:expr3 	|条件（三元）运算符。若表达式 expr1 的计算结果为非零值（算术真），则 执行表达式 expr2，否则执行表达式 expr3。


#数组
===============

     
## 赋值
===============

      name[subscript]=value
      name=(value1 value2 ...)
      
      
      ${!array[*]}
      ${!array[@]}
      
      for i in "${foo[@]}"; do echo $i; done


##      添加数组元素
===============

      foo+=(d e f)
      
##删除数组
===============

unset foo

for ((expr; expr; expr))







