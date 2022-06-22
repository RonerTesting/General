from pprint import pprint


misTuplas = [
    ('Juanito',1,'Masculino'),
    ('Mariano',2,'Masculino'),
    ('Pedro',3,'Masculino'),
]
for tupla in misTuplas:
    miDiccionario = zip(tupla)
    pprint(dict(len(miDiccionario),miDiccionario))
    