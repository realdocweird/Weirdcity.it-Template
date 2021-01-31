function RefreshPagina(dove) {
    var x = document.getElementById("main");
    var y = document.getElementById("who");
    var z = document.getElementById("igram");
    if (dove == "chisiamo" ) {
        x.style.display = "none";        
        y.style.display = "flex";
        z.style.display = "none";
        console.log("ti ho portato a chi siamo")
    } else if (dove == "igram" ) {
        window.open('https://www.instagram.com/weird.ita', '_blank');
        console.log("ti ho portato a igram")
    } else if (dove == "main" ) {
        x.style.display = "block";        
        y.style.display = "none";
        z.style.display = "none";
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