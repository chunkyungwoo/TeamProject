CREATE DATABASE fishDB;
USE fishDB;

CREATE TABLE tbl_fishs(
isbn	VARCHAR(13)		PRIMARY KEY,
name	VARCHAR(30)	NOT NULL,
home	VARCHAR(50)	NOT NULL,	
price	INT,	
discount	INT,		
description	VARCHAR(400),		
link	VARCHAR(125),	
image	VARCHAR(125)		
);

DESC tbl_fishs;

SELECT * FROM tbl_fishs;