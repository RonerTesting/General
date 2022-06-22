def main():
    usuarios = listarUsuarios()
    print(usuarios)
def listarUsuarios():
    f = open('/etc/passwd','r')
    datos = f.readlines()
    f.close()

    for linea in datos:
        if(linea[0]=="#"):
            continue
        if linea[0] =="_":
            continue
        print(linea)
            

if __name__ == '__main__':
    main()