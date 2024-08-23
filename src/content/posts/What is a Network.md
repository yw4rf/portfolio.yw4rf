---
title: 'What is a Network?'
description: 'This post is a quick guide to understanding how networks work, from basic protocols to the structures that support them.'
pubDate: 'Aug 21 2024'
categories: ['Networking']
---

En el mundo de la ciberseguridad, comprender qué es una red y cómo funciona es fundamental. En términos generales, una red es un conjunto de dispositivos interconectados que pueden comunicarse entre sí. Estos dispositivos pueden incluir computadoras, servidores, routers, switches y otros equipos. 
###### La Real Academia Española (www.rae.es) define el término como:

10. **f.** Inform. **Conjunto de computadoras o equipos informáticos conectados entre sí que permiten el intercambio de información.**

![Network diagram](https://www.conceptdraw.com/How-To-Guide/picture/Network-Diagram.png)
## Arquitectura de Red

La arquitectura de una red define cómo se conectan y comunican los dispositivos dentro de ella.
## Tipos de redes más importantes
#### 1. Redes de Área Local (LAN - Local Area Network)
Una LAN es una red que cubre un área geográfica limitada, como una oficina, un edificio o un campus universitario. Se utiliza para conectar computadoras, impresoras y otros dispositivos dentro de un espacio reducido.
- **Ejemplo:** Red en una oficina que conecta computadoras y recursos compartidos.

#### 2. Redes de Área Metropolitana (MAN - Metropolitan Area Network)
Una MAN cubre un área geográfica más grande que una LAN pero más pequeña que una WAN, como una ciudad o una región metropolitana.
- **Ejemplo:** Red de una universidad que conecta varios campus en una ciudad.

#### 3. Redes de Área Amplia (WAN - Wide Area Network)
Una WAN cubre grandes áreas geográficas, como países o continentes. Conecta redes locales o metropolitanas a través de una infraestructura de telecomunicaciones.
- **Ejemplo:** Internet, redes corporativas que conectan sucursales en diferentes países.

#### 4. Redes de Área Personal (PAN - Personal Area Network)
Una PAN es una red de corto alcance destinada a la comunicación entre dispositivos personales en una proximidad cercana, como dentro de una habitación.
- **Ejemplo:** Conexión entre un teléfono móvil y una computadora mediante Bluetooth.

#### 5. Redes Inalámbricas (Wireless Networks)
Redes que utilizan ondas de radio o tecnologías de infrarrojos para la transmisión de datos sin cables físicos.
- **Ejemplo:** Una red Wi-Fi en una cafetería que permite a los clientes conectarse a Internet sin cables.

#### 6. Redes Virtuales (Virtual Networks)
Redes que se crean sobre una infraestructura de red física, permitiendo la creación de redes virtuales privadas (VPN) y redes definidas por software (SDN).
- **Ejemplo:** Una VPN que permite a los empleados acceder a la red corporativa de forma segura desde ubicaciones remotas.

#### 7. Redes de Telecomunicaciones (Telecommunications Networks)
Redes diseñadas para la transmisión de datos a larga distancia, incluyendo voz, video y datos a través de diferentes tipos de medios de transmisión.
- **Ejemplo:** Red de telefonía móvil y servicios de comunicación global.

#### 8. Redes de Datos Móviles (Mobile Data Networks)
Redes utilizadas para la transmisión de datos a través de dispositivos móviles, como teléfonos y tabletas, usando tecnologías celulares.
- **Ejemplo:** Redes celulares que proporcionan acceso a Internet móvil.

![WAN-MAN-LAN](https://i.pinimg.com/736x/78/26/a1/7826a13009a293cd8e64da4648790d99.jpg)

## Topologías de Red

Las topologías de red se refieren a la disposición física o lógica de los dispositivos y cables en una red de computadoras. Estas topologías determinan cómo se conectan y comunican los dispositivos entre sí, y cada tipo de topología tiene sus propias ventajas y desventajas en términos de rendimiento, escalabilidad, y facilidad de mantenimiento.

 **Topologia en Estrella**: Todos los dispositivos están conectados a un nodo central (generalmente un switch o hub).

![Star network topology](https://upload.wikimedia.org/wikipedia/commons/8/84/Star_Topology.png)

- **Ventajas**: Facilita la gestión y el aislamiento de problemas. Si un cable o dispositivo falla, el resto de la red no se ve afectado.
- **Desventajas**: El nodo central es un punto crítico de fallo; si falla, toda la red se ve afectada.

**Topologia en Malla**: Cada dispositivo está conectado a varios otros dispositivos, creando múltiples rutas de comunicación.

![Mesh network topology](https://static.javatpoint.com/computer/images/what-is-mesh-topology.jpg)

- **Ventajas**: Alta redundancia y confiabilidad; si un enlace falla, el tráfico puede ser redirigido a través de otras rutas.
- **Desventajas**: Los costos y la complejidad de implementar y mantener debido a la gran cantidad de cables y conexiones.

**Topologia en Bus**: Cada dispositivo está conectado a varios otros dispositivos, creando múltiples rutas de comunicación.

![Bus Network topology](https://www.elprocus.com/wp-content/uploads/Bus-Topology-Diagram.jpg)

- **Ventajas**: Alta redundancia y confiabilidad; si un enlace falla, el tráfico puede ser redirigido a través de otras rutas.
- **Desventajas**: Los costos y la complejidad de implementar y mantener debido a la gran cantidad de cables y conexiones.

**Topologia en Anillo**: Cada dispositivo está conectado a varios otros dispositivos, creando múltiples rutas de comunicación.

![Ring network topology](https://computernetworkingsimplified.wordpress.com/wp-content/uploads/2013/06/ring.jpg?w=640)

- **Ventajas**: Alta redundancia y confiabilidad; si un enlace falla, el tráfico puede ser redirigido a través de otras rutas.
- **Desventajas**: Los costos y la complejidad de implementar y mantener debido a la gran cantidad de cables y conexiones.


## Cómo se Envía la Información en una Red

### Modelo OSI

**OSI** (Open Systems Interconnection) es un modelo de referencia más conceptual que fue desarrollado por la Organización Internacional de Normalización (ISO) en la década de 1980. Está compuesto por siete capas:

1. **Capa Física**: Define los aspectos eléctricos y mecánicos de la transmisión de datos.
2. **Capa de Enlace de Datos**: Maneja la comunicación entre dispositivos en la misma red.
3. **Capa de Red**: Se encarga del direccionamiento y enrutamiento de paquetes.
4. **Capa de Transporte**: Asegura la entrega correcta y completa de datos.
5. **Capa de Sesión**: Administra las conexiones entre aplicaciones.
6. **Capa de Presentación**: Traduce datos entre el formato de la red y el formato de la aplicación.
7. **Capa de Aplicación**: Proporciona servicios de red a las aplicaciones del usuario.

![OSI Model Schema](https://miro.medium.com/v2/da:true/resize:fit:853/1*7yPBGx_K8GymgeGfzhfznA.gif)

### Modelo TCP/IP

**TCP/IP** (Transmission Control Protocol/Internet Protocol) es un conjunto de protocolos que se utiliza para la comunicación en redes, incluyendo la Internet. Fue desarrollado en la década de 1970 y está compuesto por cuatro capas principales:

1. **Capa de Aplicación:** Protocolo como HTTP, FTP, SMTP, etc., que interactúan directamente con el software de aplicación.
2. **Capa de Transporte:** Protocolo como TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) que se encargan del control de la comunicación entre dos dispositivos.
3. **Capa de Internet:** Protocolo IP (Internet Protocol) que maneja la dirección y el enrutamiento de los paquetes de datos.
4. **Capa de Acceso a la Red:** Maneja la comunicación con la red física y los medios de transmisión.

![TPC/IP Model](https://miro.medium.com/v2/resize:fit:1400/0*7GxX2NC7lEs0pK-_)

### Modelo TCP/IP vs Modelo OSI

TCP/IP fue desarrollado y adoptado antes que el modelo OSI se formalizara. La adopción temprana de TCP/IP en la Internet y en redes privadas hizo que su uso se convirtiera en estándar.

El modelo TCP/IP es más simple y está más directamente relacionado con los protocolos reales que se utilizan en la Internet y otras redes. TCP/IP ha evolucionado con la tecnología de redes y sigue siendo adaptable y relevante. Su uso está respaldado por una amplia variedad de estándares y protocolos que permiten una interoperabilidad efectiva en la red.

Aunque el modelo OSI es muy útil para la comprensión teórica y educativa de la arquitectura de red, no está tan estrechamente asociado con protocolos reales implementados en redes. Es más un marco conceptual que una descripción práctica.

![OSI Model vs TCP/IP Model](https://miro.medium.com/v2/resize:fit:1400/1*KbEducEG9i8GkZVMm0OWqA.png)

### Encapsulación y Desencapsulación

- **Encapsulación**: Los datos se envuelven en paquetes con encabezados adicionales en cada capa del modelo OSI antes de ser transmitidos.
- **Desencapsulación**: En el destino, los paquetes se desempaquetan y se procesan en cada capa del modelo OSI para reconstruir los datos originales.

![OSI Model schema](https://geekflare.com/es/wp-content/uploads/2023/01/how-deencapsulation-work.png)


### Transmisión

Los datos encapsulados se envían a través del medio físico de la red:

- **Medios de Transmisión:** Los datos viajan a través de cables de cobre, fibra óptica, o por aire en redes inalámbricas.
 
![Network Media Transmission](https://dredesblog.wordpress.com/wp-content/uploads/2017/03/cables.png?w=425&h=355)

### Rutas de Comunicación

Cuando los datos se envían a través de una red, son encaminados por routers y switches. El enrutamiento determina la mejor ruta para los datos, mientras que la conmutación asegura que los datos se dirijan al destino correcto dentro de una red local.

![Conmutador o Switch](https://uhu.es/antonio.barragan/files/archivos_usuarios/146/switch1_0.PNG)

## Protocolos de Comunicación

### TCP (Transmission Control Protocol)

TCP establece una conexión confiable entre dos dispositivos, asegurando que los datos se entreguen correctamente y en el orden correcto. Incluye mecanismos para la retransmisión de paquetes perdidos y el control de flujo.

### UDP (User Datagram Protocol)

UDP ofrece una comunicación más rápida pero sin conexión, sin garantizar la entrega de datos. 

![TCP vs UDP](https://www.freecodecamp.org/news/content/images/2021/07/udp-and-tcp-comparison.jpg)

### Comparación TCP vs UDP

- **TCP**: Conexión confiable, adecuado para aplicaciones donde la precisión es crucial (por ejemplo, transferencias de archivos, correo electrónico).
- **UDP**: Conexión sin garantía, adecuado para aplicaciones donde la velocidad es crucial y una pequeña pérdida de datos es aceptable (por ejemplo, streaming, videollamadas).

![TCP vs UDP](https://media.licdn.com/dms/image/v2/D4D12AQGrMWLDQCf3SA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686830320951?e=2147483647&v=beta&t=rptvYYXTnfS6-61gnbt7TgXa46gkJyNs3mDrOU9UUhY)

## Direccionamiento IP y Subnetting

### Direccionamiento IPv4 vs IPv6

El direccionamiento IP es fundamental en redes de computadoras, ya que permite la identificación y localización de dispositivos dentro de una red. Cada dispositivo en una red necesita una dirección IP única para comunicarse eficazmente. Las direcciones IP se dividen en dos tipos: IPv4 e IPv6.

**IPv4** utiliza una estructura de 32 bits y una dirección **IPv4** se compone de cuatro números entre 0 y 255, separados por puntos, lo que da lugar a aproximadamente 4.3 mil millones de direcciones únicas.

**IPv6**, con su estructura de 128 bits, ofrece un número prácticamente infinito de direcciones, solucionando las limitaciones de **IPv4**.

![IPv4 vs IPv6](https://interlir.com/wp-content/uploads/2023/07/tild6562-3965-4164-b932-393734353661__ipv4-6-1024x941-1.png)


### Subnetting

El subnetting, o subdivisión de redes, es una técnica utilizada para dividir una red IP en subredes más pequeñas. Esto optimiza el uso de direcciones IP y mejora la eficiencia de la red. Mediante el subnetting, se puede organizar una red grande en segmentos más manejables, facilitando la administración y aumentando la seguridad. Cada subred tiene un identificador único y puede ser configurada con un rango específico de direcciones IP, lo que permite una gestión más efectiva del tráfico de red y una mejor asignación de recursos.

![Subnetting](https://dougvitale.wordpress.com/wp-content/uploads/2013/03/subnet1.jpg?w=584)



A modo de resumen para repasar e investigar mas, un mapa conceptual de Redes en Español:

![Network](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJjFaoOqPTI3NzJqXeXsGOclvkS2WoYaHUietrsf3oKdPm39sLZwlmzzFQOAEIcd6RmO_8or-VybmRd-KzcjGLHtGcj-Fv_krB6x3sfMJj0PtOgUmb7fQrRUUw1IL6ldb3L62LSjEZF2O_/s1600/tipos+de+redes+1.jpg)
