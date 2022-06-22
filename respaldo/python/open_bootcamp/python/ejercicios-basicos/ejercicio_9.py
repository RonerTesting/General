def bisiesto(ano):
    if ano%4==0:
        if ano%100!=0:
            return True
        elif ano%400==0:
            return True
        else:
            return False
    else:
        return False

ano = 1992
if bisiesto(ano):
    print("El año {} es bisiesto".format(1900))
else:
    print("El año {} no es bisiesto".format(1900))
