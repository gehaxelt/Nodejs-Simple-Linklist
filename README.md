Nodejs Simple Linklist
==========================

This is an implementation of a simple flat-file linklist. It can be used as a public repository for bookmarks. The file-based approach allows database-less, easy deployable management of the linklist. 

#Features

- TreeView 
- Infinte nesting
- Caching (RAM/Disk)
- Link description

#Screenshot

![Screenshot](http://i.imgur.com/YkdwFZm.png)

#Installation

##Dependencies:

- NodeJS
- NPM
- Express

First of all, get a copy of the code: 

```
git clone git@github.com:gehaxelt/Nodejs-Simple-Linklist.git
```

Install the dependencies:

```
cd Nodejs-Simple-Linklist
npm install
```

Adjust the configuration:

```
cp config.js.example config.js
vim config.js
```
*You may want to change the host to your internet-facing IP and/or adjust the port.* RAM-caching should not be too RAM consuming (depends on the size of your linklist). Alternatively you can use disk-caching by setting ```ramcache: false```. 

Create two writeable directories:

```
mkdir cache links
chmod u+w cache links
```

*For testing purposes, you can use the ```links.example``` directory. In that case, run ```mv links.example links```.

#Usage

The usage is quite easy, as only an editor is required. All (sub)folders and links are stored in the ```links``` directory. 

```
ls -lR links
links:
insgesamt 8
drwxr-xr-x 2 gehaxelt users 4096 18. Sep 21:26 example-pages
drwxr-xr-x 3 gehaxelt users 4096 18. Sep 21:25 nested

links/example-pages:
insgesamt 4
-rw-r--r-- 1 gehaxelt users 43 18. Sep 21:26 example.com

links/nested:
insgesamt 4
drwxr-xr-x 3 gehaxelt users 4096 18. Sep 21:25 folders

links/nested/folders:
insgesamt 4
drwxr-xr-x 3 gehaxelt users 4096 18. Sep 21:25 are

links/nested/folders/are:
insgesamt 4
drwxr-xr-x 2 gehaxelt users 4096 18. Sep 21:26 possible

links/nested/folders/are/possible:
insgesamt 4
-rw-r--r-- 1 gehaxelt users 50 18. Sep 21:26 awesome.net
```

##Adding new folders

To add a new (sub)folder, simply create a new directory in the ```links``` directory. 

```
mkdir -p links/nested/folders/are/possible
```

##Adding new entries

To add a new entry you need to create a file in the correct (sub)directory. The filename is the displayed link name. The content of the file has to have the following formatting:

```
URL
[Description]
```

For example: 

```
cat links/nested/folders/are/possible/awesome.net 
http://awesome.net
Nesting folders is awesome! :)
```

This will result in the following link:

```
<a href="http://awesome.net">awesome.net</a><span> - Nesting folders is awesome! :)</span>
```

##Updating the website

Usually, the cached website will be served to reduce Disk I/O. To update the cache follow these steps:

- touch links/update.txt
- Reload the website

The application checks the existence of the ```links/update.txt``` file and recreates the cache if it exists. After an successful update, the file will be deleted. 

#License

Licensed under GPLv3. See LICENSE.md for more information.
