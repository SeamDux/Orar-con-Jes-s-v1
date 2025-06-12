import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, TextInput, Pressable, Keyboard } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Definir la estructura de los elementos de búsqueda
interface SearchItem {
  title: string;
  route: string;
  category: string;
  keywords: string[];
}

// Base de datos de búsqueda
const searchData: SearchItem[] = [
  // Santa Misa
  {
    title: 'Santa Misa',
    route: '/santa-misa',
    category: 'Liturgia',
    keywords: ['misa', 'eucaristia', 'liturgia', 'sacrificio', 'comunion', 'cuerpo cristo', 'sangre cristo']
  },
  {
    title: 'Ordinario de la Misa',
    route: '/santa-misa/ordinario',
    category: 'Liturgia',
    keywords: ['ordinario', 'misa', 'oracion']
  },
  {
    title: 'Preparación',
    route: '/santa-misa/preparacion',
    category: 'Liturgia',
    keywords: ['preparacion', 'misa', 'oracion']
  },
  {
    title: 'Accion de gracias',
    route: '/santa-misa/accion-gracias',
    category: 'Liturgia',
    keywords: ['accion', 'misa', 'gracias']
  },
  {
    title: 'Ritos Iniciales',
    route: '/santa-misa/ritos-iniciales',
    category: 'Liturgia',
    keywords: ['ritos', 'iniciales', 'misa', 'comienzo', 'entrada']
  },
  {
    title: 'Liturgia de la Palabra',
    route: '/santa-misa/liturgia-palabra',
    category: 'Liturgia',
    keywords: ['palabra', 'lecturas', 'evangelio', 'homilia', 'profesion fe']
  },
  {
    title: 'Liturgia Eucarística',
    route: '/santa-misa/liturgia-eucaristica',
    category: 'Liturgia',
    keywords: ['eucaristia', 'ofrendas', 'consagracion', 'padre nuestro', 'comunion']
  },
  {
    title: 'Ritos de Despedida',
    route: '/santa-misa/ritos-despedida',
    category: 'Liturgia',
    keywords: ['despedida', 'bendicion', 'envio', 'final', 'misa']
  },

  // Las virtudes
  {
    title: 'Teologales',
    route: '/virtudes/teologales',
    category: 'Virtudes',
    keywords: ['teologales', 'fe', 'esperanza', 'caridad']
  },
  {
    title: 'Cardinales',
    route: '/virtudes/cardinales',
    category: 'Virtudes',
    keywords: ['cardinales', 'prudencia', 'justicia', 'fortaleza', 'templanza', 'moral']
  },
  {
    title: 'Las bienaventuranzas',
    route: '/virtudes/bienaventuranzas',
    category: 'Virtudes',
    keywords: ['bienaventuranza', 'bendito', 'sermon']
  },
  {
    title: 'Obras de misericordia',
    route: '/virtudes/misericordia',
    category: 'Vritudes',
    keywords: ['obras', 'misericordia', 'corporales', 'espirituales']
  },
  {
    title: 'Obras Corporales',
    route: '/virtudes/misericordia',
    category: 'Virtudes',
    keywords: ['obras', 'misericordia', 'corporales', 'espirituales']
  },
  {
    title: 'Obras espirituales',
    route: '/virtudes/misericordia',
    category: 'Virtudes',
    keywords: ['obras', 'misericordia', 'corporales', 'espirituales']
  },
  {
    title: 'Pecados mortales, veniales y capitales',
    route: '/virtudes/pecados',
    category: 'Virtudes',
    keywords: ['falta', 'pecados', 'ofensa a Dios']
  },
  {
    title: 'La diversidad de pecados',
    route: '/virtudes/diversidad-pecados',
    category: 'Vritudes',
    keywords: ['pecados', 'pecados capitales', 'pecados mortales', ' pecados veniales', 'perdon', 'virtud opuesta']
  },

  // Novenas
  {
    title: 'Al Niño Dios',
    route: '/novenas/niño-dios',
    category: 'Novenas',
    keywords: ['navidad', 'niño dios', 'navidad', 'novena']
  },
  {
    title: 'Novena a San José',
    route: '/novena/san-jose',
    category: 'Novena',
    keywords: ['san jose', 'novena', 'oracion']
  },



  // Santoral
  {
    title: 'Santoral',
    route: '/santoral',
    category: 'Devociones',
    keywords: ['santos', 'santoral', 'vidas', 'ejemplos', 'testigos', 'fe']
  },

  // Oraciones de Siempre
  {
    title: 'Oraciones de Siempre',
    route: 'oraciones',
    category: 'Oraciones de Siempre',
    keywords: ['rezar', 'oracion', 'rosario', 'maría', 'vocaciones']
  },

  // La vida cristiana
  {
    title: 'La vida Cristiana',
    route: '/vida-cristiana',
    category: 'Vida cristiana',
    keywords: ['vida', 'cristiana', 'catecismo']
  },
  {
    title: 'Buscar, encontrar y amar a Cristo',
    route: '/vida-cristiana/buscar-cristo',
    category: 'Vida cristiana',
    keywords: ['cristo', 'buscar', 'encontrar', 'amar', 'llamado a la santidad']
  },
  {
    title: 'Vida de oración, sacrificio y trabajo',
    route: '/vida-cristiana/vida-oracion',
    category: 'Vida cristiana',
    keywords: ['cristo', 'buscar', 'encontrar', 'amar', 'llamado a la santidad', 'oración', 'sacrificio', 'trabajo']
  },
  {
    title: 'La vida espiritual',
    route: '/vida-cristiana/vida-espiritual',
    category: 'Vida cristiana',
    keywords: ['cristo', 'gracia', 'amar', 'llamado a la santidad', 'ofrecimiento']
  },
  {
    title: 'Devociones durante la semana',
    route: '/vida-cristiana/devociones-semana',
    category: 'Vida cristiana',
    keywords: ['devociones', 'semana', 'santisima trinidad', 'purgatorio', 'angeles', 'jose', 'eucaristia', 'muerte', 'maria']
  },
  {
    title: 'Dias de penitencia, las indulgencias',
    route: '/vida-cristiana/penitencia',
    category: 'Vida cristiana',
    keywords: ['indulgencia', 'penitencia', 'indulgencia plenaria', 'remision', 'ayuno', 'abstinencia']
  },

  // Calendario Litúrgico
  {
    title: 'Calendario Litúrgico de Chile',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['calendario', 'liturgico', 'chile', 'fechas', 'celebraciones', 'tiempos liturgicos']
  },
  {
    title: 'Año Litúrgico',
    route: '/calendario/anio',
    category: 'Liturgia',
    keywords: ['año liturgico', 'tiempos', 'liturgicos', 'adviento', 'navidad', 'cuaresma', 'pascua', 'ordinario', 'ciclo']
  },
  {
    title: 'Solemnidades y Fiestas',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['solemnidades', 'fiestas', 'celebraciones', 'importantes', 'liturgia']
  },
  {
    title: 'Memorias y Ferias',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['memorias', 'ferias', 'dias', 'semana', 'liturgia']
  },


  // Oracion del Jubileo 2025

  {
    title: 'Oracion del Jubileo de la Esperanza 2025',
    route: '(app)/jubileo',
    category: 'Jubileo 2025',
    keywords: ['indulgencia', 'jubileo', 'esperanza']
  },


  // Oraciones por los Difuntos
  {
    title: 'Letanías para la Buena Muerte',
    route: '/oraciones-difuntos/letanias',
    category: 'Oraciones por los Difuntos',
    keywords: ['letanias', 'muerte', 'difuntos', 'oracion']
  },
  {
    title: 'Invocaciones Breves',
    route: '/oraciones-difuntos/invocaciones',
    category: 'Oraciones por los Difuntos',
    keywords: ['invocaciones', 'breves', 'difuntos', 'oracion']
  },
  {
    title: 'Lecturas Bíblicas',
    route: '/oraciones-difuntos/lecturas',
    category: 'Oraciones por los Difuntos',
    keywords: ['lecturas', 'biblia', 'difuntos', 'oracion']
  },
  {
    title: 'Preces para la recomendación del alma',
    route: '/oraciones-difuntos/recomendacion',
    category: 'Oraciones por los Difuntos',
    keywords: ['recomendacion', 'alma', 'preces', 'oracion']
  },
  {
    title: 'En el momento de expirar',
    route: '/oraciones-difuntos/expirar',
    category: 'Oraciones por los Difuntos',
    keywords: ['expirar', 'momento', 'difuntos', 'oracion']
  },
  {
    title: 'Despues de la Muerte',
    route: '/oraciones-difuntos/despues',
    category: 'Oraciones por los Difuntos',
    keywords: ['muerte', 'responso', 'difuntos', 'oracion']
  },
  {
    title: 'Vigilia por el Difunto',
    route: '/oraciones-difuntos/vigilia',
    category: 'Oraciones por los Difuntos',
    keywords: ['vigilia', 'final', 'difuntos', 'oracion']
  },
  {
    title: 'Responso',
    route: '/oraciones-difuntos/responsos',
    category: 'Oraciones por los Difuntos',
    keywords: ['responso', 'liturgia', 'difuntos', 'oracion']
  },
  {
    title: 'Responso II',
    route: '/oraciones-difuntos/responso-dos',
    category: 'Oraciones por los Difuntos',
    keywords: ['responso', 'liturgia', 'difuntos', 'oracion']
  },
  {
    title: 'Preces en el cementerio y bendicion del sepulcro',
    route: '/oraciones-difuntos/cementerio',
    category: 'Oraciones por los Difuntos',
    keywords: ['responso', 'liturgia', 'difuntos', 'oracion', 'cementerio']
  },
  {
    title: 'Exorcismos',
    route: '/oraciones-difuntos/cementerio',
    category: 'Oraciones por los Difuntos',
    keywords: ['cementerio', 'liturgia', 'difuntos', 'oracion']
  },

  // Devociones para moribundos
  {
    title: 'A San José, para pedir una buena muerte',
    route: '/devociones-moribundo/jose',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['san jose', 'moribundo', 'oracion', 'devocion']
  },
  {
    title: 'Unción de los enfermos',
    route: '/devociones-moribundo/uncion',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['uncion', 'enfermos', 'moribundo', 'sacramento']
  },
  {
    title: 'Acto Penitencial',
    route: '/devociones-moribundo/penitencial',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['perdon', 'penitencial', 'oracion', 'devocion']
  },
  {
    title: 'Liturgia de la Palabra',
    route: '/devociones-moribundo/palabra',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['lecturas', 'enfermos', 'moribundo', 'sacramento']
  },
  {
    title: 'Liturgia del Sacramento',
    route: '/devociones-moribundo/sacramento',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['enfermo', 'uncion', 'sacramento', 'devocion']
  },
  {
    title: 'Aceptacion de la Muerte',
    route: '/devociones-moribundo/aceptacion',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['aceptacion', 'moribundo', 'oracion', 'devocion']
  },
  {
    title: 'Preparación para el momento de la muuerte',
    route: '/devociones-moribundo/preparacion',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['preparacion', 'moribundo', 'oracion', 'devocion']
  },
  {
    title: 'Para obtener una buena muerte',
    route: '/devociones-moribundo/buena-muerte',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['buena muerte', 'oracion', 'devocion']
  },

  // Sacramentos
  {
    title: 'Bautismo',
    route: '/sacramentos/bautismo',
    category: 'Sacramentos',
    keywords: ['bautismo', 'sacramento', 'iniciacion', 'cristiana']
  },
  {
    title: 'Confirmación',
    route: '/sacramentos/confirmacion',
    category: 'Sacramentos',
    keywords: ['confirmacion', 'sacramento', 'espiritu santo', 'iniciacion']
  },
  {
    title: 'Eucaristía',
    route: '/sacramentos/eucaristia',
    category: 'Sacramentos',
    keywords: ['eucaristia', 'comunion', 'sacramento', 'cuerpo cristo']
  },
  {
    title: 'Reconciliación',
    route: '/sacramentos/reconciliacion',
    category: 'Sacramentos',
    keywords: ['reconciliacion', 'confesion', 'penitencia', 'perdon']
  },
  {
    title: 'Unción de los Enfermos',
    route: '/sacramentos/uncion',
    category: 'Sacramentos',
    keywords: ['uncion', 'enfermos', 'sacramento', 'sanacion']
  },
  {
    title: 'Orden',
    route: '/sacramentos/orden',
    category: 'Sacramentos',
    keywords: ['orden', 'sacerdocio', 'sacramento', 'ministerio']
  },
  {
    title: 'Matrimonio',
    route: '/sacramentos/matrimonio',
    category: 'Sacramentos',
    keywords: ['matrimonio', 'sacramento', 'esposos', 'familia']
  },


  // Noticias de la Diocesis
  {
    title: 'Noticias de la Diocesis',
    route: '/noticias',
    category: 'Diocesis de San Bernardo',
    keywords: ['noticias', 'san bernardo']
  },

  // Liturgia de las horas
  
  {
    title: 'Laudes',
    route: '/liturgia/laudes',
    category: 'Liturgia de las horas',
    keywords: ['laudes', 'completas', 'visperas', 'oracion de mañana', 'oracion de la noche', 'oracion de la tarde']
  },
  {
    title: 'Liturgia de las Horas del día en Audio',
    route: '/(app)/oficio-del-dia',
    category: 'Liturgia de las horas',
    keywords: ['laudes', 'completas', 'visperas', 'oracion de mañana', 'oracion de la noche', 'oracion de la tarde']
  },
  {
    title: 'Vísperas',
    route: '/liturgia/visperas',
    category: 'Liturgia de las horas',
    keywords: ['laudes', 'completas', 'visperas', 'oracion de mañana', 'oracion de la noche', 'oracion de la tarde']
  },
  {
    title: 'Completas',
    route: '/liturgia/completas',
    category: 'Liturgia de las horas',
    keywords: ['laudes', 'completas', 'visperas', 'oracion de mañana', 'oracion de la noche', 'oracion de la tarde']
  },

  // Confesion Sacramental

  {
    title: 'Examen de Conciencia',
    route: '/confesion/examen',
    category: 'Confesión Sacramental',
    keywords: ['examen', 'conciencia']
  },
  {
    title: 'Antes de Confesarse',
    route: '/confesion/antes',
    category: 'Confesión Sacramental',
    keywords: ['examen', 'conciencia','confesion','absolucion']
  },
  {
    title: 'Confesion de los Pecados',
    route: '/confesion/confesion',
    category: 'Confesión Sacramental',
    keywords: ['examen', 'conciencia','confesion','absolucion']
  },

  // Resumen de Doctrina
  {
    title: 'Credo del Pueblo de Dios',
    route: '/resumen-doctrina/credo',
    category: 'Resumen de Doctrina',
    keywords: ['credo', 'fe', 'doctrina', 'creencia']
  },
  {
    title: 'Diez Mandamientos',
    route: '/resumen-doctrina/mandamientos',
    category: 'Resumen de Doctrina',
    keywords: ['mandamientos', 'ley', 'moral', 'decalogo']
  },
  {
    title: 'Mandamientos de la Iglesia',
    route: '/resumen-doctrina/mandamientos-iglesia',
    category: 'Resumen de Doctrina',
    keywords: ['mandamientos', 'iglesia', 'preceptos', 'ley']
  },


  // Adoracion al Santisimo

  {
    title: 'Adoro te Devote',
    route: '/adoracion/adoro-te',
    category: 'Adoracion al Santisimo',
    keywords: ['adoracion', 'santisimo',]
  },
  {
    title: 'Quince Minutos con Jesús Sacramentado',
    route: '/adoracion/quince-minutos',
    category: 'Adoracion al Santisimo',
    keywords: ['adoracion', 'santisimo','meditacion']
  },
  {
    title: 'Visita al Santisimo Sacramento',
    route: '/adoracion/visita',
    category: 'Adoracion al Santisimo',
    keywords: ['adoracion', 'santisimo','meditacion','bendicion','reserva']
  },


  // Oraciones y Devociones
  {
    title: 'Oraciones de Siempre',
    route: '/oraciones',
    category: 'Oraciones',
    keywords: ['oraciones', 'rezos', 'devocion', 'piedad']
  },
  {
    title: 'Liturgia de las Horas',
    route: '/liturgia/index',
    category: 'Oraciones',
    keywords: ['liturgia', 'horas', 'oficio', 'divino']
  },
  {
    title: 'Lecturas del Día',
    route: '/evangelio',
    category: 'Oraciones',
    keywords: ['evangelio', 'lecturas', 'biblia', 'palabra']
  },
  {
    title: 'Oraciones de la Noche',
    route: '/oraciones-noche',
    category: 'Oraciones',
    keywords: ['noche', 'oraciones', 'completas', 'descanso']
  },
  {
    title: 'Santo del Día',
    route: '/santo',
    category: 'Devociones',
    keywords: ['santo', 'santos', 'devocion', 'ejemplo']
  },
  {
    title: 'Devociones al Espíritu Santo',
    route: '/devociones-espiritu',
    category: 'Devociones',
    keywords: ['espiritu santo', 'devociones', 'paraclito', 'consolador']
  },
  {
    title: 'Devociones a la Virgen María',
    route: '/devociones-maria',
    category: 'Devociones',
    keywords: ['maria', 'virgen', 'devociones', 'madre']
  },
  {
    title: 'Devociones a San José',
    route: '/devociones-jose',
    category: 'Devociones',
    keywords: ['jose', 'san jose', 'devociones', 'padre']
  },
  {
    title: 'Otras Bendiciones y Oraciones',
    route: '/bendiciones',
    category: 'Oraciones',
    keywords: ['bendiciones', 'oraciones', 'diversas', 'variadas']
  },
  {
    title: 'Devociones a Nuestro Señor Jesucristo',
    route: '/devociones-jesus',
    category: 'Devociones',
    keywords: ['jesus', 'hijo', 'devociones', 'corazón']
  },
  {
    title: 'Te Deum',
    route: '/trinidad/tedeum',
    category: 'Devociones a la Santísima Trinidad',
    keywords: ['espiritu santo', 'trinidad', 'devociones']
  },
  {
    title: 'Trisagio Angélico a la Santísima Trinidad',
    route: '/trinidad/tedeum',
    category: 'Devociones a la Santísima Trinidad',
    keywords: ['espiritu santo', 'trinidad', 'devociones', 'trisagio']
  },
  
  // Otras bendiciones y oraciones
  {
    title: 'Para un enfermo',
    route: '/bendiciones/enfermo',
    category: 'Otras bendiciones y oraciones',
    keywords: ['enfermo', 'bendicion', 'devociones']
  },
  {
    title: 'Para un niño enfermo',
    route: '/bendiciones/nino-enfermo',
    category: 'Otras bendiciones y oraciones',
    keywords: ['niño', 'enfermo', 'devociones']
  },
  {
    title: 'Por un enfermo en peligro grave',
    route: '/bendiciones/enfermo-grave',
    category: 'Otras bendiciones y oraciones',
    keywords: ['enfermo', 'peligro','grave','devociones']
  },
  {
    title: 'Por un enfermo agonizante',
    route: '/bendiciones/enfermo-agonizante',
    category: 'Otras bendiciones y oraciones',
    keywords: ['enfermo', 'agonizante','grave','devociones']
  },
  {
    title: 'Bendicion Papal "In articulo mortis"',
    route: '/bendiciones/in-articulo-mortis',
    category: 'Otras bendiciones y oraciones',
    keywords: ['bendicion', 'papal','articulo','devociones']
  },
  {
    title: 'Oracion de Santo Tomás antes de comenzar a estudiar',
    route: '/bendiciones/santo-tomas',
    category: 'Otras bendiciones y oraciones',
    keywords: ['estudio', 'santo tomas','antes','devociones']
  },
  {
    title: 'Oracion antes de conectarse a Internet',
    route: '/bendiciones/internet',
    category: 'Otras bendiciones y oraciones',
    keywords: ['internet', 'antes', 'devociones']
  },
  {
    title: 'Bendicion de la Mesa',
    route: '/bendiciones/mesa',
    category: 'Otras bendiciones y oraciones',
    keywords: ['mesa', 'bendicion', 'devociones']
  },
  {
    title: 'Bendicion de la corona de Adviento',
    route: '/bendiciones/corona-adviento',
    category: 'Otras bendiciones y oraciones',
    keywords: ['adviento', 'bendicion','corona','devociones']
  },
  {
    title: 'Bendicion del Pesebre',
    route: '/bendiciones/pesebre',
    category: 'Otras bendiciones y oraciones',
    keywords: ['pesebre', 'bendicion','navidad','devociones']
  },
  {
    title: 'Bendicion del Árbol de Navidad',
    route: '/bendiciones/arbol-navidad',
    category: 'Otras bendiciones y oraciones',
    keywords: ['navidad', 'presebre','bendicion','devociones']
  },
  {
    title: 'Rito Breve de la Bendicion de los que van a emprender un viaje',
    route: '/bendiciones/viaje',
    category: 'Otras bendiciones y oraciones',
    keywords: ['viaje', 'bendicion', 'devociones']
  },
  {
    title: 'Bendicion de un Vehículo',
    route: '/bendiciones/vehiculo',
    category: 'Otras bendiciones y oraciones',
    keywords: ['vehiculo', 'auto', 'transporte','devociones']
  },

  // Oraciones diversas
  {
    title: 'Oraciones diversas',
    route: '/oraciones-diversas/index',
    category: 'Oraciones diversas',
    keywords: ['oraciones', 'diversas']
  },
  {
    title: 'Oraciones a los santos y santas',
    route: '/oraciones-diversas/santos',
    category: 'Oraciones diversas',
    keywords: ['santos', 'oraciones', 'santas']
  },
  {
    title: 'Oraciones para diversas circunstancias',
    route: '/oraciones-diversas/circunstancias',
    category: 'Oraciones diversas',
    keywords: ['oraciones', 'diversas', 'circunstancias']
  },
  {
    title: 'San Bernardo de Claraval',
    route: '/oraciones-diversas/bernardo',
    category: 'Otras bendiciones y oraciones',
    keywords: ['san bernardo', 'oraciones', 'devociones']
  },
  {
    title: 'Santa Teresa de Jesús de los Andes',
    route: '/oraciones-diversas/teresa-andes',
    category: 'Oraciones diversas',
    keywords: ['teresita', 'santa teresa de los andes', 'chile']
  },
  {
    title: 'San Alberto Hurtado',
    route: '/oraciones-diversas/alberto-hurtado',
    category: 'Oraciones diversas',
    keywords: ['alberto', 'hurtado', 'san alberto', 'chile']
  },
  {
    title: 'Por el Papa',
    route: '/oraciones-diversas/papa',
    category: 'Oraciones diversas',
    keywords: ['papa', 'iglesia', 'oracion']
  },
  {
    title: 'Por el Obispo',
    route: '/oraciones-diversas/obispo',
    category: 'Oraciones diversas',
    keywords: ['obispo', 'iglesia', 'oracion']
  },
  {
    title: 'Por las autoridades civiles',
    route: '/oraciones-diversas/autoridades',
    category: 'Oraciones diversas',
    keywords: ['oraciones', 'autoridades', 'civiles']
  },
  {
    title: 'Por el presidente o gobernador',
    route: '/oraciones-diversas/presidente',
    category: 'Oraciones diversas',
    keywords: ['oraciones', 'presidente', 'gobernador', 'civil']
  },
  {
    title: 'Por la familia',
    route: '/oraciones-diversas/familia',
    category: 'Oraciones diversas',
    keywords: ['familia', 'padres', 'hijos']
  },
  {
    title: 'Por los familiares y amigos',
    route: '/oraciones-diversas/familiares-amigos',
    category: 'Oraciones diversas',
    keywords: ['familiares', 'amigos']
  },
  {
    title: 'Por los que nos hacen sufrir',
    route: '/oraciones-diversas/hacen-sufrir',
    category: 'Oraciones diversas',
    keywords: ['sufrir', 'diversas', 'amor']
  },
  {
    title: 'Por los privados de libertad',
    route: '/oraciones-diversas/privados-libertad',
    category: 'Oraciones diversas',
    keywords: ['prision', 'libertad', 'privados']
  },
  {
    title: 'Por los desempleados',
    route: '/oraciones-diversas/desempleados',
    category: 'Oraciones diversas',
    keywords: ['sin trabajo', 'desempleado', 'oracion']
  },
  {
    title: 'Por los enfermos',
    route: '/oraciones-diversas/enfermos',
    category: 'Oraciones diversas',
    keywords: ['enfermos', 'acompañamiento', 'circunstancias', 'oracion']
  },
  {
    title: 'Por los moribundos',
    route: '/oraciones-diversas/moribundos',
    category: 'Oraciones diversas',
    keywords: ['moribundos', 'diversas', 'circunstancias']
  },
  {
    title: 'Por una buena muerte',
    route: '/oraciones-diversas/buena-muerte',
    category: 'Oraciones diversas',
    keywords: ['buena muerte', 'diversas', 'circunstancias']
  },
  {
    title: 'Por la salud espiritual o física',
    route: '/oraciones-diversas/salud',
    category: 'Oraciones diversas',
    keywords: ['salud', 'espiritual', 'fisica']
  },


];

