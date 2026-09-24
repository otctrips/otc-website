-- Optional duration options for a venue package (add-on).
-- When set, the proposal page shows a split pill (one half per option) instead of the
-- price line + Select button, and the chosen option's price is used for totals.
-- Shape: [{"label": "2 Hour", "price_per_person": 45}, ...]
alter table venue_packages add column if not exists duration_options jsonb;

-- pikefau: Karina's Club Lounge - December 21st
update venue_packages
set duration_options = '[{"label":"2 Hour","price_per_person":45},{"label":"3 Hour","price_per_person":55}]'::jsonb,
    inclusions = ''
where id = '3aa33749-b68b-42be-8c9a-e154cca04530';
