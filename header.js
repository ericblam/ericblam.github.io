function make_header(prefix) {
    var header = "<header>";
    header += "<ul>";
    header += "<li><a href='" + prefix + "'>Home</a></li>";
    header += "<li><a href='" + prefix + "hobbies'>Hobbies</a></li>";
    header += "<div id='header_hobbies'></div>";
    header += "<li><a href='" + prefix + "blog'>Blog</a></li>";
    header += "</ul>";
    header += "<h1>Eric Lam</h1>";
    header += "<img src='" + prefix + "ericlam.jpg'>";
    header += "<ul class='info'>";
    header += "<li>";
    header += "<h2>Resources</h2>";
    header += "<ul class='contact-info'>";
    header += "<li><a href='mailto:eric@ericblam.com'>eric@ericblam.com</a></li>";
    header += "<li><a target='_blank' href='http://www.github.com/ericthelam73'>GitHub Account</a></li>";
    header += "<li><a target='_blank' href='http://www.linkedin.com/pub/eric-lam/57/9a6/338/'>Linkedin</a></li>";
    header += "<li><a target='_blank' href='" + prefix + "resume.pdf'>Resume</a></li>";
    header += "</ul>";
    header += "</li>";
    header += "</ul>";
    header += "<div id='header_blog'></div>";
    header += "</header>";
    document.getElementById("header").innerHTML = header;
}