export default function BuscarScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setSuggestions([]);
      return;
    }

    const searchTerms = text.toLowerCase().split(' ');
    const filtered = searchData.filter(item => {
      const searchString = [
        item.title.toLowerCase(),
        item.category.toLowerCase(),
        ...item.keywords
      ].join(' ');

      return searchTerms.every(term => searchString.includes(term));
    });

    setSuggestions(filtered);
  }, []);

  const handleSuggestionPress = (item: SearchItem) => {
    setSearchQuery(item.title);
    setSuggestions([]);
    Keyboard.dismiss();
    router.push(item.route);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Buscar',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.text} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar oraciones, devociones..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={Colors.text}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          {searchQuery !== '' && (
            <Pressable onPress={() => handleSearch('')} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={Colors.text} />
            </Pressable>
          )}
        </View>

        {(isFocused || searchQuery !== '') && (
          <ScrollView 
            style={styles.suggestionsContainer}
            keyboardShouldPersistTaps="handled"
          >
            {suggestions.map((item, index) => (
              <Pressable
                key={index}
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(item)}
              >
                <Text style={styles.suggestionTitle}>{item.title}</Text>
                <Text style={styles.suggestionCategory}>{item.category}</Text>
              </Pressable>
            ))}
            {searchQuery !== '' && suggestions.length === 0 && (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>No se encontraron resultados</Text>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    margin: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: Colors.text,
  },
  clearButton: {
    padding: 8,
  },
  suggestionsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  suggestionItem: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  suggestionCategory: {
    fontSize: 14,
    color: Colors.text,
    opacity: 0.7,
  },
  noResults: {
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: Colors.text,
    opacity: 0.7,
  },
}); 