import os
from PIL import Image

# 创建 images 文件夹
if not os.path.exists("images"):
    os.mkdir("images")

for file_name in os.listdir():
    if file_name.endswith(".png"):
        # 打开原图
        img = Image.open(file_name)
        # 获取原图宽度
        img_width = img.size[0]
        # 创建白底图片
        white_img = Image.new('RGB', (img_width + 300, img.size[1] + 100), color = 'white')
        # 将原图居中放置在白底图片中央
        white_img.paste(img, (300 // 2, 100 // 2))
        # 保存加框后的图片
        bordered_img = white_img.crop((2, 2, white_img.size[0] - 2, white_img.size[1] - 2))
        bordered_img.save(f"images/{os.path.splitext(file_name)[0]}.png")
