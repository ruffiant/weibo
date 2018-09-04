---
layout: post
title:  Centos7和RHEL7最小安装中竟然没有我最常用的ifconfig和netstat
date:   2017-11-6 17:49:31 +0800
categories: [系统] 
tag: [linux] 
---
* content
{:toc}

      Centos7和RHEL7最小安装中竟然没有我最常用的ifconfig和netstat
      
      # ifconfig    
      -bash: ifconfig: command not found
      很好，原来centos/rhel准备把这两个指令作废，那怎么办？一是安装，二是改用别的指令。
      
      安装
      
      yum有提供一个寻找程式所属套件的方法
      
      # yum provides ifconfig
      # yum whatprovides ifconfig
      安装 infconfig
      
      # yum install net-tools
      安装 traceroute
      
      # yum install  traceroute
      这样装完就有ifconfig、netstat和route以及traceroute和traceroute6了
      
      改用别的指令
      
      其实ifconfig在7版中全部有新指令代替，所以可能要学习新的方法。
      
      ifconfig改用ip addr
      
      这个和ifconfig 显示的一样
      
      # ip addr
      1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN
          link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
          inet 127.0.0.1/8 scope host lo
             valid_lft forever preferred_lft forever
          inet6 ::1/128 scope host
             valid_lft forever preferred_lft forever
      2: ens192: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
          link/ether 00:50:56:ba:0b:07 brd ff:ff:ff:ff:ff:ff
          inet 163.17.xx.xx/25 brd 163.17.40.127 scope global ens192
             valid_lft forever preferred_lft forever
          inet6 2001:288:5400:0:250:56ff:feba:b07/64 scope global dynamic
             valid_lft 2591718sec preferred_lft 2591718sec
          inet6 fe80::250:56ff:feba:b07/64 scope link
             valid_lft forever preferred_lft forever
      查看介面传输状态-s是详细显示
      
      # ip -s link
      1: lo: <loopback,up,lower_up> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT
          link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
          RX: bytes  packets  errors  dropped overrun mcast
          4400       45       0       0       0       0
          TX: bytes  packets  errors  dropped carrier collsns
          4400       45       0       0       0       0
      2: ens192: <broadcast,multicast,up,lower_up> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000
          link/ether 00:50:56:ba:0b:07 brd ff:ff:ff:ff:ff:ff
          RX: bytes  packets  errors  dropped overrun mcast
          207938930  2541628  0       1809366 0       495
          TX: bytes  packets  errors  dropped carrier collsns
          788417     8512     0       0       0       0
      # ip  link
      1: lo: <loopback,up,lower_up> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT
          link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
      2: ens192: <broadcast,multicast,up,lower_up> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT qlen 1000
          link/ether 00:50:56:ba:0b:07 brd ff:ff:ff:ff:ff:ff
      netstat改用ss
      
      netstat是很重要的连线观察工具，使用新的指令ss来取代，功能也是差不多。
      
      TCP listen
      
      # ss -lt
      UDP listen
      
      # ss -ul
      TCP连线
      
      # ss -t
      traceroute/traceroute6改成tracepath
      
      # tracepath 168.95.1.1
       1:  163.17.XX.XX                                          0.187ms pmtu 1500
       1:  163.17.40.126                                         0.263ms
       2:  163.17.38.250                                         0.555ms
       3:  br-NCHU-APTG.TANet.edu.tw                            19.799ms
       4:  no reply
       5:  tchn-3302.hinet.net                                   1.395ms asymm  6
       6:  tchn-3011.hinet.net                                  15.089ms
       7:  202-39-179-185.HINET-IP.hinet.net                     1.533ms
       8:  202-39-179-173.HINET-IP.hinet.net                     4.435ms reached
           Resume: pmtu 1500 hops 8 back 248
      route改为ip -route
      
      route table 看起来有点不习惯
      
      # ip route
      route6 IPv6的route table
      
      # ip -6 rou
      arp改为ip nei查看附件的arp和IPv6的neighbor，这个把v6 v4整合的还不错。
      
      # ip neighbor
      网卡接口开关
      
      # ifconfig eth1 up
      # ifconfig eth1 down
      改为
      
      # ip l set eth1 up  
      # ip l set eth1 down
      结论
      
      还是建议学习新的使用方法，旧的迟早会过时的