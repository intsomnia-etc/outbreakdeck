# Strinova Outbreak Decks

Strinova Outbreak Decks is a community website for sharing, browsing, and discovering deck builds for Strinova Outbreak. It is an independent community project and is not an official recreation of the Strinova website.

## Features

- Browse public decks without signing in
- Search by deck name, description, category, author, or deck code
- Filter decks by energy type and category
- View deck details, including description, author, tags, and card previews
- Copy deck codes directly
- Sign in with Supabase email authentication to upload, edit, or delete your own decks.
- Select multiple cards when creating or editing a deck
- Search card names in the card picker
- Responsive layout for desktop and mobile devices
- Fully English interface

## Requirements

- A Supabase project with email authentication enabled
- A modern web browser
- A static web server or static host

This application does not require Node.js. A local static server is recommended. Opening `index.html` directly may also work depending on browser behavior and network restrictions.

## Project Structure

```text
.
├── README.md
├── index.html
├── auth.html
├── script.js
├── cards.js
├── style.css
├── supabase-auth-migration.sql
├── supabase-category-speed-migration.sql
├── cards/
│   ├── superstring/
│   └── crystalline/
├── assets/
│   ├── images/
│   └── news/
└── other static image assets
