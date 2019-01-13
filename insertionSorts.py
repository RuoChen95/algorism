#encoding=utf-8

a = [7, 6, 5, 4, 3, 2, 1]

for j in range(1, len(a)):

    for i in range(j, 0, -1):

        if a[i] < a[i-1]:

            a[i], a[i-1] = a[i-1], a[i]

print a

