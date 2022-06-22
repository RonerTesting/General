#ciclos
contador = 0
# while contador<10:
#     print(contador)
#     contador+=1
    
# lista = [1,2,3,4,5]
# print(len(lista))

# for valorActual in lista:
#     print(valorActual)

# range returna una lista de valores 
# range(4,10) del 4 al 9 
# range(4) del 0 al 4

# xd = range(4)
# print(xd)

lista2 = ["hola","mensaje","adios"]

# for palabra in lista2:
#     if palabra == "mensaje":
#         print("conseguimos el valor")
#         break

if "mensaje" in lista2:
    print("Conseguimos el mensaje ") 
if "mensaje" not in lista2:
    print("Conseguimos el mensaje ") 

lista3 = [3,4,1,2,5]
print(lista3)

listaOrdenada = sorted(lista3)
listaOrdenada = sorted(lista3,reverse=True)
print(listaOrdenada)

lista4 = ['A','a','p','P','z','Z']

listaOrdenada = sorted(lista4)
print(listaOrdenada)

valor = 4 

match valor:
    case 1:
        print("valor es 1")

    case 2:
        print("valor es 2")

    case 3:
        print("valor es 3")

    case 4:
        print("valor es 4")
