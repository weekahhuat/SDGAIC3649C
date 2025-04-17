#!/bin/bash

echo "Uploading student_data.csv to HDFS at /data/"

docker cp notebooks/student_data.csv namenode:/tmp/
docker exec -it namenode hdfs dfs -mkdir -p /data
docker exec -it namenode hdfs dfs -put -f /tmp/student_data.csv /data/

echo "✅ Upload complete. Check with: hdfs dfs -ls /data/"
