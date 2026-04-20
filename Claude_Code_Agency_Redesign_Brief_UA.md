# ТЗ для Claude Code: редизайн SAV.AGENCY на рівень premium product-studio website

Дата: 20 квітня 2026  
Сайт: `https://marketing-agency-dusky.vercel.app/#services`  
Референс для ефектів: `https://reactbits.dev/get-started/index`  
Обраний creative direction після deep research: **The Engineered Ecosystem**

Мета: зробити сайт агенції таким, щоб він виглядав як робота сильних професіоналів: дорого, креативно, технологічно, але не кричуще і не "агресивно-продажне".

Важливе уточнення: "20k" - це тільки внутрішній benchmark якості й враження. На сайті не писати, що розробка коштує 20k, не використовувати це як прайс, claim або маркетинговий текст. Відвідувач має відчути цей рівень через дизайн, структуру, анімацію, copy, кейси й деталізацію.

---

## 1. Головна стратегія

Поточний сайт вже має базу: структура, послуги, ціни, форма, мультимовність. Але він має виглядати не просто як "AI marketing agency landing", а як **AI-native web, growth & product studio**, який продає не окремі сайти, а digital ecosystems: стратегія, інтерфейс, продуктова логіка, воронка, аналітика і запуск.

Ключове позиціонування:

> We engineer market-leading digital ecosystems.

Українською:

> Інженеримо цифрові системи росту: від ринку й оферу до сайту, MVP, Telegram-flow і запуску.

Або більш premium:

> Ми поєднуємо маркетингову стратегію, AI-дослідження, frontend engineering і conversion architecture в один launch-процес для бізнесів, які хочуть виглядати сильніше за свій поточний розмір.

Стратегічний принцип після deep research:

> Не продавати "website development" як commodity. Продавати revenue-generating infrastructure, де сайт або MVP є носієм стратегії, а не просто красивою сторінкою.

Тому Marketing SKILL / Client DNA / ICP / unit economics треба подати не як додаткову послугу, а як фундамент перед дизайном і кодом. Спочатку логіка ринку, оферу і конверсії. Потім React/Vite/Supabase/Telegram implementation.

### Чи додавати розробку сайтів до маркетингової агенції?

Так, але не як "ми також робимо сайти". Треба сформулювати це як частину growth-системи:

Погано:
- "Також розробляємо сайти"
- "Web development services"
- "Можемо зробити вам сайт"

Добре:
- "Landing pages & MVPs built around strategy"
- "AI-assisted websites that convert research into a launch-ready asset"
- "Від ринку й оферу до сайту, який можна запускати"
- "Не просто сайт. Стратегія, воронка, дизайн і код в одному циклі."

Сайт має продавати 4 головні pillars:

1. **Intelligence** - market research, competitors, ICP, Client DNA.
2. **Validation** - websites, landing pages, conversion architecture.
3. **Productization** - MVPs, React/Vite interfaces, Supabase, Telegram/Supabase flows.
4. **Scale** - CRO, analytics, competitor watch, n8n/video automation as beta capabilities.

Це дозволяє не розмивати маркетингову агенцію, а показати її сильнішою: не тільки стратегія, а стратегія + реалізація.

---

## 2. Візуальний напрям

Після deep research обраний стиль: **The Engineered Ecosystem**.

Це не чистий luxury-cinematic і не стерильний developer lab. Це відчуття **структурованого command center**: темний дорогий фон, строгі bento grids, сильна типографіка, дані, модулі, кейси, продуктова логіка. Сайт має транслювати: "ми системні, технічні, стратегічні і вміємо доводити ідею до робочого digital asset".

### Чому саме Engineered Ecosystem

Deep research показав 3 можливі напрями:

1. **Post-Chat Interface Lab** - дуже технічний, стерильний, майже API/docs-естетика. Добре для deep-tech, але може відштовхнути маркетингових і бізнес-клієнтів.
2. **Cinematic Growth Studio** - дорогий, емоційний, luxury/venture vibe. Сильний візуально, але може приховати реальну технічну компетенцію: React/Vite, Supabase, Telegram logic.
3. **Engineered Ecosystem** - найкращий баланс: bento grid, product studio, strategy + engineering + growth. Дає місце і для Client DNA, і для Linkora MVP, і для сайтів, і для Telegram/Supabase, і для майбутніх automation demos.

