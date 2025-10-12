import Image from "next/image";
import {
  ChartIcon,
  HamburgerIcon,
  CableIcon,
  EarthIcon,
  GovernmentIcon,
  BrandLogo,
} from "~/icons";

import { SHIMMER_PLACE_HOLDER } from "~/lib/image-placeholder";

import heroImage4x from "~/assets/mobile-iphone-image-4x.png";
import mountains4x from "~/assets/mountains.png";
import sculptures4x from "~/assets/sculpture.png";
import walkwayToSea4x from "~/assets/walkwayToSea.png";

type BenefitConfig = {
  title: string;
  description: string;
  icon: React.FC;
};

const BENEFIT_LIST: BenefitConfig[] = [
  {
    title: "Amplify Insights",
    description:
      "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
    icon: CableIcon,
  },
  {
    title: "Control Your Global Presence",
    description:
      "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
    icon: EarthIcon,
  },

  {
    title: "Remove Language Barriers",
    description:
      "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
    icon: GovernmentIcon,
  },
  {
    title: "Visualize Growth",
    description:
      "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
    icon: ChartIcon,
  },
];

const CLEAR_WHYS = [
  "Spot Trends in Seconds: No more digging through numbers.",
  "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
];

const COMPARE = [
  {
    company: "Area",
    features: [
      "Ultra-fast browsing",
      "Advanced AI insights",
      "Seamless integration",
      "Advanced AI insights",
      "Ultra-fast browsing",
      "Full UTF-8 support",
    ],
  },
  {
    company: "HyperView",
    features: [
      "Moderate speeds",
      "No AI assistance",
      "Steep learning curve",
      "No AI assistance",
      "Moderate speeds",
      "Partial UTF-8 support",
    ],
  },
  {
    company: "WebSurge",
    features: [
      "Fast browsing",
      "Basic AI recommendations",
      "Restricts customization",
      "Advanced AI insights",
      "Fast browsing",
      "Potential display errors",
    ],
  },
];

const ROADMAP_TO_SUCCESS = [
  {
    title: "Get Started",
    description: "With our intuitive setup, you’re up and running in minutes.",
  },
  {
    title: "Customize and Configure",
    description: "Adapt Area to your specific requirements and preferences.",
  },
  {
    title: "Grow Your Business",
    description: "Make informed decisions to exceed your goals.",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl px-con mx-auto">
      <header>
        <div>Area</div>
        <HamburgerIcon />
      </header>
      <main>
        <h1 className="font-display">Browse everything.</h1>
        <Image
          alt="Hero Image"
          src={heroImage4x}
          placeholder="blur"
          fill
          loading="eager"
        />

        <section>
          <h2>Trusted by:</h2>
          <div>
            {Array.from({ length: 6 }).map((_, index) => (
              <Image
                key={index}
                src={`/logo-${index + 1}.svg`}
                alt={`Logo of ${index}`} // create config for logo
                placeholder={SHIMMER_PLACE_HOLDER}
                fill
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Benefit</h2>
          <h1>We’ve cracked the code.</h1>
          <p>Area provides real insights, without the data overload.</p>
          {BENEFIT_LIST.map((benefit) => {
            return (
              <div>
                <benefit.icon />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
          <Image
            alt="Hero Image"
            src={mountains4x}
            placeholder="blur"
            fill
            loading="eager"
          />
        </section>
        <section>
          <h1>See the Big Picture</h1>
          <p>
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </p>
          {CLEAR_WHYS.map((why) => {
            return (
              <div>
                <p></p>
                <p>{why}</p>
              </div>
            );
          })}
          <button>Discover More</button>
          <Image
            alt="Hero Image"
            src={mountains4x}
            placeholder="blur"
            fill
            loading="eager"
          />
        </section>
        <section>
          <h2>Specs</h2>
          <h3>Why Choose Area?</h3>
          <p>
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.{" "}
          </p>
          <button>Discover More</button>
          {COMPARE.map((item) => (
            <div>
              <h4>{item.company}</h4>
              <ul>
                {item.features.map((feat) => (
                  <li>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
          <Image
            alt="Hero Image"
            src={sculptures4x}
            placeholder="blur"
            fill
            loading="eager"
          />
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
          <button>Discover More</button>
          <div>
            <ol>
              {ROADMAP_TO_SUCCESS.map((item) => (
                <li>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </li>
              ))}
            </ol>
          </div>
          <Image
            alt="Hero Image"
            src={walkwayToSea4x}
            placeholder="blur"
            fill
            loading="eager"
          />
        </section>
        <section>
          <h3>Connect with us</h3>
          <p>
            Schedule a quick call to learn how Area can turn your regional data
            into a powerful advantage.2025
          </p>
          <button>Learn More</button>
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
