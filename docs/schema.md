# Schema Information

## movies
column name | data type | details
------------|-----------|-----------------------
id 					| integer		| not null, primary_key
title 			| string		| not null
description | string		| not null
year				| integer		| not null
genre				| string		| not null
num_episodes| integer		|
imdb_score	| float			| not null
rt_score		| float			| not null
mtc_score		| float			| not null
rating*			| string		| not null

* (rating refers to: PG, PG-13, R, etc.)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## movielists
column name | data type | details
------------|-----------|-----------------------
id 					| integer		| not null, primary_key
title 			| string		| not null		
description	| string		| not null
author_id		| integer		| not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|----------------------
id 					| integer		| not null, primary_key
body 				| string		|
user_id    	| integer		| not null, foreign key (references users), indexed
