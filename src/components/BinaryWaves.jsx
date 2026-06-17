import { useEffect, useRef } from "react";

const BinaryWaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let frameId;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const binaryText =
      "01100010 01100101 01101011 01101011 01100001 01110010 00100000 01101101 01100101 01100101 01110111 01100001 01101110";

    const lines = [
      { amp: 62, freq: 0.018, speed: 0.022, phase: 0.2, offset: -26 },
      { amp: 78, freq: 0.016, speed: 0.018, phase: 1.4, offset: -18 },
      { amp: 54, freq: 0.021, speed: 0.026, phase: 2.4, offset: -10 },
      { amp: 90, freq: 0.014, speed: 0.016, phase: 3.2, offset: -4 },
      { amp: 70, freq: 0.019, speed: 0.02, phase: 4.5, offset: 6 },
      { amp: 95, freq: 0.015, speed: 0.015, phase: 5.4, offset: 14 },
      { amp: 60, freq: 0.022, speed: 0.024, phase: 6.3, offset: 22 },
      { amp: 82, freq: 0.017, speed: 0.019, phase: 7.1, offset: 30 },
      { amp: 44, freq: 0.025, speed: 0.027, phase: 1.1, offset: -34 },
      { amp: 74, freq: 0.018, speed: 0.021, phase: 2.8, offset: 38 },
      { amp: 100, freq: 0.013, speed: 0.014, phase: 0.8, offset: -42 },
      { amp: 88, freq: 0.016, speed: 0.017, phase: 3.9, offset: 48 },
    ];

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);
      time += 1;

      const centerY = height * 0.58;
      const textEndX = width * 0.38;
      const startX = width * 0.43;
      const endX = width * 0.9;

      const glow = ctx.createRadialGradient(
        width * 0.85,
        centerY,
        10,
        width * 0.85,
        centerY,
        height * 0.8
      );

      glow.addColorStop(0, "rgba(215, 45, 255, 0.28)");
      glow.addColorStop(0.35, "rgba(124, 70, 255, 0.15)");
      glow.addColorStop(1, "rgba(7, 18, 39, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.font = "7px monospace";
      ctx.fillStyle = "rgba(0, 205, 255, 0.62)";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0, 205, 255, 0.8)";
      ctx.shadowBlur = 8;
      ctx.fillText(binaryText, textEndX, centerY);
      ctx.restore();

      const connector = ctx.createLinearGradient(textEndX, 0, startX, 0);
      connector.addColorStop(0, "rgba(0, 205, 255, 0)");
      connector.addColorStop(1, "rgba(0, 220, 255, 0.8)");

      ctx.beginPath();
      ctx.moveTo(textEndX + 12, centerY);
      ctx.lineTo(startX + 8, centerY);
      ctx.strokeStyle = connector;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      lines.forEach((line, index) => {
        ctx.beginPath();

        const gradient = ctx.createLinearGradient(startX, 0, endX, 0);
        gradient.addColorStop(0, "rgba(0, 226, 255, 0.95)");
        gradient.addColorStop(0.35, "rgba(30, 130, 255, 0.85)");
        gradient.addColorStop(0.7, "rgba(126, 75, 255, 0.82)");
        gradient.addColorStop(1, "rgba(255, 45, 218, 0.78)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = index % 3 === 0 ? 1.3 : 1;
        ctx.shadowColor = index % 2 === 0 ? "#00d9ff" : "#b936ff";
        ctx.shadowBlur = 7;

        for (let x = startX; x <= endX; x += 4) {
          const progress = (x - startX) / (endX - startX);
          const spread = Math.pow(progress, 1.65);

          const wave1 =
            Math.sin(x * line.freq + time * line.speed + line.phase) *
            line.amp *
            spread;

          const wave2 =
            Math.sin(
              x * line.freq * 0.48 - time * line.speed * 0.7 + line.phase
            ) *
            line.amp *
            0.28 *
            spread;

          const y = centerY + line.offset * progress + wave1 + wave2;

          if (x === startX) {
            ctx.moveTo(x, centerY);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();

        const finalWave1 =
          Math.sin(endX * line.freq + time * line.speed + line.phase) *
          line.amp;

        const finalWave2 =
          Math.sin(
            endX * line.freq * 0.48 - time * line.speed * 0.7 + line.phase
          ) *
          line.amp *
          0.28;

        const finalY = centerY + line.offset + finalWave1 + finalWave2;

        ctx.beginPath();
        ctx.arc(endX, finalY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 53, 211, 0.9)";
        ctx.shadowColor = "#ff35d3";
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="binary-waves">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default BinaryWaves;