@echo off

set /p name=���������:
(for /f "delims=" %%a in (git.ini) do (
  set "str=%%a"
  
setlocal enabledelayedexpansion
  set time=%date:~0,4%-%date:~5,2%-%date:~8,2%
    if "!str:~0,9!" EQU "FILE_NAME" (
        echo FILE_NAME=%name%.md
    )else echo,!str!
endlocal
))>git.ini.tmp

move /y git.ini.tmp git.ini
::!str:~0,9!��ȡ�ַ���
::��ȡʱ��
::%date:~0,4%-%date:~5,2%-%date:~8,2% ::%time:~0,2%:%time:~3,2%:%time:~6,2%