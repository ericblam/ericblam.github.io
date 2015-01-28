var base_url = "http://ericblam.com/blog/";
var blog_url = "blog_entries.txt";

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

function writeBlog(data) {
    var files = data.split("\n");
    var blog_entry_data;
    var blog_entry_lines;
    var blog = "";
    var blog_header = "<h3 class='blog_list_title'>Blog Entries</h3><ul class='blog_list'>";
    for (i = 0; i < files.length - 1; i++) {
	blog_entry_data = httpGet(base_url + files[i] + ".blg");
	blog_entry_lines = blog_entry_data.split("\n");
	if (blog_entry_lines.length >= 6 &&
	    blog_entry_lines[0].trim() == "### TITLE ###" &&
	    blog_entry_lines[2].trim() == "### DATE ###" &&
	    blog_entry_lines[4].trim() == "### TEXT ###") {

	    blog += "<div class='blog'>";
	    blog += "<a id='" + files[i] + "'></a>";
	    blog += "<h1 class='blog'>" + blog_entry_lines[1] + "</h1>";
	    blog_header += "<li>";
	    blog_header += "<a class='blog_title' href='#" + files[i] + "'>"
	    blog_header += blog_entry_lines[1] + "</a>";
	    blog_header += "</li>";
	    blog += "<div class='blog_date'>" + blog_entry_lines[3] + "</div>";
	    for (j = 5; j < blog_entry_lines.length; j++) {
		blog += blog_entry_lines[j];
	    }
	    blog += "</div>";
	    blog += "<br /><br />";
	}
    }
    blog_header += "</ul>"
    document.getElementById("header_blog").innerHTML += blog_header;
    return blog;
}

data_file = httpGet(base_url + blog_url);
var blog_html = writeBlog(data_file);
document.getElementById("blog").innerHTML = blog_html;
