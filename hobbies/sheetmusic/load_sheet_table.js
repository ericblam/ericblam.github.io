// Change url after
//var url = "http://homepages.rpi.edu/~lame3/hobbies/sheetmusic/sheet_data.csv";
var url = "http://ericblam.com/hobbies/sheetmusic/sheet_data.csv";
//var url = "sheet_data.csv";

function httpGet(url)
{
    var xmlhttp;
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
            // return xmlhttp.responseText;
	    // document.write(xmlhttp.responseText);
	    // document.getElementById("test").innerHTML = "hello";
	    document.getElementById("test").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

httpGet(url);
// data_file = httpGet(url);
// document.write(data_file);


