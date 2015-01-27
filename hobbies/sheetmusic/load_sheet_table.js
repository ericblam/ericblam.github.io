var url = "http://ericblam.com/hobbies/sheetmusic/sheet_data.csv";

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

function write_table(data) {
    var lines = data.split("\n");
    var not_first_line = false;

    var text = "";

    var types = lines[0].split(";");
    var header = lines[1].split(";");
    var images = lines[2].split(";");
    var file_index = types.indexOf("file");

    for (i = 3; i < lines.length - 1; i++) {
	line = lines[i].trim().split(";");
	// Title
	if (line[0] == "###") {
	    // End of Table
	    if (line[1] == "###")
		break;
	    else {
		if (not_first_line) {
		    text += "</table><br /><br />";
		}
		else {
		    not_first_line = true;
		}
		text += "\t<h3 class='sheetmusic'>";
		text += line[1];
		text += "</h3>\n";
		text += "\t<table class='sheetmusic'>\n";
		text += "\t\t<tr>\n";
		for (j = 0; j < header.length; j++) {
		    text += "\t\t\t<th>" + header[j] + "</th>\n";
		}
	    }
	}
	// Content
	else {
	    text += "\t\t<tr>\n";
	    for (j = 0; j < file_index; j++) {
		text += "\t\t\t<td>";
		text += line[j];
		text += "</td>\n";
	    }
	    for (j = file_index + 1; j < types.length; j++) {
		text += "\t\t\t<td>";
		if (line[j] == "y") {
		    text += "<a href='" + line[file_index] + "." + types[j];
		    text += "'><img src='" + images[j] + "'></a>";
		}
		text += "</td>\n";
	    }
	    text += "</tr>\n";
	}
    }
    text += "</table>";
    return text;
}

data_file = httpGet(url);
var formatted_table = write_table(data_file);
document.getElementById("sheet_table").innerHTML = formatted_table;
