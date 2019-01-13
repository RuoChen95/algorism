# -*- coding: utf-8 -*-

a = [7, 6, 5, 4, 3, 2, 1]

for j in range(0, len(a)-1):

    for i in range(0, len(a) - 1 - j):

        if a[i] > a[i+1]:

            a[i], a[i+1] = a[i+1], a[i]

print a
