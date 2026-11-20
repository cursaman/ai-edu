import Link from "next/link";
import styles from "./learning-cards.module.css";

type Card = { title: string; description: string; href?: string; label?: string };

export default function LearningCards({ id, title, items }: { id?: string; title: string; items: readonly Card[] }) {
  return (
    <section id={id} className={styles.section} aria-label={title}>
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
