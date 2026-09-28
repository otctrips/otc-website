-- Backup store for quote form submissions (app/api/quote-request/route.ts).
-- Every submission is inserted here before the Resend email is attempted;
-- email_sent is flipped to true only when the email succeeds.
create table quote_requests (
  id uuid default gen_random_uuid() primary key,
  first_name text,
  last_name text,
  email text,
  phone text,
  organization text,
  trip_type text,
  group_size text,
  destination text,
  start_date text,
  end_date text,
  notes text,
  email_sent boolean default false,
  created_at timestamp with time zone default now()
);

-- The site uses the public anon key, so lock the table down:
-- anon may insert new leads (never pre-marked as sent) but cannot read, update, or delete them.
alter table quote_requests enable row level security;

create policy "anon can insert quote requests"
  on quote_requests for insert to anon
  with check (email_sent = false);

-- Marking a request as emailed goes through this function instead of a table-wide update policy.
create or replace function mark_quote_request_email_sent(request_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update quote_requests set email_sent = true where id = request_id;
$$;

revoke all on function mark_quote_request_email_sent(uuid) from public;
grant execute on function mark_quote_request_email_sent(uuid) to anon;
