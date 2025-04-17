from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import BinaryClassificationEvaluator

spark = SparkSession.builder.appName("HardcodedMLDemo").getOrCreate()

# Hardcoded Data
data = spark.createDataFrame([
    (0, 22, 56),
    (1, 25, 78),
    (0, 23, 60),
    (1, 28, 85),
    (1, 30, 90),
    (0, 21, 52)
], ["label", "age", "score"])

# Feature vector
vec = VectorAssembler(inputCols=["age", "score"], outputCol="features")
data = vec.transform(data)

# Train-test split
train_data, test_data = data.randomSplit([0.7, 0.3], seed=42)

# Model
lr = LogisticRegression(featuresCol="features", labelCol="label")
model = lr.fit(train_data)

# Predict and evaluate
predictions = model.transform(test_data)
evaluator = BinaryClassificationEvaluator(labelCol="label")
auc = evaluator.evaluate(predictions)

print("Test AUC:", auc)
predictions.select("features", "label", "prediction", "probability").show()
