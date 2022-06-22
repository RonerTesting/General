from cProfile import label
from struct import pack
import tkinter
from tkinter import ttk
window = tkinter.Tk()

label_1 = tkinter.Label(window,text="Pocicionamiento absoluto",bg="blue",fg="white")
label_1.place(x=10,y=50)

label_2 = tkinter.Label(window,text="Pocicionamiento absoluto",bg="red",fg="yellow")
label_2.place(relx=10,rely=15,relwidth=0.5,anchor='ne')

window.mainloop()