
# str <- input()

# int
# float

# bool
# tuple
# list




def ValidacionDeNumeros():
  while True:
    valor = input('Deme un numero\n')
    if valor.isalpha():
      print('Ocupo numeros no palabras!!!')
    else:
      print('Todo bien. Pase que ya tengo los numeros')
      valorEnEntero = int(valor)
      return valorEnEntero
    

# print(type(mensaje))
# print(type(ValidacionDeNumeros()))
valor1 = ValidacionDeNumeros()
valor2 = ValidacionDeNumeros()
resultado = valor1 * valor2
print(resultado)

# print(len(mensaje))
# print(type(mensaje))

# print(mensaje.replace('hola','adios'))

# for letra in mensaje:
#   print(letra)
