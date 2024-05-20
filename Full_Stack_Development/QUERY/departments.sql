USE apr30;
CREATE TABLE departments(
	dept_id char(2) primary key,
    dept_name varchar(30) not null
);

INSERT INTO departments VALUES('IT', 'Information technology');
INSERT INTO departments VALUES('SA', 'Sales');
INSERT INTO departments VALUES('AC', 'Accounts');