import math
def areaTriangulo(base,altura):
    area=(base*altura)/2
    return area
def areaCirculo(radio):
    area=(radio**2)*math.pi
    return area

print("El area del triangulo es:",areaTriangulo(2,2))
print("El area del circulo es:",areaCirculo(5))