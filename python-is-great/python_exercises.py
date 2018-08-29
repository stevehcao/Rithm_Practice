def single_letter_count(string, char):
    return (string.lower().count(char))
    pass


single_letter_count("HelLo World", "l")  # 3

# Write a function called multiple_letter_count. This function takes in one parameter
# (a string) and returns a dictionary with the keys being the letters and the values
# being the count of the letter.

# to write optional parameter in python you will define it in the parameter when writing
# the function
list_nums = [1, 2, 3]


def list_manipulation(li, command, location, value=None):
    if (command == "remove" and location == "end"):
        return li.pop()
    elif (command == "remove" and location == "beginning"):
        return li.pop(0)
    elif (command == "add" and location == "beginning"):
        li.insert(0, value)
        return li
    elif (command == "add" and location == "end"):
        li.append(value)
        return li


# l = [1, 2, 3]
list_manipulation(list_nums, "remove", "end")

# 3)
# l # [1, 2]
# list_manipulation(l, "remove", "beginning") # 1
# l # [2]
# list_manipulation(l, "add", "beginning", 20) # [20, 2]
# list_manipulation(l, "add", "end", 30) # [20, 2, 30]


def frequency(li, target):
    print(li.count(target))
    return li.count(target)


frequency([1, 2, 3, 4, 4, 4], 4)  # 3


def sum_even_values(*args):
    # * in the parameter allows you to have variable arguments
    # total = 0
    print(sum([num for num in args if num % 2 == 0]))
    pass


sum_even_values(1, 2, 3, 4, 5, 6)  # 12


def triple_and_filter(li):
    # combine list comprehension and doing something with the filtered
    return [num * 3 for num in li if num % 4 == 0]
    pass


triple_and_filter([1, 2, 3, 4])  # [12]
triple_and_filter([6, 8, 10, 12])  # [24, 36]


def mode(collection):
    # you can import mode from statistics to cheat
    # you can import Counter from collections to make this easier

    # or we can just solve it :)
    count = {val: collection.count(val) for val in collection}
    # find the highest value (the most frequent number)
    max_value = max(count.values())
    # now we need to see at which index the highest value is at
    correct_index = list(count.values()).index(max_value)
    # finally, return the correct key for the correct index (we have to convert cou)
    return list(count.keys())[correct_index]


def multiply_even_numbers(list):
    # you can import reduce from the functools module if you would like
    total = 1
    for val in list:
        if val % 2 == 0:
            total = total * val
    return total


def extract_full_name(list):
    # data structure is a list full of dictionaries
    # li[0] = {}
    # extract values and put in list
    print([dict.get('first') + ' ' + dict.get('last') for dict in list])
    pass


names = [{
    'first': 'Elie',
    'last': 'Schoppik'
}, {
    'first': 'Colt',
    'last': 'Steele'
}]

extract_full_name(names)  # ['Elie Schoppik', 'Colt Steele']


def list_check(li):
    # iterate through list
    # check type for each el
    # return true if ALL are list
    # return false if it is not
    not_list_list = [val for val in li if type(val) != list]
    if len(not_list_list) > 0:
        return False
    else:
        return True


# model solution!!!
# def list_check(vals):
#     return all(type(l) == list for l in vals)

list_check([[], [1], [2, 3], (1, 2)])  # False


def sum_pairs(li, target):
    # iterate through li twice? check if there are values that == target
    for idx, num in enumerate(li):
        for idx2, num2 in enumerate(li, 1):
            if num + num2 == target:
                print([num, num2])
    pass


# sum_pairs([4, 2, 10, 5, 1], 6)  # [4, 2]
# [4, 2] comes before [5, 1]
sum_pairs([5, 1, 4, 8, 3, 2], 7)  # [4, 3]

# [4, 3] completes before [5, 2]


def vowel_count(string):
    lower_s = string.lower()
    return {
        letter: lower_s.count(letter)
        for letter in string if letter in "aeiou"
    }


vowel_count('awesome')  # {'a': 1, 'e': 2, 'o': 1}


def find_factors(target):
    # break num into range?
    # iterate through range
    # keep if it is a factor of num
    return [num for num in range(1, target + 1) if target % num == 0]
    pass


find_factors(10)  # [1, 2, 5, 10]

