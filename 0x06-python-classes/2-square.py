#!/usr/bin/python3
"""Creates a class named Square"""


class Square:
    """A class named Square \n
    Attributes:
    size: size of square
    """

    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
        self.__size = size
