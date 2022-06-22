from time import gmtime, strftime
import time

tiempo= strftime("%p",gmtime())
hora =  int(strftime("%I",gmtime()))
hora_salida = 7
if hora > hora_salida and tiempo=="PM":
    print(f"son las {hora} {tiempo}")
else:
    tiempo_restante = hora-hora_salida
print("{} {}".format(hora,tiempo))
# print(strftime("%H:%M:%S", gmtime()))

# print(time.strptime("30 Nov 00", "%d %b %y")   )