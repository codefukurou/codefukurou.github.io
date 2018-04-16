window.onload = function () {
    var about_button = document.getElementById("about-button");
    var services_button = document.getElementById("services-button");
    var contact_button = document.getElementById("contact-button");
    var converter = new showdown.Converter();
    about_button.onclick = function () {
        var html = converter.makeHtml("# header");
        document.getElementById("content-block").innerHTML = html;
        return false;
    }
    services_button.onclick = function() {
        document.getElementById("content-block").innerHTML = "<h1>Services</h1>";
        return false;
    }
    contact_button.onclick = function() {
        document.getElementById("content-block").innerHTML = "<h1>Contact</h1>";
        return false;
    }
}