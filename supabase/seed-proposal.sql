-- Run this in the Supabase SQL editor after creating the tables.

-- 1. Insert proposal
insert into proposals (slug, group_name, destination, group_size, rooms, nights, tax_rate, bus_cost_per_person, message)
values (
  'pikeucf',
  'PIKE - University of Central Florida',
  'Nashville, TN & Savannah, GA',
  112,
  28,
  2,
  0.14,
  0,
  'Hey PIKE UCF, really excited to put this trip together for you. We have handled hundreds of trips like this and take a lot of pride in making sure everything goes perfectly. If you have any questions before signing, reach out directly.'
);

-- 2. Insert hotels (replace the proposal_id with the actual UUID after inserting the proposal)
-- Nashville
insert into hotels (proposal_id, name, address, stars, distance, image_url, city)
select id, 'Holiday Inn & Suites Nashville Downtown Broadway', '415 4th Ave S, Nashville, TN 37201', 4, '0.3 miles from Broadway',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop', 'Nashville'
from proposals where slug = 'pikeucf';

-- Savannah
insert into hotels (proposal_id, name, address, stars, distance, image_url, city)
select id, 'Fairfield Inn & Suites Savannah Downtown', '135 Martin Luther King Jr Blvd, Savannah, GA 31401', 4, '0.4 miles from River Street',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop', 'Savannah'
from proposals where slug = 'pikeucf';

-- 3. Insert hotel_dates for Nashville
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'November 6 – 8, 2025',   279, 'Peak weekend'    from hotels where name = 'Holiday Inn & Suites Nashville Downtown Broadway';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'November 13 – 15, 2025', 289, 'Popular weekend'  from hotels where name = 'Holiday Inn & Suites Nashville Downtown Broadway';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'November 20 – 22, 2025', 259, 'Great value'      from hotels where name = 'Holiday Inn & Suites Nashville Downtown Broadway';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'December 11 – 13, 2025', 249, 'Low season rates' from hotels where name = 'Holiday Inn & Suites Nashville Downtown Broadway';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'December 14 – 16, 2025', 119, 'Best price'       from hotels where name = 'Holiday Inn & Suites Nashville Downtown Broadway';

-- 4. Insert hotel_dates for Savannah
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'November 6 – 8, 2025',   179, 'Peak weekend'    from hotels where name = 'Fairfield Inn & Suites Savannah Downtown';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'November 13 – 15, 2025', 189, 'Popular weekend'  from hotels where name = 'Fairfield Inn & Suites Savannah Downtown';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'December 11 – 13, 2025', 159, 'Low season rates' from hotels where name = 'Fairfield Inn & Suites Savannah Downtown';
insert into hotel_dates (hotel_id, date_range, nightly_rate, note)
select id, 'December 14 – 16, 2025', 139, 'Best price'       from hotels where name = 'Fairfield Inn & Suites Savannah Downtown';
