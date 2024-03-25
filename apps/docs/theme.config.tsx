import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Pre } from "./components/Pre";
import { X } from "./components/Icons";

const hackedCss = `
body {
  overscroll-behavior: auto none;
}

.-ml-1 {
  margin-left: -0.25rem;
}

.flex {
  display: flex;
}

.flex-row {
  flex-direction: row;
}

.items-baseline {
  align-items: baseline;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}


.hover:cursor-pointer:hover {
  cursor: pointer;
}

.ml-1 {
  margin-left: 0.25rem;
}

.font-semibold {
  font-weight: 600;
}
`;

const Head = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://authrush.com" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <meta property="og:url" content={url} />
      <meta
        property="og:title"
        content={frontMatter.title || "Auth Rush docs"}
      />
      <style>{hackedCss}</style>
      <meta
        property="og:description"
        content={
          frontMatter.description ||
          "Docs for the best CLI for adding authentication to your Next.js app in seconds"
        }
      />
      <meta
        name="twitter:image"
        content="https://authrush.com/assets/icons/ogm.jpg"
      />
    </>
  );
};

export const Logo = () => {
  return (
    <h1
      className="flex items-center gap-4"
      style={{ alignItems: "center", gap: "5px" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38 44.2542L68.875 27.7401L38 12.8726L7.125 27.7401L38 44.2542Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.4192 32.7117L7.125 37.1767L38 53.6908L68.875 37.1767L59.5808 32.7117"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.4192 42.1483L7.125 46.6133L38 63.1275L68.875 46.6133L59.5808 42.1483"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_13_728"
            x1="38"
            y1="12.8726"
            x2="38"
            y2="44.2542"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" />
            <stop offset="1" stop-color="#929292" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_13_728"
            x1="38"
            y1="32.7117"
            x2="38"
            y2="53.6908"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" />
            <stop offset="1" stop-color="#929292" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_13_728"
            x1="38"
            y1="42.1483"
            x2="38"
            y2="63.1275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F8F8F8" />
            <stop offset="1" stop-color="#929292" />
          </linearGradient>
        </defs>
      </svg>

      <p className="font-bold text-gray-200 md:text-2xl ">Auth Rush</p>
      <span className="ml-1 font-semibold">docs</span>
    </h1>
  );
};

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  chat: {
    icon: X,
    link: "https://twitter.com/mohammad_s36921",
  },
  components: {
    pre: Pre,
  },
  darkMode: true,
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  footer: { component: () => null },
  head: Head,
  logo: Logo,
  navigation: false,
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/Mohammad-Shahid-07/auth-rush",
  },
  useNextSeoProps() {
    const currentUrl = usePathname();
    return {
      additionalLinkTags: [
        {
          href: "/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "Nextra", name: "apple-mobile-web-app-title" },
      ],
      canonical: `https://authrush.com${currentUrl}`,
      description:
        "Docs for the best CLI for adding authentication to your Next.js app in seconds",
      noindex: process.env.NO_INDEX === "true",
      openGraph: {
        images: [
          {
            url: "https://authrush.com/assets/icons/ogm.jpg?random=aaaaaaaaaaaaa",
          },
        ],
      },
      titleTemplate: "%s – Auth Rush Docs",
      twitter: {
        cardType: "summary_large_image",
        site: "https://authrush.com",
      },
    };
  },
};

export default config;
