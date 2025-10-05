import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onComplete }) {
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(() => {
    const duration = 2.5;
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        gsap.to(overlayRef.current, {
          duration: 1,
          opacity: 0,
          pointerEvents: "none",
          onComplete,
        });
      },
    });

    // Progress bar animation
    tl.to(progressRef.current, {
      width: "100%",
      duration,
    });

    // Number counting (independent tween)
    gsap.to({}, {
      duration,
      onUpdate: function () {
        const progress = Math.floor(this.progress() * 100);
        textRef.current.textContent = `${progress}%`;
      },
    });

    // Fade out text after bar fills
    tl.to(textRef.current, { opacity: 0, duration: 0.4 }, "+=0.2");

    return () => tl.kill();
  }, []); // ✅ useGSAP automatically cleans up

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-[#523122] text-white flex flex-col items-center justify-center z-[9999]"
    >
      <div className="relative w-[70vw] h-[1px] bg-white/10 overflow-hidden rounded-full">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 h-full bg-white rounded-full"
          style={{ width: "0%" }}
        />
      </div>
      <div ref={textRef} className="mt-4 text-lg font-paragraph">
        0%
      </div>
    </div>
  );
}
