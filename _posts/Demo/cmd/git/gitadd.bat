@echo off  
setlocal enabledelayedexpansion
call "..\INIReader.bat" ".\git.ini"
start cmd /k  "cd /d %DIR%&&git add %FILE_NAME%&&git commit -m "%FILE_NAME%"&&git push -u origin gh-pages"

::cmd /k��ִ��������رմ���
::cd /d��ֱ�ӽ���Ŀ¼
::û��start �������������