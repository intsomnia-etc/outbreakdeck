alter table public.decks
  add column if not exists character_names text[] not null default '{}';
