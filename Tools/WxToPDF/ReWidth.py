from PIL import Image, ImageOps
import os

border_width = 2

# create a folder named 'images' in the current directory if it doesn't exist
if not os.path.exists('images'):
    os.makedirs('images')

for filename in os.listdir('.'):
    if not filename.endswith('.png'):
        continue

    with Image.open(filename) as img:
        new_width = img.width * 2 + 2 * border_width
        new_size = (new_width, img.height + 2 * border_width)
        new_img = Image.new(mode='RGB', size=new_size, color='white')
        new_img.paste(img, (border_width, border_width))
        new_filename = os.path.join('images', f'{os.path.splitext(filename)[0]}_border.png')
        new_img.save(new_filename)

print('Done.')
