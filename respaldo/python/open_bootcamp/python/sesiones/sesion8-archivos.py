f = open('/etc/passwd','r')
# datos = f.read(18)
datos = f.readlines()
print(datos)
f.close()
print(datos)

# r: lectura
# a: append
# w: escritura
# x: create

# t: texto
# b: binary

# +:

#Comunes 'r' 'w+' 'a+'
