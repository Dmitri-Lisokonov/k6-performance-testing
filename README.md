# k6-performance-testing
K6 performance testing using Grafana and InfluxDB.
Use docker-compose up to setup the environment.	
## Setup
```
docker-compose up
```
Add the InfluxDb database as a datasource in Grafana 
```https://localhost:3000/datasources```

![image](https://user-images.githubusercontent.com/44115633/201715414-c8093896-18eb-4356-943e-1e87685a818a.png)

Configure datasource to connect to InfluxDb

![image](https://user-images.githubusercontent.com/44115633/201715647-56cb1bcb-5de6-4d52-9021-2baee863c6aa.png)

Fill in your database name

![image](https://user-images.githubusercontent.com/44115633/201716298-330d1b5b-15de-469e-975c-3f36dd85c0a1.png)

_Note: The database has to exists in InfluxDb in order to connect to it. If you don't want to create the database manually you can just run ```run.bat``` or any K6 script with the ```-o influxdb=http://influxdb:8086/yourDbName``` flag since it will auto generate a database with specified databaseUrl param_

After going through these steps, the setup is complete and you can create dashboard using InfluxDb data
```http://localhost:3000/dashboards```

## Run script
```
run.bat https://influxdb:8086/test 2 10 10 5
```
OR

Create your own k6 script file and run it using:
```
k6 run -o influxdb=http://influxdb:8086/yourDbName yourScriptName.js
```

## Parameters and configuration
Parameters are specified respectively when using ```run.bat``` file
| Parameter | Description    |
|:--    | :--   |
| DatabaseUrl | Url to influxDB i.e. http://influxdb:8086/someDbName |
| Iterations |Number of iterations to run k6 script |
| Rate | Request rate per specified time unit  |
| IncrementRate | Increment of rate per script run  |
| Sleep | Sleep between script iterations  |
