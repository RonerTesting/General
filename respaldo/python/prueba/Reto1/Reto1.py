def CDT(usuario,capital,tiempo):
    porcentaje=0.03
    if tiempo<=2:
        porcentaje=0.02
        valorPerder = capital*porcentaje
        valorTotal = capital-valorPerder
        output="Para el usuario {} La cantidad de dinero a recibir, según el monto inicial {} para un tiempo de {} meses es: {}"
        return output.format(usuario,capital,tiempo,valorTotal)
    else:
        valorInteres = (capital*porcentaje*tiempo)/12
        valorTotal= valorInteres+capital
        output="Para el usuario {} La cantidad de dinero a recibir, según el monto inicial {} para un tiempo de {} meses es: {}"
        return output.format(usuario,capital,tiempo,valorTotal)

print(CDT('AB1012',1000000,3))
print(CDT('ER3366',650000,2))