---
title: yolo目标检测笔记
date: 2026-04-29
tags: [yolo, 目标检测]
summary: 在学习yolo的过程中，记录的笔记。
---

# yolo目标检测笔记

通用yaml模板：

```yaml
# 数据集根目录（强烈建议用绝对路径）
path: /data/dataset

# 子路径（相对于 path）
train: images/train
val: images/val
test: images/test  # 可选

# 类别数（推荐显式写）
nc: 2

# 类别名称
names:
  0: people
  1: car
```

文件目录结构：

```txt
dataset/
├── images/
│   ├── train/
│   ├── val/
│   └── test/
├── labels/
│   ├── train/
│   ├── val/
│   └── test/
```

标签格式(归一化)：

```
class x_center y_center width height
```

代码调用模型及yaml文件：

```python
from ultralytics import YOLO
# 加载模型
model = YOLO("yolo26n.yaml")
# 加载预训练模型权重
model = YOLO("yolo26n.pt")
# 训练模型
results = model.train(data="VisDrone.yaml", epochs=100, imgsz=640)
```

其中，yolo26.yaml模型源文件为：[yolo26.yaml](https://github.com/ultralytics/ultralytics/blob/main/ultralytics/cfg/models/26/yolo26.yaml)

参考文档：[目标检测 - Ultralytics YOLO 文档](https://docs.ultralytics.com/zh/tasks/detect/)
