list_name = ['a', 'b', 'c']

print(list_name)

num = 5
if num < 10:
    print("Your number is small!")
trolls = ["Michael", 'trolls', 'Matt']

for troll in trolls:
    print(troll)

if num < 10:
    print('small num')
elif num == 100:
    print('100')

nums = [1, 2, 3, 4, 5]
double_nums = []
for num in nums:
    double_nums.append(2 * num)

print("DONE", double_nums)

# list comprehension examples
# can be used to replaced map, filter, reduce
names = ['Steve', 'Matt', 'Kristen', 'Zack', 'Jason', 'Mary']
shouts = [name.upper() for name in names]

print('upper', shouts)

s = "here is a string take a look at this!"
freq_count = {char: s.count(char) for char in s}

nums = [1, 2, 3, 4, 12, 18, 100, 5]
small_nums = [10 + num for num in nums if num < 10]
double_nums = [2 * num for num in nums]
print(double_nums, small_nums)

# writing functions


def add(x, y):
    return x + y


print(add(1, 2))
