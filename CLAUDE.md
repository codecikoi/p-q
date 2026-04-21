# PQ Demo

Адаптивный интерфейс покерного лобби. Дизайн из Figma.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite 6
- Чистый CSS (scoped styles, без препроцессоров)
- Iconify (`@iconify/vue`)
- Шрифт: HONOR Sans CN (основной), Poppins (числа)

## Команды

- `npm run dev` — dev-сервер
- `npm run build` — продакшн-сборка
- `npm run preview` — превью билда

## Соглашения

### Адаптивная верстка
- Базовый viewport — 375px, диапазон 320–430px
- Размеры задаются через `clamp(min, vw, max)` — не media queries
- Текстовые стили — глобальные CSS-классы `t-*` (см. `src/styles/text.css`)

### Компоненты
- Каждый компонент — переиспользуемый виджет с props/emits
- Файлы должны быть короткими — один компонент = одна ответственность
- SFC в `src/components/`, scoped стили
- Нет TypeScript — чистый JS

### Стиль кода
- Язык интерфейса — китайский
- Язык общения — русский
- не оставляем комментарии в коде 
