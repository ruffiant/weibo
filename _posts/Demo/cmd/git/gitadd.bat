@echo off  
setlocal enabledelayedexpansion
call "..\INIReader.bat" ".\git.ini"
start cmd /k  "cd /d %DIR%&&git add %FILE_NAME%&&git commit -m "%FILE_NAME%"&&git push -u origin gh-pages"

::cmd /k是执行完命令不关闭窗口
::cd /d是直接进入目录
::没有start 不能再浏览器打开