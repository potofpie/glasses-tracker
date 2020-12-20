import re
with open('data.txt','r') as f:
    output = f.read()
    for entry in range(0,20):
        print(re.split('R[0-9]+:', output)[entry])