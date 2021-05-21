#!/usr/bin/python3
from sys import argv

if __name__ == "__main__":
    al = len(argv) - 1
    if al == 0:
        print("0 arguments.")
    elif al == 1:
        print("1 argument:")
    else:
        print("{} arguments:".format(al))

    for i in range(1, len(argv)):
        print("{}: {}".format(i, argv[i]))
