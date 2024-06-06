window.onload = function () {
  const button = document.querySelector("#toggle-button");
  button.addEventListener("click", toggle);

  const body = document.querySelector("body");
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero-img");
  const projbutton = document.querySelector(".white");
  const text = document.querySelector("p");
  const textday = document.querySelector(".dark-mod-day");
  const textdark = document.querySelector(".dark-mod-nigth");
  const footer = document.querySelector("footer");
  const footertext = document.querySelector(".footer");

  function toggle(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      goDark();
    } else {
      goLight();
    }
  }

  function goDark() {
    body.style.background = "#070021";
    body.style.color = "#938EB1";
    nav.style.background = "#070021";
    text.style.color = "#C8C3E8";
    textday.style.color = "#ffffff4d";
    textdark.style.color = "#ffffff";
    projbutton.style.backgroundColor = "#605D7D";
    projbutton.style.color = "#C8C3E8";
    hero.style.filter = "grayscale(1)";
    footer.style.backgroundColor = "#0f0030";
    footertext.style.color = "#938eb1";
    var image = document.getElementById("logo-img");
    image.src = "/images/DR Logo vit.png";
  }

  function goLight() {
    body.style.background = "#f5f5f5";
    body.style.color = "black";
    nav.style.background = "white";
    text.style.color = "black";
    textday.style.color = "#262626";
    textdark.style.color = "#2626265d";
    projbutton.style.backgroundColor = "white";
    projbutton.style.color = "black";
    hero.style.filter = "none";
    footer.style.backgroundColor = "#e5e7eb";
    footertext.style.color = "#4b5563";
    var image = document.getElementById("logo-img");
    image.src = "/images/DR Logo.png";
  }
};
