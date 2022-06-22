"""
import _thread
import time

def horaActual(nombre_thread,tiempo_espera):
    count =0
    while count<5:
        time.sleep(tiempo_espera)
        count +=1
        print(f'hilo: {nombre_thread} - {time.ctime(time.time())}' )

_thread.start_new_thread(horaActual,("thread_uno",1))
_thread.start_new_thread(horaActual,("thread_dos",2))

while True:
    pass
"""

"""
import logging
logging.basicConfig(level=logging.CRITICAL)
logging.info("Arrancando programa")
logging.warning("Hace calor")
logging.error("test")
logging.critical("Hace calor")
"""

"""map
-----------------------------------------------
numeros=[1,2,3,4,5,6,7,8,9,10]

def cuadrado(x):
    return x*x
# resultado=map(cuadrado,numeros)
resultado=map(lambda x:x*x,numeros)

print(list(resultado))
print(list(numeros))
-----------------------------------------------
 filter  filter(funcion,lista)

numeros=[1,2,3,4,5,6,7,8,9,10]

def miFuncion(x):
    if x%2 ==0:
        return True
    return False

resultado = filter(miFuncion,numeros)
print(list(resultado))
print(list(numeros))
-----------------------------------------------
 reduce
from functools import reduce

# reduce(function,lista)

numeros=[1,2,3,4,5,6,7,8,9,10]

def suma(a,b):
    print(f'a={a},b={b}')
    return a+b


res=reduce(suma,numeros)
# res=reduce(lambda a,b:a+b,numeros)
print(res)
print(list(numeros))

 """

"""
zip
cursos =  ['Java','Python','Git']
asistentes = [15,20,4]

demo = zip(cursos,asistentes)
print(list(demo))
"""

"""
all() and and and and
any() or or or or

listA = [1==1,2==2,3==4 ]


res=any(listA)
res = all(listA)
print(res)
res = any(listA)
print(res)

"""

"""
round

a = 4.4

print(round(a))
"""

"""
min()

print(min(5,2,4,3,6,10,22))
"""

"""
lista=['z','a','b','e']
ordenada = sorted(lista)
print(ordenada)
"""

from getpass import getpass

user = input("Username: ")
passwd = getpass("password: ")
print(passwd)
