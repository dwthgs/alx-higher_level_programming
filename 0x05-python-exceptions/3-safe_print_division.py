#!/usr/bin/python3
def safe_print_division(a, b):
    n = 0
    try:
        n = a / b
    except:
        n = None
    finally:
        print("Inside result: {}".format(n))
    return n
