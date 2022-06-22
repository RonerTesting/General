

def cliente (informacion:dict)->dict:
 
    atracciones = [
        {
            "nombre":'X-Treme',
            "valor":20000,
            "descuento":0.05
        },
        {
            "nombre":'Carros chocones',
            "valor":5000,
            "descuento":0.07
        },
        {
            "nombre":'Sillas voladoras',
            "valor":10000,
            "descuento":0.05
        }
    ]
    result = {
    'nombre':informacion['nombre'],
    'edad':informacion['edad'],
    'atraccion':'N/A',
    'apto':True,
    'primer_ingreso':informacion['primer_ingreso'],
    'total_boleta':'N/A',
    }
    if informacion['edad']>18:
        result['atraccion'] = atracciones[0]['nombre']
        result['total_boleta'] = atracciones[0]["valor"]
        if  informacion["primer_ingreso"]:
            result['total_boleta'] -= result['total_boleta']*atracciones[0]["descuento"]
        return result
    elif informacion['edad']>=15 and informacion['edad']<=18 :
        result['atraccion'] = atracciones[1]['nombre']
        result['total_boleta'] = atracciones[1]["valor"]
        if  informacion["primer_ingreso"]:
            result['total_boleta'] -= result['total_boleta']*atracciones[1]["descuento"]
        return result
    elif informacion['edad']>=7 and informacion['edad']<15:
        result['atraccion'] = atracciones[2]['nombre']
        result['total_boleta'] = atracciones[2]["valor"]
        if  informacion["primer_ingreso"]:
            result['total_boleta'] -= result['total_boleta']*atracciones[2]["descuento"]
        return result
    else:
        result['apto']=False
        return result


diccionario=[
 {
     "id_cliente":1,
     "nombre":"Johana Fernandez",
     "edad":20,
     "primer_ingreso":True
 },
 {
     "id_cliente":1,
     "nombre":"Johana Fernandez",
     "edad":20,
     "primer_ingreso":False
 },
 {
     "id_cliente":2,
     "nombre":"Gloria Suarez",
     "edad":3,
     "primer_ingreso":True
 },
 {
     "id_cliente":3,
     "nombre":"Tatiana Suarez",
     "edad":17,
     "primer_ingreso":True
 },
 {
     "id_cliente":3,
     "nombre":"Tatiana Suarez",
     "edad":17,
     "primer_ingreso":False
 },
 {
     "id_cliente":4,
     "nombre":"Tatiana Ruiz",
     "edad":8,
     "primer_ingreso":True
 },
 {
     "id_cliente":4,
     "nombre":"Tatiana Ruiz",
     "edad":8,
     "primer_ingreso":False
 },
]
# pprint()
for el in diccionario:
    print(cliente(el))
# {'nombre': 'Johana Fernandez', 'edad': 20, 'atraccion': 'X-Treme','apto':True, 'primer_ingreso': True, 'total_boleta': 19000.0}
# {'nombre': 'Johana Fernandez', 'edad': 20, 'atraccion': 'X-Treme','apto':True, 'primer_ingreso': False, 'total_boleta': 20000}
# {'nombre': 'Gloria Suarez', 'edad': 3, 'atraccion': 'N/A', 'apto':False,'primer_ingreso': True, 'total_boleta': 'N/A'}
# {'nombre': 'Tatiana Suarez', 'edad': 17, 'atraccion': 'Carroschocones','apto': True, 'primer_ingreso': True, 'total_boleta':4650.0}
# {'nombre': 'Tatiana Suarez', 'edad': 17, 'atraccion': 'Carroschocones','apto': True, 'primer_ingreso': False, 'total_boleta': 5000}
# {'nombre': 'Tatiana Ruiz', 'edad': 8, 'atraccion': 'Sillas voladoras','apto':True, 'primer_ingreso': True, 'total_boleta': 9500.0}
# {'nombre': 'Tatiana Ruiz', 'edad': 8, 'atraccion': 'Sillas voladoras','apto':True, 'primer_ingreso': False, 'total_boleta': 10000}