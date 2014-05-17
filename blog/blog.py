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


# COPY REST OF PAGE
for x in range(base_place + 1, len(base_lines)):
    web_file.write(base_lines[x])

data_file.close()
web_file.close()
