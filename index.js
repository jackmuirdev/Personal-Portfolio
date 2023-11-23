document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {

  particlesJS("particles", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
      },
      "opacity": {
        "value": 0.8,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false
      },
    },
    "interactivity": {
      "detectsOn": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      },
    },
    "retina_detect": true
  });
});

function showPrivateCodeAlert() {
  alert("Sorry to disappoint, the source code is unavailable due to being private.");
}

function showUnfinishedProjectAlert() {
  alert("Sorry to disappoint, the project is unavailable due to it be unfinished - check back again soon!");
}

function confirmDownload() {
    window.open("/images/Jack Muir CV.pdf", '_blank');
}