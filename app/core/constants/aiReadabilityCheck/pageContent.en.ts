import type { DibodevAiReadabilityCheckPageContent } from '~/core/types/DibodevAiReadabilityCheckPage'
import {
  AI_ANTHROPIC_SOURCE,
  AI_CLOUDFLARE_SOURCE,
  AI_GOOGLE_SOURCE,
  AI_LLMS_TXT_SOURCE,
  AI_MICROSOFT_COPILOT_SOURCE,
  AI_OPENAI_SOURCE,
  AI_PERPLEXITY_SOURCE,
} from '~/core/constants/aiReadabilityCheck/pageShared'

export const AI_READABILITY_CHECK_PAGE_EN: DibodevAiReadabilityCheckPageContent = {
  meta: {
    title: 'Is my website visible on ChatGPT? Free test',
    description:
      'Paste your website link: the test reads robots.txt and your home page like an AI robot, without JavaScript, and tells you what blocks ChatGPT.',
    inLanguage: 'en-US',
    schemaAbout:
      'How readable a website is for the robots of artificial intelligences (ChatGPT, Claude, Perplexity, Gemini): robots.txt, firewall, content without JavaScript',
  },
  applicationName: 'ChatGPT and AI readability test for a website',
  breadcrumbLabel: 'Website readable by ChatGPT: the test',
  shareImage: {
    titleLines: ['Can ChatGPT', 'read my website?'],
    highlight: 'read my website',
    subtitle: 'robots.txt, firewall and text without JavaScript, read like an AI robot',
    badge: 'Free test, no sign-up',
    alt: 'Can ChatGPT read my website? Free test by Dibodev',
  },
  hero: {
    titleBefore: 'Can ',
    titleHighlight: 'ChatGPT and other AIs',
    titleAfter: ' read my website?',
    reassurances: [
      'Free, no sign-up',
      'Nothing to install',
      'Only the link and the result are kept',
      'Robots re-read on 16 November 2026',
    ],
    description:
      'More and more people ask ChatGPT, Perplexity, Copilot or Google’s AI mode before choosing a provider. An AI can only cite your website if its robots are allowed to read it, and if they find text there. This test does what a robot does: it reads your robots.txt file, opens your home page once normally and once with the signature of ChatGPT’s search robot, and looks at what is left without JavaScript. For each point: what it saw, what it means, what to do.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. I build and redesign websites for small businesses, remotely, and I reply within 24 hours.',
  },
  checker: {
    siteLabel: 'Your website link',
    sitePlaceholder: 'mybusiness.com',
    siteHint:
      'A domain name is enough. The test makes four readings: robots.txt, the home page twice, and /llms.txt. Only the website link and its result are kept, for statistics.',
    submit: 'Test my website',
    checking: 'Reading…',
    resultLabel: 'Your result',
    idleTitle: 'Paste your website link to start',
    idleText:
      'The result tells you which AI robots may read your home page, what ChatGPT’s search robot really receives, whether text is left without JavaScript, and what helps an AI understand you.',
    loadingTitle: 'Reading the website…',
    loadingText:
      'I read robots.txt, then the home page as a visitor and as an AI robot. About fifteen seconds at most.',
    errorTitles: {
      invalid: 'Link to fix',
      unreachable: 'Website unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check failed',
    },
    errorTexts: {
      invalid: 'Enter a public domain name, like mybusiness.com, with no space and no internal address.',
      unreachable:
        'I could not read the home page of {host}: wrong link, website offline, or a server that refuses robots. Try with www in front, or without.',
      rateLimited: 'You ran many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me the website link.',
    },
    verdictTitles: {
      readable: '{host}: readable by AIs',
      partlyBlocked: '{host}: partly blocked for AIs',
      blocked: '{host}: blocked for AIs',
      emptyWithoutJavascript: '{host}: readable, but empty for an AI',
      unknown: '{host}: page unreadable from outside',
    },
    verdictTexts: {
      readable:
        'The AI robots of the list may read your home page, ChatGPT’s search robot receives the same page as a visitor, and the text is there without JavaScript. It is a condition for being cited, not a guarantee.',
      partlyBlocked:
        'At least one point stops some robots from reading your website, or makes it less readable: a blocked robot, a firewall refusal, a ban in the page. The details are below.',
      blocked:
        'AI search robots are not allowed to read your home page, or the page asks not to be indexed. As long as this is the case, answers with links cannot cite your website.',
      emptyWithoutJavascript:
        'Robots may come in, but the page has almost no text without JavaScript: a robot that does not run it sees only an empty page.',
      unknown:
        'The home page returns an error or a verification page to the test. The lines below say what could be read; check in your browser, or send me the link.',
    },
    robotsTitle: 'robots.txt, robot by robot',
    robotsFile: {
      label: 'robots.txt file',
      statusLabels: {
        found: 'Found',
        missing: 'Missing',
        unreadable: 'Server error',
        notChecked: 'Not read',
      },
      seenTexts: {
        found: 'The website’s robots.txt file was read.',
        missing: 'No robots.txt file (or a web page in its place).',
        unreadable: 'The server answers with an error when robots.txt is requested.',
        notChecked: 'robots.txt did not answer in time.',
      },
      meaningTexts: {
        found:
          'It is a small text file at the root of the website that tells robots which pages they may read. The next lines say what it allows each robot on your home page.',
        missing: 'Without a file, nothing is forbidden: every robot may read the website.',
        unreadable: 'A robot that cannot read this file may treat the whole website as forbidden until it can.',
        notChecked: 'I cannot say anything about the robots allowed.',
      },
      adviceTexts: {
        missing: 'nothing required. A file that declares your sitemap still helps robots find your pages.',
        unreadable: 'ask your host or your provider why /robots.txt returns an error.',
        notChecked: 'open your website followed by /robots.txt in your browser to check that it shows.',
      },
    },
    crawlersAllowedLabel: 'Robots allowed',
    crawlersAllowedBadge: '{count} of {total}',
    crawlersAllowedSeenText: '{robots}.',
    crawlersAllowedMeaningText: 'They may read your home page.',
    crawlerLabel: '{robot} · {operator}',
    crawlerRoleLabels: {
      search: 'Search robot',
      training: 'Training robot',
      user: 'Visit asked by a user',
    },
    crawlerBlockedLabel: 'Blocked',
    crawlerBlockedSpecificSeenText: '{role}: blocked by a rule that names it in robots.txt.',
    crawlerBlockedWildcardSeenText: '{role}: blocked by a “User-agent: *” rule aimed at every robot.',
    crawlerBlockedMeaningTexts: {
      search: 'A blocked search robot cannot read your website: the answers of its AI cannot cite it with a link.',
      training:
        'You refuse that your pages are used to train models. It is a choice, and it does not remove your website from answers with links.',
      user: 'When someone asks the AI to open your page, it may not manage to.',
    },
    crawlerBlockedAdviceTexts: {
      search: 'remove the “Disallow” rule aimed at it, or add a group with its name and “Allow: /”.',
      training: 'nothing, if it is on purpose. Otherwise, remove the rule aimed at it.',
      user: 'remove the rule aimed at it if you want the AI to be able to open your pages on request.',
    },
    crawlerMayIgnoreRobotsTxtText: 'Its publisher says robots.txt may not apply to these visits.',
    botFetchTitle: 'What the robot really receives',
    botFetch: {
      label: 'Reading with an AI robot’s signature',
      statusLabels: {
        same: 'Same page',
        refused: 'Refused',
        challenge: 'Verification page',
        different: 'Different content',
        unreachable: 'No answer',
        notCompared: 'Not compared',
      },
      seenTexts: {
        same: 'With the signature of OAI-SearchBot, ChatGPT’s search robot, the website returns the same page as for a normal visit.',
        refused:
          'With the signature of OAI-SearchBot, the website answers with a refusal (code {status}), while it answers the test normally.',
        challenge:
          'With the signature of OAI-SearchBot, the website returns a verification page (“Just a moment”, anti-robot challenge) instead of the home page.',
        different: 'With the signature of OAI-SearchBot, the page received has much less text than for a normal visit.',
        unreachable: 'The reading with the signature of OAI-SearchBot did not finish in time.',
        notCompared: 'The home page does not open normally for the test: there is nothing to compare.',
      },
      meaningTexts: {
        same: 'Nothing on the server or firewall side seems to refuse AI robots.',
        refused:
          'It is a signal, not a proof: some firewalls refuse a visit that carries a robot’s signature without coming from its addresses, and let the real one through. But if the refusal also hits the real robot, your website is closed to it.',
        challenge:
          'It is a signal, not a proof: the anti-robot protection may let the real robot through, as it comes from its own addresses. If it stops it too, the robot reads only a verification page.',
        different:
          'The website may serve another version to robots, or a reduced page. What the robot reads is then not what your customers see.',
        unreachable: 'I cannot conclude: a passing slowness or a silent block.',
        notCompared: 'Without a normal reading, I cannot compare with a robot’s.',
      },
      adviceTexts: {
        refused:
          'check the robot settings in your firewall, at your host or in Cloudflare, and allow AI search robots there.',
        challenge:
          'check the robot settings in your firewall, at your host or in Cloudflare, and allow AI search robots there.',
        different: 'compare both versions with your provider or your host.',
        unreachable: 'run the test again in a few minutes.',
      },
    },
    contentTitle: 'Content without JavaScript',
    content: {
      label: 'Text readable without JavaScript',
      statusLabels: {
        enough: 'Readable',
        thin: 'Little text',
        emptyAppShell: 'Empty without JavaScript',
        notReadable: 'Not readable',
      },
      seenTexts: {
        enough: 'About {words} words of text in the HTML received, without running JavaScript.',
        thin: 'Only {words} words of text in the HTML received, without running JavaScript.',
        emptyAppShell:
          '{words} words of text in the HTML received, and an application container waiting for JavaScript.',
        notReadable: 'The home page returns an error or a verification page to the test.',
      },
      meaningTexts: {
        enough: 'A robot that does not run JavaScript has enough to understand your page.',
        thin: 'A robot understands poorly a page that says little. Who you are, what you do and where: it has to be written out.',
        emptyAppShell:
          'Your website is readable, but empty for an AI: the text only appears once JavaScript runs in the browser.',
        notReadable: 'I cannot measure the text.',
      },
      adviceTexts: {
        thin: 'write on the home page, as text and not in an image, your trade, your area and your services.',
        emptyAppShell:
          'have the server produce the HTML (server-side rendering or pages generated in advance): Next.js, Nuxt and the other tools of this kind allow it.',
        notReadable: 'open the website in a private window to see what an unknown visitor receives.',
      },
    },
    contentFrameworkText: 'Container recognised: {framework}.',
    directivesTitle: 'Bans in the page',
    directives: {
      label: 'Robots meta tag and X-Robots-Tag header',
      statusLabels: {
        none: 'None',
        restrictive: 'To check',
        noindex: 'noindex',
      },
      seenTexts: {
        none: 'No robots meta tag that forbids, no X-Robots-Tag header.',
        restrictive: 'Found: {directives} ({sources}).',
        noindex: 'Found: {directives} ({sources}).',
      },
      meaningTexts: {
        none: 'The page does not ask robots to ignore it.',
        restrictive:
          '“nosnippet” asks not to quote any extract of the page. “noai” and “noimageai” state a refusal of use by AI: each robot decides whether it follows them.',
        noindex:
          '“noindex” asks search engines not to keep the page in their results. An AI that goes through a search engine will not find it that way.',
      },
      adviceTexts: {
        restrictive: 'remove them if you want to be cited, in the theme, the SEO plugin or the server configuration.',
        noindex:
          'remove “noindex” from the home page: WordPress’s “Discourage search engines from indexing this site” box, SEO plugin, or server header.',
      },
    },
    directiveSourceLabels: {
      meta: 'meta tag',
      header: 'X-Robots-Tag header',
    },
    understandingTitle: 'What helps an AI understand you',
    titleAndDescription: {
      label: 'Title and description',
      statusLabels: {
        complete: 'Present',
        titleOnly: 'Description missing',
        descriptionOnly: 'Title missing',
        missing: 'Missing',
        notReadable: 'Not read',
      },
      seenTexts: {
        complete: 'The page has a title and a description.',
        titleOnly: 'A title, but no description (meta description tag).',
        descriptionOnly: 'A description, but no title (title tag).',
        missing: 'Neither title nor description in the page.',
        notReadable: 'The home page could not be read.',
      },
      meaningTexts: {
        complete: 'They are the first lines a robot reads to know what the page is about.',
        titleOnly: 'They are the first lines a robot reads to know what the page is about.',
        descriptionOnly: 'They are the first lines a robot reads to know what the page is about.',
        missing: 'They are the first lines a robot reads to know what the page is about.',
        notReadable: 'I cannot check it.',
      },
      adviceTexts: {
        titleOnly: 'write a short, clear description: your trade, your town, what sets you apart.',
        descriptionOnly: 'give the page a title with your trade and your town.',
        missing: 'give the page a title and a description with your trade and your town.',
      },
    },
    structuredData: {
      label: 'Structured data (JSON-LD)',
      statusLabels: {
        knownTypes: 'Found',
        otherTypes: 'Found',
        missing: 'Missing',
        notReadable: 'Not read',
      },
      seenTexts: {
        knownTypes: 'Types found: {types}.',
        otherTypes: 'Structured data, of other types than the ones I list.',
        missing: 'No JSON-LD block in the home page.',
        notReadable: 'The home page could not be read.',
      },
      meaningTexts: {
        knownTypes:
          'This invisible code says in black and white who you are: business, address, opening hours, frequent questions.',
        otherTypes: 'This invisible code says in black and white what the page contains.',
        missing: 'Without it, the robot has to guess who you are from the text.',
        notReadable: 'I cannot check it.',
      },
      adviceTexts: {
        missing:
          'add an Organization or LocalBusiness block (name, address, phone, area); WordPress SEO plugins can do it.',
      },
    },
    sitemap: {
      label: 'Sitemap',
      statusLabels: {
        declared: 'Declared',
        notDeclared: 'Not declared',
      },
      seenTexts: {
        declared: 'A sitemap is declared in robots.txt or in the page.',
        notDeclared: 'No sitemap declared in robots.txt or in the page.',
      },
      meaningTexts: {
        declared: 'It is the list of your pages, which robots follow to find them all.',
        notDeclared: 'It may exist, but robots have to guess it.',
      },
      adviceTexts: {
        notDeclared: 'add to robots.txt a “Sitemap:” line followed by the full link of your sitemap.',
      },
    },
    llmsTxt: {
      label: 'llms.txt file (optional)',
      statusLabels: {
        found: 'Present',
        missing: 'Missing',
      },
      seenTexts: {
        found: 'The website has a /llms.txt file.',
        missing: 'No /llms.txt file.',
      },
      meaningTexts: {
        found:
          'A 2024 proposal: a summary of the website in Markdown for AIs. Its official website does not say which AIs read it.',
        missing:
          'A 2024 proposal: a summary of the website in Markdown for AIs. Its official website does not say which AIs read it.',
      },
      adviceTexts: {
        missing: 'nothing urgent. It replaces neither robots.txt nor clear text on your pages.',
      },
    },
    listSeparator: ', ',
    meaningLabel: 'What it means:',
    adviceLabel: 'What to do:',
    disclaimer:
      'Read from outside, on the home page only, without running JavaScript. The test sees neither your other pages, nor your firewall settings, nor what ChatGPT really answers. Being readable is a condition, not a guarantee of being cited.',
    idleCtaIntro: 'Would you rather I looked myself, for free, within 24 hours?',
    idleCtaLabel: 'Get my opinion',
    ctaIntro:
      'Need help opening your website to AIs, setting the firewall or making the text readable without JavaScript?',
    ctaLabels: {
      readable: 'Talk about my website',
      partlyBlocked: 'Have these points checked',
      blocked: 'Have my website unblocked',
      emptyWithoutJavascript: 'Make my website readable',
      unknown: 'Have my website checked',
    },
  },
  summary: {
    eyebrow: 'In short',
    dateLabel: 'Updated on 16 November 2026',
    text: 'An AI like ChatGPT can only cite your website if its robots are allowed to read it and find text there. Three things can stop them: a line of the robots.txt file, a firewall that refuses robots, or a website whose text only appears with JavaScript. Being readable is a condition, not a guarantee of being cited.',
  },
  steps: {
    eyebrow: 'A robot’s path',
    title: 'How an AI reads your website, in four steps',
    intro: 'Before citing a page, an AI’s robot has to be able to open it and read it. Each step can block.',
    steps: [
      {
        label: 'Ask',
        title: 'It reads robots.txt',
        description:
          'First, the robot opens your website’s robots.txt file: a list of instructions that says which robots may read which pages. If it is forbidden there, it stops.',
      },
      {
        label: 'Enter',
        title: 'It asks for the page',
        description:
          'It asks for your page with its signature, a name that says “I am the robot of this AI”. The server, the host or the firewall may answer, or refuse.',
      },
      {
        label: 'Read',
        title: 'It reads the HTML received',
        description:
          'It reads the text as it arrives. Do not count on it to run JavaScript: a text that only appears with JavaScript may stay invisible to it.',
      },
      {
        label: 'Understand',
        title: 'It looks for who you are',
        description:
          'The title, the description and the structured data tell it in black and white your trade, your town and your services.',
      },
    ],
  },
  crawlers: {
    anchorId: 'robots-ia',
    eyebrow: 'The robots to know',
    title: 'The robots of the AIs, and what they are for',
    intro:
      'Each publisher has several robots. Blocking a training robot does not remove your website from the answers; blocking a search robot does. List taken from each publisher’s documentation, re-read on 16 November 2026.',
    nameColumnLabel: 'Robot',
    detailColumnLabel: 'Whose it is, what it is for',
    linkColumnLabel: 'Official source',
    roleLabels: {
      search: 'Search, answers with links',
      training: 'Model training',
      user: 'Visit asked by a user',
    },
    descriptions: {
      oaiSearchBot:
        'ChatGPT’s search robot. According to OpenAI, a website that blocks it does not appear in ChatGPT’s search answers, except as a plain navigational link.',
      chatGptUser:
        'It opens a page when a ChatGPT user asks for it. According to OpenAI, robots.txt may not apply to these visits, and this robot does not decide your presence in search.',
      gptBot:
        'It collects pages that may be used to train OpenAI’s models. Blocking it means: no training. According to OpenAI, this setting is independent of OAI-SearchBot’s.',
      claudeSearchBot:
        'It browses the web to improve Claude’s search results. According to Anthropic, blocking it prevents your content from being indexed for search.',
      claudeUser:
        'It retrieves a page when a Claude user asks a question. According to Anthropic, blocking it prevents your content from being read in answer to that question.',
      claudeBot:
        'It collects pages that may be used to train Anthropic’s models. Blocking it excludes your future pages from training.',
      perplexityBot:
        'It makes websites appear, with a link, in Perplexity’s results. According to Perplexity, it is not used to train models.',
      perplexityUser:
        'It opens a page when a Perplexity user asks a question. According to Perplexity, it generally ignores robots.txt, since the visit is asked by a person.',
      googlebot: 'Google Search’s robot. What you forbid it affects Google Search, Discover, Images and News.',
      googleExtended:
        'Not a separate robot: a name to use in robots.txt to say whether your pages may train the Gemini models. According to Google, it affects neither presence in Search nor ranking.',
    },
    linkLabel: '{operator} documentation',
    calloutEmphasizedIntro: 'Good to know:',
    calloutText:
      'According to Microsoft, Copilot fetches web information from the Bing search engine. For Copilot, being read well by Bing therefore matters too.',
  },
  sources: {
    anchorId: 'sources',
    eyebrow: 'What the publishers say',
    title: 'Seven facts, with sources',
    intro:
      'Read on 16 November 2026 on the official pages of OpenAI, Anthropic, Perplexity, Google, Microsoft, Cloudflare and llmstxt.org. Each one links to its source.',
    facts: [
      {
        contextLabel: 'OpenAI',
        title: 'Search and training, two settings',
        text: 'Each setting is independent: a website can allow OAI-SearchBot to appear in ChatGPT search and forbid GPTBot so that its pages are not used for training. OpenAI says a robots.txt change can take about 24 hours.',
        sourceName: AI_OPENAI_SOURCE.name,
        sourceUrl: AI_OPENAI_SOURCE.url,
      },
      {
        contextLabel: 'Anthropic',
        title: 'Three robots, three effects',
        text: 'ClaudeBot collects for training, Claude-SearchBot for search, Claude-User when a user asks a question. Anthropic says it honours robots.txt and advises against blocking its robots by IP address.',
        sourceName: AI_ANTHROPIC_SOURCE.name,
        sourceUrl: AI_ANTHROPIC_SOURCE.url,
      },
      {
        contextLabel: 'Perplexity',
        title: 'A requested visit overrides robots.txt',
        text: 'PerplexityBot makes websites appear in the results and is not used to train models. Perplexity-User, which opens a page at a user’s request, generally ignores robots.txt.',
        sourceName: AI_PERPLEXITY_SOURCE.name,
        sourceUrl: AI_PERPLEXITY_SOURCE.url,
      },
      {
        contextLabel: 'Google',
        title: 'Google-Extended does not affect Search',
        text: 'Google-Extended says whether your pages may train the Gemini models. Google states that it affects neither a website’s inclusion in Google Search nor its ranking.',
        sourceName: AI_GOOGLE_SOURCE.name,
        sourceUrl: AI_GOOGLE_SOURCE.url,
      },
      {
        contextLabel: 'Microsoft, page of 29 October 2026',
        title: 'Copilot searches on Bing',
        text: 'When web search is on, Copilot sends a short query to the Bing search service and relies on its results to answer.',
        sourceName: AI_MICROSOFT_COPILOT_SOURCE.name,
        sourceUrl: AI_MICROSOFT_COPILOT_SOURCE.url,
      },
      {
        contextLabel: 'Cloudflare, 1 July 2025',
        title: 'AI robots blocked by default',
        text: 'Since 1 July 2025, Cloudflare blocks by default the AI robots that come without permission, and asks every new domain whether it wants to let them in. A website behind Cloudflare can therefore close the door to AIs without its owner knowing.',
        sourceName: AI_CLOUDFLARE_SOURCE.name,
        sourceUrl: AI_CLOUDFLARE_SOURCE.url,
      },
      {
        contextLabel: 'llmstxt.org, proposal of 3 September 2024',
        title: 'llms.txt, a proposal',
        text: 'Proposed by Jeremy Howard, the /llms.txt file sums up a website in Markdown, with links, for AIs. The official website does not say which AIs read it and promises no effect: the file stays optional.',
        sourceName: AI_LLMS_TXT_SOURCE.name,
        sourceUrl: AI_LLMS_TXT_SOURCE.url,
      },
    ],
  },
  reasons: {
    anchorId: 'raisons',
    eyebrow: 'Why an AI does not see you',
    title: 'The 4 reasons why an AI does not see a website',
    intro: 'These are the four points the test checks. One is enough to close the door.',
    items: [
      {
        title: '1. A line in robots.txt',
        description:
          'A “Disallow: /” line under a robot’s name, or under “User-agent: *” for all, and the robot may no longer read. It was sometimes added by a theme, a plugin or a former provider.',
      },
      {
        title: '2. A firewall that refuses robots',
        description:
          'Cloudflare, the host or a security plugin may answer with a refusal or a verification page. The robot leaves without having read anything.',
      },
      {
        title: '3. A text that only exists with JavaScript',
        description:
          'Some websites send an almost empty page that the browser fills afterwards. A robot that does not run JavaScript only sees the empty page.',
      },
      {
        title: '4. A ban in the page',
        description:
          'A “noindex” or “nosnippet” tag, or the same order in the X-Robots-Tag header, asks robots to ignore the page or not to quote it.',
      },
    ],
  },
  remediation: {
    anchorId: 'que-faire',
    eyebrow: 'What to do',
    title: 'What to do, depending on what the test found',
    intro: 'One case per line of the result.',
    pitfallLabel: 'The trap',
    items: [
      {
        title: 'A robot blocked in robots.txt',
        text: 'Open your website followed by /robots.txt. Remove the “Disallow” line aimed at the search robot, or add a group with its name and “Allow: /”. On WordPress, the file may be written by the SEO plugin: edit it from its settings.',
        pitfall:
          'Blocking “User-agent: *” to keep out an annoying robot: the rule also closes the door to search robots.',
      },
      {
        title: 'A firewall or Cloudflare that refuses',
        text: 'In Cloudflare, look at the settings for AI robots and for robots in general, and allow at least the search robots. With a WordPress security plugin, look for the blocking of robots or “user agents”.',
        pitfall: 'Unblocking everything at once: allow the search robots, and decide separately for the training ones.',
      },
      {
        title: 'A website empty without JavaScript',
        text: 'The text has to arrive in the HTML. With Next.js, Nuxt or a tool of the same kind, server-side rendering or pages generated in advance must be switched on. With a website builder, check with the test that the text shows.',
        pitfall:
          'Believing that “Google reads it, so AIs do too”: a robot that does not run JavaScript does not see what the browser adds.',
      },
      {
        title: 'A refusal that comes from the host',
        text: 'Some hosts filter robots before they even reach your website. Send them the test result and ask whether AI search robots are filtered, and how to allow them.',
        pitfall:
          'Concluding too fast: a refusal of the test is a signal, not a proof. The real robot comes from its own addresses and may get through.',
      },
      {
        title: 'A ban in the page',
        text: 'On WordPress, untick “Discourage search engines from indexing this site” in Settings, Reading, then check the SEO plugin settings for the home page.',
        pitfall:
          'Leaving the settings of a website under construction online: the “noindex” set during the work sometimes stays afterwards.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'What I see on my own website',
    emphasizedIntro: 'On dibodev.fr:',
    text: 'in the week of 8 to 14 November 2026, 27 visits came from an AI, 22 of them from ChatGPT. At the end of October 2026, a first quote request came through a link cited in a ChatGPT answer. ChatGPT sends no referring website: its visits can be recognised by the utm_source=chatgpt.com parameter in the landing link.',
  },
  method: {
    anchorId: 'methode',
    eyebrow: 'Method and limits',
    title: 'What the test does, and what it does not see',
    intro: 'The test reads your website from outside, like a robot, without installing or changing anything.',
    items: [
      {
        title: 'Four readings, nothing more',
        description:
          'robots.txt, the home page with the test’s signature, the same page with the signature of OAI-SearchBot as OpenAI publishes it, and /llms.txt.',
      },
      {
        title: 'The rules of robots.txt',
        description:
          'For each robot: its own group if there is one, otherwise the “*” group. The longest rule that matches the home page wins, “Allow” on a tie.',
      },
      {
        title: 'The text without JavaScript',
        description:
          'The test counts the visible words of the HTML received, without scripts or styles. Fewer than 50 words with an application container (#app, #root, __next…): the page is empty for an AI.',
      },
      {
        title: 'A signature is not an address',
        description:
          'The test borrows a robot’s signature, not its addresses. A refusal is a signal to check in the firewall, not a proof that the real robot is blocked.',
      },
      {
        title: 'What it does not see',
        description:
          'The other pages of the website, your firewall settings, and what ChatGPT really answers. Being readable does not guarantee being cited.',
      },
      {
        title: 'What is kept',
        description:
          'The link of the website tested, the result and a few indicators, for twelve months, for statistics. Never your IP address, never sent to PostHog.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequent questions',
    title: 'ChatGPT and your website: your questions',
    questions: [
      {
        question: 'How do I appear in ChatGPT?',
        answer:
          'Nobody can promise it. There are conditions: that ChatGPT’s search robot, OAI-SearchBot, may read your website, that your text is there without JavaScript, and that your pages say clearly who you are, what you do and where. After that, being cited depends on the question asked and on the other websites. According to OpenAI, a website that blocks OAI-SearchBot does not appear in ChatGPT’s search answers.',
      },
      {
        question: 'How do I know if ChatGPT can read my website?',
        answer:
          'Paste your website link in the test at the top of the page. It reads your robots.txt file for OAI-SearchBot, ChatGPT-User and GPTBot, opens your home page with the signature of OAI-SearchBot and compares it with a normal visit, then measures the text readable without JavaScript.',
      },
      {
        question: 'Should I block GPTBot?',
        answer:
          'It is up to you. GPTBot collects pages that may be used to train OpenAI’s models. Blocking it means: no training on your pages. According to OpenAI, this setting is independent of OAI-SearchBot’s: you can forbid GPTBot and allow OAI-SearchBot to stay in ChatGPT search.',
      },
      {
        question: 'If I block GPTBot, do I disappear from ChatGPT?',
        answer:
          'No, not from search. According to OpenAI, OAI-SearchBot decides your presence in ChatGPT’s search answers. Blocking GPTBot only says that your pages must not be used to train the models.',
      },
      {
        question: 'What is the robots.txt file?',
        answer:
          'A small text file at the root of your website (yourwebsite.com/robots.txt) that tells robots which pages they may read. A “User-agent” line names the robot, a “Disallow” line forbids it a path, an “Allow” line allows one. Without a file, nothing is forbidden.',
      },
      {
        question: 'What is the llms.txt file?',
        answer:
          'A proposal published on 3 September 2024 by Jeremy Howard: a /llms.txt file in Markdown that sums up the website and links to its useful pages, for AIs. Its official website does not say which AIs read it and promises no effect. It is optional, and replaces neither robots.txt nor clear text on your pages.',
      },
      {
        question: 'How do I know if ChatGPT sends me visitors?',
        answer:
          'Look at your visit statistics. ChatGPT sends no referring website: its visits can be recognised by the utm_source=chatgpt.com parameter in the landing link. On dibodev.fr, in the week of 8 to 14 November 2026, 27 visits came from an AI, 22 of them from ChatGPT.',
      },
      {
        question: 'Does Cloudflare block AI robots?',
        answer:
          'It can. Since 1 July 2025, Cloudflare blocks by default the AI robots that come without permission, and asks every new domain whether it wants to let them in. If your website goes through Cloudflare, check the AI robot settings in your dashboard.',
      },
      {
        question: 'Does Copilot use Bing?',
        answer:
          'Yes, according to Microsoft: when web search is on, Copilot sends a query to the Bing search service and relies on its results. For Copilot, being read well by Bing therefore matters too.',
      },
      {
        question: 'My website is built with React, Vue or Angular: can an AI read it?',
        answer:
          'It depends on how it is served. If the server sends an almost empty page that the browser fills, a robot that does not run JavaScript sees nothing. If the pages are rendered on the server or generated in advance, the text is in the HTML. The test tells you in a few seconds.',
      },
      {
        question: 'Does the test record my website link?',
        answer:
          'Yes, for statistics only: the link of the website tested, the result and a few indicators (robots blocked, readable text, bans) are kept for twelve months. They are never used for prospecting and never published website by website. Your IP address is not kept, and the link is not sent to PostHog, this website’s analytics tool.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro: 'Being found by your customers, and what a website built with a JavaScript tool changes.',
  },
  nextTools: {
    eyebrow: 'Other tests',
    title: 'Check the rest of your website',
  },
  contactCta: {
    title: 'Would you rather I took care of it?',
    description:
      'Send me your website link. I reply within 24 hours with what I see: the robots to unblock, the firewall setting, the text to make readable without JavaScript, and a firm price if you want me to handle it.',
    button: 'Send my website',
    healthCheckLabel: 'Test my website: 8 checks',
  },
  mobileContactBar: {
    text: 'Is your website closed to AIs?',
    buttonLabel: 'Send my website link',
  },
}
