# Промпт для виправлення сайту SAV.AGENCY

Сайт: https://marketing-agency-deploy.vercel.app/

Потрібно внести наступні виправлення в index.html:

## 1. Виправити ціни в пакетах

В секції Pricing (Пакети):
- STRATEGY: змінити ціну з `$1,000` на `$1,500`
- LAUNCH: змінити ціну з `$2,000` на `$2,500`

## 2. Виправити Competitor Watch

В секції Services, картка "Competitor Watch":
- Змінити timeline з "Разово" на "Щомісяця"
- Ціна залишається "від $300/міс" — переконайся що "/міс" є

## 3. Виправити Count-Up анімацію

Цифри в Social Proof Bar показують 0 і не анімуються. Перевір:
- Чи є `data-target` атрибути на елементах з числами
- Чи є Intersection Observer який тригерить count-up
- Числа повинні рахувати від 0 до цільового значення за ~2 секунди коли з'являються в viewport

Ось робочий JS код для count-up:

```javascript
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            if (!target || el.dataset.counted) return;
            el.dataset.counted = 'true';
            let current = 0;
            const duration = 2000;
            const step = target / (duration / 16);
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(counter);
                } else {
                    el.textContent = Math.floor(current);
                }
            }, 16);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => countObserver.observe(el));
```

Переконайся що HTML елементи з числами мають формат:
```html
<span data-target="15">0</span>
```

## 4. Змінити Hero Badge

Замінити текст "AI-driven marketing excellence" на "AI-Powered Marketing Intelligence"

## 5. Прибрати або об'єднати дублікат секцій

Секція "Що ми аналізуємо" (50+ джерел, 10 конкурентів, 5 персон, 15+ гіпотез) дублює Social Proof Bar. Варіанти:
- **Варіант А (рекомендований):** Прибрати секцію "Що ми аналізуємо" повністю — Social Proof Bar зверху достатньо
- **Варіант Б:** Об'єднати — в Social Proof Bar залишити: "15+ проєктів", "50+ джерел аналізу", "$2M+ ad spend", "5-7 днів delivery"

## 6. Виправити текст "Чому швидше"

В блоці "Чому це швидше і дешевше за класичну агенцію?" замінити:
- "70% швидше, 60% дешевше, 100% даних-driven" 
- На: "В рази швидше, значно доступніше, і кожна рекомендація підкріплена реальними даними"

## 7. Додати візуальні ефекти (ВАЖЛИВО)

Сайт поки виглядає стандартно. Додай наступні ефекти (детальний код є в файлі visual-reference.html якщо він доступний):

### Mesh Gradient Background
Замінити статичний фон на 4 кольорові орби що плавно рухаються:
```css
.mesh-bg { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -3; overflow: hidden; }
.mesh-bg .orb {
    position: absolute; border-radius: 50%;
    filter: blur(80px); opacity: 0.4;
    animation: float 20s ease-in-out infinite;
}
.mesh-bg .orb:nth-child(1) {
    width: 600px; height: 600px;
    background: radial-gradient(circle, #4f46e5 0%, transparent 70%);
    top: -10%; left: -10%; animation-duration: 25s;
}
.mesh-bg .orb:nth-child(2) {
    width: 500px; height: 500px;
    background: radial-gradient(circle, #7c3aed 0%, transparent 70%);
    top: 20%; right: -15%; animation-delay: -5s; animation-duration: 20s;
}
.mesh-bg .orb:nth-child(3) {
    width: 400px; height: 400px;
    background: radial-gradient(circle, #ec4899 0%, transparent 70%);
    bottom: -5%; left: 30%; animation-delay: -10s; animation-duration: 22s;
}
.mesh-bg .orb:nth-child(4) {
    width: 350px; height: 350px;
    background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
    top: 50%; left: 10%; animation-delay: -7s; animation-duration: 18s;
}
@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(80px, -60px) scale(1.1); }
    50% { transform: translate(-40px, 80px) scale(0.95); }
    75% { transform: translate(60px, 40px) scale(1.05); }
}
```

HTML (додати на початку body):
```html
<div class="mesh-bg">
    <div class="orb"></div>
    <div class="orb"></div>
    <div class="orb"></div>
    <div class="orb"></div>
</div>
```

### Grid Lines Overlay
```css
.grid-lines {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: -2;
    background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%);
}
```

### Mouse-tracking Glow на Service Cards
```css
.service-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit;
    background: radial-gradient(
        600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
        rgba(99,102,241,0.12), transparent 40%
    );
    opacity: 0; transition: opacity 0.3s; pointer-events: none;
}
.service-card:hover::before { opacity: 1; }
```

JS для mouse tracking:
```javascript
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
    });
});
```

### Button Shine Effect
```css
.btn-primary { position: relative; overflow: hidden; }
.btn-primary::before {
    content: '';
    position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}
.btn-primary:hover::before { left: 100%; }
```

### Кастомний курсор (тільки desktop)
```html
<div class="cursor"></div>
<div class="cursor-dot"></div>
```

```css
.cursor {
    width: 20px; height: 20px;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 50%; position: fixed;
    pointer-events: none; z-index: 9999;
    transition: transform 0.15s ease, width 0.3s, height 0.3s;
    transform: translate(-50%, -50%);
}
.cursor-dot {
    width: 5px; height: 5px;
    background: #fff; border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 10000;
    transform: translate(-50%, -50%);
}
.cursor.hovering {
    width: 50px; height: 50px;
    border-color: var(--accent-light, #818cf8);
    background: rgba(99,102,241,0.1);
}
@media (max-width: 768px) {
    body { cursor: auto; }
    .cursor, .cursor-dot { display: none; }
}
```

```javascript
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .faq-q, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
});
```

### Floating Particles за Hero
```javascript
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            position: absolute;
            width: ${1 + Math.random() * 2}px;
            height: ${1 + Math.random() * 2}px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            animation: drift ${8 + Math.random() * 12}s linear infinite;
            animation-delay: ${-Math.random() * 20}s;
            opacity: ${0.1 + Math.random() * 0.4};
        `;
        particlesContainer.appendChild(p);
    }
}
```

```css
@keyframes drift {
    0% { transform: translateY(100vh) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-10vh) translateX(50px); opacity: 0; }
}
```

Додай `<div class="particles" id="particles"></div>` всередину hero секції.

## 8. Перевірити форму

Переконайся що форма lead magnet має реальний action URL (Formspree або інший). Якщо зараз стоїть placeholder — залиш як є, але додай коментар `<!-- TODO: замінити на реальний Formspree ID -->`.

---

Всі зміни робити в одному файлі index.html. Не ламай існуючу структуру — тільки виправляй і додавай.
