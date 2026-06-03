import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import SkewMotion from "@/components/ui/skew-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="custom-container pt-28 md:pt-38.25 flex flex-wrap items-center gap-7 overflow-hidden md:gap-10"
      aria-label="hero-heading"
    >
      {/* kiri  */}
      <div className="flex-[5.6] basis-80">
        <h1 className="text-display-lg font-bold md:text-display-2xl text-neutral-25">
          Your Trusted IT{" "}
          <span className="text-primary-300">Partner for Digital</span> Success
        </h1>
        <p className="text-sm-regular md:text-md-regular mt-3 text-neutral-400">
          We craft custom IT solutions that align with your goals, ensuring
          efficiency, security, and innovation
        </p>
        <Button className="mt-6 md:mt-12 md:w-fit">
          <Link aria-label="Get Started" href="#">
            Get Started
          </Link>
        </Button>
      </div>
      {/* kanan */}

      <div
        className="flex-[4.4] basis-80 relative"
        style={{ height: "clamp(21.19rem, 52.73vw, 39.81rem);" }}
      >
        <SkewMotion asChild>
          {/* children */}
          <Image
            alt="hero-image"
            src="/images/hero-image.png"
            fill
            className="object-contain"
          />
        </SkewMotion>

        <FeatureCard
          title="Elite Solutions"
          description="Cutting-edge tech, flawless execution"
          icon={<Icon icon="mingcute:flash-fill" />}
          animationDelay={0.2}
          className="absolute top-[10%] right-1/2 -translate-x-[6.25%]"
        />

        <FeatureCard
          title="Smart Tech"
          description="Innovation that drives real growth."
          icon={<Icon icon="ri:brain-fill" />}
          animationDelay={0.2}
          className="absolute top-[43%] left-1/2  translate-x-[37.5%]"
        />

        <FeatureCard
          title="Real Impact"
          description="We turn ideas into measurable success"
          icon={<Icon icon="bi:bar-chart-fill" />}
          animationDelay={0.2}
          className="absolute top-[49%] right-1/2  -translate-x-[48%]"
        />

        <div className="from-base-background absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
