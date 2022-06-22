import pprint
Nombre="John"
Apellidos="Dot Doe"
edad=25
email="johndoe@example.com"
telefono="04242431212"
casado=False
conHijos=False
amigos=["Juan","Pedro","Bruce","Mia"]
peliculasVistas={
    "lista":["Rapidos y furiosos 1","Rapidos y furiosos 2","Rapidos y furiosos 3","Rapidos y furiosos 5","Rapidos y furiosos 7"]
}
print(
"""Hola soy {} {}
Tengo {} de edad mi email es {} y mi numero telefonico {} y actualmente {} y {}, 
{} son mis mejores amigos de toda la vida,
estas son mis peliculas favoritas: {}""".
format(Nombre,
Apellidos,
edad,
email,
telefono,
"estoy casado" if casado else "No estoy casado",
"tengo hijos" if conHijos else "no tengo hijos",
', '.join(amigos),', '.join(peliculasVistas.get('lista'))))