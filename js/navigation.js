window.onload = function () {
    var about_button = document.getElementById("about-button");
    var services_button = document.getElementById("services-button");
    var blog_button = document.getElementById("blog-button");
    var projects_button = document.getElementById("projects-button");
    var contact_button = document.getElementById("contact-button");
    
    about_button.onclick = function () {
        injectPage("about.md");
        return false;
    }
    services_button.onclick = function() {
        injectPage("services.md");
        // return false;
    }
    blog_button.onclick = function() {
        injectPage("blog.md");
        return false;
    }
    projects_button.onclick = function() {
        injectPage("projects.md");
        return false;
    }
    contact_button.onclick = function() {
        injectPage("contact.html");
        return false;
    }
}

function injectPage(filename){
    var converter = new showdown.Converter();
    var client = new XMLHttpRequest();
    client.onreadystatechange = function(){
        if (client.readyState == 4 && client.status == 200) {
            if (filename.split('.')[1] != 'html'){
                var html = converter.makeHtml(client.responseText);
                document.getElementById("content-block").innerHTML = html;
            } else{
                document.getElementById("content-block").innerHTML = client.responseText;
            }
        }
    }
    client.open('GET',("/pages/"+filename),true);
    client.send(null);
}

