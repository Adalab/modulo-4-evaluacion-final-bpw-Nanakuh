INSERT INTO recetas (nombre, instrucciones, imagen) VALUES 
('Paella Valenciana', '1. Sofríe el pollo y el conejo en aceite. 2. Añade el tomate y las verduras. 3. Incorpora el arroz y sofríelo. 4. Añade el caldo y el azafrán. 5. Cocina a fuego medio hasta que el arroz esté listo.', 'paella_valenciana.jpg'),
('Tortilla Española', '1. Pela y corta las patatas y la cebolla. 2. Fríe las patatas y la cebolla en aceite. 3. Bate los huevos y mezcla con las patatas y la cebolla. 4. Cuaja la tortilla en una sartén.', 'tortilla_espanola.jpg'),
('Gazpacho Andaluz', '1. Tritura los tomates, el pepino, el pimiento, la cebolla y el ajo. 2. Añade el pan, el vinagre, el aceite y la sal. 3. Mezcla bien y añade agua hasta conseguir la consistencia deseada. 4. Sirve frío.', 'gazpacho_andaluz.jpg'),
('Ceviche Peruano', '1. Corta el pescado en cubos. 2. Exprime limones hasta cubrir el pescado. 3. Añade cebolla, cilantro, sal y ají. 4. Deja marinar y sirve frío con maíz y camote.', 'ceviche_peruano.jpg'),
('Empanadas Argentinas', '1. Prepara la masa mezclando los ingredientes y dejándola reposar. 2. Sofríe la cebolla y luego añade la carne y los condimentos. 3. Corta discos de masa, rellénalos y ciérralos. 4. Hornea hasta que estén doradas.', 'empanadas_argentinas.jpg'),
('Croquetas de Jamón', 'Prepara una bechamel espesa con mantequilla, harina y leche. Añade el jamón picado. Deja enfriar la masa, forma las croquetas, pásalas por huevo y pan rallado, y fríelas.', 'croquetas_jamon.jpg'),
('Salmorejo', 'Tritura tomates maduros, pan, ajo, aceite de oliva y sal. Sirve frío con huevo duro picado y jamón serrano en trocitos.', 'salmorejo.jpg'),
('Pulpo a la Gallega (Pulpo á Feira)', 'Cocina el pulpo en agua hirviendo. Corta en rodajas, sazona con sal gruesa, pimentón y aceite de oliva. Sirve sobre una tabla de madera.', 'pulpo_gallega.jpg'),
('Fabada Asturiana', 'Cocina las fabes con chorizo, morcilla, lacón y panceta. Añade ajo, cebolla y pimentón. Cocina a fuego lento hasta que las fabes estén tiernas.', 'fabada_asturiana.jpg'),
('Caldo Gallego', 'Cocina grelos, patatas, chorizo y lacón en agua. Añade habas y sigue cocinando hasta que todos los ingredientes estén tiernos.', 'caldo_gallego.jpg');


INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (1, 'Arroz', '400g'),(1, 'Caldo de pollo', '1 litro'),(1, 'Pollo', '200g'),(1, 'Conejo', '200g'),(1, 'Tomate triturado', '100g'),(1, 'Judía verde', '200g'),(1, 'Garrofón', '100g'),(1, 'Azafrán', 'Al gusto'),(1, 'Aceite de oliva', 'Al gusto'),(1, 'Sal', 'Al gusto');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (2, 'Huevos', '6 unidades'),(2, 'Patatas medianas', '3 unidades'),(2, 'Cebolla', '1 unidad'),(2, 'Aceite de oliva', 'Suficiente para freír'),(2, 'Sal', 'Al gusto');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (3, 'Tomates maduros', '1kg'),(3, 'Pepino', '1 unidad'),(3, 'Pimiento verde', '1 unidad'),(3, 'Cebolla', '1 unidad'),(3, 'Dientes de ajo', '2 unidades'),(3, 'Pan duro', '100g'),(3, 'Vinagre', 'Al gusto'),(3, 'Aceite de oliva', '50 ml'),(3, 'Sal', 'Al gusto'),(3, 'Agua fría', 'Suficiente para ajustar la textura');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (4, 'Pescado blanco', '500g'),(4, 'Limones', '10 unidades'),(4, 'Cebolla roja', '1 unidad grande'),(4, 'Cilantro', 'Al gusto'),(4, 'Ají limo', 'Al gusto'),(4, 'Sal', 'Al gusto'),(4, 'Maíz cocido', 'Para acompañar'),(4, 'Camote cocido', 'Para acompañar');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (5, 'Harina', '500g para la masa'),(5, 'Manteca', '90g para la masa'),(5, 'Agua', 'Suficiente para la masa'),(5, 'Sal', 'Una pizca para la masa'),(5, 'Carne picada', '300g para el relleno'),(5, 'Cebollas', '2 unidades para el relleno'),(5, 'Huevos duros', '2 unidades para el relleno'),(5, 'Aceitunas', '100g para el relleno'),(5, 'Comino', 'Al gusto para el relleno'),(5, 'Pimentón', 'Al gusto para el relleno'),(5, 'Sal', 'Al gusto para el relleno'),(5, 'Aceite', 'Para sofreír la cebolla');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (6, 'Mantequilla', '50g'),(6, 'Harina', '75g'),(6, 'Leche', '1L'),(6, 'Jamón serrano picado', '200g'),(6, 'Huevo', '2 unidades'),(6, 'Pan rallado', 'Suficiente para empanar'),(6, 'Aceite de oliva', 'Para freír');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (7, 'Tomates maduros', '1kg'),(7, 'Pan duro', '200g'),(7, 'Ajo', '2 dientes'),(7, 'Aceite de oliva', '100ml'),(7, 'Sal', 'Al gusto'),(7, 'Huevo duro', '2 unidades'),(7, 'Jamón serrano', '100g');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (8, 'Pulpo', '1kg'),(8, 'Sal gruesa', 'Al gusto'),(8, 'Pimentón dulce', 'Al gusto'),(8, 'Aceite de oliva', '50ml');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (9, 'Fabes', '500g'),(9, 'Chorizo', '2 unidades'),(9, 'Morcilla', '2 unidades'),(9, 'Lacón', '250g'),(9, 'Panceta', '200g'),(9, 'Ajo', '2 dientes'),(9, 'Cebolla', '1 unidad'),(9, 'Pimentón', '1 cucharadita'),(9, 'Agua', 'Suficiente para cubrir');
INSERT INTO ingredientes (receta_id, nombre, cantidad) VALUES (10, 'Lacón', '1 pieza de aproximadamente 1.5 a 2 kg'),(10, 'Grelos', '1 manojo'),(10, 'Patatas', '4 unidades medianas'),(10, 'Chorizos', '2 unidades'),(10, 'Sal', 'Al gusto');