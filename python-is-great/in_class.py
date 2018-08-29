def correct_arg_order(a, b, *args, kw, **kwargs):
    """
    Call the function with:
        1. Positional arguments first
        2. *args (the rest of the positional arguments in this tuple)
        3. Keyword arguments
        4. **kwargs (the rest of the KW arguments in this dict)
    """
    print(f'a is {a}')
    print(f'b is {b}')
    print(f'args are {args}')

    print(f'kw is {kw}')
    print(f'kwargs are {kwargs}')


# call this function properly here!
correct_arg_order(
    'cat',
    'dog',
    'fries',
    'hot dog',
    'food',
    kw='foobar',
    high='five',
    runner='distance')


def taco(*toppings, stuff, tortilla, **kwargs):
    """
    Toppings must be passed first, positionally.
    stuff and tortilla and everything else must be passed with keywords
    """
    print(f'toppings are {toppings}')
    print(f'stuffing is {stuff}')
    print(f'tortilla is {tortilla}')


# call this function properly here!
taco(
    'fire',
    'cheese',
    stuff='stuff',
    tortilla='cruch',
    fun='times',
    water='bottle')


def subtract(a, b):
    """
    This can be called using either positional or keyword args.
    """
    print(f'Subtracting b={b} from a={a} gets us {b - a}')


# call this function SIX different ways
subtract(10, 5)
subtract(a=10, b=5)
subtract(*[10, 5])
subtract(**{"a": 10, "b": 5})
subtract(**{"b": 5, "a": 10})
subtract(*(10, 5))
subtract(b=5, a=10)
subtract(10, b=5)


def divide(a=10, b=1):
    """
    This can be called with no args, with 1 positional arg, with 2 positional args,
    or with two keyword args
    """
    print(f'Dividing a={a} by b={b} gets us {a // b}')


# call this function TEN different ways
divide(10, 5)
divide(a=10, b=5)
divide(*[10, 5])
divide(**{"a": 10, "b": 5})
divide(**{"b": 5, "a": 10})
divide(*(10, 5))
divide(b=5, a=10)
divide(10, b=5)
divide()
divide(a=100)
divide(b=2)
divide(1000)
divide(**{"b": 5})
divide(**{"a": 10})