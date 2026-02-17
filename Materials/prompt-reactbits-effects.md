# Промпт: ReactBits-інспіровані ефекти для SAV.AGENCY

Сайт: https://marketing-agency-deploy.vercel.app/
Стек: чистий HTML/CSS/JS (один файл index.html)

Додай наступні ефекти, натхненні бібліотекою ReactBits.dev, але реалізовані на vanilla JS/CSS без React.

---

## 1. SPLIT TEXT REVEAL (Hero заголовок)

Замість простого fade-in — кожне слово заголовку H1 з'являється окремо з blur ефектом. Слова починають розмитими (filter: blur(10px)) і прозорими, потім по черзі стають чіткими.

```css
.split-word {
    display: inline-block;
    opacity: 0;
    filter: blur(10px);
    transform: translateY(20px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.split-word.revealed {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0);
}
```

```javascript
// Розбити заголовок на слова і анімувати кожне з затримкою
function splitTextReveal(element) {
    const text = element.textContent;
    const words = text.split(' ');
    element.innerHTML = words.map(word =>
        `<span class="split-word">${word}</span>`
    ).join(' ');

    const spans = element.querySelectorAll('.split-word');
    spans.forEach((span, i) => {
        setTimeout(() => span.classList.add('revealed'), 200 + i * 120);
    });
}

// Виклик після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) splitTextReveal(heroTitle);
});
```

---

## 2. BLOB CURSOR (замість простого кастомного курсора)

Замість жорсткого кільця — м'який blob що слідує за курсором з великою затримкою (як амеба). При кліку — стискається. При ховері на кнопках — збільшується і змінює колір.

```css
.blob-cursor {
    width: 30px; height: 30px;
    background: radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.4s ease, height 0.4s ease, background 0.3s;
    mix-blend-mode: screen;
}
.blob-cursor.hovering {
    width: 80px; height: 80px;
    background: radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%);
}
.blob-cursor.clicking {
    width: 20px; height: 20px;
}

@media (max-width: 768px) {
    .blob-cursor { display: none; }
}
```

```javascript
const blob = document.createElement('div');
blob.className = 'blob-cursor';
document.body.appendChild(blob);

let blobX = 0, blobY = 0, mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

document.addEventListener('mousedown', () => blob.classList.add('clicking'));
document.addEventListener('mouseup', () => blob.classList.remove('clicking'));

// Дуже плавне слідування (0.08 = велика затримка)
function animateBlob() {
    blobX += (mouseX - blobX) * 0.08;
    blobY += (mouseY - blobY) * 0.08;
    blob.style.left = blobX + 'px';
    blob.style.top = blobY + 'px';
    requestAnimationFrame(animateBlob);
}
animateBlob();

document.querySelectorAll('a, button, .service-card, .faq-q').forEach(el => {
    el.addEventListener('mouseenter', () => blob.classList.add('hovering'));
    el.addEventListener('mouseleave', () => blob.classList.remove('hovering'));
});
```

---

## 3. MAGNETIC BUTTONS (Кнопки що тягнуться за курсором)

CTA кнопки трохи зміщуються в бік курсора коли він наближається (magnetic ефект). Дуже subtle — максимум 8-10px зсув.

```javascript
document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
    btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'transform 0.1s ease';
    });
});
```

---

## 4. AURORA BACKGROUND (замість/доповнення mesh gradient)

Додати WebGL-подібний ефект aurora через CSS — кольорові хвилі що повільно рухаються і змішуються. Більш органічний ніж звичайні орби.

```css
.aurora {
    position: fixed;
    top: 0; left: 0;
    width: 200vw; height: 200vh;
    z-index: -3;
    background:
        linear-gradient(135deg, rgba(79,70,229,0.15) 0%, transparent 50%),
        linear-gradient(225deg, rgba(236,72,153,0.12) 0%, transparent 50%),
        linear-gradient(315deg, rgba(6,182,212,0.1) 0%, transparent 50%),
        linear-gradient(45deg, rgba(124,58,237,0.12) 0%, transparent 50%);
    animation: auroraMove 30s ease-in-out infinite alternate;
    filter: blur(60px);
}
@keyframes auroraMove {
    0% { transform: translate(0%, 0%) rotate(0deg); }
    25% { transform: translate(-5%, 3%) rotate(2deg); }
    50% { transform: translate(3%, -5%) rotate(-1deg); }
    75% { transform: translate(-3%, 2%) rotate(3deg); }
    100% { transform: translate(5%, -3%) rotate(-2deg); }
}
```

---

## 5. COUNT-UP З ЕЛАСТИЧНИМ ЕФЕКТОМ

Замість лінійного count-up — числа "перестрибують" ціль і повертаються назад (elastic easing). Виглядає набагато живіше.

```javascript
function elasticCountUp(element, target, duration = 2500) {
    const start = performance.now();

    function easeOutElastic(t) {
        const c4 = (2 * Math.PI) / 3;
        return t === 0 ? 0 : t === 1 ? 1 :
            Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    }

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutElastic(progress);
        const current = Math.round(eased * target);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// Підключити до Intersection Observer
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = 'true';
            const target = parseInt(entry.target.dataset.target);
            if (target) elasticCountUp(entry.target, target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => countObserver.observe(el));
```

