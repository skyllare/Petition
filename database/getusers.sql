CREATE TABLE IF NOT EXISTS USERS (email TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, lastname TEXT NOT NULL);

DELETE FROM USERS;

INSERT INTO USERS VALUES ('bob@gmail.com', 'Bob', 'Smith');