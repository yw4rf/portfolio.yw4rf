---
title: 'What is a Network?'
description: 'This post is a quick guide to understanding how networks work, from basic protocols to the structures that support them.'
pubDate: 'Aug 21 2024'
categories: ['Networking']
---

###### The Royal Spanish Academy (www.rae.es) defines the term as:

10. **f.** Inform. **A set of computers or computing devices interconnected to allow the exchange of information.**

In the world of cybersecurity, understanding what a network is and how it functions is fundamental. In general terms, a network is a collection of interconnected devices that can communicate with each other. These devices may include computers, servers, routers, switches, and other equipment.

![Pasted image 20240821153204.png](https://w7.pngwing.com/pngs/388/908/png-transparent-computer-network-electronics-engineering-organization-design-computer-network-electronics-computer.png)  
# Network Architecture

The architecture of a network defines how the devices within it are connected and communicate with each other.

## Network Topologies

#### Star Topology: All devices are connected to a central node (typically a switch or hub).
#### Advantage: 
It simplifies management and problem isolation. If a cable or device fails, the rest of the network remains unaffected.
#### Disadvantage: 
The central node is a critical point of failure; if it fails, the entire network is affected.

![Star network topology](https://upload.wikimedia.org/wikipedia/commons/8/84/Star_Topology.png)

#### Mesh Topology: Each device is connected to several other devices, creating multiple communication paths.
#### Advantage: 
High redundancy and reliability; if one link fails, traffic can be redirected through other paths.
#### Disadvantage: 
High costs and complexity of implementation and maintenance due to the large number of cables and connections.

![Mesh network topology](https://static.javatpoint.com/computer/images/what-is-mesh-topology.jpg)

#### Bus Topology: All devices are connected to a single central cable, creating a linear communication path.
#### Advantage: 
Simple and cost-effective to implement for small networks.
#### Disadvantage: 
If the central cable fails, the entire network is affected, and performance can degrade with increased traffic.

![Bus Network topology](https://www.elprocus.com/wp-content/uploads/Bus-Topology-Diagram.jpg)

#### Ring Topology: Each device is connected to two other devices, forming a circular data path.
#### Advantage: 
High redundancy and reliability; if one link fails, the traffic can be redirected through the other direction.
#### Disadvantage: 
The failure of any single device can disrupt the entire network, and it can be complex and expensive to maintain.

![Ring network topology](https://computernetworkingsimplified.wordpress.com/wp-content/uploads/2013/06/ring.jpg?w=640)
