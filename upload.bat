IF "%~1"=="" (
    echo Commit message is required.
    echo Usage: upload.bat "Your commit message"
    exit /b 1
)

git status

git add .

git commit -m "%~1"

git pull origin master

git push origin master

