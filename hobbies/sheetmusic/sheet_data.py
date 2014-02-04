data_file = open("sheet_data.csv")
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

lines = data_file.read()
lines = lines.split("\n");
# CREATE SHEET MUSIC TABLE
types = lines[0].split(";")
del lines[0]
header = lines[0].split(";")
del lines[0]
images = lines[0].split(";")
del lines[0]

file_index = types.index("file")
not_first_line = False
for line in lines:
    line = line.split(";")
    ### TITLE
    if line[0] == "###":
        ### EOF
        if line[1] == "###":
            break;
        else:
            if not_first_line:
                web_file.write("</table><br /><br />")
            else:
                not_first_line = True
            web_file.write("<h3>")
            web_file.write(line[1])
            web_file.write("</h3>")
            web_file.write("<table class='sheetmusic'>")
            for item in header:
                web_file.write("<th>" + item +"</th>")
    ### CONTENT
    else:
        web_file.write("<tr>");
        for i in range(file_index):
            web_file.write("<td>");
            web_file.write(line[i]);
            web_file.write("</td>");
        for i in range(file_index + 1,len(types)):
            web_file.write("<td>");
            if line[i] == "y":
                web_file.write("<a href='" + line[file_index] \
                                   + "." + types[i] + "'><img src='" \
                                   + images[i] + "'></a>")
            web_file.write("</td>");
        web_file.write("</tr>");
web_file.write("</table>")

# COPY REST OF PAGE
for x in range(base_place + 1, len(base_lines)):
    web_file.write(base_lines[x])

data_file.close()
web_file.close()
