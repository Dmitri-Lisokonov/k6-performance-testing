@ECHO OFF
SET DatabaseUrl=%1
SET Iterations=%2
SET Rate=%3
SET IncrementRate=%4
SET Sleep=%5

SET /A IterationCounter = 0

:START
IF %IterationCounter% LSS %Iterations% (
k6 run -e DURATION=%Duration% -e RATE=%Rate% -o influxdb=%ARGS_DatabaseUrl% k6-test.js
SET /A Rate = %Rate% + %IncrementRate%
SET /A IterationCounter = %IterationCounter% + 1
TIMEOUT /t %Sleep%
GOTO START
)
PAUSE

