"use client";

import { useEffect, useState, type ReactNode } from "react";

const USER = "dario";
const DOMAIN = "combiningminds.org";

export function MailLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [href, setHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    setHref(`mailto:${USER}@${DOMAIN}`);
  }, []);

  return (
    <a href={href} className={className}>
      {children ?? "email me"}
    </a>
  );
}
