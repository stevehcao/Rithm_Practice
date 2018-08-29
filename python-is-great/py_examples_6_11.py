# world = 'whiskey'
# dog = 'dog'
# # print('hello {world}, you {dog}'.format(world=world, dog=dog))

# print(f"hello {world}, you {dog}")


#  args and kwargs
def say_hello(*names):
    print(names)


say_hello('matt', 'elie', 'joel')


def say_helloes(name, *names):
    # will just have first name
    # *names will slice the rest of the parameters
    print(name)
    print(names)


# keyword args MUST come at the end of positional arguments see example below
# kwargs will come in as a key word dictionary
def taco(first, second, tortilla=None):
    print(first)
    print(second)
    print(tortilla)


taco('cheese', 'steak', tortilla='tortilla')


# 22/ 24 prob on replit
# HoF
# first class function
def pass_them_down(fn):
    def inner(*args, **kwargs):
        return fn(*args, **kwargs)

    return inner


def add(a, b):
    return a + b


first_call = pass_them_down(add)
print(type(first_call))
result = first_call(5, 10)
print(result)


# orrect ordering
def certain_order(first, *args, second, **kwargs):
    print(f'first is {first}')
    print(f'args is {args}')
    print(f'second is {second}')
    print(f'kwargs is {kwargs}')


certain_order(
    'goat', 'book', 'weasle', second='second', third='third', fourth='fourth')


# you can pass keyword arguments to anything
def test(a, b):
    print(f'a is {a}')
    print(f'b is {b}')


test('foo', 'bar')
test(a='foo2', b='bar2')
test(b='bar3', a='foo3')