### Референси, які треба врахувати

Не копіювати напряму, але адаптувати патерни:

- `https://lazarev.agency/` - AI/product design positioning, outcome-first кейси, data-heavy visuals.
- `https://www.parallelhq.com/` - AI product studio, post-chat interface tone, productized AI sprint thinking.
- `https://clay.global/` - premium B2B/enterprise feel, consumer-grade B2B experiences, polished visuals.
- `https://phenomenonstudio.com/` - MVP / validate-build-scale structure, startup-friendly service framing.
- `https://focuslab.agency/` - high-ticket brand confidence, transparent sprint/timeline logic.
- `https://www.metalab.com/` - extreme brevity and confidence: не пояснювати зайве.
- `https://www.work.co/` - qualified enterprise intake and complex product positioning.
- `https://rejouice.com/` - cinematic confidence and growth-studio energy, але не брати занадто vague deliverables.
- `https://locomotive.ca/en` - immersive motion and narrative case flow, але без over-engineered scroll-jacking.
- `https://www.letsgroto.com/` - AI-first SaaS/product vibe and metric-led proof blocks.
- `https://reaktor.com/` - engineering credibility, code-adjacent brutalism, future-proof architecture.

### Не робити

- дешевий cyberpunk;
- кислотний terminal-only hacker style;
- шаблонний SaaS з gradient blobs;
- надто агресивні "ми розірвемо ваш ринок";
- занадто багато хаотичних анімацій;
- весь сайт в одному фіолетово-синьому градієнті;
- декоративні orb blobs як основний візуальний прийом;
- стандартну агенційну секцію "3 cards with icons";
- великий акцент на дешевих monthly packages на головній;
- "AI buzzwords" без механіки: "unlock AI", "revolutionize", "10x everything".

### Робити

- true black / dark graphite background;
- строгий CSS Grid / bento layout;
- великі premium-заголовки;
- короткий, впевнений copy;
- service cards як модулі системи, а не список послуг;
- case cards з product/tech details;
- proof через конкретні артефакти: Linkora MVP, Supabase, Telegram bot, Matching logic, Vercel deploy;
- точні microinteractions;
- ReactBits-style effects тільки там, де вони підсилюють сенс;
- відчуття "system, precision, taste".

### Палітра

База:
- `#0A0A0A` - true black background;
- `#121212` - dark graphite panels;
- `#F4F4F5` - off-white primary text;
- `#A1A1AA` - muted secondary text;
- `rgba(255,255,255,0.10)` - hairline borders.

Акцент обрати один:
- industrial orange `#FF4500` - сильний, енергійний, не типовий AI-purple;
- або technical cyan `#00FFCC` - технологічний, але використовувати стримано.

Правило: один головний accent + максимум один допоміжний. Не робити rainbow UI.

### Типографіка

Поточні `Bricolage Grotesque` + `Plus Jakarta Sans` можна залишити, якщо вони вже підключені і виглядають добре. Для більш enterprise/product studio feel також підходить:
- headlines: `Inter Tight`, `Bricolage Grotesque` або інший neo-grotesque;
- body: `Plus Jakarta Sans`, `Inter`, `Satoshi`;
- technical labels: `JetBrains Mono` тільки для chips, metrics, small labels, не для всього сайту.

Важливо: не масштабувати font-size через viewport width. На mobile заголовки мають переноситися красиво, без обрізання і без overlap.

---

## 3. ReactBits: що брати

ReactBits - це React-компоненти. Поточний сайт схожий на static HTML/CSS/JS. Якщо хочемо реально використати ReactBits, краще:

1. Мігрувати сайт у **Vite + React + TypeScript**.
2. Перенести поточний контент і translations.
3. Додати ReactBits components точково.
4. Деплоїти на Vercel.

Не треба ставити 15 ефектів. Для premium feel краще 5-7 сильних компонентів, але дуже акуратно.

### Рекомендовані ReactBits-style components

Hero/background:
- `Soft Aurora`, `Beams`, `Threads` або muted `Chroma Grid` - як тонкий системний фон.
- Не використовувати `Hyperspeed`, `Pixel Trail` або занадто активні particle effects у hero: вони роблять перший екран дешевшим і шумнішим.

