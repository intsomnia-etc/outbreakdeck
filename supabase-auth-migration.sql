-- =====================================================
-- STRINOVA OUTBREAK DECKS
-- Migration: tambah login + RLS berbasis kepemilikan
-- =====================================================
-- Jalankan ini di Supabase Dashboard > SQL Editor
-- =====================================================


-- 1. Tambah kolom user_id ke tabel decks
--    (menyimpan siapa pemilik deck ini)

alter table decks
  add column if not exists user_id uuid
  references auth.users(id)
  on delete cascade;

-- Pilihan kartu yang digunakan dalam setiap deck
alter table decks
  add column if not exists card_names text[] not null default '{}';


-- 2. Pastikan Row Level Security aktif

alter table decks enable row level security;


-- 3. Hapus policy lama supaya tidak bentrok
--    (sesuaikan nama kalau policy lama kamu
--     namanya berbeda — cek di Dashboard >
--     Authentication > Policies)

drop policy if exists "Allow public update" on decks;
drop policy if exists "Allow public delete" on decks;
drop policy if exists "Allow public insert" on decks;
drop policy if exists "Enable insert for all users" on decks;
drop policy if exists "Enable read access for all users" on decks;


-- 4. SELECT — semua orang (termasuk yang belum login)
--    tetap bisa melihat semua deck

create policy "Public can read decks"
on decks
for select
to anon, authenticated
using (true);


-- 5. INSERT — hanya user yang login, dan
--    user_id yang dikirim harus sama dengan
--    id akun yang sedang login

create policy "Users can insert their own decks"
on decks
for insert
to authenticated
with check (auth.uid() = user_id);


-- 6. UPDATE — hanya boleh mengubah deck
--    yang user_id-nya sama dengan miliknya

create policy "Users can update their own decks"
on decks
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);


-- 7. DELETE — hanya boleh menghapus deck
--    yang user_id-nya sama dengan miliknya

create policy "Users can delete their own decks"
on decks
for delete
to authenticated
using (auth.uid() = user_id);


-- =====================================================
-- CATATAN
-- =====================================================
-- Deck LAMA (yang dibuat sebelum migration ini) akan
-- punya user_id = NULL, sehingga tidak akan bisa
-- di-edit/dihapus oleh siapa pun lewat aplikasi
-- (kecuali kamu, lewat SQL Editor / service_role key).
--
-- Kalau mau assign deck lama ke akun kamu sendiri,
-- jalankan (ganti UUID dengan id akun kamu, bisa
-- dilihat di Authentication > Users):
--
-- update decks set user_id = 'UUID-AKUN-KAMU'
-- where user_id is null;
-- =====================================================
