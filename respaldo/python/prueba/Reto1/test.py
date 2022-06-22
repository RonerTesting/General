#!/usr/bin/python
# -*- coding: utf-8 -*-
def CDT(usuario,cantidad,tiempo):
    if tiempo <=2:
        valorPerder=cantidad*0.02
        valorTotal=cantidad-valorPerder
        return "Para el usuario {} La cantidad de dinero a recibir, según el monto inicial {} para un tiempo de {} meses es: {}".format(usuario,cantidad,tiempo,valorTotal)
    else:
        valorInteres = (cantidad*0.03*tiempo)/12
        valorTotal= valorInteres+cantidad
        return "Para el usuario {} La cantidad de dinero a recibir, según el monto inicial {} para un tiempo de {} meses es: {}".format(usuario,cantidad,tiempo,valorTotal)

print(CDT("AB1012",1000000,3))
print(CDT("ER3366",650000,2))
# resultado =
# print(resultado)