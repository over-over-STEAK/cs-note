"""Validate all shipped page links, assets, sections and corresponding drafts."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
root=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.links=[];self.ids=set();self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  for k in ('href','src'):
   if k in a:self.links.append(a[k])
files=[root/'index.html',*sorted((root/'lessons').glob('*/index.html'))]
errors=[]
for f in files:
 text=f.read_text(encoding='utf-8');page=Page(text)
 if '{{' in text:errors.append(str(f)+' contains unresolved placeholders')
 for link in page.links:
  u=urlsplit(link)
  if u.scheme or u.netloc:continue
  target=(f.parent/unquote(u.path)).resolve() if u.path else f
  if target.is_dir():target=target/'index.html'
  if not target.is_file():errors.append(f'{f.relative_to(root)}: missing {link}')
  elif u.fragment and target.suffix=='.html' and u.fragment not in Page(target.read_text(encoding='utf-8')).ids:errors.append(f'missing anchor: {link}')
 if f.parent.parent.name=='lessons':
  for id in ['goals','concept','example','practice','mistakes','summary']:
   if id not in page.ids:errors.append(f'{f}: missing {id}')
  if not (root/'content'/(f.parent.name+'.md')).exists():errors.append('missing content draft')
assert not errors,'\n'.join(errors)
print(f'PASS: {len(files)} pages; local links, assets, anchors, sections and drafts')
