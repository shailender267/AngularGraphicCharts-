// JavaScript Document

 //navSection-- Header ID
    //footerSection-- Footer ID
    window.onload = function () {
        //if (localStorage["hideClass"] == undefined || localStorage["hideClass"] == 0 || localStorage["hideClass"] == null || localStorage["hideClass"] == false || localStorage["hideClass"] == '') {
        //alert("localStorage is empty");
        //}

        if ("hideClass" in localStorage) {
            //alert(localStorage.getItem("hideClass"));

            document.getElementById('navSection').classList += " hidden";
            document.getElementById('logoSection ').classList += " hidden";
            document.getElementById('footerSection').classList += " hidden";
            document.getElementById('logoClick').classList += " hide-now";

        } else {
            //alert('no');
        }
    };
 
   function demoClick() {
        // alert("This is working 1");

        //declaring header and footer as a variable for the above specified id's
        var header = document.getElementById('navSection').classList;
        var topContent = document.getElementById('logoSection ').classList;
        var Footer = document.getElementById('footerSection').classList;

        //declaring logo click class here
        var btn = document.getElementById('logoClick').classList;

        // setting local storage
        var setHide = localStorage.setItem("hideClass", "hide-now");

        // alert("Hide value is set locally");

        //storing local storage in var
        var getHide = localStorage.getItem("hideClass");
        if (btn.contains(getHide)) {
            //alert("Now you are in if loop..... ");
            localStorage.clear();
            header.toggle("hidden");
            topContent.toggle("hidden");
            Footer.toggle("hidden");
            document.getElementById('logoClick').classList = "logo";
            //Using Toggle adding and removing hidden class

        }
        else {
            header.toggle("hidden");
            topContent.toggle("hidden");
            Footer.toggle("hidden");
            document.getElementById('logoClick').classList += " " + getHide;
        }
    } 
	
	
	
	