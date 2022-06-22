

class Juguete:
    _encendido = True
    def apagar(self):
        self._encendido=False
    def enciende(self):
        self._encendido=True
    def isEncendido(self):
        return self._encendido

d =  Juguete()
# print(d._encendido)


#no se instancia
class Estatica:
    numero = 1
    def incremente():
        Estatica.numero+=1

Estatica.incremente()
# print(Estatica.numero)


class Potato(Juguete):
    def __init__(self,nombre):
        print("estoy en el contructor",nombre)

    #el destructor se  ejecuta cuando ya no se utiliza mas la referencia de un objeto 
    def __del__(self):
        print("Estoy en el descturcotr de la clase", self.__class__)

    def quitarOreja(self):
        pass

potato = Potato("Juan");
print(potato.isEncendido())


