#!/usr/bin/python
# -*- coding: utf-8 -*-
def CDT(nombreUsuario,cantidad,tiempo):
    if tiempo<=2:
        valorAPerder=cantidad*0.02
        valorTotal=cantidad-valorAPerder
        return f'Para el usuario {nombreUsuario} La cantidad de dinero a recibir,según el monto inicial {cantidad} para un tiempo de {tiempo} meses es: {valorTotal}'
    else:
        valor_interes = (cantidad*0.03*tiempo)/12
        valorTotal=valor_interes+cantidad
        return f'Para el usuario {nombreUsuario} La cantidad de dinero a recibir,según el monto inicial {cantidad} para un tiempo de {tiempo} meses es: {valorTotal}'
print(CDT("AB1012",1000000,3))
# resultado_ejemplo = "Para el usuario {} La cantidad de dinero a recibir, según el monto inicial {} para un tiempo de {} meses es: {}"
# print( resultado_ejemplo.format("Juanito",12000,5,15*1.2) )
