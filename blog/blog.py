import os
from pprint import pprint
import re

web_file = open("index.html","w")
base_file = open("base.html")

base_lines = base_file.readlines()
base_file.close()

# COPY BASE FORMAT OF PAGE
base_place = 0
for line in base_lines:
    if "###" in line:
        break
    web_file.write(line)
    base_place += 1

# WRITE BLOG ENTRIES
# -- Find blog files --
files = []
for dirname, dirnames, filenames in os.walk('.'):
    for filename in filenames:
        files.append(filename)
blog_files = []
blog_re = re.compile("^\d\d\d\d-\d\d-\d\d-.+\.blg$")
for file in files:
    m = blog_re.match(file)
    if m is not None:
        blog_files.append(m.group(0))
blog_files = sorted(blog_files, reverse=True)

# -- Insert blog entries --
for blog in blog_files:
    entry = open(blog, 'r')
    entry_lines = entry.readlines()
    if len(entry_lines) < 6 or entry_lines[0] != "### TITLE ###" or entry_lines[2] != "### DATE ###" or entry_lines[4] != "### TEXT ###":
        web_file.write("<div class='blog'>")
        web_file.write("<h1 class='blog'>%s</h1>" % entry_lines[1])
        web_file.write("<blog_date>%s</blog_date>" % entry_lines[3])
        for i in range(5, len(entry_lines)):
            web_file.write(entry_lines[i])
        web_file.write("</div>")
        web_file.write("<br \><br \>")

# COPY REST OF PAGE
for x in range(base_place + 1, len(base_lines)):
    web_file.write(base_lines[x])

web_file.close()
