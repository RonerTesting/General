def ordernarPaises(paises):
    paisesOrdenados = paises.split(',')
    listaPaises = sorted(set(paisesOrdenados))
    return (",".join(listaPaises))
    
def main():
    paises = input("Introduca los paises que tenga en mente\n")
    paises_ordenados = ordernarPaises(paises)
    print(paises_ordenados)

if __name__=='__main__':
    main()
    pass