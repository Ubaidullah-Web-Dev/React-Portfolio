import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NeonCursor() {
    const cursorRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let target = { x: pos.x, y: pos.y };
        let trail = [];
        const maxTrail = 30;
        let hue = 0;

        const particles = [];
        const sparkles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        window.addEventListener("mousemove", (e) => {
            target.x = e.clientX;
            target.y = e.clientY;
        });

        let hoverTween = null;
        let glitchInterval = null;
        let hoverSections = [];

        function checkHoverSections() {
            let hoveringSection = null;

            hoverSections.forEach(section => {
                const rect = section.el.getBoundingClientRect();
                const isHovering = pos.x > rect.left && pos.x < rect.right && pos.y > rect.top && pos.y < rect.bottom;

                if (isHovering && !section.isHovering) {
                    section.isHovering = true;
                    triggerHoverEffect();
                } else if (!isHovering && section.isHovering) {
                    section.isHovering = false;
                    resetHoverEffect();
                }

                if (isHovering) hoveringSection = section.el;
            });

            // --- REMOVED MAGNET EFFECT LOGIC START ---
            /*
            if (hoveringSection) {
                const rect = hoveringSection.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const pullStrength = 0.15;
                target.x += (centerX - target.x) * pullStrength;
                target.y += (centerY - target.y) * pullStrength;
            }
            */
            // --- REMOVED MAGNET EFFECT LOGIC END ---
        }

        function triggerHoverEffect() {
            if (hoverTween) hoverTween.kill();
            if (glitchInterval) clearInterval(glitchInterval);

            cursor.style.backgroundColor = `hsla(${hue},100%,70%,0.25)`;
            cursor.style.boxShadow = `
        0 0 50px hsla(${hue},100%,95%,0.9),
        0 0 30px hsla(${hue},100%,90%,0.8),
        0 0 15px hsla(${hue},100%,85%,0.6)
      `;
            cursor.style.filter = "brightness(2.2) saturate(1.6)";

            hoverTween = gsap.to(cursor, {
                scale: 1.2,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            glitchInterval = setInterval(() => {
                const rOffset = Math.random() * 2 - 1;
                const gOffset = Math.random() * 2 - 1;
                const bOffset = Math.random() * 2 - 1;

                cursor.style.filter = `
          drop-shadow(${rOffset}px 0 red)
          drop-shadow(0 ${gOffset}px lime)
          drop-shadow(${bOffset}px ${-bOffset}px cyan)
          brightness(2.2) saturate(1.6)
        `;
            }, 50);

            if (!cursor.querySelector(".aura")) {
                const aura = document.createElement("div");
                aura.classList.add("aura");
                aura.style.position = "absolute";
                aura.style.top = "-18px";
                aura.style.left = "-18px";
                aura.style.width = "64px";
                aura.style.height = "64px";
                aura.style.borderRadius = "50%";
                aura.style.pointerEvents = "none";
                aura.style.border = `2px solid hsla(${hue},100%,90%,0.4)`;
                aura.style.boxShadow = `
          0 0 30px hsla(${hue},100%,95%,0.4),
          0 0 45px hsla(${hue},100%,85%,0.3)
        `;
                cursor.appendChild(aura);

                gsap.to(aura, {
                    rotation: 360,
                    repeat: -1,
                    duration: 4,
                    ease: "linear"
                });
            }
        }

        function resetHoverEffect() {
            if (hoverTween) hoverTween.kill();
            hoverTween = null;
            if (glitchInterval) clearInterval(glitchInterval);
            glitchInterval = null;

            cursor.style.backgroundColor = `hsla(${hue},100%,85%,0.7)`;
            cursor.style.filter = "brightness(1.2)";
            cursor.style.boxShadow = `
        0 0 40px hsla(${hue},100%,95%,1),
        0 0 80px hsla(${hue},100%,100%,0.8),
        0 0 160px hsla(${hue},100%,100%,0.6)
      `;

            const aura = cursor.querySelector(".aura");
            if (aura) aura.remove();
        }

        function animate() {
            hue = (hue + 1) % 360;

            pos.x += (target.x - pos.x) * 0.09;
            pos.y += (target.y - pos.y) * 0.09;
            gsap.set(cursor, { x: pos.x, y: pos.y });

            checkHoverSections();

            trail.push({ x: pos.x, y: pos.y, hue });
            if (trail.length > maxTrail) trail.shift();

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (trail.length > 1) {
                ctx.beginPath();
                for (let i = 0; i < trail.length; i++) {
                    const p = trail[i];
                    if (i === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                const grad = ctx.createLinearGradient(
                    trail[0].x, trail[0].y,
                    trail[trail.length - 1].x, trail[trail.length - 1].y
                );
                for (let i = 0; i < trail.length; i++) {
                    const t = i / trail.length;
                    grad.addColorStop(
                        t,
                        `hsla(${trail[i].hue},100%,75%,${0.9 * t})`
                    );
                }
                ctx.strokeStyle = grad;
                ctx.lineWidth = 14;
                ctx.shadowBlur = 40;
                ctx.shadowColor = `hsla(${hue},100%,90%,0.95)`;
                ctx.lineCap = "round";
                ctx.stroke();
            }

            if (trail.length) {
                const tip = trail[trail.length - 1];
                for (let i = 0; i < 2; i++) {
                    particles.push({
                        x: tip.x,
                        y: tip.y,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        alpha: 1,
                        hue: (tip.hue + Math.random() * 60 - 30) % 360,
                        radius: Math.random() * 2 + 1
                    });
                }
            }

            trail.forEach(p => {
                if (Math.random() < 0.05) {
                    sparkles.push({
                        x: p.x,
                        y: p.y,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5,
                        alpha: 1,
                        hue: (p.hue + Math.random() * 60 - 30) % 360,
                        radius: Math.random() * 1.5 + 0.5
                    });
                }
            });

            [...particles, ...sparkles].forEach((p, i, arr) => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.03;
                if (p.alpha <= 0) arr.splice(i, 1);
                else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${p.hue},100%,85%,${p.alpha})`;
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = `hsla(${p.hue},100%,90%,${p.alpha})`;
                    ctx.fill();
                }
            });

            cursor.style.backgroundColor = `hsla(${hue},100%,85%,0.7)`;
            cursor.style.boxShadow = `
        0 0 40px hsla(${hue},100%,95%,1),
        0 0 80px hsla(${hue},100%,100%,0.8),
        0 0 160px hsla(${hue},100%,100%,0.6)
      `;

            requestAnimationFrame(animate);
        }
        animate();

        const clickable = document.querySelectorAll(
            "a[href], button, [role='button'], input, select, textarea"
        );
        clickable.forEach(el => {
            el.addEventListener("mouseenter", triggerHoverEffect);
            el.addEventListener("mouseleave", resetHoverEffect);
        });

        hoverSections = Array.from(document.querySelectorAll(".hover-cursor-section")).map(el => ({
            el,
            isHovering: false
        }));

        window.addEventListener("click", (e) => {
            const burst = document.createElement("div");
            burst.style.position = "fixed";
            burst.style.left = `${e.clientX}px`;
            burst.style.top = `${e.clientY}px`;
            burst.style.width = "0px";
            burst.style.height = "0px";
            burst.style.borderRadius = "50%";
            burst.style.pointerEvents = "none";
            burst.style.zIndex = 9999;
            burst.style.boxShadow = `0 0 50px hsl(${hue},100%,85%), 0 0 20px hsl(${hue},100%,75%)`;
            document.body.appendChild(burst);

            gsap.to(burst, {
                width: 120,
                height: 120,
                marginLeft: -60,
                marginTop: -60,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => burst.remove(),
            });

            gsap.fromTo(
                cursor,
                { scale: 3, opacity: 0.5 },
                { scale: 1.6, opacity: 1, duration: 0.35, ease: "back.out(3)" }
            );
        });
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="cursor-trail"
            />
            <div
                ref={cursorRef}
                className="neon-cursor"
                style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    backdropFilter: "blur(6px)",
                    mixBlendMode: "difference",
                }}
            />
        </>
    );
}