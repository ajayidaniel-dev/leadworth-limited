"use client";

const partners = [
  // SVG or public logo URLs (replace with real ones as needed)
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p1">
    <rect width="80" height="32" rx="8" fill="#F45625" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Alpha
    </text>
  </svg>,
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p2">
    <rect width="80" height="32" rx="8" fill="#00AEEF" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Beta
    </text>
  </svg>,
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p3">
    <rect width="80" height="32" rx="8" fill="#130F45" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Gamma
    </text>
  </svg>,
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p4">
    <rect width="80" height="32" rx="8" fill="#FFE5DC" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#F45625"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Delta
    </text>
  </svg>,
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p5">
    <rect width="80" height="32" rx="8" fill="#333333" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Epsilon
    </text>
  </svg>,
  <svg width="80" height="32" viewBox="0 0 80 32" fill="none" key="p6">
    <rect width="80" height="32" rx="8" fill="#F5F6FA" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#130F45"
      fontSize="18"
      fontWeight="bold"
      dy=".3em"
    >
      Zeta
    </text>
  </svg>,
];

function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-12 min-w-max animate-marquee whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : ""
        }`}
        style={{ animationDuration: "30s" }}
      >
        {partners.concat(partners).map((logo, i) => (
          <div className="flex items-center" key={i}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerSection() {
  return (
    <section className="w-full bg-white/60 py-10">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h3 className="text-center text-[#130F45] text-xl font-semibold mb-6">
          Our Trusted Partners
        </h3>
        <div className="space-y-6">
          <Marquee />
          <Marquee reverse />
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </section>
  );
}
