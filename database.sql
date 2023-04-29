CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	"path" VARCHAR(300) NOT NULL,
	"description" VARCHAR(300) NOT NULL,
	"likes" INT DEFAULT 0
);

INSERT INTO gallery ("path", "description")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');

UPDATE "gallery"
        SET "likes"= likes + 1
        WHERE "id"=1;

SELECT * FROM gallery;