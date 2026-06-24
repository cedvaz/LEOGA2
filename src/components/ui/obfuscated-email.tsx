"use client";

import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  user?: string;
  domain?: string;
  className?: string;
  link?: boolean;
}

export function ObfuscatedEmail({
  user = "info",
  domain = "leoga.de",
  className,
  link = true,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{user}&#8203;[at]&#8203;{domain}</span>;
  }

  const addr = `${user}@${domain}`;

  if (!link) {
    return <span className={className}>{addr}</span>;
  }

  return (
    <a href={`mailto:${addr}`} className={className}>
      {addr}
    </a>
  );
}
