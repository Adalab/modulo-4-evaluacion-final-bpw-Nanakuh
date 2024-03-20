CREATE DATABASE recetas_db;

CREATE TABLE recetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    instrucciones TEXT NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

CREATE TABLE ingredientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    receta_id INT,
    nombre VARCHAR(255) NOT NULL,
    cantidad VARCHAR(255) NOT NULL,
    FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE
); 
