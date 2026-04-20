import { useCurrentFrame, interpolate, Easing, AbsoluteFill, Series } from "remotion";
import { loadFont } from "@remotion/google-fonts/Geist";

const { fontFamily } = loadFont("normal", { weights: ["400", "500", "600", "700"] });

const COLORS = {
  // Background - very light, soft gradient
  bgStart: "#ffffff",
  bgEnd: "#f0f4f8",
  bgAccent: "#e8f4fd",

  // Cards - pure white
  card: "#ffffff",

  // Accent - coral/orange gradient for CTA
  accentStart: "#ff6b5b",
  accentEnd: "#ff8a5c",

  // Secondary accents - muted pastels
  blue: "#4a9eff",
  green: "#34d399",
  purple: "#a78bfa",

  // Text
  textPrimary: "#1a1a2e",
  textSecondary: "#64748b",
  textMuted: "#94a3b8",

  // Shadows
  shadowColor: "rgba(0, 0, 0, 0.04)",
  shadowHover: "rgba(0, 0, 0, 0.08)",
};

// Squircle border radius
const squircle = (radius: number) => `${radius}px`;

export const CleanSaaSComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgStart }}>
      {/* Soft gradient background */}
      <GradientBackground />

      <Series>
        {/* Scene 1: Hero section - clean presentation (0-7.5s) */}
        <Series.Sequence durationInFrames={225}>
          <HeroScene />
        </Series.Sequence>

        {/* Scene 2: Value proposition cards (7.5-15s) */}
        <Series.Sequence durationInFrames={225}>
          <ValuePropsScene />
        </Series.Sequence>

        {/* Scene 3: Stats with clean counters (15-22.5s) */}
        <Series.Sequence durationInFrames={225}>
          <StatsScene />
        </Series.Sequence>

        {/* Scene 4: Services modular cards (22.5-30s) */}
        <Series.Sequence durationInFrames={225}>
          <ServicesScene />
        </Series.Sequence>

        {/* Scene 5: Final CTA (27-30s overlap) */}
        <Series.Sequence durationInFrames={150} offset={-30}>
          <CTAScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};

// Soft gradient background with depth
const GradientBackground = () => {
  const frame = useCurrentFrame();

  const blob1X = interpolate(frame, [0, 300], [0, 50], { extrapolateRight: "clamp" });
  const blob1Y = interpolate(frame, [0, 300], [0, -30], { extrapolateRight: "clamp" });
  const blob2X = interpolate(frame, [0, 300], [0, -40], { extrapolateRight: "clamp" });
  const blob2Y = interpolate(frame, [0, 300], [0, 60], { extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Main gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${COLORS.bgStart} 0%, ${COLORS.bgEnd} 50%, ${COLORS.bgAccent} 100%)`,
        }}
      />

      {/* Soft floating blobs */}
      <div
        style={{
          position: "absolute",
          top: `10%`,
          left: `20%`,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.blue}08 0%, transparent 70%)`,
          transform: `translate(${blob1X}px, ${blob1Y}px)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.purple}08 0%, transparent 70%)`,
          transform: `translate(${blob2X}px, ${blob2Y}px)`,
          filter: "blur(50px)",
        }}
      />
    </div>
  );
};

