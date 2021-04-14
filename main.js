$.ajax({
    url: "assets/web-app-list.json",
    dataType: "json",
}).done(function (result) {
    console.log(result);
    var selected = result.filter(function (item) {
        return item.id == i;
});

var i;
for (i = 0; i < result.length; i++) {
    
    const webappList = document.querySelector('#webappList');

    let li = document.createElement('li');
    let title = document.createElement('span');
    let id = document.createElement('span');
    let link = document.createElement('a');

    var linkName = result[i].name;

    li.className = "list-group-item";
    title.textContent = result[i].title;
    id.className = "text-secondary badge";
    id.textContent = "AP" + result[i].id;
    link.href = "https://apuem.com/" + linkName;

    li.appendChild(title);
    li.appendChild(id);

    link.appendChild(li);

    webappList.appendChild(link);
}

});

function searching() {
    var input, autocomplete, ul, li, a, i;
    input = document.getElementById("search");
    autocomplete = input.value.toUpperCase();
    ul = document.getElementById("webappList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(autocomplete) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function initCreate() {
    $.ajax({
        url: "assets/web-app-list.json",
        dataType: "json",
    }).done(function (result) {
        console.log(result);
        var selected = result.filter(function (item) {
            return item.id == i;
    });
    
    

    var i;
    for (i = 0; i < result.length; i++) {
        
        var title = result[i].title;
        var dname = result[i].name;
        var link = result[i].rawurl;
        link = link.substring(8);
        var splitURL = link.split('/');
        var shortURL = splitURL[0];

        fetch("http://127.0.0.1:5000/api/create-pages?title=" + title + "&name=" + dname + "&link=" + link + "&shortURL=" + shortURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
            console.log('Booo');
        });
    }
    
    });
}

function writeCreatedby() {
    $.ajax({
        url: "assets/web-app-list.json",
        dataType: "json",
    }).done(function (result) {
        console.log(result);
        var selected = result.filter(function (item) {
            return item.id == 1;
    });
    console.log(result[4].rawurl);
    var longURL = result[4].rawurl;
    longURL = longURL.substring(8);
    var splitURL = longURL.split('/');
    var shortURL = splitURL[0];
    console.log(shortURL);

    });
    }