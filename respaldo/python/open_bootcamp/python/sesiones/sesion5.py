#kwargs  = disccionario/json
#args = tupla 
def xd(**kwargs):
    print(kwargs)

    #iterar en json/diccionario
    for key,value in kwargs.items():
        print(key, "=",value)

def operaciones (a,b):
    return a+b, a-b,a*b,a/b


def sumador(**kwargs):
    inicial = kwargs ['inicial'] if 'inicial' in kwargs else 0
    final = kwargs ['final'] if 'final' in kwargs else inicial

    resultado = 0
    for x in range(inicial,final+1):
        resultado +=x

    return resultado

#trae todas las operaciones  
suma,resta,multi,divi = operaciones(2,2)
#trae una tupla
resultado = operaciones(2,2)

# xd (saludo="hola",usuario="ivana")


#lambda

anonima = lambda nombre : print("hola",nombre)

anonima("roner")
