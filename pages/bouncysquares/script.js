document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var particles = [];
    var brushSize = document.getElementById("brush-size").value;
    var isMousePressed = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Particle(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.gravity = 0.05;
        this.speedY = 0;

        this.update = function() {
            this.y += this.speedY;
            this.speedY += this.gravity;

            if (this.y > canvas.height) {
                this.y = canvas.height;
                this.speedY *= -1;
            }
        };

        this.draw = function() {
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.size, this.size);
        };
    }

    function createParticles(x, y) {
        var hue = Math.random() * 360;
        var color = "hsl(" + hue + ", 100%, 50%)";
        var particleCount = 20;

        for (var i = 0; i < particleCount; i++) {
            var size = Math.random() * brushSize + 1;
            particles.push(new Particle(x, y, size, color));
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            particle.update();
            particle.draw();
        }
    }

    canvas.addEventListener("mousedown", function() {
        isMousePressed = true;
    });

    canvas.addEventListener("mouseup", function() {
        isMousePressed = false;
    });

    canvas.addEventListener("mousemove", function(event) {
        if (isMousePressed) {
            createParticles(event.clientX, event.clientY);
        }
    });

    document.getElementById("brush-size").addEventListener("input", function() {
        brushSize = this.value;
    });

    animateParticles();
});
