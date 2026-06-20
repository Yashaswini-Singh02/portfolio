"use client";

import { useState } from "react";

export default function CompanyLogo({
  src,
  company,
}: {
  src?: string;
  company: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="font-sans text-lg font-bold text-paper-dim">
        {company.charAt(0)}
      </span>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={`${company} logo`}
      onError={() => setFailed(true)}
      className="h-7 w-7 rounded object-contain opacity-90 transition-opacity group-hover:opacity-100"
    />
  );
}