---

## 6. TILT EFFECT НА PRICING CARDS

Картки pricing трохи нахиляються в 3D при русі мишки по них (perspective tilt). Subtle — максимум 5 градусів.

```javascript
document.querySelectorAll('.pricing-card').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 0.1s ease';

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `
            perspective(800px)
            rotateX(${-y * 8}deg)
            rotateY(${x * 8}deg)
            scale3d(1.02, 1.02, 1.02)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
    });
});
```

---

## 7. GRADIENT BORDER ANIMATION (на featured pricing card)

Бордер середньої (featured) pricing картки — це animated gradient що крутиться по периметру. Виглядає як неонова рамка.

```css
.pricing-card.featured {
    position: relative;
    background: var(--surface);
    border: none;
}
.pricing-card.featured::before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    border-radius: inherit;
    background: conic-gradient(
        from var(--border-angle, 0deg),
        transparent 0%,
        var(--accent, #6366f1) 10%,
        transparent 20%,
        transparent 80%,
        var(--accent-light, #818cf8) 90%,
        transparent 100%
    );
    z-index: -1;
    animation: rotateBorder 4s linear infinite;
}
@property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}
@keyframes rotateBorder {
    to { --border-angle: 360deg; }
}

/* Фолбек для браузерів без @property */
@supports not (background: conic-gradient(red, blue)) {
    .pricing-card.featured::before {
        background: linear-gradient(135deg, var(--accent), var(--accent-light));
    }
}
```

---

## 8. SMOOTH SCROLL PROGRESS BAR

Тонка лінія зверху сторінки що показує скільки проскролено. Колір — accent gradient.

```css
.scroll-progress {
    position: fixed;
    top: 0; left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent, #6366f1), #ec4899, var(--accent-light, #818cf8));
    z-index: 9999;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s linear;
    width: 100%;
}
```

```javascript
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrolled / maxScroll;
    progressBar.style.transform = `scaleX(${progress})`;
});
```

---

## 9. PARALLAX SUBTLE НА HERO ЕЛЕМЕНТАХ

Hero badge, заголовок і підзаголовок рухаються з різною швидкістю при скролі (subtle parallax). Це створює відчуття глибини.

```javascript
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const heroHeight = heroSection.offsetHeight;
    if (scrollY > heroHeight) return; // Не рахувати після hero

    const badge = heroSection.querySelector('.hero-badge');
    const title = heroSection.querySelector('h1');
    const desc = heroSection.querySelector('p');
    const buttons = heroSection.querySelector('.hero-buttons');

    if (badge) badge.style.transform = `translateY(${scrollY * 0.1}px)`;
    if (title) title.style.transform = `translateY(${scrollY * 0.2}px)`;
    if (desc) desc.style.transform = `translateY(${scrollY * 0.3}px)`;
    if (buttons) buttons.style.transform = `translateY(${scrollY * 0.35}px)`;
});
```

---

## 10. TYPING EFFECT НА HERO BADGE

Текст в hero badge ("AI-Powered Marketing Intelligence") друкується по буквах як в терміналі, з блимаючим курсором.

```css
.typing-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: var(--accent-light, #818cf8);
    margin-left: 2px;
    animation: blink 0.8s step-end infinite;
    vertical-align: text-bottom;
}
@keyframes blink {
    50% { opacity: 0; }
}
```

```javascript
function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'typing-cursor';
    element.appendChild(cursorSpan);

    let i = 0;
    function type() {
        if (i < text.length) {
            element.insertBefore(
                document.createTextNode(text.charAt(i)),
                cursorSpan
            );
            i++;
            setTimeout(type, speed);
        } else {
            // Прибрати курсор через 2 секунди
            setTimeout(() => cursorSpan.remove(), 2000);
        }
    }
    // Почати з затримкою
    setTimeout(type, 500);
}

// Застосувати до hero badge
const badge = document.querySelector('.hero-badge');
if (badge) {
    const badgeText = badge.textContent.trim();
    typeWriter(badge, badgeText, 40);
}
```

---

## ПОРЯДОК ПРІОРИТЕТІВ:

1. **Split Text Reveal** — найбільший візуальний ефект на hero (перше що бачить клієнт)
2. **Blob Cursor** — одразу створює premium відчуття
3. **Magnetic Buttons** — інтерактивність, люди люблять це
4. **Tilt на Pricing Cards** — де приймається рішення про покупку
5. **Rotating Gradient Border** — виділяє featured пакет
6. **Elastic Count-Up** — живіші числа
7. **Scroll Progress Bar** — маленький але помітний штрих
8. **Parallax на Hero** — глибина
9. **Aurora Background** — якщо поточний mesh gradient ще не працює
10. **Typing Badge** — вишенька на торті

## ВАЖЛИВО:
- Всі ефекти — в одному index.html (CSS вбудований, JS в кінці)
- Все performance-friendly (тільки transform, opacity, filter)
- Mobile: blob cursor прихований, tilt вимкнений, parallax вимкнений
- Не ламай існуючу структуру і контент!
