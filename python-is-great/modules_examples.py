# import entire namespace
# import random
# print(random.randint(1, 10))

# this only import the randint module rather than ALL of random
from random import randint

#print(randint(1, 10))

#################
# # import namespace
# import random
# # import a single module from namespace
# from random import randint
# # import a module and rename it (alias)
# from random import randint as taco


def favorite_number():
    print(f'My favorite number is {randint(1,200)}')


favorite_number()