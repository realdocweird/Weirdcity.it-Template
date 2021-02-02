function RefreshPagina(dove) {
    if (dove == "chisiamo" ) {
        $("#main").hide();
        $("#who").show();
        console.log("ti ho portato a chi siamo")
    } else if (dove == "igram" ) {
        window.open('https://www.instagram.com/weird.ita', '_blank');
        console.log("ti ho portato a igram")
    } else if (dove == "main" ) {
        $("#who").hide();
        $("#main").show();
        console.log("ti ho portato in home")
    } else if (dove == "twitch" ) {
        window.open('https://www.twitch.tv/docweirdx0', '_blank');
        console.log("ti ho portato su twitch")
    }
    else if (dove == "forum" ) {
        window.location.href = "https://forum.weirdcity.it/";
        console.log("ti ho portato al forum")
    }
  }

const position = document.documentElement;
position.addEventListener("mousemove", e => {
position.style.setProperty('--x', e.clientX + 'px');
})

function CambiaColori(checkboxElem) {
    if (checkboxElem.checked) {
        $("#colori").css("background", "linear-gradient(to right top, #1a1a1a, #201f25, #262331, #2c283d, #332c49, #383053, #3c345e, #413869, #433e76, #444383, #434a90, #40509e)");
        $("#particles-js").css("background", "linear-gradient(to right top, #1a1a1a, #201f25, #262331, #2c283d, #332c49, #383053, #3c345e, #413869, #433e76, #444383, #434a90, #40509e)");
        $("#dashboard").css("background", "linear-gradient(173deg, rgba(65,81,160,0.1) 52%, rgba(26,26,26,0.3) 100%)");
        $("#pro").css("background", "linear-gradient(to right top, #24a8b8, #30b6be, #3fc4c3, #51d1c6, #65dfc9)");
        $("p").css("color", "#002754");
        $("h2").css("color", "#002754");
        $(".iconemenu").css( "filter", "none" );
    } else {
        $("#colori").css("background", "linear-gradient(to right top, #e05f5f, #e35679, #dc5497, #ca5ab4, #ab66cf, #9874dd, #8381e8, #6a8cf0, #749bf3, #80a9f5, #8fb7f6, #a0c4f7)");
        $("#particles-js").css("background", "linear-gradient(to right top, #e05f5f, #e35679, #dc5497, #ca5ab4, #ab66cf, #9874dd, #8381e8, #6a8cf0, #749bf3, #80a9f5, #8fb7f6, #a0c4f7)");
        $("#dashboard").css("background", "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))");
        $("#pro").css("background", "linear-gradient(to right top, #65dfc9, #6cdbeb)");
        $("p").css("color", "#658ec6");
        $("h2").css("color", "#658ec6");
        $(".iconemenu").css("filter", "invert(100%) sepia(51%) saturate(2878%) hue-rotate(110deg) brightness(80%) contrast(87%)");
    }
}