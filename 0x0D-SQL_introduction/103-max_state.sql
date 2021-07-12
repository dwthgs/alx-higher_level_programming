-- Maxx temp per state in hbtn** database
SELECT state, MAX(value) AS max_temp FROM temperatures GROUP BY state;
