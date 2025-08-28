---
author: Avanish Davuluri
pubDatetime: 2025-08-28T02:45:47.705Z
title: The unsaid benefits of Astro
slug: the-unsaid-benefits-of-astro
featured: true
draft: false
tags:
  - Astro
  - Environment
  - Hosting
description:
  Exploring Astro's benefits beyond the oft-touted performance and efficiency.
---

## Table of Contents

## Intro

Astro has been touted for its content-driven approach that prioritizes minimizing the amount of JS shipped to the client, resulting in better Core Web Vitals. While this is true, there are many other benefits of Astro I've not seen talked about as much, so I'm going to list a few here.

## Environmental Benefits

This one goes hand-in-hand with shipping with less JS to the client, but it is rarely directly mentioned. Astro's [island](https://docs.astro.build/en/concepts/islands/) architecture makes it really easy to create websites with very low (compared to other websites) carbon emissions per visit.

For example, look at the results (using [Web Carbon Test v4](https://www.websitecarbon.com/)) for the first site I built with Astro, a landing page for [Next Idea](https://www.nextidea.work/), a company focusing on public speaking and mentorship for grades 3-12.

![Next Idea Carbon Emissions Results](@/assets/images/nextidea.work_carbon_emissions.png)

Of course, [nextidea.work](https://www.nextidea.work/) is a relatively simple site, with only 4 pages and minimal interactivity. However, because the site is purely static, all pages are generated at build time, so the environmental impact will be similar, even if I add hundreds (or thousands) of pages.

Although this won't work for sites that need a lot of interactivity (e.g., Figma and Canva), the majority of websites on the Internet are content-driven and so using full meta frameworks seems overkill for them. For example, I've seen more than a few dev portfolios made in Next.js, which is overkill for what can be generated at build time (even if it has a lot of fancy animations). In addition, Next.js pre-renders links on hover, which has a large environmental impact not mentioned by this carbon test.

I guess what I'm getting at is that there is a time and place to use Next.js, but having Astro for mostly content sites will help the planet out.

Moving on to the next unsaid benefit of Astro.

## Fun

Simply put, Astro is very fun to use. It's templating is pretty close to JSX, so if you already know React, you can learn in Astro in a few hours. In addition, the framework gets out of your way, meaning you can spend time focusing on the content and not on how to work around the framework.

Take a look at this Astro code. It's easy to understand if you know React. 

```astro file=src/pages/404.astro
<Layout title={`404 Not Found | ${SITE.title}`}>
  <Header />

  <main
    id="main-content"
    class="mx-auto flex max-w-app flex-1 items-center justify-center"
  >
    <div class="mb-14 flex flex-col items-center justify-center">
      <h1 class="text-9xl font-bold text-accent">404</h1>
      <span aria-hidden="true">¯\_(ツ)_/¯</span>
      <p class="mt-4 text-2xl sm:text-3xl">Page Not Found</p>
      <LinkButton
        href="/"
        class="my-6 text-lg underline decoration-dashed underline-offset-8"
      >
        Go back home
      </LinkButton>
    </div>
  </main>

  <Footer />
</Layout>
```

I learnt Astro after I spent a few months with Next, and working with Astro felt like a breath of fresh air. I felt like I was constantly fighting Next's oddities (e.g., Node.js middleware only being allowed in edge runtimes in v15), whereas with Astro, I could just get stuff done.

## Non-Devs Working on Astro Sites

This ease of getting stuff done and similarity to React makes Astro also good for helping non-devs create websites. 

Instead of a solution like Wordpress, which has poor Web Core Vitals (compared to Astro) and a terrible UI, someone with no coding experience looking to create a landing page for their website, like [Next Idea](https://www.nextidea.work/), can use Astro with LLMs or a free Astro theme to create a good-looking website in a few hours. In doing so, they gain more control over the look and deployment of their site.

For example, the first version of the [Next Idea](https://www.nextidea.work/) site was created by my friend (with no web dev experience) on Squarespace, where the hosting fees cost $27/month. My switching to Astro and hosting on Netlify resulted in a better looking website with $0/month hosting. That's literally hundreds of dollars I saved with a few hours of work.

## Conclusion

Astro is a really cool framework, and you should check it out, even if you don't know how to code.