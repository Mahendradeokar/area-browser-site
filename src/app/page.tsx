import Image from "next/image";
import heroImageDesktop4x from "~/assets/Breakpoint=Desktop-hero-image.png";
import heroImageMobile4x from "~/assets/Breakpoint=Mobile-hero-image.png";
import heroImageTablet4x from "~/assets/Breakpoint=Tablet-hero-image.png";
import mountains4x from "~/assets/mountains.png";
import sculptures4x from "~/assets/sculpture.png";
import showPiece4x from "~/assets/showPieces.png";
import walkwayToSea4x from "~/assets/walkwayToSea.png";
import { MobileHeader } from "~/components/shared/mobile-header";
import { WebHeader } from "~/components/shared/web-header";
import { Button } from "~/components/ui/button";
import { Divider } from "~/components/ui/divider";
import {
  ArrowUpIcon,
  BrandLogo,
  CableIcon,
  ChartIcon,
  CheckIcon,
  EarthIcon,
  GovernmentIcon,
} from "~/icons";
import { cn } from "~/lib/utils";

const BENEFIT_LIST = [
  {
    id: 1,
    title: "Amplify Insights",
    description:
      "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
    icon: CableIcon,
  },
  {
    id: 2,
    title: "Control Your Global Presence",
    description:
      "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
    icon: EarthIcon,
  },
  {
    id: 3,
    title: "Remove Language Barriers",
    description:
      "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
    icon: GovernmentIcon,
  },
  {
    id: 4,
    title: "Visualize Growth",
    description:
      "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
    icon: ChartIcon,
  },
];

