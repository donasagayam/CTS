SELECT city,
       COUNT(DISTINCT user_id) AS registrations
FROM Users
GROUP BY city
ORDER BY registrations DESC
LIMIT 5;