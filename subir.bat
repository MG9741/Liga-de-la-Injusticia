@echo off
title Subir cambios a GitHub

echo.
echo ========================================
echo      Subir cambios de Quartz
echo ========================================
echo.

set /p mensaje=¿Que cambiaste?:

echo.
echo Agregando archivos...
git add .

echo.
echo Creando commit...
git commit -m "%mensaje%"

if errorlevel 1 (
    echo.
    echo No se pudo crear el commit.
    echo Puede que no haya cambios para subir.
    pause
    exit
)

echo.
echo Subiendo a GitHub...
git push origin v5

echo.
echo ========================================
echo ¡Listo!
echo GitHub comenzará el deploy automaticamente.
echo Espera aproximadamente 1 minuto.
echo ========================================
echo.

pause