// Floating card component with soft shadow
const FloatingCard = ({
  children,
  delay,
  width = 400,
  height = "auto",
}: {
  children: React.ReactNode;
  delay: number;
  width?: number;
  height?: number | string;
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 90], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const y = interpolate(progress, [0, 1], [80, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const scale = interpolate(progress, [0, 0.8, 1], [0.95, 1.02, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        transform: `translateY(${y}px) scale(${scale})`,
        opacity,
        width,
        height,
        backgroundColor: COLORS.card,
        borderRadius: squircle(24),
        boxShadow: `0 4px 24px ${COLORS.shadowColor}, 0 1px 3px ${COLORS.shadowColor}`,
        padding: 40,
        border: "1px solid rgba(255, 255, 255, 0.8)",
      }}
    >
      {children}
    </div>
  );
};

// Icon badge component
const IconBadge = ({
  icon,
  color,
  delay,
}: {
  icon: string;
  color: string;
  delay: number;
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 60], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(progress, [0, 0.5, 1], [0, 1.2, 1], {
    extrapolateRight: "clamp",
  });

  const bgColor = color + "15";

  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: squircle(16),
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale})`,
        opacity: progress,
      }}
    >
      <span style={{ fontSize: 28 }}>{icon}</span>
    </div>
  );
};

// Scene 1: Clean Hero with asymmetric layout
const HeroScene = () => {
  const frame = useCurrentFrame();

  // Left column content
  const leftProgress = interpolate(frame, [0, 90], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const leftY = interpolate(leftProgress, [0, 1], [40, 0]);

  // Right column content
  const rightProgress = interpolate(frame, [45, 135], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const rightY = interpolate(rightProgress, [0, 1], [60, 0]);

  // Badge animation
  const badgeProgress = interpolate(frame, [30, 90], [0, 1], {
    extrapolateRight: "clamp",
  });

  const badgeScale = interpolate(badgeProgress, [0, 0.5, 1], [0.8, 1.1, 1], {
    extrapolateRight: "clamp",
  });

  // Headline animation
  const headlineProgress = interpolate(frame, [60, 150], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const headlineChars = Math.floor(interpolate(frame, [90, 180], [0, 45], {
    extrapolateRight: "clamp",
  }));

  const headlineText = "We craft digital experiences that convert".slice(0, headlineChars);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 80px", gap: 60 }}>
      {/* Left column - wide presentation zone */}
      <div style={{ flex: 1.4, transform: `translateY(${leftY}px)`, opacity: leftProgress }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: squircle(100),
            backgroundColor: COLORS.green + "15",
            border: `1px solid ${COLORS.green}30`,
            marginBottom: 32,
            transform: `scale(${badgeScale})`,
          }}
        >
          <span style={{ fontSize: 14, color: COLORS.green }}>●</span>
          <span style={{ fontSize: 14, fontWeight: 500, color: COLORS.green }}>Trusted by 50+ agencies</span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontFamily,
            fontSize: 56,
            fontWeight: 700,
            color: COLORS.textPrimary,
            lineHeight: 1.15,
            letterSpacing: -1,
            marginBottom: 24,
          }}
        >
          {headlineText}
          {frame > 90 && frame < 180 && <span style={{ opacity: 0.7 }}>|</span>}
        </div>

        {/* Subtext */}
        <div
          style={{
            fontFamily,
            fontSize: 20,
            color: COLORS.textSecondary,
            lineHeight: 1.6,
            maxWidth: 520,
            opacity: interpolate(frame, [120, 180], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          We combine strategic thinking with creative execution to build brands that stand out in crowded markets.
        </div>

        {/* Trust indicators */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
            opacity: interpolate(frame, [150, 200], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20, color: COLORS.green }}>✓</span>
            <span style={{ fontSize: 15, color: COLORS.textSecondary }}>No commitment</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20, color: COLORS.green }}>✓</span>
            <span style={{ fontSize: 15, color: COLORS.textSecondary }}>Free strategy call</span>
          </div>
        </div>
      </div>

      {/* Right column - transaction zone (narrower) */}
      <div style={{ flex: 1, transform: `translateY(${rightY}px)`, opacity: rightProgress }}>
        {/* Main CTA card */}
        <div
          style={{
            backgroundColor: COLORS.card,
            borderRadius: squircle(24),
            boxShadow: `0 8px 40px ${COLORS.shadowHover}, 0 2px 8px ${COLORS.shadowColor}`,
            padding: 40,
            border: "1px solid rgba(255, 255, 255, 0.9)",
          }}
        >
          <div style={{ marginBottom: 32 }}>
            <div
              style={{
                fontFamily,
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.textMuted,
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 12,
              }}
            >
              Start your project
            </div>
            <div
              style={{
                fontFamily,
                fontSize: 28,
                fontWeight: 700,
                color: COLORS.textPrimary,
              }}
            >
              Get a custom proposal
            </div>
          </div>

          {/* Input fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            <InputField label="Your email" placeholder="hello@company.com" delay={60} />
            <InputField label="Website URL" placeholder="www.example.com" delay={75} />
          </div>

          {/* Primary CTA button */}
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.accentStart} 0%, ${COLORS.accentEnd} 100%)`,
              borderRadius: squircle(14),
              padding: "18px 32px",
              textAlign: "center",
              boxShadow: `0 4px 20px ${COLORS.accentStart}40`,
            }}
          >
            <div
              style={{
                fontFamily,
                fontSize: 16,
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Request Free Audit →
            </div>
          </div>

          {/* Security note */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 16,
              opacity: interpolate(frame, [120, 170], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            <span style={{ fontSize: 16, color: COLORS.textMuted }}>🔒</span>
            <span style={{ fontSize: 13, color: COLORS.textMuted }}>Your data is secure & never shared</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Input field with clean styling
const InputField = ({ label, placeholder, delay }: { label: string; placeholder: string; delay: number }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 60], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const y = interpolate(progress, [0, 1], [20, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);

  return (
    <div style={{ transform: `translateY(${y}px)`, opacity }}>
      <label
        style={{
          fontFamily,
          fontSize: 13,
          fontWeight: 500,
          color: COLORS.textSecondary,
          display: "block",
          marginBottom: 8,
        }}
      >
        {label}
      </label>
      <div
        style={{
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: squircle(12),
          padding: "14px 16px",
          fontFamily,
          fontSize: 15,
          color: COLORS.textPrimary,
        }}
      >
        {placeholder}
      </div>
    </div>
  );
};

// Scene 2: Value proposition cards
const ValuePropsScene = () => {
  const frame = useCurrentFrame();

  const cards = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Websites load in under 2 seconds, keeping visitors engaged and improving conversions.",
      color: COLORS.blue,
      delay: 30,
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      desc: "Bank-level encryption and daily security audits protect your data from threats.",
      color: COLORS.green,
      delay: 60,
    },
    {
      icon: "📈",
      title: "Scale With Growth",
      desc: "Infrastructure that grows with your business, from startup to enterprise.",
      color: COLORS.purple,
      delay: 90,
    },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
      {/* Section title */}
      <div
        style={{
          fontFamily,
          fontSize: 42,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textAlign: "center",
          opacity: interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Why leading brands choose us
      </div>

      {/* Cards row */}
      <div style={{ display: "flex", gap: 24, padding: "0 80px" }}>
        {cards.map((card) => (
          <ValueCard key={card.title} {...card} />
        ))}
      </div>

      {/* Bottom indicator */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
          opacity: interpolate(frame, [120, 180], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            style={{
              width: dot === 1 ? 24 : 8,
              height: 8,
              borderRadius: 100,
              backgroundColor: dot === 1 ? COLORS.accentStart : COLORS.textMuted + "40",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Individual value card
const ValueCard = ({ icon, title, desc, color, delay }: { icon: string; title: string; desc: string; color: string; delay: number }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 90], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const y = interpolate(progress, [0, 1], [60, 0]);
  const scale = interpolate(progress, [0, 0.8, 1], [0.95, 1.02, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        flex: 1,
        maxWidth: 380,
        backgroundColor: COLORS.card,
        borderRadius: squircle(20),
        padding: 36,
        boxShadow: `0 4px 24px ${COLORS.shadowColor}`,
        border: "1px solid rgba(255, 255, 255, 0.8)",
        transform: `translateY(${y}px) scale(${scale})`,
        opacity: progress,
      }}
    >
      {/* Icon badge */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: squircle(16),
          backgroundColor: color + "12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <span style={{ fontSize: 32 }}>{icon}</span>
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily,
          fontSize: 22,
          fontWeight: 700,
          color: COLORS.textPrimary,
          marginBottom: 12,
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          fontFamily,
          fontSize: 15,
          color: COLORS.textSecondary,
          lineHeight: 1.6,
        }}
      >
        {desc}
      </div>

      {/* Learn more link */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 20,
          color: color,
          fontFamily,
          fontSize: 14,
          fontWeight: 600,
          cursor: "default",
        }}
      >
        Learn more
        <span>→</span>
      </div>
    </div>
  );
};

// Scene 3: Clean stats section
const StatsScene = () => {
  const frame = useCurrentFrame();

  const stats = [
    { value: "150+", label: "Projects delivered", color: COLORS.blue },
    { value: "50+", label: "Happy clients", color: COLORS.green },
    { value: "8+", label: "Years experience", color: COLORS.purple },
    { value: "99%", label: "Client satisfaction", color: COLORS.accentStart },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48 }}>
      {/* Clean header */}
      <div
        style={{
          textAlign: "center",
          opacity: interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily,
            fontSize: 42,
            fontWeight: 700,
            color: COLORS.textPrimary,
            marginBottom: 16,
          }}
        >
          Numbers that speak for themselves
        </div>
        <div
          style={{
            fontFamily,
            fontSize: 18,
            color: COLORS.textSecondary,
          }}
        >
          Trusted by industry leaders worldwide
        </div>
      </div>

      {/* Stats grid */}
      <div style={{ display: "flex", gap: 32, padding: "0 100px" }}>
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={60 + i * 45} />
        ))}
      </div>

      {/* Client logos placeholder */}
      <div
        style={{
          display: "flex",
          gap: 48,
          marginTop: 24,
          opacity: interpolate(frame, [180, 240], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {["Acme Corp", "TechStart", "GrowthLab", "NextGen"].map((name) => (
          <div
            key={name}
            style={{
              fontFamily,
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.textMuted,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual stat card
const StatCard = ({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 90], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(progress, [0, 0.5, 1], [0.9, 1.05, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        backgroundColor: COLORS.card,
        borderRadius: squircle(20),
        padding: "40px 48px",
        boxShadow: `0 4px 24px ${COLORS.shadowColor}`,
        textAlign: "center",
        minWidth: 200,
        transform: `scale(${scale})`,
        opacity: progress,
      }}
    >
      <div
        style={{
          fontFamily,
          fontSize: 52,
          fontWeight: 700,
          color: color,
          marginBottom: 8,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily,
          fontSize: 15,
          color: COLORS.textSecondary,
        }}
      >
        {label}
      </div>
    </div>
  );
};

// Scene 4: Services modular cards
const ServicesScene = () => {
  const frame = useCurrentFrame();

  const services = [
    {
      icon: "🎯",
      title: "Strategy",
      items: ["Market Research", "Brand Positioning", "Growth Planning"],
      color: COLORS.blue,
      delay: 30,
    },
    {
      icon: "✨",
      title: "Creative",
      items: ["Visual Identity", "Content Design", "Campaign Assets"],
      color: COLORS.purple,
      delay: 75,
    },
    {
      icon: "💻",
      title: "Digital",
      items: ["Web Development", "Landing Pages", "E-commerce"],
      color: COLORS.green,
      delay: 120,
    },
    {
      icon: "📊",
      title: "Analytics",
      items: ["Performance Tracking", "A/B Testing", "ROI Optimization"],
      color: COLORS.accentStart,
      delay: 165,
    },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      {/* Header */}
      <div
        style={{
          fontFamily,
          fontSize: 42,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textAlign: "center",
          opacity: interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        What we deliver
      </div>

      {/* Services grid */}
      <div style={{ display: "flex", gap: 20, padding: "0 60px" }}>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Bottom CTA hint */}
      <div
        style={{
          fontFamily,
          fontSize: 16,
          color: COLORS.textMuted,
          marginTop: 8,
          opacity: interpolate(frame, [210, 270], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        All services include dedicated project management →
      </div>
    </div>
  );
};

// Individual service card
const ServiceCard = ({ icon, title, items, color, delay }: { icon: string; title: string; items: string[]; color: string; delay: number }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + 90], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const y = interpolate(progress, [0, 1], [80, 0]);
  const rotate = interpolate(progress, [0, 1], [(delay / 15 - 5) * 0.5, 0]);

  return (
    <div
      style={{
        backgroundColor: COLORS.card,
        borderRadius: squircle(20),
        padding: 32,
        width: 220,
        boxShadow: `0 4px 24px ${COLORS.shadowColor}`,
        transform: `translateY(${y}px) rotate(${rotate}deg)`,
        opacity: progress,
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: squircle(14),
          backgroundColor: color + "12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <span style={{ fontSize: 28 }}>{icon}</span>
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily,
          fontSize: 24,
          fontWeight: 700,
          color: COLORS.textPrimary,
          marginBottom: 20,
        }}
      >
        {title}
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              fontFamily,
              fontSize: 14,
              color: COLORS.textSecondary,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ color: color, fontSize: 16 }}>✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

// Scene 5: Final CTA with warm gradient
const CTAScene = () => {
  const frame = useCurrentFrame();

  const titleProgress = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const cardProgress = interpolate(frame, [45, 120], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const cardY = interpolate(cardProgress, [0, 1], [60, 0]);
  const cardScale = interpolate(cardProgress, [0, 0.8, 1], [0.95, 1.02, 1], {
    extrapolateRight: "clamp",
  });

  const glowOpacity = interpolate(frame, [60, 120], [0, 0.4], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentStart}20 0%, transparent 60%)`,
          opacity: glowOpacity,
          filter: "blur(40px)",
        }}
      />

      {/* Title */}
      <div
        style={{
          fontFamily,
          fontSize: 56,
          fontWeight: 700,
          color: COLORS.textPrimary,
          textAlign: "center",
          opacity: titleProgress,
          transform: `scale(${titleProgress})`,
        }}
      >
        Ready to grow?
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily,
          fontSize: 20,
          color: COLORS.textSecondary,
          textAlign: "center",
          opacity: interpolate(frame, [30, 90], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Join 50+ agencies already scaling with GAGRAVITY
      </div>

      {/* CTA Card */}
      <div
        style={{
          backgroundColor: COLORS.card,
          borderRadius: squircle(24),
          padding: "48px 64px",
          boxShadow: `0 12px 60px ${COLORS.shadowHover}`,
          transform: `translateY(${cardY}px) scale(${cardScale})`,
          opacity: cardProgress,
          textAlign: "center",
          maxWidth: 500,
        }}
      >
        {/* Primary CTA */}
        <div
          style={{
            background: `linear-gradient(135deg, ${COLORS.accentStart} 0%, ${COLORS.accentEnd} 100%)`,
            borderRadius: squircle(16),
            padding: "20px 48px",
            boxShadow: `0 6px 30px ${COLORS.accentStart}40`,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontFamily,
              fontSize: 18,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Get Your Free Proposal →
          </div>
        </div>

        {/* Secondary link */}
        <div
          style={{
            fontFamily,
            fontSize: 15,
            color: COLORS.textSecondary,
          }}
        >
          or schedule a call at{' '}
          <span style={{ color: COLORS.textPrimary, fontWeight: 500 }}>hello@gagravity.agency</span>
        </div>
      </div>

      {/* Trust badges */}
      <div
        style={{
          display: "flex",
          gap: 32,
          opacity: interpolate(frame, [120, 180], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {[
          { icon: "🔒", text: "No contracts" },
          { icon: "⚡", text: "48h response" },
          { icon: "✨", text: "100% satisfaction" },
        ].map((item) => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span style={{ fontFamily, fontSize: 14, color: COLORS.textMuted }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};