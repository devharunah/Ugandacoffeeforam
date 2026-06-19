/**
 * Kawa marketing site — single source of truth for brand links.
 *
 * Kawa is a Ugandan company building digital solutions for coffee farmers
 * and agriculture. KawaScan (photo → plant-disease diagnosis) is the flagship.
 */
export const siteConfig = {
  name: "KawaCoffee",
  tagline: "Digital tools for coffee farmers",
  description:
    "KawaCoffee builds digital solutions for coffee farmers and agriculture in Uganda. KawaScan diagnoses plant disease from a single photo.",

  /**
   * The Android APK download. This is the ONE place the download URL lives —
   * every "Get the app" / "Download for Android" button reads from here.
   */
  androidDownloadUrl:
    "https://www.mediafire.com/file/tkcgpc1u2bjbc9j/application-affd1f53-1481-4241-b96d-49f9094134e3.apk/file",

  /** iOS is on the roadmap; not available yet. */
  iosAvailable: false,

  social: {
    brandInstagram: "https://www.instagram.com/trykawa",
    instagram: "https://www.instagram.com/kakooza_harunah/",
    linkedin: "https://www.linkedin.com/in/kakooza-harunah-701882350/",
    tiktok: "https://www.tiktok.com/@devharunah",
    threads: "https://www.threads.com/@kakooza_harunah",
  },
} as const;