const CLEAR_WHYS = [
  { id: 1, text: "Spot Trends in Seconds: No more digging through numbers." },
  {
    id: 2,
    text: "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  },
  {
    id: 3,
    text: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  },
  {
    id: 4,
    text: "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
  },
];

const COMPARE = [
  {
    id: 1,
    company: "Area",
    fontcss: "font-secondary text-2xl tracking-[-8%] leading-[120%]",
    shouldShowcase: true,
    features: [
      "Ultra-fast browsing",
      "Advanced AI insights",
      "Seamless integration",
      "Real-time collaboration",
      "Full UTF-8 support",
    ],
  },
  {
    id: 3,
    company: "WebSurge",
    fontcss:
      "font-rething-sans text-2xl tracking-[-8%] leading-[120%] text-neutral-dark",
    features: [
      "Fast browsing",
      "Basic AI recommendations",
      "Restricts customization",
      "Interactive analytics",
      "Potential display errors",
    ],
  },
  {
    id: 2,
    company: "HyperView",
    fontcss:
      "font-reddit-mono text-2xl tracking-[-8%] leading-[120%] text-neutral-dark",
    features: [
      "Moderate speed",
      "No Advanced AI insights",
      "Steep learning curve",
      "Customizable dashboards",
      "Partial UTF-8 support",
    ],
  },
];

const ROADMAP_TO_SUCCESS = [
  {
    id: 1,
    title: "Get Started",
    description: "With our intuitive setup, you’re up and running in minutes.",
  },
  {
    id: 2,
    title: "Customize and Configure",
    description: "Adapt Area to your specific requirements and preferences.",
  },
  {
    id: 3,
    title: "Grow Your Business",
    description: "Make informed decisions to exceed your goals.",
  },
];

const LOGOS = [
  { id: 1, src: "/logo-0.svg", alt: "Logo 0" },
  { id: 2, src: "/logo-1.svg", alt: "Logo 1" },
  { id: 3, src: "/logo-2.svg", alt: "Logo 2" },
  { id: 4, src: "/logo-3.svg", alt: "Logo 3" },
  { id: 5, src: "/logo-4.svg", alt: "Logo 4" },
  { id: 6, src: "/logo-5.svg", alt: "Logo 5" },
];

export default function Home() {
  return (
    <>
      <WebHeader />
      <MobileHeader />
      <main className="fluid-container py-10">
        <h1 className="text-display text-center font-primary tracking-di hyphens-auto wrap-break-word">
          Browse everything.
        </h1>
        <div className="pt-18 md:pt-20 xl:pt-25 mx-auto">
          <Image
            alt="Hero Image"
            className="-top-25! md:hidden"
            src={heroImageMobile4x}
            loading="eager"
          />
          <Image
            alt="Hero Image"
            className="hidden md:block xl:hidden"
            src={heroImageTablet4x}
            loading="eager"
          />
          <Image
            alt="Hero Image"
            className="hidden xl:block "
            src={heroImageDesktop4x}
            loading="eager"
          />
        </div>

        <section className="my-13 grid gap-5">
          <h2 className="font-secondary text-paragraph text-neutral-dark">
            Trusted by:
          </h2>
          <div className="flex flex-wrap gap-x-10 justify-evenly gap-y-5">
            {LOGOS.map((logo) => (
              <Image
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="p-8"
                width={150}
                height={82}
              />
            ))}
          </div>
        </section>
        <section className="pt-20 pb-25">
          <h2 className="font-accent text-caption text-primary">Benefit</h2>
          <h3 className="text-h2 my-7">We’ve cracked the code.</h3>
          <p className="font-secondary text-paragraph mb-12">
            Area provides real insights, without the data overload.
          </p>
          <div className="pt-10 mb-15">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {BENEFIT_LIST.map((benefit) => {
                return (
                  <div key={benefit.title}>
                    <Divider />
                    <div className="py-10 pr-5">
                      <div className="size-6 mb-6">
                        <benefit.icon />
                      </div>
                      <h3 className="text-h4 mb-5">{benefit.title}</h3>
                      <p className="text-paragraph font-secondary text-neutral-dark">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative isolate h-150 pb-25 rounded-4xl overflow-hidden">
            <Image
              alt="Hero Image"
              src={mountains4x}
              placeholder="blur"
              fill
              loading="lazy"
            />
          </div>
        </section>
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 lg:gap-5 px-4 md:px-0">
            <div>
              <Divider />
              <div className="grid gap-10 items-start pt-15 pb-20 justify-items-start">
                <h1 className="text-h2">See the Big Picture</h1>
                <p className="font-secondary text-paragraph">
                  Area turns your data into clear, vibrant visuals that show you
                  exactly what's happening in each region.
                </p>
                <ul>
                  {CLEAR_WHYS.map((why, index) => {
                    return (
                      <li key={why.id}>
                        <Divider />
                        <div className="flex gap-8 py-5">
                          <p className="text-neutral-dark font-secondary text-paragraph">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="text-paragraph font-secondary">
                            {why.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button variant="secondary" type="button">
                  Discover More
                </Button>
              </div>
            </div>
            <div className="rounded-4xl min-h-96 overflow-hidden">
              <Image
                alt="Hero Image"
                src={showPiece4x}
                placeholder="blur"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="mb-25 grid gap-5">
          <Divider />
          <div className="grid my-20 mt-15 gap-8 justify-items-center text-center">
            <p className="text-caption font-accent text-primary">Specs</p>
            <h2 className="text-h2">Why Choose Area?</h2>
            <p className="text-paragraph text-neutral-dark font-secondary">
              You need a solution that keeps up. That’s why we developed Area. A
              developer-friendly approach to streamline your business.{" "}
            </p>
            <Button variant={"secondary"} type="button">
              Discover More
            </Button>
          </div>
          <div className="overflow-auto -mx-con px-con pb-5 flex">
            {COMPARE.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex-1 border-divider last:border-none",
                  item.shouldShowcase
                    ? "shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.05)] rounded-[20px] border-2"
                    : "border-r-2"
                )}
              >
                <h4
                  className={cn(
                    "py-10 grid place-items-center px-8 text-2xl border-b-2 border-divider text-ellipsis overflow-hidden font-medium whitespace-nowrap",
                    item.fontcss
                  )}
                >
                  {item.company}
                </h4>
                <ul>
                  {item.features.map((feat) => (
                    <li
                      className={cn(
                        "py-8 grid grid-cols-[calc(var(--spacing)*3.5)_minmax(200px,1fr)] gap-3 items-center px-5 border-b-2 border-divider last:border-none font-accent text-caption w-full"
                      )}
                      key={feat + item.id}
                    >
                      <CheckIcon className="size-3.5" />
                      <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-10 md:gap-5 mb-30">
          <div className="relative overflow-hidden rounded-4xl">
            <Image
              alt="Hero Image"
              src={sculptures4x}
              placeholder="blur"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="eager"
            />
          </div>
          <div className="border-t-2 border-divider grid place-content-center">
            <blockquote className="text-h3 my-10 grid gap-12">
              <span>
                “I was skeptical, but Area has completely transformed the way I
                manage my business. The data visualizations are so clear and
                intuitive, and the platform is so easy to use. I can't imagine
                running my company without it.”
              </span>
              <div className="flex gap-2 items-center">
                <span className="text-paragraph">John Smith</span>
                <span className="text-caption font-secondary text-primary">
                  Head of Data
                </span>
              </div>
            </blockquote>
          </div>
        </section>
        <section className="mb-10">
          <Divider />
          <div className="flex justify-between flex-wrap gap-10 mt-20">
            <h2 className="text-h2">Map Your Success</h2>
            <Button variant={"secondary"} type="button">
              Discover More
            </Button>
          </div>
          <div className="mt-20 mb-25">
            <ol className="flex overflow-auto gap-5 -mx-con px-con">
              {ROADMAP_TO_SUCCESS.map((item, index) => (
                <li
                  key={item.id}
                  className="pt-15 pb-10 pr-8 grid gap-15 min-w-60  border-t-2 border-divider"
                >
                  <p className="font-secondary text-[5rem] tracking-[-8%] leading-[100%] text-neutral-light">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="text-h4 text-ellipsis overflow-hidden whitespace-nowrap">
                      {item.title}
                    </p>
                    <p className="text-paragraph font-secondary text-neutral-dark line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-4xl min-h-150">
            <Image
              alt="Hero Image"
              src={walkwayToSea4x}
              placeholder="blur"
              loading="eager"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </section>
        <Divider />
        <section>
          <div className="my-30 grid gap-10 max-w-150 justify-center text-center mx-auto">
            <h3 className="text-h2">Connect with us</h3>
            <p className="font-secondary text-paragraph text-neutral-dark">
              Schedule a quick call to learn how Area can turn your regional
              data into a powerful advantage.2025
            </p>
            <Button variant={"primary"} type="button" className="w-full">
              Learn More
              <ArrowUpIcon />
            </Button>
          </div>
        </section>
        <Divider />
        <footer className="pt-10 pb-5 grid gap-20">
          <ul className="grid sm:flex gap-7 font-secondary text-link font-bold">
            <li>Benefits</li>
            <li>Specifications</li>
            <li>How-to</li>
          </ul>
          <div className="flex gap-10 items-end">
            <BrandLogo className="w-8 h-18" />
            <div className="flex gap-4">
              <span className="font-accent text-caption text-primary">
                © Area.
              </span>
              <span className="font-accent text-caption text-primary">
                2025
              </span>
            </div>
            <span className="font-accent text-caption text-primary ml-auto">
              All Rights Reserved
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
