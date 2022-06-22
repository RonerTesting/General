
from functools import reduce

facturas= [ [6587, ("3268", 4, 25842.99), ("8274",18,23254.99), ("6548", 9, 48951.95), ("2547", 5, 8951.95)],
                   [6588, ("1254", 3, 115362.58), ("9744", 2, 99235.66)],
]
def ordenes(rutinaContable):
    result = list(map(lambda factura:list(map( lambda element:reduce(lambda x1,x2:x1*x2 ,element[1:]) if type(element) is  tuple else element ,factura )) , rutinaContable))
    result = list(map(lambda item: [item[0],reduce(lambda x,y:x+y,item[1:])],result))
    result = list(map(lambda item: [item[0], item[1] if item[1]>=6e5 else item[1]+25e3],result))
    print('------------------------ Inicio Registro diario ---------------------------------')
    for idCompra,Total in result:
        print(f'La factura {idCompra} tiene un total en pesos de {Total:,.2f}')
    print('-------------------------- Fin Registro diario ----------------------------------')


ordenes(facturas)
# def my_value(number):
#     return ("{:,}".format(number))
f'{1000000:_.2f}'