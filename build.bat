@echo off
CALL jest
CALL tsc
xcopy .\src\catalog.json .\build