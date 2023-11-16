import os

directorio = 'Images/Campeones/Skins/'
champion = 'Twitch'

for archivo in os.listdir(directorio+champion):
    archivo_name = archivo.split(']')[2]
    
    if os.path.isfile(os.path.join(directorio+ champion, archivo)):
        if archivo.endswith('_0.jpg'):
            os.rename(os.path.join(directorio+ champion, archivo), os.path.join(directorio+champion, archivo_name.replace('_0.jpg', '.jpg')))
        else:
            os.rename(os.path.join(directorio+ champion, archivo), os.path.join(directorio+champion, archivo_name))