import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsData } from "@/constant/tabs-data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const UseCaseTabs = () => {
  return (
    <section
      aria-labelledby="usecase-tabs-heading"
      className="custom-container flex flex-col items-center gap-7 py-10 md:py-20 md:gap-16"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h2 className="display-sm-bold md:display-lg-bold text-neutral-25">
          Tailored IT Solutions for Every Industry
        </h2>
        <p className="text-sm-regular md:text-md-regular mt-4 text-neutral-400 max-w-[907px]">
          From finance to healthcare and retail, we provide cutting-edge
          technology solutions to drive efficiency, security, and growth in your
          industry
        </p>
      </div>

      <Tabs
        className="flex w-full flex-col items-center gap-8 md:gap-16.5"
        orientation="horizontal"
        defaultValue={tabsData[0].key}
      >
        <TabsList className="h-11 md:h-11.5 w-full border-b-0">
          {tabsData.map((tab) => (
            <TabsTrigger
              value={tab.key}
              key={tab.key}
              className="text-sm-regular text-neutral-25 data-[state=active]: border-primary-300 data-[state=active]:text-primary-300 h-11 md:h-11.5 border-b border-neutral-800 p-2 hover:bg-transparent data-[state=active]:border-b-2 data-[state=active]:font-semibold [&>div]:hidden"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* tabs content */}
        {tabsData.map((tab) => {
          const { key, ...contentProps } = tab;

          return (
            <TabsContent
              key={key}
              value={key}
              className="flex w-full flex-col items-center"
            >
              <Content {...contentProps} />
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default UseCaseTabs;

type ContentProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

const Content: React.FC<ContentProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex w-full max-w-[930px] flex-col items-center gap-8 md:h-[360px] md:flex-row md:gap-[100px]">
      <div className="flex w-full max-w-[470px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="display-xs-bold md:display-xl-bold text-neutral-25 md:leading-[56px]">
            {title}
          </h3>
          <p className="text-sm-regular md:text-md-regular text-neutral-400">
            {description}
          </p>
        </div>
        <Button asChild className="w-full px-0 md:w-[197px]">
          <Link href="#">Detail</Link>
        </Button>
      </div>

      <Image
        className="aspect-square w-full max-w-[360px] rounded-2xl object-cover md:size-[360px]"
        alt={title}
        src={imageSrc}
      />
    </div>
  );
};
