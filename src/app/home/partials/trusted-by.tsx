import { Marquee } from "@/components/ui/marquee";
import { trustedCompaniesData } from "@/constant/trusted-companies-data";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="md:mt-20 mt-6.5">
      <h3
        id="trusted-by-heading"
        className="text-center text-md-semibold md:text-xl-semibold text-neutral-25"
      >
        Trusted by Leading Companies Worldwide
      </h3>

      <CompaniesMarquee />
    </div>
  );
};

export default TrustedBy;

const CompaniesMarquee = () => {
  return (
    <div className="custom-container items-center h-28.5 relative flex md:h-50">
      <div className="w-full overflow-hidden mix-blend-luminosity">
        <Marquee>
          {trustedCompaniesData.map((data) => (
            <Image
              alt={data.alt}
              src={data.src}
              key={data.alt}
              className="h-full w-auto object-contain select-none"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};