Text:
- `SplitText` або `BlurText` для hero reveal.
- `GradientText` тільки для 1-2 ключових слів, якщо не руйнує premium feel.
- `DecryptedText` тільки для маленьких technical labels, stack chips або metrics.
- `CountUp` для proof metrics.
- Не використовувати `Glitch`/`ShinyText` для основних заголовків.

Cards/layout:
- `SpotlightCard` для service bento modules.
- `MagicBento` або custom bento-grid approach для capabilities.
- `TiltedCard` тільки для case cards / product mockups, акуратно.
- `ScrollStack` або `Stepper` для protocol/method section.

Interactions:
- `Magnet` для головних CTA buttons.
- `ScrollReveal` для секцій.
- scroll-linked progress line для process/protocol.

Performance guardrails:
- не ставити кілька canvas/WebGL effects в одному viewport;
- якщо видно bento grid зі SpotlightCard, фоновий heavy effect має бути вимкнений або дуже приглушений;
- всі motion effects мають мати `prefers-reduced-motion` fallback;
- mobile має отримати спрощену версію ефектів;
- перший екран має завантажуватися швидко, без довгого чорного loading state.

---

## 4. Нова структура сайту

### 4.1. Header

Ліворуч:
- SAV.AGENCY

Навігація:
- Work
- Services
- Method
- Pricing
- Audit

CTA:
- "Get a growth audit"
- або українською "Отримати аудит"

Header має бути спокійний, sticky, напівпрозорий, з blur, без зайвої мішури.

### 4.2. Hero

Ціль hero: за 5 секунд людина має зрозуміти, що це не просто агенція, а команда, яка мислить стратегічно і вміє будувати.

Основний hero copy:

**Headline:**
> We engineer market-leading digital ecosystems.

UA:
> Інженеримо цифрові системи росту.

**Subtitle:**
> SAV.AGENCY is an AI-native product studio integrating market research, frontend engineering, Telegram-first product flows and conversion architecture.

UA:
> SAV.AGENCY - AI-native product studio, де market research, frontend engineering, Telegram-first flows і conversion architecture збираються в одну систему запуску.

Альтернативні headline options:
- `Precision digital products for high-growth companies.`
- `Stop building websites. Start building growth architecture.`
- `Design. Engineering. Growth. Executed with precision.`
- `Beyond aesthetics: digital products engineered for unit economics.`
- `Premium digital infrastructure, from market DNA to scaling MVPs.`

CTA buttons:
- Primary: `Schedule Technical Workshop`
- Secondary: `Explore the Ecosystem`

Якщо хочемо м'якше для першої версії:
- Primary: `Start with a growth audit`
- Secondary: `See what we build`

Hero visual:
- не card stack з цінами;
- не mock browser у декоративній карточці;
- краще interactive "ecosystem map":
  - central node: `Market DNA`;
  - modules: `Intelligence`, `Conversion`, `MVP`, `Telegram`, `Analytics`, `Scale`;
  - animated thin lines;
  - small metrics moving softly;
  - muted ReactBits `Soft Aurora` / `Beams` / `Threads` background.

Proof strip під hero:
- `SAV.AGENCY website` - live case.
- `Linkora MVP` - Telegram-first platform.
- `Marketing Skill System` - proprietary strategy framework.
- `React / Vite / Supabase / Telegram` - технічна база.

### 4.3. Section: What we build

Замість стандартних однакових service cards зробити bento grid як **capability matrix**. Основна назва:

> The Growth Protocol

або:

> Capabilities that connect strategy, product and growth.

8 bento modules:

#### Intelligence & DNA
Market research, competitor mapping, ICP, Client DNA, offer strategy, unit economics.

#### Conversion Architecture
High-fidelity websites, landing pages, lead capture, UX structure, CTA logic, CRO foundations.

#### Product & MVP Engineering
React, Vite, Tailwind, Supabase, dashboards, database-backed flows, startup MVPs.

#### Telegram-First Ecosystems
Telegram bots, onboarding, questionnaires, profiles, product flows, frictionless user entry.

#### Systems Integration
Matching logic, user profiles, structured data flows, Supabase tables, product state and admin logic.

#### Funnel Physics
Analytics audit, funnel gaps, campaign diagnostics, LTV:CAC thinking, optimization roadmap.

#### Advanced Automations (Beta)
n8n workflows, CRM syncs, reporting flows, operational automation. Mark as beta / demo-stage capability.

