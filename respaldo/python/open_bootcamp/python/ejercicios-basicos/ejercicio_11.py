class Alumno:
    def __init__(self,nombre,nota):
        self._nombre=nombre
        self._nota=nota
        print("Alumno: {}\nNota: {}\nEstado:{}".format(self._nombre,self._nota,"Aprobado" if self.aprobado() else "Reprobado" ))
    def aprobado(self):
        return self._nota>3
    def notaActual(self):
        return self._nota
    def actualizarNota(self,nota):
        self._nota=nota
Alumno("Juan",5)