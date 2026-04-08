---
title: "Example Glossary Entry"
description: "This is a placeholder glossary entry used to verify the content loader works end-to-end."
slug: "_example"
author:
  name: "TODO_AUTHOR_NAME"
  title: "TODO_AUTHOR_TITLE"
  linkedinUrl: "https://linkedin.com/in/TODO_AUTHOR"
publishedDate: "2026-02-01"
keywords:
  - example
  - placeholder
relatedResources:
  - href: "/flare-site-operators"
    title: "Flare Site Operators"
    description: "Learn about flare gas monetization for oil and gas operators."
ctaVariant: "fit-call"
---

## What is this?

This is a placeholder glossary entry. It exists to prove that the Markdown content loader
(`lib/content.ts`) can parse frontmatter, validate required fields, and return a typed
`ContentEntry` object.

Replace this file with real glossary content. Files prefixed with `_` are treated as
drafts and excluded from `getAllSlugs()` and `getAllContent()`.
