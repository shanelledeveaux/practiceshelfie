update shelfie
set productname = $2, price = $3, imageurl = $4
where id = $1;
select * from shelfie