import requests
import pprint
from scrapy.selector import Selector

initialList = [];
for x in range(2200):
    URL = 'https://cardanoscan.io/tokens?pageNo='+str(x+1)
    page = requests.get(URL)
    print(x+1)
    # pp.pprint(page.content)
    sel = Selector(text=page.content)
    # sel = Selector (text=partial_body)
    # print(sel.xpath('//div/@data-original-title').extract())
    catchFinger = sel.css("td:nth-child(3) > div::attr(title)").getall()
    initialList.extend(catchFinger)


with open('listfileNEW.txt', 'w') as filehandle:
    for listitem in initialList:
        filehandle.write('%s\n' % listitem)