#### Programmatic Video (Beta)
Remotion/code-driven video generation for personalized creative. Mark as beta / future case.

Текст:
> Everything is designed as a system: market signal, offer, interface, product logic, traffic path and feedback loop.

UA:
> Ми проєктуємо не окремі шматки, а систему: сигнал ринку, офер, інтерфейс, продуктову логіку, шлях трафіку і цикл зворотного зв'язку.

### 4.4. Section: Signature offers

Пакети й ціни залишити як були. Завдання редизайну - не вигадати новий прайсинг, а запакувати існуючі офери так, щоб вони виглядали сильніше, структурніше і професійніше.

1. **Website / Landing Sprint**  
   From $700  
   7-14 days  
   Strategy-backed landing page or business website.

2. **Startup MVP Sprint**  
   From $2,500  
   2-4 weeks  
   React/Vite, Supabase, Telegram flows, dashboards.

3. **AI Growth Diagnostic**  
   From $500  
   5-7 days  
   Market, competitors, ICP, funnel gaps, 15 growth actions.

4. **GTM Launch System**  
   From $3,000  
   3-5 weeks  
   Research, offer, funnel, website/MVP, creative and launch roadmap.

Не ставити 12 послуг на перший екран. Краще 4 сильні пропозиції з premium layout, нормальними deliverables, строками й CTA.

### 4.5. Section: Work / Cases

Обов'язково додати. Без кейсів сайт виглядає як красивий pitch без доказів.

Кейси:

#### SAV.AGENCY
Category: Agency website / AI marketing positioning  
Show:
- multilingual website;
- Vercel deploy;
- lead form;
- redesign/process.

#### Linkora
Category: Telegram-first MVP / community matching platform  
Show:
- React/Vite/Tailwind;
- Supabase;
- Telegram bot;
- profiles/projects/ideas;
- matching logic;
- in-progress MVP.

Case narrative:
- challenge: community/product needed fast onboarding and structured matching;
- intervention: Telegram-first entry, Supabase-backed data model, profile/project entities, matching logic;
- proof: screenshots, database schema visual, flow diagram, deploy stack, current MVP status;
- чесно позначити як working MVP / in-progress platform, не як завершений enterprise product.

#### Marketing Skill System
Category: Proprietary AI-assisted strategy framework  
Show:
- market research;
- Client DNA;
- funnel;
- unit economics;
- creative;
- analytics.

Case card design:
- large visual mockup;
- 3 bullets only;
- stack chips;
- "View case" button.

Для майбутніх кейсів показувати не просто красивий дизайн, а arc:
1. Business challenge.
2. Strategic intervention.
3. Technical execution.
4. Outcome / next metric to track.

Навіть якщо немає реальних revenue metrics, можна показати valid proof:
- stack;
- speed of delivery;
- before/after structure;
- number of screens/components;
- data model;
- flow diagrams;
- lead capture logic;
- performance/accessibility basics.

### 4.6. Section: Method

Назва:
> The Growth Protocol

Steps:

1. **Extract** - market, competitors, ICP, Client DNA, unit economics.
2. **Architect** - offer, messaging, funnel logic, product flow.
3. **Build** - website, MVP, bot, lead capture, database-backed logic.
4. **Launch** - creative, tracking, delivery plan, first acquisition path.
5. **Scale** - data, CRO, next iterations, automation roadmap.

Візуально:
- horizontal/vertical stepper;
- animated progress line;
- sticky side labels;
- ReactBits `Stepper` або custom.

Тон секції: не "our process is simple", а "we reduce chaos into a buildable system".

### 4.7. Section: Why it works

Не писати "AI makes it faster" занадто загально. Краще:

- Strategy before design.
- Build after signal, not guesswork.
- Launch assets, not just documents.
- Fast AI-assisted execution with human taste.
- Technical implementation included.

UA copy:

> Більшість сайтів починаються з дизайну. Ми починаємо з ринку, аудиторії й оферу. Тому результат виглядає не просто красиво, а логічно: кожен блок має причину, кожна CTA веде до наступного кроку, кожен deliverable можна використати в запуску.

### 4.8. Section: Pricing

Зробити premium pricing cards, але не перевантажувати.

Пакети й ціни залишити як були:

