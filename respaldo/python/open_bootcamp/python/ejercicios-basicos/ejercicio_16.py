"""
En este ejercicio tendréis que crear una tabla llamada Alumnos que constará de tres columnas: la columna id de tipo entero, 
la columna nombre que será de tipo texto y la columna apellido que también será de tipo texto.
Una vez creada la tabla, tenéis que insertarle datos, como mínimo tenéis que insertar 8 alumnos a la tabla.
Por último, tienes que realizar una búsqueda de un alumno por nombre y mostrar los datos por consola.
"""
from pprint import pprint
from faker import Faker
import sqlite3
from os import system as _
class DB:
    def __init__(self):
        self._name_database = "colegio.sqlite"
        self._=_
        self._(f'touch {self._name_database}')
        self._create()
    def _create(self):
        conn = sqlite3.connect(self._name_database,isolation_level=None)
        cursor = conn.cursor()
        try:
            xd = cursor.execute("select * from Alumnos")
            # print(list(xd))
            if list(xd)==[]:
                return 0
        except:
            query = f"""CREATE TABLE Alumnos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre text,
                apellido text
                );"""
            rows=cursor.execute(query)
            # print(rows)
        cursor.close()
        conn.close()
    def crear_usuario (self,nombre,apellido):
        conn = sqlite3.connect(self._name_database,isolation_level=None)
        cursor=conn.cursor()
        query=f"""INSERT INTO Alumnos(nombre,apellido) VALUES(?,?)"""
        rows=cursor.execute(query,(nombre,apellido))
        # print(list(rows))
        cursor.close()
        conn.close()
    def listarAlumnos(self):
        conn = sqlite3.connect(self._name_database,isolation_level=None)
        cursor=conn.cursor()
        rows=cursor.execute("select * from Alumnos")
        _("clear")

        for key in list(rows):
            print(f'Alumno #{key[0]}:\t{key[2]} {key[1]} ')
        cursor.close()
        conn.close()
    def buscarAlumno(self,nombre):
        conn = sqlite3.connect(self._name_database,isolation_level=None)
        cursor=conn.cursor()
        rows=cursor.execute(f'select * from Alumnos where nombre="{nombre}"')
        _("clear")

        for key in list(rows):
            print(key)
        cursor.close()
        conn.close()
        pass
def main():
    db= DB()
    faker=Faker()
    for i in range(8):
        db.crear_usuario(faker.first_name(),faker.last_name())
    while True:
        menu = """
        1) Mostrar todos los alumnos
        2) Buscar alumnos por nombre
        3) Cargar 8 alumnos mas por sistema
        """
        print(menu)
        opcion = input("\tSeleccione una opcion: ")
        if opcion=="1":
            db.listarAlumnos()
        elif opcion=="2":
            alumno=input("Ingrese solo el nombre del alumno: ")
            db.buscarAlumno(alumno)
        elif opcion=="3":
            for i in range(8):
                db.crear_usuario(faker.first_name(),faker.last_name())
            _("clear")
            print("Alumnos creados satisfactoriamente.\n")
            pass
if __name__ == '__main__':
    main()
