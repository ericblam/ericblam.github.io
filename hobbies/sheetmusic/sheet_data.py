data_file = open("sheet_data.csv")
web_file = open("index.html","w")
base_file = open("base.html")

base_lines = base_file.readlines()
base_file.close()

# COPY BASE FORMAT OF PAGE
i = 0
for line in base_lines:
    if "###" in line:
        break
    web_file.write(line)
    i += 1

lines = data_file.readlines()
# CREATE SHEET MUSIC TABLE

# COPY REST OF PAGE
for x in range(i + 1, len(base_lines)):
    web_file.write(base_lines[x])

data_file.close()
web_file.close()
