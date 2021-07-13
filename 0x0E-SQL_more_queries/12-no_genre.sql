-- from exissting db show join of three tables
SELECT tv_shows.title, tv_show_genres.genre_id
FROM tv_shows 
LEFT OUTER JOIN tv_show_genres 
ON tv_shows.id = tv_show_genres.show_id
LEFT OUTER JOIN tv_genres 
ON tv_genres.id = tv_show_genres.genre_id
WHERE tv_show_genres.genre_id IS NULL;
