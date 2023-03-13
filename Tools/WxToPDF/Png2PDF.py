


import os
import glob
import io
from datetime import datetime
from PIL import Image
from PyPDF4 import PdfFileMerger, PdfFileReader

# 获取所有 PNG 图片并按照修改时间进行排序
image_files = sorted(glob.glob("*.png"), key=os.path.getmtime)

# 将图片合并为 PDF 文件
pdf_merger = PdfFileMerger()

for image_file in image_files:
    with Image.open(image_file) as image:
        rgb_image = image.convert("RGB")
        pdf_bytes = io.BytesIO()
        rgb_image.save(pdf_bytes, format="pdf")
        pdf_bytes.seek(0)
        pdf_reader = PdfFileReader(pdf_bytes)
        pdf_merger.append(pdf_reader)

# 输出 PDF 文件
output_filename = "output.pdf"
with open(output_filename, "wb") as output:
    pdf_merger.write(output)
pdf_merger.close()

# 输出所有图片文件的修改时间
for image_file in image_files:
    mtime = os.path.getmtime(image_file)
    mtime_str = datetime.fromtimestamp(mtime).strftime("%Y-%m-%d %H:%M:%S")
    print(f"{image_file}: {mtime_str}")

print(f"All images have been merged into {output_filename}.")
