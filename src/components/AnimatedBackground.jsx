const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  top: `${(index * 37) % 100}%`,
  delay: `${(index % 9) * 0.45}s`,
  size: `${3 + (index % 4)}px`,
}));

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-one"></div>
      <div className="bg-glow bg-glow-two"></div>
      <div className="bg-glow bg-glow-three"></div>

      <div className="neural-layer">
        {particles.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              width: particle.size,
              height: particle.size,
            }}
          ></span>
        ))}
      </div>

      <div className="scan-line"></div>
    </div>
  );
};

export default AnimatedBackground;