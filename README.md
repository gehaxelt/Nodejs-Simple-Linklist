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

The usage is quite easy, as only an editor is required.

##Creating new links

- TODO

##Updating the website

- TODO

#License

- TODO