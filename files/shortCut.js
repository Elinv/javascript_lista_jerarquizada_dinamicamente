var arrGlobalElinv = [];

let estilo = '<span style="color:red"><b>';

shortCutList = [

    ['SET ORIGIN                                 scestilo            CTRL + ALT + X scestiloEnd', '0'],
    ['CAMARA MODOS DE VISION                     scestilo            ALT + Q', '0'],
    ['ESPACIOS DE TRABAJO VISTAS                 scestilo            BARRA INVERTIDA => \\', '0'],
    ['ESPACIOS DE TRABAJO                        scestilo            CTRL + ALT + S', '0'],
    ['SAVE OPEN                                  scestilo            CTRL + S', '0'],

    ['VENTANA DE BUSQUEDA                        scestilo            F3', '0'],
    ['VENTANAS INDEPENDIENTES                    scestilo            SHIFT + ARRASTRAR PUNTERO DESDE EL BORDE', '0'],

    ['MATERIALES MODOS DE VISION                 scestilo            Z', '0'],
    ['MODOS DE EDICION                           scestilo            CTRL + TAB', '0'],
    ['COLECCIONES MANEJO                         scestilo            MM', '0'],
    ['FAVORITOS QUICK                            scestilo            Q', '0'],
    ['CONTEXT MENU FILE IMPORT                   scestilo            F2', '0'],
    ['CONTEXT MENU PREFERENCES                   scestilo            F4', '0'],
    ['PANTALLA COMPLETA                          scestilo            CTRL + ALT + BARRA ESPACIADORA', '0'],
    ['PANTALLA MAXIMIZADA                        scestilo            CTRL + BARRA ESPACIADORA', '0'],
    ['PANTALLA CUATROS VISTAS ESPACIO TRABAJO    scestilo            CTRL + ALT + Q', '0'],
    ['PANTALLA SET CAMERA CURRENT VIEW           scestilo            CTRL + ALT + 0', '0'],
    ['MODO RAYOS X                               scestilo            ALT + Z', '0'],
    ['MODO WIREFRAME                             scestilo            SHIFT + Z', '0'],
    ['MODO MOSTRAR OCULTAR OVERLAYS              scestilo            ALT + SHIFT + Z', '0'],
    ['AJUSTAR GRILLA                             scestilo            SHIFT + S', '0'],

    ['SELECCION MODOS                            scestilo            A', '0'],
    ['SELECCION CURSOR ACTIVE SELECT             scestilo            SHIFT + S', '0'],
    ['SELECCION ~~~ SELECCIONAR                   scestilo           A', '0'],
    ['SELECCION ~~~ DESELECCIONA                  scestilo           AA', '0'],
    ['SELECCION ~~~ SELECCIONAR ELIGIENDO         scestilo           B', '0'],
    ['SELECCION ~~~ SELECCION CARMBIAR MODOS      scestilo           W', '0'],

    ['JOIN MERGE UNIR ELEMENTOS                  scestilo            ALT + M', '0'],
    ['JOIN AGRUPAR ELEMENTOS                     scestilo            CTRL + J', '0'],
    ['JOIN DESAGRUPAR ELEMENTOS                  scestilo            P', '0'],
    ['MERGE JOIN VERTICES                        scestilo            ALT + Y + BOTON DERECHO MOUSE', '0'],

    ['CREAR CERRAR CARAS                         scestilo            S o ENTER', '0'],
    ['CREAR CERRAR CARAS                         scestilo            F', '0'],

    ['VISOR 3D ~~~ VER MENÚ PIE                   scestilo           Ñ', '0'],
    ['VISOR 3D ~~~ CENTRAR SELECCIÓN              scestilo           .', '0'],
    ['VISOR 3D ~~~ MAXIMIZAR ÁREAS                scestilo           CTRL + ESPACIO', '0'],
    ['VISOR 3D ~~~ PANTALLA COMPLETA              scestilo           CTRL + ALT + ESPACIO', '0'],
    ['VISOR 3D ~~~ MODO X-RAY                     scestilo           ALT + Z', '0'],
    ['VISOR 3D ~~~ MODO WIREFRAME                 scestilo           SHIFT + Z', '0'],
    ['VISOR 3D ~~~ MENÚ PIE DE SHADING            scestilo           Z', '0'],
    ['VISOR 3D ~~~ CAMBIAR VISTA A EJES           scestilo           ALT + MMB', '0'],

    ['VISOR 3D ~~~ VISTA SUPERIOR                 scestilo           7 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA FRONTAL                  scestilo           1 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA DERECHA                  scestilo           3 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA INFERIOR                 scestilo           CTRL + 7 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA TRASERA                  scestilo           CTRL + 1 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA IZQUIERDA                scestilo           CTRL + 3 TECLADO NUMÉRICO', '0'],
    ['VISOR 3D ~~~ VISTA NAVEGACIÓN WALK          scestilo           SHIFT + Ñ', '0'],

    ['TRANSFORMACIÓN ~~~ Trasladar / Mover        scestilo           G', '0'],
    ['TRANSFORMACIÓN ~~~ Trasladar eje global     scestilo           G + X/Y/Z', '0'],
    ['TRANSFORMACIÓN ~~~ Trasladar eje local      scestilo           G + XX/YY/ZZ', '0'],
    ['TRANSFORMACIÓN ~~~ Escalar                  scestilo           S', '0'],
    ['TRANSFORMACIÓN ~~~ Escalar eje global       scestilo           S + X/Y/Z', '0'],
    ['TRANSFORMACIÓN ~~~ Escalar eje local        scestilo           S + XX/YY/ZZ', '0'],
    ['TRANSFORMACIÓN ~~~ Rotar                    scestilo           R', '0'],
    ['TRANSFORMACIÓN ~~~ Rotación libre           scestilo           RR', '0'],
    ['TRANSFORMACIÓN ~~~ Duplicar                 scestilo           Shift + D', '0'],
    ['TRANSFORMACIÓN ~~~ Duplicar Link            scestilo           Alt + D', '0'],
    ['TRANSFORMACIÓN ~~~ Aplicar transformación   scestilo           Ctrl + A', '0'],
    ['TRANSFORMACIÓN ~~~ Resetear posición        scestilo           Alt + G', '0'],
    ['TRANSFORMACIÓN ~~~ Resetear rotación        scestilo           Alt + R', '0'],
    ['TRANSFORMACIÓN ~~~ Resetear escalado        scestilo           Alt + S', '0'],
    ['TRANSFORMACIÓN ~~~ Menú Pie de Snapping     scestilo           Shift + TAB', '0']
];
    