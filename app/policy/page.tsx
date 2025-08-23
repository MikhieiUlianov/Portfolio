import styles from "./policy.module.scss";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy",
  description: "A page with privacy policy information.",
};

export default function PrivacyPolicy() {
  return (
    <section className={styles.policySection}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: August 2025</p>

      <p>
        Your privacy is important to me. This policy explains how I collect,
        use, and protect any information you provide when visiting my portfolio
        website.
      </p>

      <article className={styles.section}>
        <h2>1. Information I Collect</h2>
        <ul>
          <li>
            <strong>Personal information you provide</strong>: e.g., your name,
            email address, or messages submitted through the contact form.
          </li>
          <li>
            <strong>Automatically collected information</strong>: e.g., IP
            address, browser type, and date/time of your visit, used for website
            performance and analytics.
          </li>
        </ul>
      </article>

      <article className={styles.section}>
        <h2>2. How I Use Your Information</h2>
        <ul>
          <li>
            To respond to messages or inquiries you send through the contact
            form.
          </li>
          <li>To improve the website and provide a better user experience.</li>
          <li>
            For analytical purposes, to understand how visitors use the website.
          </li>
        </ul>
      </article>

      <article className={styles.section}>
        <h2>3. Data Sharing</h2>
        <p>
          I <strong>do not sell, rent, or trade</strong> your personal
          information. Your data will only be shared with trusted service
          providers for website hosting, email communication, or analytics
          purposes.
        </p>
      </article>

      <article className={styles.section}>
        <h2>4. Cookies</h2>
        <p>
          This website may use cookies to enhance user experience, analyze
          traffic, and improve functionality. You can disable cookies in your
          browser settings, but some features may not work properly.
        </p>
      </article>

      <article className={styles.section}>
        <h2>5. Security</h2>
        <p>
          I take reasonable precautions to protect your information, including
          secure hosting and encryption where applicable. However, no method of
          data transmission over the Internet is 100% secure.
        </p>
      </article>

      <article className={styles.section}>
        <h2>6. External Links</h2>
        <p>
          My portfolio may include links to external websites. I am{" "}
          <strong>not responsible</strong> for the privacy practices or content
          of external sites.
        </p>
      </article>

      <article className={styles.section}>
        <h2>7. Changes to This Policy</h2>
        <p>
          I may update this policy from time to time. Any changes will be posted
          on this page, and the “Last updated” date will be revised.
        </p>
      </article>

      <article className={styles.section}>
        <h2>8. Contact</h2>
        <p>
          If you have any questions about this privacy policy, you can contact
          me through the contact form on this website.
        </p>
      </article>
    </section>
  );
}
