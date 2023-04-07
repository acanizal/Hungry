-- for help \?
-- list database \l
-- CREATE DATABASE [databasename

-- list all table \d

CREATE TABLE products (
    id INT, 
    name VARCHAR(50),
    price INT, 
    on_sale boolean
);

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <=5)

);

-- insert values into the columns of a table
INSERT INTO restaurants (id, name, location, price_range) values (123, 'McDonalds', 'New York', 3);
