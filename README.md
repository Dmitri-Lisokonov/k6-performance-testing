# k6-performance-testing
K6 performance testing using Grafana and InfluxDB.
Use docker-compose up to setup the environment.	
## Setup
```
docker-compose up
```
## Run script
```
run.bat https://influxdb:8086/test 2 10 10 5
```
## run.bat parameters and configuration
Parameters are specified respectively.
| Parameter | Description    |
|:--    | :--   |
| DatabaseUrl | Url to influxDB i.e. https://influxdb:8086/someDbName |
| Iterations |Number of iterations to run k6 script |
| Rate | Request rate per specified time unit  |
| IncrementRate | Increment of rate per script run  |
| Sleep | Sleep between script iterations  |
