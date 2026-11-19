"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./course-selector.module.css";

type NavigationItem = { readonly label: string; readonly href: string };

type NavigationGroup = { readonly title: string; readonly items: readonly NavigationItem[] };

export default function CourseSelector({ groups }: { groups: readonly NavigationGroup[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function closeFromOutside(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function closeFromEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromEscape);
    return () => {
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromEscape);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navigation} aria-label="주요 메뉴" ref={menuRef}>
      <button ref={buttonRef} className={styles.menuButton} type="button" aria-expanded={isOpen} aria-controls="main-menu" onClick={() => setIsOpen((current) => !current)}><span>전체 메뉴</span><i aria-hidden="true" /></button>
      <div id="main-menu" className={styles.links} data-open={isOpen}>
        {groups.map(({ title, items }) => (
          <div key={title} role="group" aria-label={title} className={styles.group}>
            <p>{title}</p>
            {items.map(({ href, label }) => (
              <a key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setIsOpen(false)}>
                <span>{label}</span><b aria-hidden="true">→</b>
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
