# ControlOfTabsSalesforce


Aplicación construida con **Salesforce DX** y **Lightning Web Components (LWC)** para gestionar el control de pestañas (tabs) dentro de una **Console App** de Salesforce.  
Este proyecto usa como ejemplo el contexto de **related cases** para ilustrar cómo abrir, cerrar o navegar entre pestañas asociadas a registros de casos relacionados.

---

## Descripción general

ControlOfTabsSalesforce permite que, desde una consola en Salesforce, se tenga un control programático sobre las pestañas abiertas (por ejemplo, abrir un case relacionado, cerrar pestañas antiguas, cambiar el enfoque de la pestaña) bajo lógica personalizada.  
El ejemplo principal está centrado en **tabs de casos relacionados (“related cases”)**, facilitando que el usuario navegue entre casos vinculados de forma más fluida.

Este proyecto demuestra:

- Integración entre LWC y la API de pestañas de consola de Salesforce.  
- Lógica contextual basada en relaciones entre registros (casos relacionados).  
- Buenas prácticas de estructura, modularidad y mantenimiento.

---

## Características

- Control de pestañas (abrir, cerrar, cambiar foco) dentro de una consola.  
- Funcionalidad específica para “related cases” (casos relacionados).  
- API de pestañas de consola usada dentro de LWC.  
- Modularidad para extender a otros objetos más allá de casos.  
- Compatible con despliegues en Salesforce DX.

---

## Tecnologías y herramientas

| Tecnología | Uso |
|------------|-----|
| Salesforce DX (SFDX) | Proyecto, despliegue y manejo de orgs |
| Lightning Web Components (LWC) | Interfaz cliente y lógica del componente |
| JavaScript (ES6+) | Lógica, llamadas a APIs de consola |
| API de consola de Salesforce | Control de pestañas en la interfaz de consola |
| Node.js & npm | Dependencias y scripts auxiliares |
| Husky & linter | Control de calidad en commits y código |

---

## Estructura del repositorio

```bash
ControlOfTabsSalesforce/
├── .husky/                # Hooks de git
├── .vscode/               # Configuración del editor
├── config/                # Configuración del proyecto (scratch-def, etc.)
├── force-app/             # Código principal Salesforce (LWC, Apex si aplica)
├── manifest/              # Archivos de manifiesto (package.xml, etc.)
├── scripts/               # Scripts auxiliares
├── sfdx-project.json      # Configuración del proyecto SFDX
├── package.json           # Dependencias npm
└── README.md              # Documentación principal
