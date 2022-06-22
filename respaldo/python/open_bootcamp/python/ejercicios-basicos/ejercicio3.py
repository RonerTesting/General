"""
    Escribe un programa en la consola de python que pida al usuario su peso (en kg) y estatura (en metros), 
    calcule el indice de masa corporal y lo almacene en una variable, e imprima por pantalla la frase 
    Tu indice de masa corporal es donde es el indice de masa corporal calculado redondeado con dos decimales. 
    Tienes que subir capturas de pantalla en una carpeta comprimida zip.
"""

obtenerPeso = input("Ingrese su peso\n")
obtenerEstatura = input("Ingrese su estatura\n")
IMC = float(obtenerPeso)/(float(obtenerEstatura)**2)
print("Tu indice de masa corporal es donde es el indice de masa corporal calculado redondeado con dos decimales {}".format(IMC))
# obtenerEstatura = input("Ingrese su estatura")

