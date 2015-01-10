// Change url after
//var url = "http://ericblam.com/hobbies/sheetmusic/sheet_data.csv";
//var url = "sheet_data.csv";
var url = "https://raw.githubusercontent.com/ericthelam73/ericthelam73.github.io/master/hobbies/sheetmusic/sheet_data.csv";

function httpGet(url)
{
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
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

data_file = httpGet(url);
document.write(data_file);
//document.getElementById("test").innerHTML = data_file;

