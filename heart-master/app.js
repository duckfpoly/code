var settings2 = {
    particles: {
        length: 1000, // maximum amount of particles

        duration: 2, // particle duration in sec

        velocity: 100, // particle velocity in pixels/sec

        effect: 1, // play with this for a nice effect

        size: 20, // particle size in pixels
    },
};

var ParticlePool = (function () {
    var particles,
        firstActive = 0,
        firstFree = 0,
        duration = settings2.particles.duration;

    function ParticlePool(length) {
        // create and populate particle pool

        particles = new Array(length);

        for (var i = 0; i < particles.length; i++) particles[i] = new Particle();
    }

    ParticlePool.prototype.add = function (x, y, dx, dy) {
        particles[firstFree].initialize(x, y, dx, dy);

        // handle circular queue

        firstFree++;

        if (firstFree == particles.length) firstFree = 0;

        if (firstActive == firstFree) firstActive++;

        if (firstActive == particles.length) firstActive = 0;
    };

    ParticlePool.prototype.update = function (deltaTime) {
        var i;

        // update active particles

        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++) particles[i].update(deltaTime);
        }

        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
                particles[i].update(deltaTime);

            for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
        }

        // remove inactive particles

        while (particles[firstActive].age >= duration && firstActive != firstFree) {
            firstActive++;

            if (firstActive == particles.length) firstActive = 0;
        }
    };

    ParticlePool.prototype.draw = function (context, image) {
        // draw active particles

        if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++)
                particles[i].draw(context, image);
        }

        if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
                particles[i].draw(context, image);

            for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
        }
    };

    return ParticlePool;
})();

(function (canvas) {
    var context = canvas.getContext("2d"),
        particles = new ParticlePool(settings2.particles.length),
        particleRate = settings2.particles.length / settings2.particles.duration, // particles/sec
        time;

    // get point on heart with -PI <= t <= PI

    function pointOnHeart(t) {
        return new Point(
            160 * Math.pow(Math.sin(t), 3),

            130 * Math.cos(t) -
            50 * Math.cos(2 * t) -
            20 * Math.cos(3 * t) -
            10 * Math.cos(4 * t) +
            25
        );
    }

    // creating the particle image using a dummy canvas

    var image = (function () {
        var canvas = document.createElement("canvas"),
            context = canvas.getContext("2d");

        canvas.width = settings2.particles.size;

        canvas.height = settings2.particles.size;

        // helper function to create the path

        function to(t) {
            var point = pointOnHeart(t);

            point.x =
                settings2.particles.size / 2 + (point.x * settings2.particles.size) / 350;

            point.y =
                settings2.particles.size / 2 - (point.y * settings2.particles.size) / 350;

            return point;
        }

        // create the path

        context.beginPath();

        var t = -Math.PI;

        var point = to(t);

        context.moveTo(point.x, point.y);

        while (t < Math.PI) {
            t += 0.01; // baby steps!

            point = to(t);

            context.lineTo(point.x, point.y);
        }

        context.closePath();

        // create the fill

        context.fillStyle = "#ea80b0";

        context.fill();

        // create the image

        var image = new Image();

        image.src = canvas.toDataURL();

        return image;
    })();

    // render that thing!

    function render() {
        // next animation frame

        requestAnimationFrame(render);

        // update time

        var newTime = new Date().getTime() / 1000,
            deltaTime = newTime - (time || newTime);

        time = newTime;

        // clear canvas

        context.clearRect(0, 0, canvas.width, canvas.height);

        // create new particles

        var amount = particleRate * deltaTime;

        for (var i = 0; i < amount; i++) {
            var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());

            var dir = pos.clone().length(settings2.particles.velocity);

            particles.add(
                canvas.width    / 2 + pos.x,
                canvas.height   / 2 - pos.y,
                dir.x,
                -dir.y
            );
        }

        // update and draw particles

        particles.update(deltaTime);

        particles.draw(context, image);
    }

    // handle (re-)sizing of the canvas

    function onResize() {
        canvas.width = canvas.clientWidth;

        canvas.height = canvas.clientHeight;
    }

    window.onresize = onResize;

    // delay rendering bootstrap

    setTimeout(function () {
        onResize();

        render();
    }, 10);
})(document.getElementById("pinkboard2"));
