import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let isMenuOpen =
      document.documentElement.classList.contains("mobile-menu-open");

    // Observe class changes on <html> to detect mobile menu open/close
    const classObserver = new MutationObserver(() => {
      isMenuOpen =
        document.documentElement.classList.contains("mobile-menu-open");
    });
    classObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges and keep within bounds
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -1;
        }
        if (this.x > canvas.width) {
          this.x = canvas.width;
          this.vx *= -1;
        }
        if (this.y < 0) {
          this.y = 0;
          this.vy *= -1;
        }
        if (this.y > canvas.height) {
          this.y = canvas.height;
          this.vy *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Much lighter particle fill; dim further when menu open
        const baseAlpha = 0.25; // previously 0.4
        const alpha = isMenuOpen ? baseAlpha * 0.4 : baseAlpha; // reduce more when menu open
        ctx.fillStyle = `rgba(170,170,170,${alpha})`;
        ctx.fill();
      }
    }

    // Create particles - responsive counts
    const baseCount = window.innerWidth < 768 ? 60 : 100;
    for (let i = 0; i < baseCount; i++) particles.push(new Particle());

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      const maxDistance = isMenuOpen ? 90 : 150; // slightly shorter when menu open
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacityFactor = isMenuOpen ? 0.06 : 0.15; // reduce further
            const opacity = opacityFactor * (1 - distance / maxDistance);
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacity})`;
            ctx.lineWidth = isMenuOpen ? 0.4 : 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
      classObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticlesBackground;
