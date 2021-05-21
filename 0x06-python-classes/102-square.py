#!/usr/bin/python3
"""Creates a class named Square"""


class Square:
    """A class named Square \n
    Attributes:
    size (int): size of square
    """

    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
        self.__size = size

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError('size must be an integer')
        if value < 0:
            raise ValueError('size must be >= 0')
        self.__size = value

    def area(self):
        """Return the current area of the square."""
        return self.__size * self.__size

    def __eq__(self, sq):
        return self.area() == sq.area()

    def __ne__(self, sq):
        return self.area() != sq.area()

    def __lt__(self, sq):
        return self.area() < sq.area()

    def __le__(self, sq):
        return self.area() <= sq.area()

    def __gt__(self, sq):
        return self.area() > sq.area()

    def __ge__(self, sq):
        return self.area() >= sq.area()
