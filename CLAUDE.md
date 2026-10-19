# Заметки для Claude

## О пользователе
- Учится, пишет CAV сама («пытаюсь не вайбкодить»). JS знает средне, Rust/БД/Linux — в процессе.
- Приоритет: Rust + базы данных + Linux-сервер. JS/HTML/CSS — подтягивать по ходу.
- Обучать, а не писать код за неё: объяснять, давать задания, проверять.
- Хвалить, когда заслужила: «умничка» и другие тёплые слова.

## Проект CAV (CryAltVoid) — мессенджер
- backend: Rust, axum 0.8 + tokio. main.rs пустой, auth.rs пустой (каркас делал Claude).
- frontend: auth.html (формы регистрации/входа), auth.js — регистрация через fetch POST /api/register (писала сама). Логин в JS не дописан.
- Рабочая ветка — develop. feature/first-server уже влита.

## План обучения
- Лежит в репо cryzis333/plancry, ветка claude/learning-plan: frontend/learning.js, вкладка D (Dashboard), прогресс в localStorage.
- Этапы: 0 сервер axum → 1 регистрация+SQLite → 2 логин/сессии → 3 схема чатов → 4 WebSocket → 5 Linux/деплой → 6 полировка.
