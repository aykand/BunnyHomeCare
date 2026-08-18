// src/components/Seo.tsx

import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: object; // New prop for JSON-LD
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// NEW function to handle JSON-LD scripts
function upsertLdJsonScript(id: string, data: object) {
  let el = document.head.querySelector<HTMLScriptElement>(`#${id}`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("id", id);
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.innerHTML = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  canonical,
  noindex,
  ogTitle,
  ogDescription,
  structuredData, // Use the new prop
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    if (description) upsertMeta("name", "description", description);
    if (canonical) upsertLink("canonical", canonical);

    // robots
    if (noindex) {
      upsertMeta("name", "robots", "noindex,nofollow");
    } else {
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    // OpenGraph
    upsertMeta("property", "og:title", ogTitle ?? title);
    if (ogDescription ?? description) {
      upsertMeta("property", "og:description", (ogDescription ?? description)!);
    }
    upsertMeta("name", "twitter:card", "summary_large_image");
    
    // ADDED: Structured Data (JSON-LD) Logic
    if (structuredData) {
      upsertLdJsonScript("structured-data-json-ld", structuredData);
    }

  }, [title, description, canonical, noindex, ogTitle, ogDescription, structuredData]);

  return null;
}
