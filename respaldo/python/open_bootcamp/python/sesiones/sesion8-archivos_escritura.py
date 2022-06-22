import pickle
# f = open('ficheros/mifichero.txt','a')
# f.write("datos\n")
# f.write("datos2\n")
# f.close()

"""
lista=[
    'una linea',
    'dos lineas',
    'tres lineas'
]
def escribe(fichero,datos):
    f = open(fichero,'a')
    for linea in datos:
        if not linea.endswith('/n'):
            linea+='\n'
        f.write(linea)
    pass

escribe('ficheros/mifichero.txt',lista)
"""
class Juguete:
    nombre=""
    precio=0.0

    def __init__(self,nombre,precio):
        self.nombre=nombre
        self.precio=precio
    def getNombre(self):
        return self.nombre
"""Serializando datos de un objeto y escribiendolos en un archivo"""
# j1 = Juguete("potato",10.5)
# f = open('ficheros/fichero.bin','wb')
# pickle.dump(j1,f)
# f.close()

"""Leyendo los datos serializados guardados"""
f = open("ficheros/fichero.bin",'rb')
potato = pickle.load(f)
f.close()

print(type(potato))


print(potato.getNombre(),"precio: ",potato.precio)


