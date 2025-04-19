use image_db
var image = cat('/scripts/mongodb/example.jpg', 'b');
db.fs.files.insertOne({ filename: "example.jpg", uploadDate: new Date() });
db.fs.chunks.insertOne({ files_id: ObjectId(), n: 0, data: image });
