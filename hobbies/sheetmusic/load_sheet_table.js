var url = "http://ericblam.com/hobbies/sheetmusic/sheet_data.csv";

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
            var file_data = xmlhttp.responseText;
	    document.getElementById("sheet_table").innerHTML = write_table(file_data);
        }
    }
    xmlhttp.open("GET", url, true );
    xmlhttp.send();
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
		text += "<h3 class='sheetmusic'>";
		text += line[1];
		text += "</h3>";
		text += "<table class='sheetmusic'>";
		text += "<tr>";
		for (j = 0; j < header.length; j++) {
		    text += "<th>" + header[j] + "</th>";
		}
	    }
	}
	// Content
	else {
	    text += "<tr>";
	    for (j = 0; j < file_index; j++) {
		text += "<td>";
		text += line[j];
		text += "</td>";
	    }
	    for (j = file_index + 1; j < types.length; j++) {
		text += "<td>";
		if (line[j] == "y") {
		    text += "<a href='" + line[file_index] + "." + types[j];
		    text += "'><img src='" + images[j] + "'></a>";
		}
		text += "</td>";
	    }
	    text += "</tr>";
	}
    }
    text += "</table>";
    return text;
}

httpGet(url);
