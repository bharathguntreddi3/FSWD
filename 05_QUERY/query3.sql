select * from employees;

select fullname, salary from employees;	-- projection

select * from employees
where dept_id = 'it';

select * from employees
where salary > 500000;

select * from employees
where dept_id = 'it' and salary > 500000;

select * from employees
where dept_id <> 'it' and salary > 500000;

select * from employees
where salary between 300000 and 500000;

select * from employees
where dept_id = 'it' or dept_id = 'ac';

select * from employees
where dept_id in ('it', 'ac');

select fullname, salary*0.20 as Bonus
from employees
where dept_id in ('it', 'ac');

select *
from employees
where fullname like 's%'; -- first names starting with s

select *
from employees
where fullname like '_t%'; -- second letter starting with t

-- '_'  one character, '&' any number of characters

select *
from employees
where fullname like '%e_'; -- last but one character is e

select *
from employees
order by salary;

select *
from employees
order by salary desc;

select *
from employees
order by dept_id, salary desc;

select sum(salary)
from employees;

select dept_id, sum(salary)
from employees
group by dept_id;

select dept_id, avg(salary)
from employees
group by dept_id;

-- join
select dept_id, dept_name, fullname, salary
from employees join departments
using(dept_id); -- if the columns names are same

select dept_name, fullname, salary
from employees join departments
on employees.dept_id = departments.dept_id; -- id the column names are different

select dept_name, fullname, salary
from employees as e join departments as d
on e.dept_id = d.dept_id; -- id the column names are different with table alias

select dept_name, fullname, salary
from employees as e join departments as d
on e.dept_id = d.dept_id
where salary > 500000;