- Website / Landing Sprint - from $700
- AI Growth Diagnostic - from $500
- Startup MVP Sprint - from $2,500
- GTM Launch System - from $3,000

Змінювати треба не ціни, а presentation:
- cards мають виглядати як structured engagement models;
- кожна картка має показувати для кого пакет, що входить, строк, результат;
- CTA має бути не generic "Buy", а `Discuss this sprint`, `Start with audit`, `Request project fit`;
- не використовувати агресивну знижкову логіку.

Якщо хочемо виглядати дорого, не треба дуже акцентувати "від $300/міс" на головному сайті. Дешеві офери можна лишити для Fiverr/Upwork, а сайт агенції має тримати преміальність.

Не фейкувати високі прайси або enterprise-claims. Краще звучати дорого через структуру, методологію, кейси, intake і якість виконання.

### 4.9. CTA / Form

Залишити free audit, але переписати:

Current:
> Безкоштовний міні-аудит

Better:
> Get a 48-hour growth snapshot

UA:
> Отримайте 48-годинний growth snapshot

Form fields:
- Website / product
- What do you want to build?
  - Website / landing
  - MVP
  - Marketing strategy
  - Funnel audit
  - Not sure
- Market / niche
- Current stage
- Biggest friction point
- Budget / scope range optional
- Email
- Telegram

Після submit:
> We received your request. If there is a fit, we will send 3 initial growth observations within 48 hours.

Важливо: Telegram token не має бути в frontend. Зробити `/api/lead` serverless endpoint.

---

## 5. Тон тексту

Не агресивно:
- "ми порвемо конкурентів";
- "збільшимо продажі в 10 разів";
- "AI замінює агенції";
- "кришесносний результат".

Впевнено:
- "designed around market signal";
- "built for launch";
- "strategy-backed execution";
- "from idea to working asset";
- "clear deliverables, not vague advice";
- "fast, but not shallow".

Приклади copy:

> We do not start with templates. We start with the market, the offer and the action you want the visitor to take.

> The output is not a deck that dies in a folder. It is a website, funnel or launch asset your team can actually use.

> AI gives us speed. Strategy and taste decide what should be built.

UA:

> Ми не починаємо з шаблону. Ми починаємо з ринку, оферу і дії, яку має зробити людина.

> Результат - не презентація, яка лежить у папці. Це сайт, воронка або launch-asset, який можна запускати.

> AI дає швидкість. Стратегія і смак вирішують, що саме варто будувати.

---

## 6. Рішення: робимо міграцію в React/Vite

Оскільки мета - використати ReactBits-style компоненти і зробити сайт візуально сильним, рішення таке:

**Мігрувати поточний static HTML/CSS/JS сайт у Vite + React + TypeScript.**

Чому це правильно:
- ReactBits - це React-компоненти, їх природно інтегрувати у React/Vite;
- легше зробити компонентну структуру: `Hero`, `Services`, `Cases`, `Method`, `Pricing`, `LeadForm`;
- простіше підтримувати мультимовність;
- легше додати serverless lead endpoint і не тримати Telegram token у frontend;
- краще масштабувати сайт далі: case pages, blog/research pages, portfolio, language routes;
- сайт буде виглядати як сучасний digital product, а не як один HTML-файл з ефектами.

### Рекомендована структура проєкту

```text
src/
  App.tsx
  main.tsx
  styles/
    globals.css
    tokens.css
  data/
    translations.ts
    services.ts
    cases.ts
    offers.ts
  components/
    layout/
      Header.tsx
      Footer.tsx
      SectionHeader.tsx
    hero/
      Hero.tsx
      GrowthSystemVisual.tsx
    sections/
      ProofStrip.tsx
      ServicesPillars.tsx
      SignatureOffers.tsx
      CaseStudies.tsx
      Method.tsx
      WhyItWorks.tsx
      Pricing.tsx
      LeadForm.tsx
      FAQ.tsx
    ui/
      Button.tsx
      Card.tsx
      LanguageSwitcher.tsx
      Badge.tsx
  lib/
    i18n.ts
    lead.ts
api/
  lead.ts
```

Якщо використовується Vercel, endpoint може бути:

```text
/api/lead
```

З env vars:

```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_IDS=
```

### Migration checklist

