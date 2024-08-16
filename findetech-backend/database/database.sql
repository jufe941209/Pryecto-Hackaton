CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    last_name2 VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefono VARCHAR(15) NOT NULL,
    document_type ENUM('cedula', 'pasaporte', 'cedulaExt') NOT NULL,
    document_number VARCHAR(50) NOT NULL UNIQUE,
    user_type ENUM('persona_natural', 'persona_juridica') NOT NULL,
    gender ENUM('masculino', 'femenino', 'otro', 'prefiero_no_especificar') NOT NULL,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(25) NOT NULL,
    role VARCHAR(25) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (first_name, last_name, last_name2, birth_date, email, telefono, document_type, document_number, user_type, gender, password)
VALUES ('Julian', 'Fuentes', 'Clavijo', '1994-12-09', 'henjulian11@outlook.com', '3054656044', 'cedula', '1013654544', 'persona_natural', 'masculino', 'Ju.1013654544','true','user');
