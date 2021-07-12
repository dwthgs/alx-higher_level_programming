-- filter info in temperature.ssql after to import it in hbtn** database
SELECT city, AVG(value) AS avg_temp FROM temperatures GROUP BY city ORDER BY avg_temp DESC;