1. Створити Vite React TypeScript project або переписати поточний репозиторій під Vite.
2. Перенести контент з поточного HTML у React data files.
3. Перенести translations `uk/en/cs` у `src/data/translations.ts`.
4. Розбити сайт на компоненти.
5. Додати ReactBits-style компоненти тільки там, де вони посилюють сенс:
   - hero background;
   - hero text reveal;
   - proof counters;
   - service bento cards;
   - method stepper;
   - case cards.
6. Переписати lead form на serverless API.
7. Додати cases section.
8. Перевірити mobile, performance, reduced motion.
9. Задеплоїти на Vercel.

---

## 7. Gemini Deep Research

Результат deep research інтегровано. Головний висновок:

> SAV.AGENCY має виглядати як AI-native product/growth studio, який продає digital ecosystems, а не commodity website development.

### 7.1. Найсильніші patterns з ресерчу

- Premium agencies продають не "сайт", а business transformation / revenue infrastructure / product ecosystem.
- Сильний сайт має показувати системність: market logic -> offer -> interface -> product flow -> funnel -> analytics.
- Bento grid у 2025-2026 є найкращим патерном для складних capabilities, якщо він строгий, не хаотичний.
- Case studies мають іти не від красивої картинки, а від challenge -> intervention -> execution -> outcome.
- Intake form має відчуватися як application / technical workshop, а не generic contact form.
- AI треба подавати через механіку: AI-assisted research, coding, funnel analysis, automation. Не через buzzwords.
- Ціни/engagement краще подавати як sprint / build / retainer, а не список дешевих послуг.

### 7.2. Обраний creative direction

**The Engineered Ecosystem**

Visual metaphor: architectural blueprint / command center / modular growth operating system.

Палітра:
- true black / dark graphite;
- off-white text;
- one accent: industrial orange або technical cyan;
- 1px borders, hairlines, strict grid.

Tone:
- direct;
- analytical;
- calm;
- premium;
- outcome-oriented;
- no hype.

Hero feeling:
- huge confident headline;
- subtle interactive ecosystem map;
- thin lines / modules / metrics;
- no random neon orb;
- no cheap terminal simulation.

Target clients:
- pragmatic founders;
- product managers;
- growth marketers;
- early startups;
- technical founders;
- SMB owners who want a premium digital presence and real execution.

### 7.3. Copy matrix для сайту

Hero headline options:
- `We engineer market-leading digital ecosystems.`
- `Precision digital products for high-growth companies.`
- `Stop building websites. Start building growth architecture.`
- `Design. Engineering. Growth. Executed with precision.`
- `We turn complex logic into consumer-grade experiences.`
- `Beyond aesthetics: digital products engineered for unit economics.`
- `The strategic execution layer for ambitious founders.`
- `Premium digital infrastructure, from market DNA to scaling MVPs.`

CTA labels:
- `Schedule Technical Workshop`
- `Request Architecture Audit`
- `Start the Discovery Phase`
- `Explore Engagement Models`
- `Discuss Product Roadmap`
- `Get a Growth Snapshot`
- `Evaluate Our Methodology`

Ukrainian short headlines:
- `Інженерія цифрового росту.`
- `Від стратегії до MVP.`
- `Архітектура, що конвертує.`
- `Ваш технічний партнер.`
- `Системи, які перемагають.`

Why us statements:
- `Strategic before tactical: we do not write code before the market, offer and conversion logic are clear.`
- `Engineering density: React, Vite, Supabase and Telegram flows move the project past template websites.`
- `Ecosystem thinking: we do not build isolated pages; we connect onboarding, product logic and growth loops.`
- `Fractional integration: we can work as an embedded product/growth studio, not a one-off vendor.`
- `Utilitarian elegance: clarity, speed and conversion over trend-driven decoration.`

### 7.4. Anti-patterns

- "Unlock the power of AI" copy.
- Fake enterprise claims or unproven metrics.
- Three identical service cards with icons.
- Purple-blue AI gradients as the whole brand.
- Too many ReactBits components on one screen.
- Scroll-jacking that makes the site hard to use.
- Heavy WebGL that destroys mobile performance.
- Cheap monthly pricing as the main conversion hook.
- Generic "Contact us" without qualification.

---

## 8. Prompt для Claude Code

Скопіюй це в Claude Code.

