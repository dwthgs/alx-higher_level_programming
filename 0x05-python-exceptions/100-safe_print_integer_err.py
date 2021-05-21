#!/usr/bin/python3
from sys import stderr, exc_info


def safe_print_integer_err(value):
    try:
        print("{:d}".format(value))
        return True
    except:
        stderr.write("Exception: %s\n" % exc_info()[1])
        return False
