-- Allow the Speed category in comma-separated deck categories.
alter table public.decks
  drop constraint if exists decks_category_check;

alter table public.decks
  add constraint decks_category_check
  check (
    category is null
    or category ~ '^(Damage|DoT|Armor|Heal|Speed)(, (Damage|DoT|Armor|Heal|Speed))*$'
  );
