import tkinter
from tkinter import Grid, ttk

from pprint import pprint

""""""
#(0.0)(1.0)(2.0)
#(0.1)(1.1)(2.1)
#(0.2)(1.2)(2.2)

window = tkinter.Tk()

window.columnconfigure(0,weight=1)
window.rowconfigure(0,weight=3)

##Usuario
#Etiqueta usuario
username_label = ttk.Label(window,text="Username:")
username_label.grid(column=0,row=0,sticky=tkinter.W,padx=5,pady=5)
#Campo usuario
username_entry = ttk.Entry(window)
username_entry.grid(column=1,row=0,sticky=tkinter.E,padx=5,pady=5)

##Password
#Etiqueta password
password_label = ttk.Label(window,text="Password:")
password_label.grid(column=0,row=1,sticky=tkinter.W,padx=5,pady=5)
#Campo password
password_entry = ttk.Entry(window,show="*")
password_entry.grid(column=1,row=1,sticky=tkinter.E,padx=5,pady=5)
"""
login_button = ttk.Button(window,text="row1")
login_button.grid(column=1, row=1,sticky=tkinter.W, padx=5,pady=5)
login_button = ttk.Button(window,text="row2")
login_button.grid(column=1, row=2,sticky=tkinter.W, padx=5,pady=5)
"""
## Boton
login_button = ttk.Button(window,text="Login")
login_button.grid(column=1, row=3,sticky=tkinter.W, padx=5,pady=5)

window.mainloop()















# print(type(window))
# pprint(dir(window))

"""
window = tkinter.Tk()
label1 = tkinter.Label(window,text="label1",height=4,width=4,bg="yellow",fg="blue")
label1.pack(ipadx=45,ipady=15,fill='x')
label2 = tkinter.Label(window,text="label2",height=4,width=4,bg="purple",fg="white")
label2.pack(ipadx=45,ipady=15,fill='x')
label3 = tkinter.Label(window,text="label3",height=4,width=4,bg="blue",fg="white")
label3.pack(ipadx=45,ipady=15,fill='x')
label4 = tkinter.Label(window,text="label4",height=4,width=4,bg="red",fg="white")
label4.pack(ipadx=15,ipady=15,side="left")
label5 = tkinter.Label(window,text="label5",height=4,width=4,bg="yellow",fg="black")
label5.pack(ipadx=15,ipady=15,side="left")
label6 = tkinter.Label(window,text="label6",height=4,width=4,bg="green",fg="white")
label6.pack(ipadx=15,ipady=15,side="right")
window.mainloop()
"""
