# Заметки для Claude

## Ученица
- Пишет CAV сама и учится на нём («пытаюсь не вайбкодить»). Обращаться в женском роде.
- Хвалить, когда заслужила: «умничка» и другие тёплые слова — её просьба.
- Формат обучения (её правило): сначала общая картина → задача словами и по сигнатурам
  (какой файл, какая функция, что принимает и возвращает) → она пишет сама → ревью.
  Готовый код и тесты не давать. Исключение — она явно просит «моментик напомнить»:
  тогда короткий фрагмент, и пусть наберёт руками.
- Отвечать коротко, без простыней. Ошибки — нумерованным списком с тем, как исправить.
  Править её код минимально, не переписывать разметку целиком и не добавлять лишнего
  (label, id, autocomplete, комментарии) без спроса.
- Неформальный тон и мат — норма, отвечать спокойно и по делу.
- В конце пройденного этапа писать «done» — сигнал закрыть задачу в её трекере Planacry.
- Часто пишет «запушено», а в GitHub изменений нет — сверять `git log origin/develop`.
- Уровень: JS уверенно-средне (DOM, fetch, async/await). Rust: Vec, enum, match, циклы — да;
  Result/Option, ownership/borrow, async — пробелы. SQL базово. Linux: есть VPS с nginx,
  но самостоятельно делала мало. Windows + Git Bash + VS Code.

## Проект CAV (CryAltVoid) — мессенджер
- Ветки: main (только каркас), develop (рабочая), PR #1 develop → main.
  feature/first-server целиком влита в develop, её осталось удалить.
- backend: Rust, axum 0.8 + tokio. main.rs пустой (неиспользуемый импорт), auth.rs пустой
  и не подключён (`mod auth;` нет).
- frontend: auth.html (формы formReg / formLogin), scripts/auth.js (регистрация через
  fetch POST /api/register, обработчика входа нет), styles/authStyle.css.
  index.html, iScripts.js, iStyle.css — заготовки.
- Решения из диалога «Разметка в auth HTML» (17–18.10): один axum-сервер на 127.0.0.1:3000
  отдаёт API и фронт (`fallback_service(ServeDir::new("../frontend"))`, cargo run из backend/);
  SQLite + sqlx-миграции, весь SQL в db.rs, позже Postgres; bcrypt; JWT в httpOnly-cookie
  (SameSite=Lax, Max-Age=604800); /api/me, /api/logout; после входа — app.html + scripts/app.js;
  у форм novalidate + checkValidity() и свои уведомления.
- Сейчас: этап 0 (запушить фикс фронта, удалить ветку) и этап 1 — main.rs руками
  (/api/health, ServeDir). Дальше шаги: 2 users + миграция + db.rs, 3 /api/register,
  4 /api/login (JWT-cookie), 5 /api/me + /api/logout, 6 вход на фронте и app.html.

## План обучения
- Её трекер — Planacry (локально, `E:\work\Labs\planacry`, axum + rusqlite, 127.0.0.1:8080,
  API `/api/projects`, `/api/projects/{id}/tasks`, `PUT /api/tasks/{id}`). Версия plancry на
  GitHub старая (июль), рабочая — локальная.
- План живёт в репо cryzis333/plancry, ветка `claude/learning-plan`, папка `frontend/learning/`:
  `plan-data.json` (данные), страница `/learning/` (ставится в её Planacry), `planacry-sync.mjs`.
  Страница создаёт в Planacry проект «CAV · обучение» (задача на каждый пункт, тег
  `#cav-learn:<id>` в описании) и синхронизирует статусы.
- Засчитать пройденное: в `plan-data.json` поставить `"done": true` у пункта, дописать запись
  в `lessons` (новые сверху), обновить `updated`, запушить в `claude/learning-plan`.
  Страница подтянет свежий план с GitHub, она жмёт «Синхронизировать». И написать ей «done».
- Этапы: старт → 0 инструменты → 1 сервер → 2 SQL/sqlx → 3 регистрация → 4 вход/JWT/app.html →
  5 модель чатов → 6 WebSocket → 7 Postgres → 8 Linux-сервер/деплой → 9 полировка.
  Фоном: Rust-фундамент, Linux-основа, фронтенд-подтяжка. Темп ~16 ч/нед, основная часть
  ~305 ч до 2027-03-03.
