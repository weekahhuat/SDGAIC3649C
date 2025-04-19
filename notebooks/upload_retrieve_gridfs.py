from pymongo import MongoClient
import gridfs

# Connect to MongoDB
client = MongoClient("mongodb://rpMongod:Republic$01@mongodb:27017/")
db = client["image_db"]
fs = gridfs.GridFS(db)

# Upload image
with open("example.jpg", "rb") as f:
    fs.put(f, filename="example.jpg")
print("Image uploaded.")

# Retrieve image
file = fs.find_one({"filename": "example.jpg"})
with open("downloaded_example.jpg", "wb") as f:
    f.write(file.read())
print("Image downloaded.")
