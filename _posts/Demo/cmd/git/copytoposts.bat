@echo off  
setlocal enabledelayedexpansion
call "..\INIReader.bat" ".\git.ini"
start cmd /c  "copy "%DOWN_DIR%\%FILE_NAME%" "%DIR%\%FILE_NAME%" /Y"

