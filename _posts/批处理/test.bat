@echo off
setlocal enabledelayedexpansion


call "INIReader.bat" ".\task.ini"

echo %taskname%
echo %taskrun%
echo %schedule%

pause>nul