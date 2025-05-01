Remove-Item -Path .\assets -Recurse -Force
Set-Location -Path D:\MyWebsite\site
npm run build
xcopy /e /i /y out ..\\
git add -A;
git commit -m "Add New Version"
git push
Set-Location -Path D:\MyWebsite