begin;

truncate table todos;

-- ----------
insert into
  todos (title, description)
values
  ('to call to parents', 'to talk about lawn'),
  (
    'to buy a new computer',
    'until the end of this year'
  );

commit;
