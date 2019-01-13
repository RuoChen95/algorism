# -*- coding: utf-8 -*-

a = [7, 6, 5, 4, 3, 2, 1]

min_index = 0

for i in range(0, len(a)-1):

    min_index = i

    for j in range(i, len(a)):

        if a[min_index] > a[j]:

            min_index = j

    print min_index

    a[min_index], a[i] = a[i], a[min_index]

print a
