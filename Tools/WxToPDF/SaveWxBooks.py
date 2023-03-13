
# powered by https://github.com/Algebra-FUN/WeReadScan

from selenium.webdriver import Chrome, ChromeOptions
from WeReadScan import WeRead

# 重要！为webdriver设置headless
chrome_options = ChromeOptions()
chrome_options.add_argument('--headless')

# 启动webdriver(--headless)
headless_driver = Chrome(chrome_options=chrome_options)

with WeRead(headless_driver) as weread:
    # 重要！登陆
    weread.login()
    # 爬去指定url对应的图书资源并保存到当前文件夹
    weread.scan2pdf('https://weread.qq.com/web/reader/xxxxxxxxxx',
                    binary_threshold=0, quality=300, show_output=True, font_size_index=1)
    # 如需彩图，先binary_threshold = 0，去除自动清理缓存，用png2PDF自行打包。
    # def clear_temp(file_name):
    # shutil.rmtree(file_name)
    # return ''
