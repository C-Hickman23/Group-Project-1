var varLogo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fthumbs%2Fufc-logo-black-and-white.png&f=1&nofb=1&ipt=caf9f20309c8ad72d0d32ab67f0d0f16c632154076439b0eeae9ec77b8498e33&ipo=images";
var zuckLogo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.geico.com%2Fpublic%2Flayout_images%2Fhomepage%2Fdesign6%2Fgecko-half-default.jpg&f=1&nofb=1&ipt=f23b2439945303d49cb24e20029b772a78fc5b5c5174c4c35601a8cb50bf2235&ipo=images";
var muskLogo = "https://cdn.kqed.org/wp-content/uploads/sites/10/2018/09/MuskToke-128x128.jpg";
var muskVote = document.getElementById("muskVote");
var zuckVote = document.getElementById("zuckVote");
localStorage.setItem("haveLogo", false);

function updateDVD(){
    //credit for og code: https://codepen.io/codesalot/pen/LYmryQX
    var dvd = document.createElement('img');
    dvd.setAttribute("id", "dvd");
    dvd.src = varLogo;
    dvd.style.position = 'absolute';
    dvd.style.left = '0px';
    dvd.style.top = '0px';
    dvd.style.width = "200px";
    document.body.appendChild(dvd);
    var xVel = 1;
    var yVel = 1;
    var xPos = 0;
    var yPos = 0;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var dvdInterval = setInterval(function() {
    xPos += xVel;
    yPos += yVel;
    if (xPos + dvd.width >= width || xPos <= 0) {
        xVel *= -1;
    }
    if (yPos + dvd.height >= height || yPos <= 0) {
        yVel *= -1;
    }
    dvd.style.left = xPos + 'px';
    dvd.style.top = yPos + 'px';
    }, 10);
    localStorage.haveLogo = true;
}

function removeDVD(){
    document.getElementById("dvd").remove();
}

muskVote.addEventListener("click", function(){
    varLogo = muskLogo;
    removeDVD();
    updateDVD();
})

zuckVote.addEventListener("click", function(){
    varLogo = zuckLogo;
    removeDVD();
    updateDVD();
})

updateDVD();