
try:
    edad = int(input("ingresa tu edad\n"))
    if edad >=18:
        print("Hejejejeyyyyyyy Ya son {}!!! ya no eres tan joven amigo mio! Mayor de edad a donde vaya".format(edad))
    else:
        print("Aun te falta para la mayoria de edad. Con calma apenas tienes {} años de edad".format(edad))
except:
    print("Introduca valores enteros")

