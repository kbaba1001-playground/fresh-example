create table todos (
  id serial primary key,
  title varchar(500) not null,
  description text,
  created_at timestamp,
  updated_at timestamp
);
