def counter():
    count = 0

    def inner():
        nonlocal count
        count += 1
        print(count)
        return count

    return inner


num_count = counter()
num_count()
num_count()


def closure_counter():
    count = 0

    def inner():
        nonlocal count
        count += 1
        print(count)
        return count

    return inner


my_counter = closure_counter()

my_counter()
my_counter()
my_counter()

count = 0


def increment_global_var():
    global count
    count += 1
    print(count)
    return count


increment_global_var()