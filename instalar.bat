@echo off
echo ==============================
echo  Instalando dependencias...
echo ==============================

REM Instalando dependencias principales
npm install class-transformer@^0.5.1 ^
class-validator@^0.14.2 ^
cors@^2.8.5 ^
dotenv@^17.2.2 ^
express@^4.21.2 ^
helmet@^8.1.0 ^
mysql2@^3.14.5 ^
reflect-metadata@^0.2.2 ^
typeorm@^0.3.27

echo.
echo ==============================
echo  Instalando dependencias de desarrollo...
echo ==============================

REM Instalando dependencias de desarrollo
npm install --save-dev @types/cors@^2.8.19 ^
@types/express@^4.17.23 ^
@types/node@^24.3.2 ^
ts-node@^10.9.2 ^
ts-node-dev@^2.0.0

echo.
echo ==============================
echo  Instalación completa ✅
echo ==============================
pause