```text
You are a senior frontend design engineer and creative director. Redesign the SAV.AGENCY website into a premium product-studio website for an AI-native web, growth and product studio.

Context:
- Current site: marketing-agency-dusky.vercel.app
- Current positioning is too narrow: AI marketing research/strategy.
- New positioning: AI-assisted websites, landing pages, startup MVPs, Telegram-first product flows, and marketing strategy systems.
- Proven cases: SAV.AGENCY website, Linkora working MVP with React/Vite/Tailwind, Supabase, Telegram bot, matching logic, Vercel/Hetzner/PM2.
- Proprietary methodology: Marketing SKILL for market research, Client DNA, ICP, funnel architecture, unit economics, creative strategy and analytics audit.
- n8n/Remotion/video are future/beta capabilities, not primary offers yet.
- Important: the site should look like a premium high-budget build, but do not write "20k", "$20k website", "enterprise price" or any similar claim anywhere in the user-facing copy.
- Keep the existing packages and prices. Improve presentation, layout, clarity and perceived value, but do not invent a new pricing model.

Goal:
Make the website feel premium, creative, technically strong and professional. It should feel like a serious digital lab, not a cheap cyberpunk landing page. It should impress visitors visually but stay clear, fast, readable and conversion-focused.

Technical direction:
- Migrate the current static HTML/CSS/JS website to Vite + React + TypeScript.
- Use component architecture and data-driven content.
- Use ReactBits-style components selectively for premium motion and interaction.
- Keep or rebuild multilingual support for uk/en/cs.
- Deploy-ready for Vercel.
- Fix lead form security: do not expose Telegram bot token in client JS. Create a serverless `/api/lead` endpoint using env vars.
- Preserve mobile performance, accessibility and reduced-motion fallback.

Visual direction:
- Creative direction: The Engineered Ecosystem.
- Think premium product studio + modular command center + growth architecture.
- Dark true-black / graphite background, off-white text, one restrained accent color.
- Use strict bento grids, sharp typography, thin borders, modular system visuals, precise microinteractions.
- Avoid generic gradient blobs, cheap cyberpunk, excessive terminal UI, purple-blue gradient dominance, chaotic animation, fake luxury copy or fake enterprise claims.
- Cards/buttons radius max 8px.
- Do not place cards inside cards.
- Keep text readable on mobile.

Reference benchmarks to study for patterns, not to copy:
- Lazarev: AI/product design positioning, outcome-first case structure.
- Parallel: AI product studio tone and post-chat interface confidence.
- Clay: polished premium B2B product feel.
- Phenomenon Studio: MVP / validate-build-scale framing.
- Metalab: brevity, confidence and interface-first clarity.
- Work & Co: qualified consultative intake and complex product positioning.
- Reaktor: engineering credibility and code-adjacent seriousness.

ReactBits-style components to use selectively:
- Hero background: muted Soft Aurora / Beams / Threads / Chroma Grid style effect.
- Text: SplitText or BlurText for hero reveal, GradientText only for 1-2 restrained highlights, CountUp for proof metrics.
- Cards: SpotlightCard / MagicBento style for service bento modules.
- Cases: TiltedCard only for product/case mockups, not every card.
- Process: Stepper / ScrollStack style or custom scroll-linked progress line.
- Interactions: Magnet for CTA buttons, ScrollReveal for sections.
- Do not use Hyperspeed, Pixel Trail, Glitch text, ShinyText-heavy headings or multiple canvas effects in one viewport.
- Do not overuse effects. 5-7 strong interactions are enough.

New page structure:
1. Header
   - Logo: SAV.AGENCY
   - Nav: Work, Services, Method, Pricing, Audit
   - CTA: Get a growth audit / Отримати аудит

2. Hero
   Headline:
   "We engineer market-leading digital ecosystems."
   Ukrainian:
   "Інженеримо цифрові системи росту."
   Subtitle:
   "SAV.AGENCY is an AI-native product studio integrating market research, frontend engineering, Telegram-first product flows and conversion architecture."
   Primary CTA: Schedule Technical Workshop / Start with a growth audit
   Secondary CTA: Explore the Ecosystem / See what we build
   Visual: interactive ecosystem map, not price cards. Central node "Market DNA"; modules: Intelligence, Conversion, MVP, Telegram, Analytics, Scale.

3. Proof strip
   - SAV.AGENCY website
   - Linkora working MVP
   - Proprietary Marketing Skill System
   - React / Vite / Supabase / Telegram

4. What we build
   Build a capability bento grid:
   - Intelligence & DNA: market research, competitors, ICP, Client DNA, unit economics.
   - Conversion Architecture: websites, landing pages, lead capture, CTA logic, CRO foundations.
   - Product & MVP Engineering: React, Vite, Tailwind, Supabase, dashboards, startup MVPs.
   - Telegram-First Ecosystems: bots, onboarding, questionnaires, profiles, product flows.
   - Systems Integration: matching logic, structured data flows, product state, admin logic.
   - Funnel Physics: analytics audit, funnel gaps, campaign diagnostics, optimization roadmap.
   - Advanced Automations (Beta): n8n workflows, CRM syncs, reporting flows.
   - Programmatic Video (Beta): Remotion/code-driven video as future/demo capability.

5. Signature offers
   Keep existing packages and prices. Improve presentation only.
   - Website / Landing Sprint, from $700, 7-14 days.
   - Startup MVP Sprint, from $2,500, 2-4 weeks.
   - AI Growth Diagnostic, from $500, 5-7 days.
   - GTM Launch System, from $3,000, 3-5 weeks.

6. Work / Cases
   Add case cards:
   - SAV.AGENCY: agency website, multilingual, Vercel, lead capture.
   - Linkora: Telegram-first MVP, React/Vite/Tailwind, Supabase, bot onboarding, matching logic.
   - Marketing Skill System: proprietary research/strategy framework.

7. Method
   Title: The Growth Protocol
   Steps:
   - Extract: market, competitors, ICP, Client DNA, unit economics.
   - Architect: offer, messaging, funnel logic, product flow.
   - Build: website, MVP, bot, lead capture, database-backed logic.
   - Launch: creative, tracking, delivery plan, first acquisition path.
   - Scale: data, CRO, next iterations, automation roadmap.

8. Why it works
   Copy:
   "Most websites start with design. We start with market signal, audience, offer and the action the visitor needs to take. Then we build the interface around that."

9. Pricing
   Keep existing packages and prices:
   - Website / Landing Sprint from $700
   - AI Growth Diagnostic from $500
   - Startup MVP Sprint from $2,500
   - GTM Launch System from $3,000
   Improve the cards so they feel like structured engagement models: who it is for, what is included, timeline, output, CTA.
   Do not change prices. Do not write any high-budget benchmark in the website copy or visible UI.

10. CTA / Lead form
   Title: "Get a 48-hour growth snapshot"
   Fields:
   - Website / product
   - What do you want to build? Website, MVP, Marketing Strategy, Funnel Audit, Not sure
   - Niche
   - Current stage
   - Biggest friction point
   - Budget/scope range optional
   - Email
   - Telegram
   Submit to serverless API, not directly to Telegram Bot API.

Copy tone:
- Confident, calm, premium.
- Avoid aggressive hype.
- Avoid "we guarantee 10x".
- Use phrases like:
  "strategy-backed execution"
  "from idea to working asset"
  "clear deliverables, not vague advice"
  "fast, but not shallow"

Validation:
- Run the site locally.
- Check desktop and mobile screenshots.
- Check that no secrets are present in client JS.
- Check Lighthouse/performance basics.
- Check reduced-motion fallback.
- Ensure all text fits on mobile.
- Ensure form works through serverless endpoint.

Deliverable:
- Updated site code.
- Brief summary of changed sections.
- Notes about any remaining TODOs.
```

---

## 9. Що треба дати Claude Code додатково

Перед запуском бажано дати Claude Code:

1. Поточний репозиторій сайту.
2. Чи можна мігрувати в React/Vite, чи треба лишити static HTML/CSS/JS.
3. Які мови залишити: UA/EN/CZ.
4. Ціни й пакети залишаємо як були; міняємо тільки подачу.
5. Чи можна публічно згадувати Linkora.
6. Який Telegram bot/lead endpoint робити: Vercel API, n8n webhook або Supabase function.
7. Чи є логотип/brand assets.
8. Чи хочете стиль більше:
   - cinematic premium;
   - brutalist editorial;
   - futuristic product lab;
   - Apple-like minimal with subtle AI effects.

Моя рекомендація: **The Engineered Ecosystem** - premium product-studio сайт з bento grids, technical clarity, сильними case cards і стриманою motion-системою.
