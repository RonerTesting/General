try:
    numero_inicial = int(input("Ingrese el numero de inicio\n"))
    numero_final = int(input("Ingrese el numero final\n"))
    result=[]
    for numero in range(numero_inicial,numero_final):
        if numero%2!=0:
            result.append(numero)
    print(result)
except:
    print("¡Los 2 numeros de entrada deben ser enteros!")