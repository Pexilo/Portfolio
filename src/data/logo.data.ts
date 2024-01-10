import linkedinLight from "src/assets/linkedin_light.png";
import linkedinDark from "src/assets/linkedin_dark.png";
import githubLight from "src/assets/github_light.png";
import githubDark from "src/assets/github_dark.png";
import emailLight from "src/assets/email_light.png";
import emailDark from "src/assets/email_dark.png";
import themeLight from "src/assets/theme_light.png";
import themeDark from "src/assets/theme_dark.png";

type Logo = {
  name: string;
  light: string;
  dark: string;
  link?: string;
};
export const logoList: Logo[] = [
  {
    name: "linkedin",
    light: linkedinLight,
    dark: linkedinDark,
  },
  {
    name: "github",
    light: githubLight,
    dark: githubDark,
  },
  {
    name: "email",
    light: emailLight,
    dark: emailDark,
  },
  {
    name: "theme",
    light: themeLight,
    dark: themeDark,
  },
];
