from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import BinaryClassificationEvaluator

spark = SparkSession.builder.appName("StudentMLDemo").getOrCreate()

# Local read
df_local = spark.read.csv("/home/jovyan/work/student_data.csv", header=True, inferSchema=True)
print("✅ Local CSV Read:")
df_local.show()

# HDFS read
df_hdfs = spark.read.csv("hdfs://namenode:8020/data/student_data.csv", header=True, inferSchema=True)
print("✅ HDFS CSV Read:")
df_hdfs.show()

# Choose one to proceed
df = df_local  # or df_hdfs

vec = VectorAssembler(inputCols=["age", "score"], outputCol="features")
df = vec.transform(df)

train_data, test_data = df.randomSplit([0.7, 0.3], seed=42)

lr = LogisticRegression(featuresCol="features", labelCol="label")
model = lr.fit(train_data)

predictions = model.transform(test_data)
evaluator = BinaryClassificationEvaluator(labelCol="label")
auc = evaluator.evaluate(predictions)

print("Test AUC:", auc)
predictions.select("features", "label", "prediction", "probability").show()
