DROP TABLE IF EXISTS users.

CREATE TABLE
IF NOT EXISTS users
(id SERIAL PRIMARY KEY,
email TEXT UNIQUE,
username TEXT UNIQUE,
pw_hash TEXT NOT NULL,
club_id INTEGER,
created_at TIMESTAMP DEFAULT NOW(),
modified_at TIMESTAMP DEFAULT NOW());

DROP TABLE IF EXISTS clubs;

CREATE TABLE
IF NOT EXISTS clubs
(id SERIAL PRIMARY KEY,
clubname TEXT UNIQUE,
user_id INTEGER REFERENCES users (id));

ALTER TABLE users ADD CONSTRAINT club_id FOREIGN KEY (club_id) REFERENCES clubs;

DROP TABLE IF EXISTS trainings;

CREATE TABLE 
IF NOT EXISTS trainings
(id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users (id),
training_name TEXT NOT NULL,
datetime TIMESTAMP NOT NULL DEFAULT NOW());

DROP TABLE IF EXISTS arrows;

CREATE TABLE 
IF NOT EXISTS arrows
(id SERIAL PRIMARY KEY,
training_id INTEGER REFERENCES trainings (id),
round INTEGER,
arrow_end INTEGER,
score INTEGER,
pos_x TEXT,
pos_y TEXT,
datetime TIMESTAMP NOT NULL DEFAULT NOW());