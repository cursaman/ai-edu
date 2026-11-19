import Link from "next/link";
import styles from "./learning-cards.module.css";

type Card = { title: string; description: string; href?: string; label?: string };

export default function LearningCards({ title, items }: { title: string; items: readonly Card[] }) {
  return (
    <section className={styles.section} aria-label={title}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {items.map(({ title, description, href, label }) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
            {href && <Link href={href}>{label ?? title} →</Link>}
          </article>
        ))}
      </div>
    </section>
  );
}
