# k6-performance-testing
K6 performance testing using Grafana and InfluxDB.
Use docker-compose up to setup the environment.	
## Setup
> docker-compose up
## run.bat config
| Parameter | Description    |
|:--    | :--   |
| ScriptName | Name of k6 script to run  |
| DatabaseUrl | Url to influxDB i.e. https://influxdb:8086/someDbName |
| Iterations |Number of iterations to run k6 script |
| Rate | Request rate per specified time unit  |
| IncrementRate | Increment of rate per script run  |
| Duration | Duration to run each iteration of script  |
| Sleep | Sleep between script iterations  |
