from getpass import getpass
import sqlite3

def main():
    crear_usuario(9,"octavio","randomclave")
def main2():
    username=input("Nombre de usuario:")
    password=getpass("Contraseña:")

    if verifica_credenciales(username,password):
        print("login correcto")
    else:
        print("login incorrecto")
    pass
def verifica_credenciales(username,password):
    conn = sqlite3.connect("miaplicacion.sqlite")
    cursor=conn.cursor()

    query=f'SELECT id FROM users WHERE username = "{username}" AND password = "{password}"'
    print(query)
    rows=cursor.execute(query)
    data=rows.fetchone()

    cursor.close()
    conn.close()
    if data == None:
        return False
    return True
def crear_usuario (id,usuario,clave):

    conn = sqlite3.connect("miaplicacion.sqlite",isolation_level=None)
    cursor=conn.cursor()

    query=f"""INSERT INTO users(id,username,password) VALUES(?,?,?)"""
    print(query)
    rows=cursor.execute(query,(id,usuario,clave))
    print(type(rows))

    # conn.commit()
    cursor.close()
    conn.close()


# conn = sqlite3.connect('miaplicacion.sqlite')

# cursor = conn.cursor()

# rows = cursor.execute('SELECT * FROM users where username="roner"')
# for row in rows:
#     print(row)
# cursor.close()
# conn.close()


if __name__=='__main__':
    main()

