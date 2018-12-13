CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  author TEXT,
  page_count INTEGER,
  price FLOAT,
  publisher TEXT,
  publication_date DATE
);


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT NOT NULL,
    salary INTEGER CHECK (salary >= 0)
);
