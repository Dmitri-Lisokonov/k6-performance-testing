@ECHO OFF
SET /A Vus = 100
SET /A IncrementVus = 100
SET /A MaxVus = 600
SET /A Duration = 30
SET /A Sleep = 3
:START
IF %Vus% LEQ %MaxVus% (
SET /A Vus = %Vus% + %IncrementVus%
k6 run -e DURATION=%Duration% -e VUS=%Vus% test.js -o json=output/results-%Vus%.json
ECHO Batch script iteration was succesful, sleeping for %Sleep%s.
TIMEOUT /t %Sleep%
GOTO start
)
PAUSE

