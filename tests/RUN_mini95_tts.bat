@echo off
chcp 65001 >nul
setlocal
echo ==================================================
echo  Mini95 audio generator (edge-tts, free)
echo  Mini95: Listening + Speaking = 100 mp3 files
echo ==================================================

set "VENV=C:\qasr\venv"
set "PY=%VENV%\Scripts\python.exe"

if not exist "%PY%" echo Creating venv at %VENV% ...
if not exist "%PY%" py -3 -m venv "%VENV%"
if not exist "%PY%" python -m venv "%VENV%"

if not exist "%PY%" goto novenv

echo Installing edge-tts ...
"%PY%" -m pip install --upgrade pip -q
"%PY%" -m pip install --upgrade edge-tts -q

echo Generating Mini95 audio (this may take a few minutes) ...
"%PY%" "%~dp0make_mini95_tts.py"
if errorlevel 1 goto failed

echo.
echo DONE: Mini95 audio created in Listening\audio and Speaking\audio
goto end

:novenv
echo [ERROR] Could not create Python venv. Is Python installed?
goto end

:failed
echo.
echo [ERROR] Generation failed. Check your internet connection and retry.
goto end

:end
echo.
pause
endlocal
