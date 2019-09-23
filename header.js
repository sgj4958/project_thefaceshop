
window.onload = function() {
}
    window.onscroll = function() {
        change_nav();
    };


function change_nav() {
    
        var scroll_y = window.pageYOffset;
        var scroll_change = document.getElementById("nav");
        var scroll_change_logo = document.getElementById("nav_logo");
        
        if(scroll_y>50) {
            scroll_change.classList.add("nav_change");
            scroll_change.classList.add("sticky");
            scroll_change_logo.className = "nav_logo_text";
            
        } else {
            scroll_change.className = "";
            scroll_change_logo.className = "nav_logo_img";
        }
}

    //var recent_search_list = new Array();

    function open_login() {
        window.open("login.html", "login", "scrollbars=no, width=900px, height=560px");
    }

    function search() {
        document.getElementById('search').style.display="inherit";
        document.querySelector('input[name=search_input]').characterSet="utf-8";
        
        var search_li = document.getElementById('search').getElementsByTagName('li');
        var search_input = document.querySelector('input[name=search_input]');
        for(i=0; i<search_li.length; i++) {
            search_li[i].addEventListener('click', function() {
                search_input.setAttribute('value',$(this).text().replace('#',''));
            });
        }/*
        document.getElementById('search_btn').addEventListener("click", function(){
            recent_search_list.push(search_input.getAttribute('value'));
            
            for(var i=0; i<recent_search_list.length; i++) {
                document.getElementsByClassName('search_list')[1].getElementsByTagName('li')[i].innerHTML = recent_search_list[i];
            }
        });*/
    }

    function close_search() {
        document.getElementById('search').style.display="none";
    }

function best_list() {
    var choose_a = document.getElementById('choose').getElementsByTagName('a');
    choose_a[0].classList.add("choose_choice");
    choose_a[1].classList.remove("choose_choice");
    
    var list = document.getElementsByClassName('search_list');
    list[0].style.display="inherit";
    list[1].style.display="none";
}
function recent_list() {
    var choose_a = document.getElementById('choose').getElementsByTagName('a');
    choose_a[0].classList.remove("choose_choice");
    choose_a[1].classList.add("choose_choice");
    
    var list = document.getElementsByClassName('search_list');
    list[0].style.display="none";
    list[1].style.display="inherit";
}