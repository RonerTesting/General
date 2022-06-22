from pprint import pprint
from faker import Faker
fake = Faker()
def AgregarMasProductos(cantidad,id):
    usuarios[id]["listaProductos"][0]['cantidad']+=1
    print(usuarios[id])
    pass
    
productos = [
    {
        "nombre":"LONCHERA RAMO 186 G 7 UND",
        "precio":"4550",
        "descripcion":"186 g (g a $ 24,46)",
        "cantidad":1
    },
    {
        "nombre":"SALSA MAIZ DULCE ZEV 200GR",
        "precio":"2390",
        "descripcion":"200 g (g a $ 11,95)",
        "cantidad":1
    },
    {
        "nombre":"SALSA CREMA AHUMADA ZEV",
        "precio":"2490",
        "descripcion":"200 g (g a $ 12,45)",
        "cantidad":1
    },
]

usuarios = [
    {
        "uid":fake.uuid4(),
        "nombreCompleto":fake.name(),
        "edad":25,
        "listaProductos":[]
    },
    {
        "uid":fake.uuid4(),
        "nombreCompleto":fake.name(),
        "edad":12,
        "listaProductos":[]
    },
    {
        "uid":fake.uuid4(),
        "nombreCompleto":fake.name(),
        "edad":30,
        "listaProductos":[]
    }

]
# print()
print('Lista de productos de mi tiendita :)')
for producto in productos:
    print(producto)
print('--------------------------------------')
print("Mis compradores diarios")
for index,usuario in enumerate(usuarios):
    if index==0:
        usuario["listaProductos"].append(productos[0])
    if index==1:
        usuario["listaProductos"].append(productos[0])
        usuario["listaProductos"].append(productos[1])
    if index==2:
        usuario["listaProductos"].append(productos[1])
        usuario["listaProductos"].append(productos[2])
    print(usuario)
print('--------------------------------------')
print("Compra mas reciente")
print(AgregarMasProductos(2,0))