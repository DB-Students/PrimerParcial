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
    // CATÁLOGO DE EXÁMENES DISPONIBLES (EXTENSIBLE)
    // ------------------------------------------------------------------------
    const examCatalog = [
        model2024
        // Aquí se pueden incorporar futuros exámenes:
        // { id: "parcial-1-2025-1", title: "...", ... }
    ];

    // Examen activo por defecto
    const activeExam = model2024;

    return {
        catalog: examCatalog,
        currentExam: activeExam,
        // Acceso directo compatible con el motor de examen
        part1Questions: activeExam.part1Questions,
        termsList: activeExam.termsList,
        part2Statements: activeExam.part2Statements,
        practicalSections: activeExam.practicalSections,
        scoring: activeExam.scoring,
        // Repositorio extensible de preguntas generales/banco libre
        questionRepository: {
            getAllExams: () => examCatalog,
            getExamById: (id) => examCatalog.find(e => e.id === id),
            addExam: (newExam) => examCatalog.push(newExam)
        }
    };
})();
