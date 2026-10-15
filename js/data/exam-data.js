// ============================================================================
// CATÁLOGO DE EXÁMENES Y BANCO EXTENSIBLE DE PREGUNTAS
// Sistemas de Bases de Datos - UCAB
// ============================================================================

window.ExamData = (function () {
    // ------------------------------------------------------------------------
    // MODELO 1: Primer Parcial (05/11/2024) - Prof. Lúcia Isabel Cardoso M.
    // ------------------------------------------------------------------------
    const model2024 = {
        id: "parcial-1-2024-2",
        title: "Primer Parcial de Sistemas de Bases de Datos",
        institution: "Universidad Católica Andrés Bello (UCAB)",
        professor: "Prof. Lúcia Isabel Cardoso M.",
        date: "05/11/2024",
        isCurrent: true,
        notice: "Este es un modelo de examen específico de la cátedra. La plataforma está estructurada como un catálogo que permite incorporar más exámenes o bancos de preguntas libres.",
        scoring: {
            total: 20.0,
            theoryInWeb: 7.0,
            practiceOffline: 13.0,
            breakdown: [
                { part: "I", name: "Selección Simple", points: 3.0, inWeb: true },
                { part: "II", name: "Términos Pareados", points: 4.0, inWeb: true },
                { part: "III", name: "Traducción de Modelo Conceptual a Lógico", points: 5.0, inWeb: false, note: "Resolución presencial en hoja de examen" },
                { part: "IV", name: "Creación de Base de Datos a partir de Reporte", points: 8.0, inWeb: false, note: "Resolución presencial en hoja de examen" }
            ]
        },
        part1Questions: [
            {
                id: "q1_1",
                number: "1.1",
                prompt: "Son ventajas del modelo relacional:",
                options: [
                    { key: "a", text: "La unicidad de los registros" },
                    { key: "b", text: "El control de redundancia" },
                    { key: "c", text: "La integridad referencial" },
                    { key: "d", text: "El control de concurrencia" }
                ],
                correctKey: "c",
                studentKey: "c",
                explanation: "Validada con ✔ en la pauta. En el modelo relacional, la integridad referencial mediante llaves foráneas (FK) garantiza que las relaciones entre tablas se mantengan consistentes."
            },
            {
                id: "q1_2",
                number: "1.2",
                prompt: "Un supertipo representa:",
                options: [
                    { key: "a", text: "Conjuntos de información excluyente" },
                    { key: "b", text: "Una clasificación de la información" },
                    { key: "c", text: "Una sola relación está activa en cada ocurrencia de la entidad" },
                    { key: "d", text: "Ninguna de las anteriores" }
                ],
                correctKey: "a",
                studentKey: "a",
                explanation: "Validada con ✔ en el examen por la Prof. Cardoso. Representa la agrupación de subtipos (conjuntos de información excluyente en la jerarquía evaluada en clase)."
            },
            {
                id: "q1_3",
                number: "1.3",
                prompt: "Una entidad no cumple con la segunda Forma Normal (2FN) cuando:",
                options: [
                    { key: "a", text: "Tiene atributos que pertenecen a diferentes conjuntos" },
                    { key: "b", text: "Tiene atributos que cualifican a otro atributo de la entidad que no es el identificador único" },
                    { key: "c", text: "Tiene atributos multivaluados" },
                    { key: "d", text: "Tiene atributos cuyos valores se repiten" }
                ],
                correctKey: "a",
                studentKey: "a",
                explanation: "Validada con ✔ en el examen. Nota: La opción (b) corresponde a una violación de 3FN (dependencia transitiva) y las opciones (c) y (d) violan la 1FN."
            },
            {
                id: "q1_4",
                number: "1.4",
                prompt: "La normalización sirve para:",
                options: [
                    { key: "a", text: "Facilitar el mantenimiento" },
                    { key: "b", text: "Garantizar la integridad de información" },
                    { key: "c", text: "Utilizar los recursos de manera eficiente" },
                    { key: "d", text: "Todas las anteriores" }
                ],
                correctKey: "b",
                studentKey: "b",
                explanation: "Validada con ✔ en el examen. El propósito fundamental de normalizar es evitar anomalías de actualización, inserción y borrado para garantizar la integridad de la información."
            },
            {
                id: "q1_5",
                number: "1.5",
                prompt: "Un arco exclusivo representa:",
                options: [
                    { key: "a", text: "Conjuntos de información excluyente" },
                    { key: "b", text: "Una clasificación de la información" },
                    { key: "c", text: "Una sola relación está activa en cada ocurrencia de la entidad" },
                    { key: "d", text: "Ninguna de las anteriores" }
                ],
                correctKey: "c",
                studentKey: "c",
                explanation: "Validada con ✔ en el examen. Un arco exclusivo (XOR) sobre dos o más relaciones garantiza que cada instancia de la entidad participe únicamente en una de esas relaciones a la vez."
            },
            {
                id: "q1_6",
                number: "1.6",
                prompt: "Un modelo E-R representa:",
                options: [
                    { key: "a", text: "Requerimientos no funcionales" },
                    { key: "b", text: "Procesos de negocio" },
                    { key: "c", text: "Requerimientos funcionales" },
                    { key: "d", text: "Todas las anteriores" }
                ],
                correctKey: "b",
                studentKey: "c",
                explanation: "En tu hoja habías marcado (b), luego la tachaste y marcaste (c), lo cual fue corregido con ✘ (-0.5 ptos). Según la pauta de la cátedra, se asocia a las reglas/procesos de negocio (b)."
            }
        ],
        termsList: [
            { id: 1, name: "Relaciones" },
            { id: 2, name: "Constraint" },
            { id: 3, name: "Entidad" },
            { id: 4, name: "Nivel Físico" },
            { id: 5, name: "Regla de integridad explícita" },
            { id: 6, name: "Desnormalización" },
            { id: 7, name: "Modelo Relacional" },
            { id: 8, name: "Entidad débil" },
            { id: 9, name: "Regla de integridad implícita" },
            { id: 10, name: "Transacciones" },
            { id: 11, name: "Nivel Lógico" },
            { id: 12, name: "OLTP" },
            { id: 13, name: "Normalización" }
        ],
        part2Statements: [
            {
                id: "p2_1",
                statement: "Cambios sobre la información de una b/d",
                correctId: 10,
                studentId: 10,
                explanation: "10 (Transacciones): Representan unidades lógicas de trabajo que ejecutan cambios (inserciones, actualizaciones, eliminaciones) sobre la base de datos."
            },
            {
                id: "p2_2",
                statement: "Diseño de la b/d",
                correctId: 11,
                studentId: 12,
                explanation: "11 (Nivel Lógico): En la hoja colocaste 12 (OLTP), pero la profesora corrigió en azul con el número 11 (Nivel Lógico), ya que es la etapa donde se estructura el diseño de la BD."
            },
            {
                id: "p2_3",
                statement: "Una tienda debe ofrecer un 5% de descuento semestral",
                correctId: 5,
                studentId: 5,
                explanation: "5 (Regla de integridad explícita): Es una condición o regla de negocio particular del dominio (impuesta explícitamente por la organización)."
            },
            {
                id: "p2_4",
                statement: "Cliente, Tienda, Producto",
                correctId: 3,
                studentId: 3,
                explanation: "3 (Entidad): Son objetos del mundo real (sustantivos) sobre los cuales se desea almacenar información."
            },
            {
                id: "p2_5",
                statement: "Todo estudiante debe tener nombre y apellido",
                correctId: 9,
                studentId: 9,
                explanation: "9 (Regla de integridad implícita): Validada con ✔ por la profesora en la pauta al representar la obligatoriedad estructural de atributos dentro del modelo."
            },
            {
                id: "p2_6",
                statement: "A través de la implementación de FKs se garantiza la integridad referencial",
                correctId: 7,
                studentId: 11,
                explanation: "7 (Modelo Relacional): En el examen colocaste 11, y la profesora anotó al margen derecho el 7 (Modelo Relacional), donde se definen las Foreign Keys (FKs)."
            },
            {
                id: "p2_7",
                statement: "Mi compañía necesita controlar la asistencia al trabajo de cada empleado",
                correctId: 5,
                studentId: 5,
                explanation: "5 (Regla de integridad explícita): Regla de negocio específica de la organización validada con ✔ en el examen."
            },
            {
                id: "p2_8",
                statement: "Tienen nombre, opcionalidad y cardinalidad",
                correctId: 1,
                studentId: 1,
                explanation: "1 (Relaciones): Toda relación en el modelo conceptual posee un nombre (verbo), opcionalidad (participación) y cardinalidad (grado)."
            }
        ],
        practicalSections: [
            {
                id: "part3",
                number: "III",
                title: "Traducción de Modelo Conceptual a Lógico",
                points: 5.0,
                inWeb: false,
                badge: "Presencial • No en web",
                description: "Conversión de diagramas E-R a tablas relacionales, propagación de claves primarias a foráneas (FK), resolución de relaciones N:M y aplicación de reglas de normalización (1FN, 2FN, 3FN).",
                note: "Ejercicio resuelto en la hoja física de examen (no calificable automáticamente en el simulador web)."
            },
            {
                id: "part4",
                number: "IV",
                title: "Creación de una Base de Datos a partir de un Reporte",
                points: 8.0,
                inWeb: false,
                badge: "Presencial • No en web",
                description: "Análisis inverso de un formato impreso de factura/reporte de negocio suministrado en el examen: identificación de campos repetitivos, dependencias funcionales, entidades subyacentes y modelado completo de la base de datos.",
                note: "Ejercicio resuelto en la hoja física de examen (no calificable automáticamente en el simulador web)."
            }
        ]
    };

    // ------------------------------------------------------------------------
    // BANCO EXTENDIDO DE PREGUNTAS Y CASOS DE ESTUDIO (DATASET COMPLETO)
    // ------------------------------------------------------------------------
    const questionBank = {
        id: "banco-preguntas-sbd-1",
        title: "Banco Extendido de Preguntas y Casos de Estudio",
        subtitle: "Diseño Conceptual, Normalización, Reglas de Integridad, SQL y Usabilidad",
        institution: "Universidad Católica Andrés Bello (UCAB)",
        professor: "Prof. Lúcia Isabel Cardoso M.",
        scale: "Porcentual (0% - 100%)",
        selectionQuestions: [
            {
                id: "qb_s1",
                number: "1.1",
                category: "Principios de Diseño",
                prompt: "De acuerdo con los principios de desarrollo de Sistemas de Bases de Datos, el orden estricto de prioridades para la toma de decisiones de diseño es:",
                options: [
                    { key: "a", text: "1. Eficiencia, 2. Integridad, 3. Facilidad de Mantenimiento" },
                    { key: "b", text: "1. Integridad, 2. Eficiencia, 3. Facilidad de Mantenimiento" },
                    { key: "c", text: "1. Facilidad de Mantenimiento, 2. Eficiencia, 3. Integridad" },
                    { key: "d", text: "1. Integridad, 2. Facilidad de Mantenimiento, 3. Eficiencia" }
                ],
                correctKey: "b",
                explanation: "La integridad nunca se negocia por ser el cumplimiento de los requerimientos funcionales del negocio. Si dos alternativas garantizan la integridad, se elige la más eficiente en uso de recursos, y ante igual eficiencia, la de más fácil mantenimiento."
            },
            {
                id: "qb_s2",
                number: "1.2",
                category: "Modelo E-R Extendido",
                prompt: "Para que una estructura pueda modelarse válidamente como un Supertipo en el E-R, debe cumplir de forma obligatoria con:",
                options: [
                    { key: "a", text: "Agrupar relaciones recursivas de cardinalidad M:N" },
                    { key: "b", text: "Poseer clasificación mutuamente excluyente, atributos/relaciones comunes y atributos/relaciones particulares en los subtipos" },
                    { key: "c", text: "Tener únicamente relaciones opcionales con arcos exclusivos" },
                    { key: "d", text: "Contener atributos calculados que se actualicen automáticamente en tiempo real" }
                ],
                correctKey: "b",
                explanation: "Un supertipo exige tres condiciones indispensables: a) ocurrencias clasificadas de forma mutuamente excluyente, b) atributos y/o relaciones comunes a todos los registros, y c) atributos y/o relaciones exclusivas para cada subtipo."
            },
            {
                id: "qb_s3",
                number: "1.3",
                category: "Modelo E-R Extendido",
                prompt: "En el modelo E-R Extendido, un Arco Exclusivo representa:",
                options: [
                    { key: "a", text: "Una relación recursiva de orden superior" },
                    { key: "b", text: "Que una sola de las relaciones involucradas se encuentra activa en cada ocurrencia de la entidad" },
                    { key: "c", text: "Una entidad de intersección entre tres o más conjuntos independientes" },
                    { key: "d", text: "Una restricción de clave primaria compuesta obligatoria" }
                ],
                correctKey: "b",
                explanation: "El arco exclusivo modela una regla de integridad referencial excluyente (XOR), indicando que entre varias entidades alternativas vinculadas, solo una referencia estará llena/activa por cada registro o instancia."
            },
            {
                id: "qb_s4",
                number: "1.4",
                category: "Normalización",
                prompt: "Una entidad NO cumple con la Primera Forma Normal (1FN) cuando:",
                options: [
                    { key: "a", text: "Depende de una clave primaria compuesta" },
                    { key: "b", text: "Contiene atributos multivaluados o atributos cuyos valores se repiten" },
                    { key: "c", text: "Sus atributos no clave dependen de un atributo que no es el UID" },
                    { key: "d", text: "Almacena únicamente números secuenciales artificiales" }
                ],
                correctKey: "b",
                explanation: "La 1FN exige atomicidad y unicidad de valores por ocurrencia. Si un atributo toma más de un valor (ej. múltiples teléfonos) o contiene valores repetitivos, debe extraerse creando una nueva entidad relacionada."
            },
            {
                id: "qb_s5",
                number: "1.5",
                category: "Normalización",
                prompt: "Una entidad NO cumple con la Segunda Forma Normal (2FN) cuando:",
                options: [
                    { key: "a", text: "Posee atributos no clave que cualifican o pertenecen a otro conjunto diferente a la entidad" },
                    { key: "b", text: "Contiene un arco exclusivo entre dos relaciones opcionales" },
                    { key: "c", text: "Su UID es simple y estrictamente numérico" },
                    { key: "d", text: "No posee un campo calculado o derivado" }
                ],
                correctKey: "a",
                explanation: "La 2FN requiere que todos los atributos no clave dependan funcionalmente de todo el UID de la entidad. Si cualifican a otro conjunto o dependen parcialmente de una clave compuesta, deben removerse a su entidad correspondiente."
            },
            {
                id: "qb_s6",
                number: "1.6",
                category: "Normalización",
                prompt: "La causa principal para mover atributos a una nueva entidad durante la normalización a la Tercera Forma Normal (3FN) es:",
                options: [
                    { key: "a", text: "La existencia de atributos multivaluados en la misma fila" },
                    { key: "b", text: "La presencia de dependencias transitivas (atributos no clave que dependen funcionalmente de otros atributos no clave)" },
                    { key: "c", text: "Que el UID sea de tipo texto en lugar de numérico" },
                    { key: "d", text: "Que la entidad tenga relaciones opcionales" }
                ],
                correctKey: "b",
                explanation: "La 3FN elimina dependencias transitivas: ningún atributo descriptivo debe depender de otro atributo no clave. Todos deben depender única y directamente del UID de la entidad."
            },
            {
                id: "qb_s7",
                number: "1.7",
                category: "Estructuras E-R",
                prompt: "Una condición técnica OBLIGATORIA al definir una entidad de tipo Histórico (como HIST_TRABAJO o HIST_PRECIO) es:",
                options: [
                    { key: "a", text: "Incluir una sola fecha de corte obligatoria" },
                    { key: "b", text: "Incluir dos fechas: fecha de inicio obligatoria y fecha de fin opcional (que estando vacía indica el registro activo)" },
                    { key: "c", text: "Definir su UID exclusivamente con el nombre de la persona" },
                    { key: "d", text: "Convertirla en un supertipo con arcos exclusivos" }
                ],
                correctKey: "b",
                explanation: "Las estructuras históricas requieren dos fechas: fecha de inicio obligatoria (*) para marcar su vigencia y fecha de fin opcional (o); mientras permanece nula (NULL), indica que ese registro es el estado actualmente activo."
            },
            {
                id: "qb_s8",
                number: "1.8",
                category: "Estructuras E-R",
                prompt: "¿Por qué una línea o renglón de factura (DET_FACT) se considera una Entidad Débil?",
                options: [
                    { key: "a", text: "Porque no posee un UID asignado en el modelo relacional" },
                    { key: "b", text: "Porque representa un atributo multivaluado separado cuyo significado y registros dependen totalmente de la entidad dueña (FACTURA)" },
                    { key: "c", text: "Porque sus datos se eliminan automáticamente cada vez que se ejecuta una consulta" },
                    { key: "d", text: "Porque solo permite almacenar valores numéricos decimales" }
                ],
                correctKey: "b",
                explanation: "Una entidad débil es un atributo multivaluado extraído como entidad. Sus registros carecen de significado de negocio sin la entidad dueña, y al eliminar la dueña, deben eliminarse en cascada sus registros dependientes."
            },
            {
                id: "qb_s9",
                number: "1.9",
                category: "Diseño Conceptual",
                prompt: "Al traducir el diagrama E-R al Modelo Relacional, las relaciones de cardinalidad 1:1 donde AMBAS partes son mandatorias (obligatorias) se consideran:",
                options: [
                    { key: "a", text: "Una implementación correcta mediante dos claves foráneas cruzadas Not Null" },
                    { key: "b", text: "Un error de diseño conceptual, ya que ambas entidades comparten la misma existencia y deben fusionarse en una sola" },
                    { key: "c", text: "Una desnormalización aceptada en la Tercera Forma Normal" },
                    { key: "d", text: "Un arco exclusivo de tipo relacional" }
                ],
                correctKey: "b",
                explanation: "Las relaciones 1:1 mandatorias en ambos lados indican que ambos conjuntos comparten exactamente el mismo ciclo de vida, existencia e identificador. Separarlas en dos entidades es un error grave de diseño; deben fusionarse en una sola."
            },
            {
                id: "qb_s10",
                number: "1.10",
                category: "Reglas de Negocio",
                prompt: "La diferencia conceptual entre Reglas de Integridad Implícitas y Explícitas radica en que:",
                options: [
                    { key: "a", text: "Las implícitas son escritas por el usuario y las explícitas por el DBA" },
                    { key: "b", text: "Las implícitas se reflejan gráficamente en el E-R e implementan con constraints; las explícitas no se aprecian en el E-R y se programan (triggers/procedimientos)" },
                    { key: "c", text: "Las implícitas aplican en DSS y las explícitas en OLTP" },
                    { key: "d", text: "Las implícitas solo aceptan números y las explícitas solo texto" }
                ],
                correctKey: "b",
                explanation: "Las reglas implícitas quedan plasmadas en la gráfica del diagrama E-R (entidades, cardinalidades, opcionalidad, UIDs) y se traducen a constraints (PK, FK, NN, Unique, Check). Las explícitas son condiciones que no se grafican y requieren código o triggers."
            },
            {
                id: "qb_s11",
                number: "1.11",
                category: "Diseño Conceptual",
                prompt: "¿Por qué la regla general del modelo Entidad-Relación prohíbe incluir atributos calculados o derivados como la edad?",
                options: [
                    { key: "a", text: "Porque violan estrictamente la Primera Forma Normal (1FN) al generar redundancia de datos" },
                    { key: "b", text: "Porque perderían vigencia antes de llegar a disco y exigirían actualizaciones constantes en tiempo real" },
                    { key: "c", text: "Porque solo pueden ser representados mediante arcos exclusivos" },
                    { key: "d", text: "Porque impiden la creación de identificadores únicos (UIDs) simples" }
                ],
                correctKey: "b",
                explanation: "Los atributos cuyo valor varía continuamente (como la edad) se obtienen dinámicamente en tiempo de ejecución restando la fecha fija (fecha_nacimiento) a la fecha actual. Almacenarlos en disco exigiría actualizarlos constantemente, degradando la eficiencia."
            },
            {
                id: "qb_s12",
                number: "1.12",
                category: "Desnormalización",
                prompt: "El atributo total en la entidad FACTURA representa una excepción aceptada a la regla de atributos calculados debido a que:",
                options: [
                    { key: "a", text: "Se desnormaliza intencionalmente congelando su valor una sola vez para ahorrar tiempo de cómputo en lecturas recurrentes" },
                    { key: "b", text: "Es un atributo multivaluado que se transforma automáticamente en 2FN" },
                    { key: "c", text: "Permite eliminar la clave primaria de la tabla DETALLE_FACTURA" },
                    { key: "d", text: "Es una regla de integridad explícita que no requiere almacenamiento físico" }
                ],
                correctKey: "a",
                explanation: "El total de una factura se calcula al emitirla y queda inalterable en el tiempo. Guardarlo congelado evita recalcular precios y cantidades cada vez que se consulte, siendo una desnormalización controlada para optimizar consultas críticas."
            },
            {
                id: "qb_s13",
                number: "1.13",
                category: "Modelo E-R Extendido",
                prompt: "Al analizar el diseño de una jerarquía (ej. ubicación geográfica), ¿cuál es la ventaja técnica de la representación detallada (múltiples tablas por nivel) sobre la versión generalizada (relación recursiva en una sola tabla)?",
                options: [
                    { key: "a", text: "Ocupa menos espacio total en disco que la versión generalizada" },
                    { key: "b", text: "Agiliza las consultas parciales a niveles específicos al evitar escaneos secuenciales masivos en archivos grandes" },
                    { key: "c", text: "Evita tener que definir claves primarias compuestas" },
                    { key: "d", text: "Elimina la necesidad de aplicar la Tercera Forma Normal (3FN)" }
                ],
                correctKey: "b",
                explanation: "En el modelado detallado, consultar solo los países lee un archivo corto (ej. ~200 filas), mientras que en la versión recursiva generalizada se debe escanear una tabla masiva que mezcla países, estados y ciudades."
            },
            {
                id: "qb_s14",
                number: "1.14",
                category: "Estructuras E-R",
                prompt: "Para modelar la relación de PARENTESCO entre empleados de una misma empresa, ¿cómo exige el modelo E-R estructurar la solución?",
                options: [
                    { key: "a", text: "Creando un supertipo entre JEFE y EMPLEADO con arcos exclusivos" },
                    { key: "b", text: "Rompiendo la relación recursiva M:N mediante una entidad intermedia con dos vínculos hacia EMPLEADO y el tipo registrado en una sola dirección" },
                    { key: "c", text: "Duplicando la entidad EMPLEADO en dos tablas independientes" },
                    { key: "d", text: "Agregando un atributo multivaluado de parentescos dentro de la entidad EMPLEADO" }
                ],
                correctKey: "b",
                explanation: "El parentesco es una relación recursiva M:N. Se resuelve mediante una entidad intermedia con dos claves foráneas hacia EMPLEADO, registrando el parentesco unidireccionalmente para no duplicar el vínculo."
            },
            {
                id: "qb_s15",
                number: "1.15",
                category: "Traducción Relacional",
                prompt: "Al traducir un diagrama E-R al Modelo Relacional, las relaciones de cardinalidad 1:M ubican la Clave Foránea (FK) en:",
                options: [
                    { key: "a", text: "La tabla correspondiente a la entidad del lado 'uno' (origen de la relación)" },
                    { key: "b", text: "La tabla correspondiente a la entidad que tiene la 'pata de gallo' (lado 'muchos')" },
                    { key: "c", text: "Una nueva tabla intermedia creada exclusivamente para la relación" },
                    { key: "d", text: "En cualquiera de las dos tablas indiferentemente" }
                ],
                correctKey: "b",
                explanation: "En una relación 1:M, la Foreign Key (FK) se coloca siempre en la tabla hija (lado 'muchos' / pata de gallo). Si la relación era obligatoria en ese extremo, la columna FK recibe además la restricción NOT NULL."
            },
            {
                id: "qb_s16",
                number: "1.16",
                category: "SQL DDL",
                prompt: "En el lenguaje SQL, las sentencias del sublenguaje DDL (CREATE, ALTER, DROP) se caracterizan por:",
                options: [
                    { key: "a", text: "Requerir la ejecución manual de la orden COMMIT para guardar los cambios" },
                    { key: "b", text: "Tener un Commit implícito, haciendo que los cambios en la estructura del objeto sean persistentes de forma inmediata" },
                    { key: "c", text: "Ejecutarse exclusivamente a nivel de interfaz de usuario sin afectar la base de datos" },
                    { key: "d", text: "Permitir deshacer las modificaciones mediante la instrucción ROLLBACK" }
                ],
                correctKey: "b",
                explanation: "Las sentencias DDL modifican el diccionario de datos y las estructuras físicas del motor. El RDBMS ejecuta un COMMIT implícito automático, por lo que no pueden deshacerse con ROLLBACK."
            },
            {
                id: "qb_s17",
                number: "1.17",
                category: "SQL Tipos de Datos",
                prompt: "Si en SQL se define una columna con la especificación NUMBER(6, 2), el valor numérico máximo que se puede almacenar en ella es:",
                options: [
                    { key: "a", text: "999999,00" },
                    { key: "b", text: "99,99" },
                    { key: "c", text: "9999,99" },
                    { key: "d", text: "6666,22" }
                ],
                correctKey: "c",
                explanation: "En NUMBER(p, s), p es la precisión total de dígitos y s es la escala (decimales). Para NUMBER(6, 2), hay 2 decimales y 4 enteros (6 - 2 = 4), resultando en un valor máximo absoluto de 9999.99."
            },
            {
                id: "qb_s18",
                number: "1.18",
                category: "Arquitectura RDBMS",
                prompt: "Dentro de la arquitectura física de una base de datos relacional (ej. Oracle), el archivo de control o Control File cumple la función de:",
                options: [
                    { key: "a", text: "Almacenar directamente las filas y registros de las tablas de los usuarios" },
                    { key: "b", text: "Enlazar a todos los demás archivos físicos (data files y log files) y otorgar unicidad a la 'burbuja' de la base de datos" },
                    { key: "c", text: "Guardar los programas escritos en lenguaje Java o PL/SQL" },
                    { key: "d", text: "Generar automáticamente las interfaces gráficas del sistema" }
                ],
                correctKey: "b",
                explanation: "El Control File es el archivo físico vital que mantiene el estado, estructura y punteros a los archivos de datos (Data Files) y de bitácora (Redo Log Files), garantizando la integridad de la instancia."
            },
            {
                id: "qb_s19",
                number: "1.19",
                category: "Ciclo de Vida",
                prompt: "¿En qué fase del Ciclo de Vida del Desarrollo de un Sistema de Bases de Datos se efectúa la traducción del Diagrama E-R al Modelo Relacional?",
                options: [
                    { key: "a", text: "Inicio" },
                    { key: "b", text: "Análisis" },
                    { key: "c", text: "Diseño" },
                    { key: "d", text: "Transición" }
                ],
                correctKey: "c",
                explanation: "El modelo conceptual E-R se elabora en la fase de Análisis; la traducción formal a tablas, tipos de datos, PKs y FKs corresponde a la fase de Diseño (diseño lógico)."
            },
            {
                id: "qb_s20",
                number: "1.20",
                category: "Constraints Relacionales",
                prompt: "¿Qué combinación de restricciones internas garantiza la implementación del constraint Primary Key (PK) en una tabla relacional?",
                options: [
                    { key: "a", text: "Check y Foreign Key" },
                    { key: "b", text: "Not Null (NN) y Unique (U)" },
                    { key: "c", text: "Default y Index" },
                    { key: "d", text: "Not Null y Cascade" }
                ],
                correctKey: "b",
                explanation: "El RDBMS asegura la clave primaria combinando dos reglas fundamentales: ningún valor puede ser nulo (Not Null) y ningún valor puede repetirse (Unique)."
            },
            {
                id: "qb_s21",
                number: "4.1",
                category: "Traducción Relacional",
                prompt: "Al traducir un Diagrama E-R a un Modelo Relacional, ¿cuál es el orden estricto de la plantilla para definir las columnas y restricciones de una tabla?",
                options: [
                    { key: "a", text: "1. Tipo de datos, 2. FK, 3. PK, 4. Unique, 5. Check" },
                    { key: "b", text: "1. PK, 2. Not Null (NN), 3. FK, 4. Check, 5. Unique (U), 6. Tipo de datos" },
                    { key: "c", text: "1. Check, 2. Unique, 3. PK, 4. FK, 5. Not Null" },
                    { key: "d", text: "1. FK, 2. PK, 3. Tipo de datos, 4. Check, 5. Not Null" }
                ],
                correctKey: "b",
                explanation: "La plantilla estándar de diseño lógico de la cátedra organiza las restricciones en este orden: 1. PK, 2. Not Null (NN), 3. FK, 4. Check, 5. Unique (U), 6. Tipo de datos."
            },
            {
                id: "qb_s22",
                number: "4.2",
                category: "Traducción Relacional",
                prompt: "¿Cómo se resuelve la Clave Foránea (FK) al traducir una relación 1:1 entre dos entidades donde una parte es opcional y la otra es mandatoria?",
                options: [
                    { key: "a", text: "Se crea una tabla intermedia independiente con las dos claves primarias" },
                    { key: "b", text: "Se ubica la FK en la tabla correspondiente a la entidad que tenía la relación mandatoria, agregando los constraints Not Null (NN) y Unique (U)" },
                    { key: "c", text: "Se ubica la FK en la tabla opcional sin ninguna restricción de unicidad" },
                    { key: "d", text: "Se duplican todos los atributos de ambas entidades en las dos tablas" }
                ],
                correctKey: "b",
                explanation: "Para garantizar que cada registro mandatorio esté vinculado de forma obligatoria y única, la FK va en la tabla del lado mandatorio con restricciones NOT NULL y UNIQUE."
            },
            {
                id: "qb_s23",
                number: "4.3",
                category: "Traducción Relacional",
                prompt: "Si una Clave Primaria (PK) en la tabla padre es compuesta (ej. num_factura e id_renglon), ¿qué condición debe cumplir la Clave Foránea (FK) en la tabla hija?",
                options: [
                    { key: "a", text: "Puede ser simple, relacionando únicamente el primer atributo" },
                    { key: "b", text: "Debe ser obligatoriamente compuesta, creando tantas columnas en la tabla hija como columnas conformen la PK referenciada" },
                    { key: "c", text: "Debe reemplazarse por un campo de texto con la instrucción CHECK" },
                    { key: "d", text: "Se desestima la restricción de integridad referencial" }
                ],
                correctKey: "b",
                explanation: "La integridad referencial exige coincidencia exacta: si la PK referenciada tiene N columnas, la FK correspondiente debe definir exactamente esas N columnas en la tabla dependiente."
            },
            {
                id: "qb_s24",
                number: "6.1",
                category: "Estándares y Usabilidad",
                prompt: "De acuerdo con la norma ISO 9241-11, los tres atributos o factores clave para medir la Usabilidad de un sistema son:",
                options: [
                    { key: "a", text: "Mantenibilidad, Portabilidad y Reutilización" },
                    { key: "b", text: "Efectividad, Eficiencia y Satisfacción" },
                    { key: "c", text: "Robustez, Seguridad y Tolerancia a Fallos" },
                    { key: "d", text: "Calidad del Código, Tiempo de Compilación y Ancho de Banda" }
                ],
                correctKey: "b",
                explanation: "La ISO 9241-11 define usabilidad mediante la efectividad (exactitud y completitud del objetivo), eficiencia (recursos invertidos) y satisfacción (confort y actitud positiva)."
            },
            {
                id: "qb_s25",
                number: "6.2",
                category: "Estándares y Usabilidad",
                prompt: "La norma ISO 25000 (SQuaRE - Software Quality Requirement Evaluation) cumple la función de:",
                options: [
                    { key: "a", text: "Reemplazar el sublenguaje SQL DDL en manejadores relacionales" },
                    { key: "b", text: "Unificar y revisar los estándares previos ISO/IEC 9126 (Calidad de Producto) e ISO/IEC 14598 (Evaluación de Software)" },
                    { key: "c", text: "Definir exclusivamente la sintaxis de los triggers en bases de datos" },
                    { key: "d", text: "Establecer el costo monetario del desarrollo de software" }
                ],
                correctKey: "b",
                explanation: "SQuaRE unifica y reemplaza a la ISO 9126 y la ISO 14598, creando una serie de normas coherente para especificar y evaluar requisitos de calidad en el software."
            }
        ],
        trueFalseQuestions: [
            {
                id: "qb_vf1",
                number: "3.1",
                prompt: "\"Las relaciones M:N pueden dejarse indicadas en el diagrama E-R final si se documenta una regla explícita que las explique.\"",
                options: [
                    { key: "a", text: "Verdadero" },
                    { key: "b", text: "Falso" }
                ],
                correctKey: "b",
                explanation: "FALSO. Las relaciones M:N nunca deben dejarse indicadas en el E-R final. Deben descomponerse obligatoriamente mediante entidades de intersección, entidades reales de negocio, históricos o anillos, pues no pueden traducirse directamente al modelo relacional."
            },
            {
                id: "qb_vf2",
                number: "3.2",
                prompt: "\"En una entidad de tipo Histórico, la fecha de inicio es obligatoria y la fecha de fin debe permanecer opcional para indicar el registro activo.\"",
                options: [
                    { key: "a", text: "Verdadero" },
                    { key: "b", text: "Falso" }
                ],
                correctKey: "a",
                explanation: "VERDADERO. Mientras fecha_fin permanece nula (NULL), indica que ese registro representa el estado actual o activo. Cuando se ingresa un valor a fecha_fin, el histórico se considera cerrado."
            },
            {
                id: "qb_vf3",
                number: "3.3",
                prompt: "\"El orden estricto de prioridades para tomar decisiones de diseño en Bases de Datos es: 1. Eficiencia, 2. Integridad, 3. Facilidad de Mantenimiento.\"",
                options: [
                    { key: "a", text: "Verdadero" },
                    { key: "b", text: "Falso" }
                ],
                correctKey: "b",
                explanation: "FALSO. El orden innegociable es: 1. Integridad, 2. Eficiencia, 3. Facilidad de Mantenimiento. La integridad funcional del negocio nunca se negocia por eficiencia."
            }
        ],
        pareoBattery1: {
            id: "pb1",
            title: "Pareo Batería 1: Integridad, Normalización y Arquitectura",
            terms: [
                { id: 1, name: "Regla de Integridad Implícita" },
                { id: 2, name: "Entidad Débil" },
                { id: 3, name: "Anillo" },
                { id: 4, name: "Desnormalización Controlada" },
                { id: 5, name: "Constraint Primary Key (PK)" },
                { id: 6, name: "Regla de Integridad Explícita" },
                { id: 7, name: "Normalización" },
                { id: 8, name: "Constraint Foreign Key (FK)" },
                { id: 9, name: "Atributo Calculado (Derivado)" },
                { id: 10, name: "Manejador de Bases de Datos (MBD / RDBMS)" }
            ],
            statements: [
                {
                    id: "pb1_1",
                    statement: "Restricción del Modelo Relacional que combina internamente Not Null y Unique para garantizar la unicidad e identificación del registro.",
                    correctId: 5,
                    explanation: "5 (Primary Key): Garantiza que ninguna fila tenga clave nula ni repetida."
                },
                {
                    id: "pb1_2",
                    statement: "Mecanismo de Integridad Referencial que vincula una columna de una tabla con la clave primaria de otra tabla de referencia.",
                    correctId: 8,
                    explanation: "8 (Foreign Key): Aplica el enlace referencial entre tablas."
                },
                {
                    id: "pb1_3",
                    statement: "Estructura del E-R Extendido que resuelve vínculos multivaluados cruzados entre tres o más entidades mediante una sola entidad que agrupa todas las relaciones.",
                    correctId: 3,
                    explanation: "3 (Anillo): Resuelve relaciones M:N complejas entre 3 o más entidades simultáneas."
                },
                {
                    id: "pb1_4",
                    statement: "Regla de negocio que no se aprecia gráficamente en el diagrama E-R y requiere ser programada mediante triggers o procedimientos almacenados.",
                    correctId: 6,
                    explanation: "6 (Regla de Integridad Explícita): Reglas complementarias documentadas que exigen código."
                },
                {
                    id: "pb1_5",
                    statement: "Condición que se modela directamente en la estructura gráfica del E-R (entidades, cardinalidades, opcionalidad, UIDs) y se implementa con constraints.",
                    correctId: 1,
                    explanation: "1 (Regla de Integridad Implícita): Se traduce directamente a restricciones declarativas."
                },
                {
                    id: "pb1_6",
                    statement: "Campo cuyo valor se obtiene mediante operaciones (como la edad o el total) y que por regla general no se modela en el E-R para evitar pérdida de vigencia o inconsistencias.",
                    correctId: 9,
                    explanation: "9 (Atributo Calculado): Se evita en el E-R para prevenir obsolescencia de datos."
                },
                {
                    id: "pb1_7",
                    statement: "Decisión consciente de diseño donde se viola una forma normal para ganar eficiencia en tiempo de respuesta, protegiendo los datos con validaciones estrictas.",
                    correctId: 4,
                    explanation: "4 (Desnormalización Controlada): Incurre en redundancia justificada para optimizar lecturas críticas."
                },
                {
                    id: "pb1_8",
                    statement: "Conjunto de información dependiente cuyo significado existe únicamente si cualifica a una entidad dueña (ej. DET_FACT respecto a FACTURA).",
                    correctId: 2,
                    explanation: "2 (Entidad Débil): Atributo multivaluado separado que desaparece al borrarse la dueña."
                },
                {
                    id: "pb1_9",
                    statement: "Técnica basada en Teoría de Conjuntos aplicada para controlar la redundancia y duplicidad de información en bases de datos transaccionales.",
                    correctId: 7,
                    explanation: "7 (Normalización): Proceso formal de refinamiento (1FN, 2FN, 3FN)."
                },
                {
                    id: "pb1_10",
                    statement: "Software especializado de bajo nivel que administra el espacio físico, memoria RAM y procesamiento interactuando con el SO mediante SQL.",
                    correctId: 10,
                    explanation: "10 (MBD / RDBMS): Gestor de datos que interactúa con el sistema operativo."
                }
            ]
        },
        pareoBattery2: {
            id: "pb2",
            title: "Pareo Batería 2: Restricciones, SQL DDL/DML y Estructuras E-R",
            terms: [
                { id: 1, name: "DML (Data Manipulation Language)" },
                { id: 2, name: "Entidad de Intersección" },
                { id: 3, name: "Diccionario de Datos" },
                { id: 4, name: "UID Simple y Artificial Numérico" },
                { id: 5, name: "Relación 1:1 Mandatoria en ambos lados" },
                { id: 6, name: "Arco Exclusivo" },
                { id: 7, name: "Constraint Check" },
                { id: 8, name: "OLTP (Transactional Processing)" },
                { id: 9, name: "Desnormalización por Lista de Valores" },
                { id: 10, name: "Foreign Key (FK) Compuesta" }
            ],
            statements: [
                {
                    id: "pb2_1",
                    statement: "Restricción declarativa que permite limitar los valores de una columna a un rango numérico específico o a una lista explícita de valores (ej. 'F', 'M').",
                    correctId: 7,
                    explanation: "7 (Constraint Check): Valida condiciones booleanas sobre columnas en la tabla."
                },
                {
                    id: "pb2_2",
                    statement: "Tipo de sistema informático orientado a automatizar transacciones frecuentes donde la información cambia continuamente y requiere alta protección de veracidad.",
                    correctId: 8,
                    explanation: "8 (OLTP): Procesamiento transaccional de alta concurrencia."
                },
                {
                    id: "pb2_3",
                    statement: "Estructura técnica creada en el modelo E-R para descomponer una relación M:N en dos relaciones 1:M.",
                    correctId: 2,
                    explanation: "2 (Entidad de Intersección): Tabla asociativa que rompe la cardinalidad M:N."
                },
                {
                    id: "pb2_4",
                    statement: "Situación de diseño conceptual considerada un error grave, cuya solución exige fusionar ambas entidades en una sola.",
                    correctId: 5,
                    explanation: "5 (Relación 1:1 Mandatoria en ambos lados): Comparte ciclo de vida e identidad idénticos."
                },
                {
                    id: "pb2_5",
                    statement: "Sublenguaje de SQL que incluye comandos como INSERT, UPDATE, DELETE y SELECT.",
                    correctId: 1,
                    explanation: "1 (DML): Manipulación de datos en las tablas existentes."
                },
                {
                    id: "pb2_6",
                    statement: "Conjunto de tablas administradas automáticamente por el MBD que guardan la metadata, estructuras físicas y privilegios de todo el entorno.",
                    correctId: 3,
                    explanation: "3 (Diccionario de Datos): Catálogo del sistema donde reside la metadata del RDBMS."
                },
                {
                    id: "pb2_7",
                    statement: "Mecanismo de Integridad Referencial que exige crear tantas columnas en la tabla hija como columnas conformen la clave primaria de la tabla padre.",
                    correctId: 10,
                    explanation: "10 (Foreign Key Compuesta): Apunta a una clave primaria compuesta de múltiples columnas."
                },
                {
                    id: "pb2_8",
                    statement: "Tipo de identificador recomendado en el E-R por ofrecer el mejor rendimiento en comparaciones a nivel de hardware y evitar problemas de caracteres.",
                    correctId: 4,
                    explanation: "4 (UID Simple y Artificial Numérico): Secuencias numéricas enteras de indexación óptima."
                },
                {
                    id: "pb2_9",
                    statement: "Restricción conceptual que se implementa mediante múltiples columnas FK opcionales en la tabla principal, validando que solo una esté llena a la vez.",
                    correctId: 6,
                    explanation: "6 (Arco Exclusivo): Garantiza exclusividad entre relaciones opcionales."
                },
                {
                    id: "pb2_10",
                    statement: "Técnica de diseño aplicada a atributos como género o estado_civil para evitar crear tablas adicionales manteniendo controles de integridad.",
                    correctId: 9,
                    explanation: "9 (Desnormalización por Lista de Valores): Se protege con Check en lugar de crear tablas maestras superfluas."
                }
            ]
        },
        caseStudies: [
            {
                id: "cs_1",
                title: "Error de Diseño: Relación 1:1 Mandatoria en Ambos Lados",
                problem: "En un diagrama E-R se dibujan dos entidades, EMPLEADO_DATOS y EXPEDIENTE_MEDICO, conectadas por una relación 1:1 donde ambos extremos son líneas continuas (mandatorias).",
                whyFails: "Indicar obligatoriedad total en ambos lados significa que ambas entidades tienen exactamente el mismo ciclo de vida, existencia e identificador. Ningún registro de EMPLEADO_DATOS puede existir sin su EXPEDIENTE_MEDICO y viceversa.",
                solution: "Fusionar ambas entidades en una sola entidad unificada EMPLEADO (#id_empleado, nombre, datos_medicos...)."
            },
            {
                id: "cs_2",
                title: "Control de Modificaciones de Precio (Entidad Histórico)",
                problem: "Una tienda en línea necesita registrar el precio de venta de productos conservando el historial de cambios a lo largo del tiempo para auditar facturas pasadas.",
                whyFails: "Sobrescribir el precio en la tabla PRODUCTO destruye la trazabilidad histórica de compras pasadas.",
                solution: "Crear HIST_PRECIO con dos fechas técnicas: fecha_inicio con obligatoriedad (*) y fecha_fin con opcionalidad (o). Mientras fecha_fin sea NULL, indica el precio vigente."
            },
            {
                id: "cs_3",
                title: "Contraejemplo 3FN #1: Datos del Cliente en Cuenta Bancaria",
                problem: "CUENTA_BANCARIA (#numero_cuenta, tipo, fecha_apertura, id_cliente, nombre_cliente, apellido_cliente)",
                whyFails: "nombre_cliente y apellido_cliente no dependen del numero_cuenta, sino del id_cliente (atributo no clave). Se repite el nombre tantas veces como cuentas tenga el cliente.",
                solution: "Extraer CLIENTE (#id_cliente, nombre, apellido) y dejar en CUENTA_BANCARIA solo el vínculo id_cliente."
            },
            {
                id: "cs_4",
                title: "Contraejemplo 3FN #2: Departamento en Empleado",
                problem: "EMPLEADO (#num_empleado, nombre, apellido, id_depto, nombre_depto, ubicacion_depto)",
                whyFails: "nombre_depto y ubicacion_depto dependen directamente de id_depto, no de #num_empleado. Dependencia transitiva A -> B -> C.",
                solution: "Crear DEPARTAMENTO (#id_depto, nombre, ubicacion) y vincular EMPLEADO con FK a id_depto."
            },
            {
                id: "cs_5",
                title: "Contraejemplo 3FN #3: Ubicación Geográfica en Sucursal",
                problem: "SUCURSAL (#id_sucursal, nombre, direccion, codigo_postal, ciudad, estado)",
                whyFails: "ciudad y estado dependen funcionalmente del codigo_postal, no de #id_sucursal.",
                solution: "Modelar CODIGO_POSTAL (#codigo_postal, ciudad, estado) y relacionarlo con SUCURSAL."
            },
            {
                id: "cs_6",
                title: "Contraejemplo 3FN #4: Producto en Detalle de Factura",
                problem: "DETALLE_FACTURA (#id_renglon, #numero_factura, cod_producto, nombre_producto, categoria, cantidad, precio_venta)",
                whyFails: "nombre_producto y categoria dependen de cod_producto, no de la clave compuesta del renglón.",
                solution: "PRODUCTO (#cod_producto, nombre, categoria) separado; DETALLE_FACTURA conserva cantidad, precio_venta (congelado) y el vínculo a cod_producto."
            }
        ]
    };

    // ------------------------------------------------------------------------
    // CATÁLOGO DE EXÁMENES DISPONIBLES (EXTENSIBLE)
    // ------------------------------------------------------------------------
    const examCatalog = [
        model2024
        // Aquí se pueden incorporar futuros exámenes
    ];

    // Examen activo por defecto
    const activeExam = model2024;

    return {
        catalog: examCatalog,
        currentExam: activeExam,
        questionBank: questionBank,
        // Acceso directo compatible con el motor de examen original
        part1Questions: activeExam.part1Questions,
        termsList: activeExam.termsList,
        part2Statements: activeExam.part2Statements,
        practicalSections: activeExam.practicalSections,
        scoring: activeExam.scoring,
        // Repositorio extensible de preguntas generales/banco libre
        questionRepository: {
            getAllExams: () => examCatalog,
            getExamById: (id) => examCatalog.find(e => e.id === id),
            addExam: (newExam) => examCatalog.push(newExam),
            getQuestionBank: () => questionBank
        }
    };
})();
