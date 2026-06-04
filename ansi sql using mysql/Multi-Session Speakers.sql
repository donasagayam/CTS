SELECT speaker_name,
       COUNT(*) AS sessions_count
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(*) > 1;