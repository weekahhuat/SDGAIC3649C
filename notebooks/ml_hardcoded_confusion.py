from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import BinaryClassificationEvaluator
from pyspark.sql.functions import col

spark = SparkSession.builder.appName("HardcodedMLWithConfusion").getOrCreate()

# Hardcoded dataset
data = spark.createDataFrame([
    (0, 22, 56),
    (1, 25, 78),
    (0, 23, 60),
    (1, 28, 85),
    (1, 30, 90),
    (0, 21, 52)
], ["label", "age", "score"])

# Vector assembler
vec = VectorAssembler(inputCols=["age", "score"], outputCol="features")
data = vec.transform(data)

# Train/test split
train_data, test_data = data.randomSplit([0.7, 0.3], seed=42)

# Train logistic regression model
lr = LogisticRegression(featuresCol="features", labelCol="label")
model = lr.fit(train_data)

# Predict
predictions = model.transform(test_data)
predictions.select("features", "label", "prediction", "probability").show()

# AUC evaluation
evaluator = BinaryClassificationEvaluator(labelCol="label")
auc = evaluator.evaluate(predictions)
print("Test AUC:", auc)

# Confusion matrix
confusion = predictions.groupBy("label", "prediction").count().orderBy("label", "prediction")
confusion.show()
