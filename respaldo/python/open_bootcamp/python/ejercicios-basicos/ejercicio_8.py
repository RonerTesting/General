def esPrimo(numero):
    cont=0
    for x in range(numero):
        if x==0:
            continue
        elif numero%x==0:
            cont+=1
        else:
            break
    return True if cont==1 else False

if esPrimo(15):
    print("El numero es primo")
else:
    print("El numero no es primo")
