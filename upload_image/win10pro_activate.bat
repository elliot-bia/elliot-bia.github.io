@echo off
echo ================================================
echo       正在准备激活Win10 Pro版
echo.
echo  务必右键以管理员身份运行, 否则会提示拒绝访问
echo.
echo       CopyRight  南医大计协@z
echo ================================================
slmgr.vbs /upk
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
slmgr /skms zh.us.to
slmgr /ato
echo ================================================
echo         激活成功, 记得检查
echo.
echo       CopyRight  南医大计协@z
echo ================================================
pause