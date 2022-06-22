from abc import abstractclassmethod
class Vehiculo:
    _color=None
    _ruedas=None
    _puertas=None
    def __init__(self):
        self._color="Azul"
        self._ruedas="4"
        self._puertas="4"

    @abstractclassmethod
    def obtenerColor(self):
        return self._color
    @abstractclassmethod
    def obtenerRuedas(self):
        return self._ruedas

class Coche(Vehiculo):
    _velocidad=None
    _cilindada=None
    def __init__(self):
        super().__init__()
        self._cilindada="No tiene"
        self._velocidad="100km"
carro = Coche()
print("Tengo un carro {} con {} ruedas y tiene {} puertas.\nClilndrado:{}\nVelocidad maxima:{}"
.format(carro._color,carro._ruedas,carro._puertas,carro._cilindada,carro._velocidad))
