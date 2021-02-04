time = input()
s= ""
if time[0]=="?":
    if time[1]!="?":
        if time[1]>=4:
            s+="1"
        else:
            s+="2"
    else:
        s+="2"
else:
    s+=time[0]


if time[1]=="?":
    if s[0]=="2":
        s+="3"
    else:
        s+="9"
else:
    s+=time[1]
s+=":"
if time[3]=="?":
    s+="5"
else:
    s+=time[3]
if time[4]=="?":
    s+="9"
else:
    s+=time[4]
print(s)

    