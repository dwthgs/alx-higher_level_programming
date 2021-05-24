#!/usr/bin/python3
from sys import stderr, exc_info


def safe_function(fct, *args):
    try:
        return fct(*args)
    except:
        stderr.write("Exception: %s\n" % exc_info()[1])
        return None
