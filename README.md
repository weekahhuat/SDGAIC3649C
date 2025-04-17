# 🚀 PySpark ML + HDFS Demo Environment

This repository sets up a full stack for running PySpark Machine Learning workloads on both local and HDFS-based CSV files using Docker Compose and Jupyter in GitHub Codespaces or locally.

## 📦 Services Included
- **Jupyter Notebook** (custom Spark ML environment)
- **Apache Spark** (Master & Worker)
- **HDFS** (Namenode & Datanode)

---

## 🧪 Getting Started

### 1. Start the Environment

In your Codespace or local terminal:

```bash
docker-compose up -d
```

### 2. Access Jupyter Notebook

Open your browser to:
```
http://localhost:8888
```

(No token needed.)

---

### 3. Upload CSV to HDFS

Use the helper shell script:

```bash
./upload_to_hdfs.sh
```

This uploads `student_data.csv` into `/data/` folder on HDFS.

---

### 4. Run Notebooks

Inside Jupyter, open:
- `ml_demo.ipynb` → reads from **local & HDFS**
- `ml_hardcoded.ipynb` → uses in-memory data
- `ml_hardcoded_confusion.ipynb` → includes confusion matrix

---

## 🛠️ Developer Notes

### DevContainer Setup for GitHub Codespaces

Ensure the `.devcontainer/devcontainer.json` file is present with:

- Docker Compose support
- Auto-start on post create
- Jupyter + Python VSCode extensions

---

Enjoy Spark ML in your browser! 🚀
