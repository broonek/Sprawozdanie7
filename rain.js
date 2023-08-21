window.onload = function () {
  var numberOfDrops = 100;
  var rain = document.getElementById("rain");

  var water = document.createElement("div");
  water.className = "water";
  document.body.appendChild(water);

  for (var i = 0; i < numberOfDrops; i++) {
    var splash = document.createElement("div");
    splash.className = "splash";
    splash.style.left = `${Math.random() * 100}vw`;
    splash.style.bottom = `${Math.random() * 20}vh`; // Randomize the vertical position
    splash.style.animationDelay = `${Math.random() * 2}s`;
    water.appendChild(splash);
  }

  for (var i = 0; i < numberOfDrops; i++) {
    var drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    rain.appendChild(drop);
  }
};
