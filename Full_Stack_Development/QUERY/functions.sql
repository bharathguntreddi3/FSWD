select mod(10,3);

select curdate();

select now();

select sysdate();

select month();

select monthname();

select second();

select hour();

select adddate(curdate(), interval 10 day);

select adddate(curdate(), interval 7 month);

select datediff(curdate(), '2024-5-21');

select date_format(now(), '%d-%m-%y');

select date_format(now(), '%D-%M-%Y');

select instr('How do you do', 'do');

select mid('MySQL database', 3, 3);

select repeat('*', 5);

select *
from employees
where length(fullname) > 12;

select count(*)
from employees;

select count(*)
from employees
where salary>500000;

select dept_id, count(*)
from employees
group by dept_id;