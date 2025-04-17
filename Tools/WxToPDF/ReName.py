
# 查找当前文件夹的所有png图片文件，按修改日期降序排序，并为其添加序号重命名 eg - 001
# 能否添加Ts的代码

import os

path = "./"
png_files = []
for file in os.listdir(path):
    if file.endswith(".png"):
        png_files.append(file)

png_files = sorted(png_files, key=lambda x: os.path.getmtime(x))

for i, file in enumerate(png_files):
    num = str(i+1).zfill(3)
    new_file_name = "{}-{}".format(num, file)
    os.rename(file, new_file_name)
