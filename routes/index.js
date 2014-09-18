var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var config = require('../config');

/* GET home page. */
router.get('/', function(req, res) {
  var linkspath = path.join(__dirname, "../links") + "/";
  res.render('index', { title: config.title, treeview: renderdir(linkspath) });
});

var dircount = 0;

function renderdir(dirpath) {
  var files = fs.readdirSync(dirpath);

  if(files.length == 0)
    return "";

  var renderedHTML = "<ul>";
  for(var i=0; i < files.length; i++) {
    var stat = fs.statSync(dirpath + "/" + files[i]);
    var name = htmlEscape(files[i]);

    if(stat.isDirectory()) {
      renderedHTML += '<li><input type="checkbox" id="'+name+'_'+dircount+'" /><label for="'+name+'_'+dircount+'">'+name+'</label>'; 
      dircount++;
      renderedHTML += renderdir(dirpath + "/" + files[i]);
      renderedHTML += "</li>";
    } 
      
    if(stat.isFile()) {
      data = fs.readFileSync(dirpath + "/" + files[i], 'utf8');
      if(!data) {
        renderedHTML += '<li>Error</li>';
      } else {
        var firstline = data.search("\n");
        var url = htmlEscape(data.slice(0,firstline));
        var description = htmlEscape(data.slice(firstline+1));
        renderedHTML += '<li><a rel="nofollow" target="_blank" href="'+url+'">'+name+'</a>';
        if(description != "") {
          renderedHTML += '<span> - '+description+'</span>';
        }
        renderedHTML += '</li>'; 
      } 
    }
  }
  renderedHTML += "</ul>"
  return renderedHTML;
}

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

module.exports = router;
