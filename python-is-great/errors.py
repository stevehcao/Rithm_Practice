def get_first_element(my_list):
    try:
        from IPython import embed
        embed()
        return my_list[0]
    except IndexError as e:
        return e


print(get_first_element([]))
print(get_first_element([1, 2, 3]))
print(get_first_element([4, 5, 6]))
