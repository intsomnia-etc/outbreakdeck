alter table public.decks
  add column if not exists map_names text[] not null default '{}';
