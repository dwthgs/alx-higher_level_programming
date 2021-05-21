#!/usr/bin/python3
def roman_to_int(roman_string):
    roman = roman_string
    if isinstance(roman, str) and roman:
        RN = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        Int = 0
        for i, c in enumerate(roman):
            if (i + 1) == len(roman) or RN[c] >= RN[roman[i + 1]]:
                Int += RN[c]
            else:
                Int -= RN[c]
        return Int
    return 0
