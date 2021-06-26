

--
-- Base de datos: app_banco
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla agegencia
--

CREATE TABLE agegencia (
  id_agencia int(11) NOT NULL,
  nombre_agencia varchar(40) NOT NULL,
  descripcion_agencia varchar(40) NOT NULL,
  id_pueblo int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla cliente
--

CREATE TABLE cliente (
  id_cliente int(11) NOT NULL,
  nombre_cliente varchar(10) NOT NULL,
  nombre_de_usuario varchar(10) NOT NULL,
  pass varchar(10) NOT NULL,
  apellido_cliente varchar(10) NOT NULL,
  telefono_cliente int(9) NOT NULL,
  fecha_nacimiento date NOT NULL,
  id_pueblo int(11) NOT NULL,
  id_pais int(11) NOT NULL,
  direccion varchar(30) NOT NULL,
  edad_cliente int(2) NOT NULL,
  sexo_cliente varchar(10) NOT NULL,
  numero_identificacion_cliente varchar(20) NOT NULL,
  correo_cliente varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla depositos
--

CREATE TABLE depositos (
  id_deposito int(11) NOT NULL,
  id_agencia int(11) NOT NULL,
  id_cliente int(11) NOT NULL,
  cantidad decimal(15,2) NOT NULL,
  fecha date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla estado_targeta
--

CREATE TABLE estado_targeta (
  id_estado_targeta int(11) NOT NULL,
  estado_targeta varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla inicio_sesion
--

CREATE TABLE inicio_sesion (
  id_inicio_sesion int(11) NOT NULL,
  id_cliente int(11) NOT NULL,
  fecha_inicio_sesion int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla pais
--

CREATE TABLE pais (
  id_pais int(11) NOT NULL,
  nombre_pais varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla pais
--

INSERT INTO pais (id_pais, nombre_pais) VALUES
(7, 'Puerto Rico '),
(9, 'Santo Domingo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla pueblo
--

CREATE TABLE pueblo (
  id_pueblo int(11) NOT NULL,
  nombre_pueblo varchar(20) NOT NULL,
  id_pais int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla pueblo
--

INSERT INTO pueblo (id_pueblo, nombre_pueblo, id_pais) VALUES
(7, 'Carolina', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla registro_clinete
--

CREATE TABLE registro_clinete (
  id_registro_clinete int(11) NOT NULL,
  id_cliente int(11) NOT NULL,
  tipo_registro_clinete varchar(10) NOT NULL,
  fecha_registro_clinete int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla targeta_debito
--

CREATE TABLE targeta_debito (
  id_targeta_debito int(11) NOT NULL,
  id_cliente int(11) NOT NULL,
  codigo_targeta varchar(10) NOT NULL,
  id_estado_targeta int(11) NOT NULL,
  estado_targeta varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla agegencia
--
ALTER TABLE agegencia
  ADD PRIMARY KEY (id_agencia);

--
-- Indices de la tabla cliente
--
ALTER TABLE cliente
  ADD PRIMARY KEY (id_cliente);

--
-- Indices de la tabla depositos
--
ALTER TABLE depositos
  ADD PRIMARY KEY (id_deposito);

--
-- Indices de la tabla estado_targeta
--
ALTER TABLE estado_targeta
  ADD PRIMARY KEY (id_estado_targeta);

--
-- Indices de la tabla inicio_sesion
--
ALTER TABLE inicio_sesion
  ADD PRIMARY KEY (id_inicio_sesion);

--
-- Indices de la tabla pais
--
ALTER TABLE pais
  ADD PRIMARY KEY (id_pais);

--
-- Indices de la tabla pueblo
--
ALTER TABLE pueblo
  ADD PRIMARY KEY (id_pueblo);

--
-- Indices de la tabla registro_clinete
--
ALTER TABLE registro_clinete
  ADD PRIMARY KEY (id_registro_clinete);

--
-- Indices de la tabla targeta_debito
--
ALTER TABLE targeta_debito
  ADD PRIMARY KEY (id_targeta_debito);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla agegencia
--
ALTER TABLE agegencia
  MODIFY id_agencia int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla cliente
--
ALTER TABLE cliente
  MODIFY id_cliente int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla depositos
--
ALTER TABLE depositos
  MODIFY id_deposito int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla estado_targeta
--
ALTER TABLE estado_targeta
  MODIFY id_estado_targeta int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla inicio_sesion
--
ALTER TABLE inicio_sesion
  MODIFY id_inicio_sesion int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla pais
--
ALTER TABLE pais
  MODIFY id_pais int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla pueblo
--
ALTER TABLE pueblo
  MODIFY id_pueblo int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla registro_clinete
--
ALTER TABLE registro_clinete
  MODIFY id_registro_clinete int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla targeta_debito
--
ALTER TABLE targeta_debito
  MODIFY id_targeta_debito int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
