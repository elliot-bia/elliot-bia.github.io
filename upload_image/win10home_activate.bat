@echo off
echo ================================================
echo       正在准备激活Win10 Home版
echo.
echo  务必右键以管理员身份运行, 否则会提示拒绝访问
echo.
echo       CopyRight  南医大计协@z
echo ================================================
slmgr.vbs /upk
slmgr /ipk PPBK3-M92CH-MRR9X-34Y9P-7CH2F
slmgr /skms zh.us.to
slmgr /ato
echo ================================================
echo         激活成功, 记得检查
echo.
echo       CopyRight  南医大计协@z
echo ================================================
pause