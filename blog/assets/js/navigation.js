function injectPage(filename){
    var converter = new showdown.Converter();
    var client = new XMLHttpRequest();
    client.onreadystatechange = function(){
        if (client.readyState == 4 && client.status == 200) {
            if (filename.split('.')[1] != 'html'){
                var html = converter.makeHtml(client.responseText);
                document.getElementById("blog").innerHTML = html;
            } else{
                document.getElementById("blog").innerHTML = client.responseText;
            }
        }
    }
    client.open('GET',("/blog/"+filename+"/"+filename+".md"),true);
    client.send(null);
}

