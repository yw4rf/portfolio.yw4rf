---
title: 'Fawn - HTB'
description: "In this walkthrough, we use Nmap for port scanning to identify open ports and services, focusing on FTP on port 21. We'll enumerate the FTP service, exploit anonymous login, and download the flag."
pubDate: 'Sep 4 2024'
categories: ['WriteUp', 'HackTheBox', 'CTF']
--- 



## Introduction 

In this walkthrough, we'll use Nmap for port scanning to identify open ports and services, focusing on FTP on port 21. We'll enumerate the FTP service, exploit anonymous login, and download the flag.
```
Platform: Hack The Box
Level: Very Easy 
```


![Fawn machine complete yw4rf](../../../assets/HTB/Fawn/0-Fawn.png)

## Enumeration

```
target: 10.129.97.198  
```
<br>

First, we use the command `ping -c 1 10.129.97.198` to check connectivity. 

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/1-Fawn.png)

Since we are connected, we begin with the **Port scanning using the Nmap tool**, hoping to find open ports and running services:

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/2-Fawn.png)

As you may notice, at the end of the Nmap command, I wrote `-oG fawn-scan`, which saves the scan results in **"grepable" format (grepable output)**. This format is simpler and more compact than the standard output, allowing us to easily **extract specific information**. Here, we run it using the **cat** command. We can see that the status is **"Up"** along with information about the ports and their versions.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/3-Fawn.png)

`21/open/tcp//ftp/vsftpd 3.0.3/` We can conclude that the only open port is **21**, which runs the **FTP** protocol, and its version is **vsftpd 3.0.3**.

## FTP Enumeration

To gather more information about port 21, we’ll perform a scan specifically on this port using the Nmap flag `-sCV`.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/4-Fawn.png)

We see that it says `ftp-anon: Anonymous FTP login allowed`, there is a file named `flag.txt`, and we are on a `UNIX` operating system.


   ```
Anonymous FTP: This is a method that allows entry into an FTP server without needing to authenticate with an account and password. Users connect to the server using the username "anonymous" (or "ftp" in some cases) and any password. 
```


We connect to the FTP server using the FTP client on the target. For the username, we use **Anonymous**, and for the password, in this case, nothing (press enter). **We successfully connect to the target FTP server**.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/5-Fawn.png)

## Exploitation phase

We use the `ls` command to list files or directories.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/6-Fawn.png)

Once we find the `flag.txt` file, we can download it to our local machine. After downloading it, we can exit.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/7-Fawn.png)

We go to the directory where the `flag.txt` file was downloaded, and we can open it with the command `cat {filename}`.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/8-Fawn.png)

<br>

Once we have captured the flag, **we have completed the Fawn machine**.

![Fawn hackthebox yw4rf](../../../assets/HTB/Fawn/9-Fawn.png)

<br>
