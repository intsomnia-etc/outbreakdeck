alter table public.decks
  drop constraint if exists decks_category_check;

alter table public.decks
  add constraint decks_category_check
  check (
    category is null
    or category ~ '^(Damage|DoT|Armor|Heal|Speed|HP|Gun Damage|Sunburst Damage|Skill Damage|Ultimate Damage|Melee Damage|Regen Armor|Regen HP)(, (Damage|DoT|Armor|Heal|Speed|HP|Gun Damage|Sunburst Damage|Skill Damage|Ultimate Damage|Melee Damage|Regen Armor|Regen HP))*$'
  );