# def includes(collection, val, idx=0):
#     print(collection.index(val))
#     # print(collection, val)
#     if type(collection) is str:
#         if collection.find(val, idx) > -1:
#             return True
#         else:
#             return False
#     elif type(collection) is list:
#         if collection.index(val) > -1 and collection.index(val) > idx:
#             print(True)
#         else:
#             print(False)
#     elif type(collection) is dict:
#         if (val in collection.values()):
#             return True
#         else:
#             return False
#     pass

#  model code


def includes(item, val, start=None):
    if type(item) == dict:
        return val in item.values()
    if start is None:
        return val in item
    return val in item[start:]


includes([1, 2, 3], 1)  # True


def truncate(string, num):
    # compare num, must be more than 3
    # truncate at a num -3 and then add '...'
    if num < 3:
        return "Truncation must be at least 3 characters."
    print(string[:num - 3] + '...')
    pass


truncate("Problem solving is the best!", 10)  # "Problem..."


def two_list_dictionary(keys, vals):
    # use dictionary comprehension?
    # zip does not work T_T
    # return (dict(zip(keys,vals)))
    # smaller_keys = keys[:len(vals)]
    print(dict(zip(keys, vals)))
    pass


li1 = ['a', 'b', 'c', 'd']
li2 = [1, 2, 3]

two_list_dictionary(li1, li2)


def range_in_list(li, start=0, end=None):
    # make range indices and then sum
    # use enumerate
    if end is None:
        end = li[len(li) - 1]
    print([num for idx, num in enumerate(li) if idx >= start and idx <= end])


# range_in_list([1, 2, 3, 4], 0, 2)  # 6
range_in_list([1, 2, 3, 4], 1)  # 9


def same_frequency(num1, num2):
    # make nums into string
    # check length of num1 and num2
    li1 = list(str(num1))
    li2 = list(str(num2))
    # sort
    li1.sort()
    li2.sort()
    print(li1)
    print(li2)
    if len(li1) != len(li2):
        print(False)
    # iterate and check every value against diff li
    for idx1, num in enumerate(li1):
        for idx2, numz in enumerate(li2):
            if li1[idx1] != li2[idx1]:
                return False
    return True
    pass


# model solution
# def same_frequency(num1, num2):
#     d1 = {letter: str(num1).count(letter) for letter in str(num1)}
#     d2 = {letter: str(num2).count(letter) for letter in str(num2)}

#     for key, val in d1.items():
#         if not key in d2.keys() or d2[key] != val:
#             return False
#     return True

# same_frequency(321142, 3212215)  # False
same_frequency(551122, 221515)  # True


def sum_up_diagonals(li):
    dia1 = 0
    dia2 = 0
    for idx1, num1 in enumerate(li):
        for idx2, num2 in enumerate(li):
            if (idx1 == idx2):
                dia1 = dia1 + li[idx1][idx2]
            if (idx1 + idx2 == len(li) - 1):
                dia2 = dia2 + li[idx1][idx2]
    print(dia1 + dia2)
    pass


list2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
list3 = [[4, 1, 0], [-1, -1, 0], [0, 0, 9]]
sum_up_diagonals(list3)  # 11

# sum_up_diagonals(list2)  # 30


def find_greater_numbers(li):
    # counter
    count = 0
    # iterate through list
    for i in range(len(li)):
        for j in range(len(li)):
            if li[i] < li[j] and i <= j:
                count += 1

    # check if next num is higher than current
    print(count)
    pass


find_greater_numbers([6, 1, 2, 7])  # 4


# def two_oldest_ages(li):
#     # max
#     # then remove
#     # max again
#     first = max(li)
#     li.remove(first)
#     second = max(li)
#     return [second, first]
#     pass
# model
def two_oldest_ages(ages):
    return sorted(ages)[-2:]


two_oldest_ages([1, 2, 10, 8])  # [8, 10]


def is_odd_string(string):
    # sum
    total = 0
    # dict of values
    values = {chr(i): i - 96 for i in range(ord('a'), ord('a') + 26)}
    print(values['b'])
    # iterate through string with index
    for key in string:
        total = total + values[key]

    print(total)
    if total % 2 == 0:
        print(False)
    print(True)
    pass


is_odd_string('veryfun')  # True
# is_odd_string('veryfunny')  # False
