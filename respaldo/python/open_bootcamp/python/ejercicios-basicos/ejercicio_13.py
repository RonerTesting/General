"""
En este segundo ejercicio, tendréis que crear un archivo py y dentro crearéis una clase Vehículo,
haréis un objeto de ella, lo guardaréis en un archivo y luego lo cargamos.
"""
# from copyreg import pickle
import pickle


class Vehiculo:
    def __init__(self):
        self._ruedas=0
        self._puertas=0
    def __str__(self):
        return "El vehiculo con tiene {} puertas y {} ruedas".format(self._puertas,self._ruedas)
    def cambiarRuedas(self,ruedas):
        self._ruedas=ruedas
    def cambiarPuertas(self,puertas):
        self._puertas=puertas

bicicleta = Vehiculo()
bicicleta.cambiarPuertas(0)
bicicleta.cambiarRuedas(2)

f=open('vehiculo.bin','wb')
pickle.dump(bicicleta,f)
f.close()

f=open('vehiculo.bin','rb')
bicicleta2 = pickle.load(f)
print(bicicleta2.__str__())


