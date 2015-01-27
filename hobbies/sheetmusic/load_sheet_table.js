// Change url after
var url = "http://homepages.rpi.edu/~lame3/hobbies/sheetmusic/sheet_data.csv";
// var url = "http://ericblam.com/hobbies/sheetmusic/sheet_data.csv";
//var url = "sheet_data.csv";

var data_file;

function httpGet(url)
{
    var xmlhttp;
    var file_data;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            file_data = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return file_data;
}

data_file = httpGet(url);
document.getElementById("test").innerHTML = data_file;
