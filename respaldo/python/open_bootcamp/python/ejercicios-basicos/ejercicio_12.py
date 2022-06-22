"""
En este ejercicio, tendréis que crear un archivo py donde creéis un archivo txt, lo abráis y escribáis dentro del archivo. 
Para ello, tendréis que acceder dos veces al archivo creado.
"""

class GestorArchivos:
    def __init__(self,filename="archivoDeTexto"):
        self._filename="ficheros/{}.txt".format(filename)
        self._content="\n"
        self._f=open(self._filename,'a')
        self._f.write(self._content)
        self.cerrarArchivo()

    def agregarTexto(self,text):
        self._f=open(self._filename,'a')
        self._f.write(text)
        self.cerrarArchivo()

    def cerrarArchivo(self):
        self._f.close()

archivo= GestorArchivos()
archivo.agregarTexto("Nuevo texto")
# r: lectura
# a: append
# w: escritura
# x: create

# t: texto
# b: binary

# +:

#Comunes 'r' 'w+' 'a+'
