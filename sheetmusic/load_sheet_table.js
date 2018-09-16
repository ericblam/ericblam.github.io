var url = "https://ericblam.com/sheetmusic/sheet_data.json";

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
	    var json_data = JSON.parse(file_data);
	    document.getElementById("sheet_table").innerHTML = write_table(json_data);
	    if ( window.location.hash.length > 0) {
		location.href = window.location.pathname + window.location.hash;
	    }
        }
    }
    xmlhttp.open("GET", url, true );
    xmlhttp.send();
}

function write_table(data) {
    var text = "";

    // For every category
    for (i = 0; i < data.length; i++) {

	text += "<h3 id='" + data[i].category + "' class='text-center'>";
	text += data[i].category;
	text += "</h3>";
	text += "<table class='table sheetmusic'>";
	text += "<thead><tr>";
	text += "<th>Song</th><th>From</th><th>Composed By</th>";
	text += "<th class='text-center'>MIDI</th><th class='text-center'>MuseScore</th><th class='text-center'>PDF</th>";
	text += "</tr></thead><tbody>"

	// For every song
	for (j = 0; j < data[i].data.length; j++) {
	    text += "<tr>";
	    text += "<td>" + data[i].data[j].title + "</td>";
	    text += "<td>" + data[i].data[j].from + "</td>";
	    text += "<td>" + data[i].data[j].composer + "</td>";
	    if ( data[i].data[j].mid ) {
		text += "<td><a href='" + data[i].data[j].fileName + ".mid'>";
		text += "<img class='center-block' src='/images/music_thumb.jpg'></a></td>";
	    }
	    else {
		text += "<td>" + "" + "</td>";
	    }
	    if ( data[i].data[j].mscz ) {
		text += "<td><a href='" + data[i].data[j].fileName + ".mscz'>";
		text += "<img class='center-block' src='/images/muse_thumb.png'></a></td>";
	    }
	    else {
		text += "<td>" + "" + "</td>";
	    }
	    if ( data[i].data[j].pdf ) {
		text += "<td><a href='" + data[i].data[j].fileName + ".pdf'>";
		text += "<img class='center-block' src='/images/pdf_thumb.jpg'></a></td>";
	    }
	    else {
		text += "<td>" + "" + "</td>";
	    }
	    text += "</tr>";
	}


	text += "</tbody></table><br />";

    }
    return text;
}

httpGet(url);
