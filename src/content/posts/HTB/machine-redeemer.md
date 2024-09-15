---
title: 'Redeemer - HTB'
description: "En este write-up, utilizamos Nmap para escanear puertos e identificar servicios abiertos, con enfoque en Redis en el puerto 6379. Procederemos a enumerar el servicio Redis y extraer la flag."
pubDate: 'Sep 5 2024'
categories: ['WriteUp', 'HackTheBox']
--- 

## Introducción

En este write-up, utilizamos Nmap para escanear puertos e identificar servicios abiertos, con un enfoque en Redis en el puerto 6379. Procederemos a enumerar el servicio Redis y extraer la flag.
```
Platform: Hack The Box
Level: Very Easy 
```
![Redeemer machine complete yw4rf](../../../assets/HTB/Redeemer/redeemer-pwnd.png)

## Enumeración

```
target: 10.129.97.198  
```
<br>

Realizamos la comprobación de la conexión con la maquina mediante el comando `ping -c 1 10.129.35.56`

![Redeemer ping yw4rf](../../../assets/HTB/Redeemer/redeemer-1.png)

Luego de verificar la conexión, realizamos un escaneo de servicios y puertos abiertos con **Nmap**

![Redeemer scan yw4rf](../../../assets/HTB/Redeemer/redeemer-2.png)

Vemos que tenemos un solo puerto abierto, el cual es `6379 ` que corre el servicio `Redis` Con una rapida busqueda en Google podemos ver:
<br>

## Redis

Con una busqueda rapida en Google podemos ver que **"Redis es un motor de base de datos en memoria, basado en el almacenamiento en tablas de hashes pero que opcionalmente puede ser usada como una base de datos durable o persistente."**

En caso de no tener `redis-cli` (Redis Command Line Interface)  instalado en el sistema tendremos que hacerlo. 

Una vez instalado ejecutaremos `redis-cli --help` para ver que flags nos permite usar

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-3.png)

Como vemos podemos usar `redis-cli -h {target ip}` para conectarnos al redis del objetivo

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-4.png)

Una vez conectados, podemos usar el comando `INFO` para obtener información de la base de datos Redis

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-5.png)
![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-6.png)

Como podemos observar, la version `redis_version:5.0.7` y que hay en total `keys=4`, esto lo podemos confirmar con `DBSIZE` 

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-7.png)

Con `KEYS *` nos muestra todas las **KEYS** de la base de datos Redis

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-8.png)

Una vez hayamos visto la flag, para obtenerla podemos usar el comando `GET flag`

![Redeemer yw4rf](../../../assets/HTB/Redeemer/redeemer-9.png)

Ya con la flag, hemos terminado la maquina. 

![Redeemer pwnd yw4rf](../../../assets/HTB/Redeemer/redeemer-last.png)