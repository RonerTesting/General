from functools import reduce


def impares(numeros):
    return int(numeros)%2!=0
def resta(a,b):
    return int(a)-int(b)
def main():
    numeros = input("Introduzca los numeros que tenga en mente separados por ','")
    numerosContenidos = numeros.split(',')
    
    resultadoImpares = list(filter(impares,numerosContenidos))
    sumaImpares = reduce(resta,resultadoImpares)
    print(resultadoImpares)
    print(sumaImpares)
    pass

if __name__=='__main__':
    main()
    pass