from bs4 import BeautifulSoup
import requests

html = requests.get('https://www.rottentomatoes.com/').text
print(html)
