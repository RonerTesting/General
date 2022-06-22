numero = 5
texto =  "qujote"
otromas = 1.2

"""Forma anterior"""
# print("El numero es %d y el texto %s y tiene %.2f" %(numero,texto,otromas))
# print("valor flotante: %.2f" %(otromas))

"""Forma un poco mas actual. 
Dentro de las llaves se puede colocar el orden de los parametros como array
desde la verison 2.7 hasta la 3.6
"""
# print("El numero es {} y el texto {} y tiene {}".format(numero,texto,otromas))
# print("El numero es {n1} y el texto {n2} y tiene {n3}".format(n1=numero,n2=texto,n3=otromas))
""" f'' desde la 3.6 en adelante.
Se utiliza codigo python denstro de las llaves
 """
print(f'El numero es {numero} y el texto {texto} y tiene {otromas}')


cadena = "en un lugar de la mancha"
print(cadena.capitalize())
print(cadena.title())
print(cadena.count('a'))
print(cadena.upper())
print(cadena.lower())

numero = '5'
print(numero.isdigit())
print(numero.isalpha())
print(numero.isalnum())
cadena2 = "      en un lugar de la mancha      "
print(cadena2)
print(cadena2.strip())
print(cadena2.strip())

# from pprint import pprint
# pprint(dir(''))

