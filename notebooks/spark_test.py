from pyspark.sql import SparkSession

# Initialize Spark session
spark = SparkSession.builder     .appName("SparkBasicTest")     .getOrCreate()

# Create a simple DataFrame
data = [("Alice", 34), ("Bob", 45), ("Cathy", 29)]
df = spark.createDataFrame(data, ["Name", "Age"])

# Show DataFrame content
df.show()

# Stop the session
spark.stop()
