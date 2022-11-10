@ECHO OFF
SET Iterations=%1
SET Rate=%2
SET RateRate=%3
SET Duration=%4
SET Sleep=%5
SET ScriptName=%5
SET DatabaseUrl=%5

SET /A IterationCounter = 0
SET /A Rate = 100
SET /A IncrementRate = 100
SET /A Duration = 30
SET /A Sleep = 10

:START
IF %IterationCounter% LEQ %Iterations% (
k6 run -e DURATION=%Duration% -e RATE=%Rate% -o influxdb=%ARGS_DatabaseUrl% %ARGS_ScriptName%.js
SET /A Rate = %Rate% + %IncrementRate%
SET /A IterationCounter = %IterationCounter% + 1
TIMEOUT /t %Sleep%
GOTO START
)
PAUSE

