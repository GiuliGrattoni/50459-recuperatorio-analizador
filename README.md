# Analizador de Comandos - tarea ANTLR4 + JavaScript

Este proyecto implementa un **analizador léxico, sintáctico e intérprete** para un lenguaje simple de comandos personalizado, solicitado en la tarea "construcción analizador" de la materia **Sintaxis y Semántica de los Lenguajes**.

---

##  Estructura de Comandos Reconocidos

Un comando válido puede tener:

- Un **prefijo**: `!`, `#`, `|`, `&`
- Un **nombre de comando**
- Cero o más **argumentos posicionales**
- Cero o más **argumentos opcionales** (al estilo `--opcion=valor`)

###  Ejemplo de comando válido indicado en la solicitación de tema:

```bash
! saludar @ana --modo=formal