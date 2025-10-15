import Image from "next/image";
import heroImage4x from "~/assets/mobile-iphone-image-4x.png";
import mountains4x from "~/assets/mountains.png";
import sculptures4x from "~/assets/sculpture.png";
import walkwayToSea4x from "~/assets/walkwayToSea.png";
import showPiece4x from "~/assets/showPieces.png";
import { Button } from "~/components/ui/button";
import { Divider } from "~/components/ui/divider";
import { Text } from "~/components/ui/heading";
import {
  BrandLogo,
  CableIcon,
  ChartIcon,
  EarthIcon,
  GovernmentIcon,
  HamburgerIcon,
} from "~/icons";
import { SHIMMER_PLACE_HOLDER } from "~/lib/image-placeholder";


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
  { id: 2, text: "Get Everyone on the Same Page: Share easy-to-understand reports with your team." },
  { id: 3, text: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged." },
  { id: 4, text: "Your Global Snapshot: Get a quick, clear overview of your entire operation." },
];

const COMPARE = [
  {
    id: 1,
    company: "Area",
    features: [
      "Ultra-fast browsing",
      "Advanced AI insights",
      "Seamless integration",
      "Real-time collaboration",
      "Full UTF-8 support",
    ],
  },
  {
    id: 2,
    company: "HyperView",
    features: [
      "Moderate speeds",
      "No AI assistance",
      "Steep learning curve",
      "Customizable dashboards",
      "Partial UTF-8 support",
    ],
  },
  {
    id: 3,
    company: "WebSurge",
    features: [
      "Fast browsing",
      "Basic AI recommendations",
      "Restricts customization",
      "Interactive analytics",
      "Potential display errors",
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
    <div className="max-w-[92rem] mx-auto">
      <header className="h-20 flex justify-between items-start p-5 rounded-b-lg shadow-[0px_2px_4px_0px_hsla(0,0%,0%,0.05)] tracking-[-0.08em] leading-[1.2]">
        <div className="font-secondary text-3xl">Area</div>
        <HamburgerIcon className="size-6" />
      </header>
      <main className="px-con py-10">
        <h1 className="text-display text-center font-primary hyphens-auto wrap-break-word">Browse everything.</h1>
        <div className="overflow-hidden pt-30 mx-auto rounded-b-4xl">
          <div className="relative bg-secondary rounded-4xl h-112">
            <Image
              alt="Hero Image"
              className="absolute -top-25!"
              src={heroImage4x}
              loading="eager"
            />
          </div>
        </div>

        <section className="my-13 grid gap-5">
          <h2 className="font-secondary text-paragraph text-neutral-dark">Trusted by:</h2>
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
          <p className="font-secondary text-paragraph mb-12">Area provides real insights, without the data overload.</p>
          <div className="pt-10 mb-15">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {BENEFIT_LIST.map((benefit) => {
                return (
                  <div key={benefit.title}>
                    <Divider />
                    <div className="py-10 pr-5" >
                      <div className="size-6 mb-6"><benefit.icon /></div>
                      <h3 className="text-h4 mb-5">{benefit.title}</h3>
                      <p className="text-paragraph font-secondary text-neutral-dark">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-150 pb-25 rounded-4xl overflow-hidden">
            <Image
              alt="Hero Image"
              src={mountains4x}
              placeholder="blur"
              fill
              loading="lazy"
            />
          </div>
        </section>
        <section className="mb-30">
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
                          <p className="text-neutral-dark font-secondary text-paragraph">{String(index + 1).padStart(2, "0")}</p>
                          <p className="text-paragraph font-secondary">{why.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button variant="secondary" type="button">Discover More</Button>
              </div>
            </div>
            <div className="rounded-4xl min-h-96 overflow-hidden">
              <Image
                alt="Hero Image"
                src={showPiece4x}
                placeholder="blur"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: "cover"
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section>
          <h2>Specs</h2>
          <h3>Why Choose Area?</h3>
          <p>
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.{" "}
          </p>
          <button type="button">Discover More</button>
          {COMPARE.map((item) => (
            <div key={item.id}>
              <h4>{item.company}</h4>
              <ul>
                {item.features.map((feat) => (
                  <li key={feat + item.id}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
          {/*<Image
            alt="Hero Image"
            src={sculptures4x}
            placeholder="blur"
            fill
            loading="eager"
          />*/}
        </section>
        <section>
          <blockquote>
            <span>
              “I was skeptical, but Area has completely transformed the way I
              manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I can't imagine
              running my company without it.”
            </span>
            <span>John Smith</span>
            <span>Head of Data</span>
          </blockquote>
        </section>
        <section>
          <h2>Map Your Success</h2>
          <button type="button">Discover More</button>
          <div>
            <ol>
              {ROADMAP_TO_SUCCESS.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </li>
              ))}
            </ol>
          </div>
          {/*<Image
            alt="Hero Image"
            src={walkwayToSea4x}
            placeholder="blur"
            fill
            loading="eager"
          />*/}
        </section>
        <section>
          <h3>Connect with us</h3>
          <p>
            Schedule a quick call to learn how Area can turn your regional data
            into a powerful advantage.2025
          </p>
          <button type="button">Learn More</button>
        </section>
        <footer>
          <ul>
            <li>Benefits</li>
            <li>Specifications</li>
            <li>How-to</li>
          </ul>
          <div>
            <BrandLogo />
            <div>
              <span>© Area.</span>
              <span>2025</span>
            </div>
            <span>All Rights Reserved</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
