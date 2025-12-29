-- Create a table to track student sync history
create table if not exists student_sync_history (
  id serial primary key,
  synced_at timestamptz not null default now(),
  admin_email text not null,
  status text not null, -- 'success' or 'error'
  count integer,
  message text
);
