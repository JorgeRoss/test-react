Se debera instalar mongoDb
En directorio raiz se debera agregan las carpetas root:\data\db
Ejecuta del directorio Raiz:\Program Files\MongoDB\Server\4.0\bin los archivos mongod y mongo.
Se debera agregar la base 'test' en la consola de mongodb (use test).
--------------------------------------------------------------------------------
Los proyectos se encuentran separado en carpeta cliente y servidor.
Cada uno debe ejecutarse en diferentes consolas.
Ejecutar el comando npm install en cada carpeta
El servidor se ejecuta en el puerto 8001 (http://localhost:8001)
El cliente se ejecuta en el puerto 3000 (http://localhost:3000)
---------------------------------------------------------------

Existen 3 endpoint

GET >> http://localhost:8001/api/products : Devuelve el listado completo de productos con un campo agregado de Enabled recuperado de la DB.
GET >> http://localhost:8001/api/products/{:idProducto} : Devuelve datos de producto por medio del id.
PATCH >> http://localhost:8001/api/products/{:idProducto} : Cambia el estado enable del producto (Enabled/False)
