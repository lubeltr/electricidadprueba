"""Refresh the standalone HTML from the editable CSS, JS and local images.

Run: python3 sync_site.py
No third-party Python packages are required.
"""
from pathlib import Path
import base64
import re

ROOT = Path(__file__).resolve().parent
page = ROOT / 'index.html'
html = page.read_text(encoding='utf-8')
html, scripts = re.subn(r'<script>\s*const CONFIG = .*?</script>', '__NOMA_SCRIPT__', html, flags=re.S)
if scripts != 1:
    raise SystemExit('Expected exactly one application script; HTML left unchanged.')
html, styles = re.subn(r'<style>.*?</style>', '__NOMA_STYLES__', html, flags=re.S)
if styles != 1:
    raise SystemExit('Expected exactly one stylesheet; HTML left unchanged.')
for classes, filename in [('(?:hero-image|studio-image)', 'living-noma.webp'), ('product-photo', 'productos-noma.webp')]:
    image = 'data:image/webp;base64,' + base64.b64encode((ROOT / 'assets' / filename).read_bytes()).decode('ascii')
    pattern = r'(<img\b[^>]*\bclass="' + classes + r'"[^>]*\bsrc=")[^"]+("[^>]*>)'
    html = re.sub(pattern, lambda match: match[1] + image + match[2], html)
html = html.replace('__NOMA_STYLES__', '<style>\n' + (ROOT / 'styles.css').read_text(encoding='utf-8') + '\n</style>')
html = html.replace('__NOMA_SCRIPT__', '<script>\n' + (ROOT / 'script.js').read_text(encoding='utf-8') + '\n</script>')
page.write_text(html, encoding='utf-8')
print('Updated index.html: styles, script and embedded images.')
