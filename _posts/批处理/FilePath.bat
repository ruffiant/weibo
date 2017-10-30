::drive letter:
    set DriveLetter=%~d1

::directory path without drive letter
    set DirectoryPathWithoutDriveLetter=%~p1

::directory path
    set DirectoryPath=%~d1%~p1

::file name without extension
    set FileNameWithoutExtension=%~n1

::file extension
    set FileExtension=%~x1

::file name with extension
    set FileName=%~n1%~x1

::absolute path
    set AbsolutePath=%~f1

::file size (bytes)
    set FileSize=%~z1