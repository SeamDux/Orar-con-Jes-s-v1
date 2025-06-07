import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import { useState } from 'react';

interface Oracion {
  id: string;
  titulo: string;
  texto: string;
}

export default function AccionGraciasPage() {
  const [oracionSeleccionada, setOracionSeleccionada] = useState<Oracion | null>(null);

  const oraciones: Oracion[] = [
    {
      id: 'santo-tomas',
      titulo: 'Oración de Santo Tomás de Aquino',
      texto: 'Gracias te doy,\nSeñor Santo, Padre todopoderoso,\nDios eterno, porque a mí, pecador,\n\n' +
             'indigno siervo tuyo,\nsin mérito alguno de mi parte,\nsino por pura concesión de tu misericordia,\n' +
             'te has dignado alimentarme\ncon el precioso Cuerpo y Sangre\nde tu Unigénito Hijo\n' +
             'mi Señor Jesucristo.\n\n' +
             'Suplícote, que esta Sagrada Comunión\nno me sea ocasión de castigo,\n' +
             'sino intercesión saludable para el perdón;\nsea armadura de mi fe,\n' +
             'escudo de mi voluntad,\nmuerte de todos mis vicios,\n' +
             'exterminio de todos mis carnales apetitos,\ny aumento de caridad, paciencia y verdadera humildad,\n' +
             'y de todas las virtudes:\nsea perfecto sosiego de mi cuerpo y de mi espíritu,\n' +
             'firme defensa contra todos mis enemigos\nvisibles e invisibles,\n' +
             'perpetua unión contigo,\núnico y verdadero Dios,\n' +
             'y sello de mi muerte dichosa.\n\n' +
             'Ruégote, que tengas por bien\nllevar a este pecador a aquel convite inefable,\n' +
             'donde Tú, con tu Hijo y el Espíritu Santo,\neres para tus santos luz verdadera,\n' +
             'satisfacción cumplida,\ngozo perdurable,\ndicha consumada y felicidad perfecta.\n' +
             'Por el mismo Cristo Nuestro Señor. Amén.'
    },
    {
      id: 'seate-grato',
      titulo: 'Séate Grato (para sacerdotes)',
      texto: 'Séate grato, ¡oh Trinidad Santa!,\n' +
             'el obsequio de tu siervo,\n' +
             'y haz que el sacrificio que yo, indigno,\n' +
             'he ofrecido a los ojos de tu majestad,\n' +
             'sea de tu agrado,\n' +
             'y para mí, y para todos aquellos\n' +
             'por quienes lo he ofrecido,\n' +
             'sea, por tu misericordia, propiciatorio.\n' +
             'Por Cristo nuestro Señor. Amén.'
    },
    {
      id: 'alma-cristo',
      titulo: 'Alma de Cristo (San Ignacio de Loyola)',
      texto: 'Alma de Cristo, santifícame.\n' +
             'Cuerpo de Cristo, sálvame.\n' +
             'Sangre de Cristo, embriágame.\n' +
             'Agua del costado de Cristo, lávame.\n' +
             'Pasión de Cristo, confórtame.\n' +
             '¡Oh, buen Jesús!, óyeme.\n' +
             'Dentro de tus llagas, escóndeme.\n' +
             'No permitas que me aparte de Ti.\n' +
             'Del maligno enemigo, defiéndeme.\n' +
             'En la hora de mi muerte, llámame.\n' +
             'Y mándame ir a Ti.\n' +
             'Para que con tus santos te alabe.\n' +
             'Por los siglos de los siglos. Amén.'
    },
    {
      id: 'san-francisco',
      titulo: 'Oraciones de San Francisco de Asís',
      texto: 'Señor, Tú lo eres todo y yo no soy nada.\n' +
             'Tú eres el Creador de todas las cosas,\n' +
             'Tú el que conservas todo el universo, y yo no soy nada.\n' +
             'Señor, hazme instrumento de tu paz:\n' +
             'Donde haya odio, siembre yo amor;\n' +
             'donde haya injuria, perdón;\n' +
             'donde haya duda, fe;\n' +
             'donde haya tristeza, alegría;\n' +
             'donde haya desaliento, esperanza;\n' +
             'donde haya oscuridad, tu luz.\n' +
             '¡Oh, Divino Maestro!,\n' +
             'que no busque ser consolado, sino consolar;\n' +
             'que no busque ser querido, sino amar;\n' +
             'que no busque ser comprendido, sino comprender;\n' +
             'porque dando es como recibimos;\n' +
             'perdonando es como Tú nos perdonas;\n' +
             'y muriendo en Ti, es como nacemos a la vida eterna.'
    },
    {
      id: 'crucifijo',
      titulo: 'Oración ante el Crucifijo\n(Indulgencia plenaria los viernes de Cuaresma)',
      texto: 'Mírame, ¡oh, mi amado y buen Jesús!,\n' +
             'postrado en tu presencia;\n' +
             'te ruego con el mayor fervor\n' +
             'imprimas en mi corazón\n' +
             'vivos sentimientos de fe, esperanza y caridad,\n' +
             'verdadero dolor de mis pecados\n' +
             'y firmísimo propósito de jamás ofenderte;\n\n' +
             'mientras que yo,\n' +
             'con el mayor afecto y compasión de que soy capaz,\n' +
             'voy considerando y contemplando\n' +
             'tus cinco llagas,\n' +
             'teniendo presente lo que de Ti,\n' +
             'mi buen Jesús,\n' +
             'dijo el Profeta David:\n' +
             '"Han taladrado mis manos y mis pies\n' +
             'y se pueden contar todos mis huesos". (Salmo 21, 17-18)'
    },
    {
      id: 'virgen',
      titulo: 'Oración a la Virgen Santísima',
      texto: 'María, Virgen y Madre Santísima,\n' +
             'he recibido a tu Hijo amadísimo,\n' +
             'que concebiste en tus inmaculadas entrañas,\n' +
             'alimentaste con tu pecho\n' +
             'y estrechaste amorosamente entre tus brazos.\n' +
             'Al mismo que te alegraba contemplar\n' +
             'y te llenaba de gozo;\n' +
             'con amor y humildad te lo presento y te lo ofrezco,\n' +
             'para que lo abraces, lo ames con tu corazón\n' +
             'y lo ofrezcas a la Santísima Trinidad\n' +
             'en culto supremo de adoración,\n' +
             'por tu honor y por tu gloria\n' +
             'y por mis necesidades y por las de todo el mundo.\n' +
             'Te ruego, piadosísima Madre,\n' +
             'que me alcances el perdón de mis pecados\n' +
             'y gracia abundante para servirte,\n' +
             'de hoy en adelante, con mayor fidelidad;\n' +
             'y por último, la gracia de la perseverancia final,\n' +
             'para que pueda alabarte contigo\n' +
             'por los siglos de los siglos. Amén.'
    },
    {
      id: 'san-jose',
      titulo: 'Oración a San José',
      texto: 'Custodio y padre de vírgenes, San José,\n' +
             'a cuya fiel custodia fueron encomendadas\n' +
             'la misma inocencia, Cristo Jesús,\n' +
             'y la Virgen de las vírgenes, María.\n' +
             'Por estas dos queridísimas prendas,\n' +
             'Jesús y María,\n' +
             'te ruego y te suplico me alcances que,\n' +
             'preservado de toda impureza,\n' +
             'sirva siempre con alma limpia,\n' +
             'corazón puro y cuerpo casto\n' +
             'a Jesús y a María. Amén.'
    },
    {
      id: 'san-miguel',
      titulo: 'Oración a San Miguel Arcángel',
      texto: 'San Miguel Arcángel, defiéndenos en la batalla;\n' +
             'sé nuestro amparo contra la perversidad y asechanzas del demonio: Reprímale\n' +
             'Dios, pedimos suplicantes, y tú, Príncipe de la milicia celestial,\n' +
             'arroja al infierno, con el divino poder, a Satanás y a los otros\n' +
             'espíritus malignos que andan dispersos por el mundo para la\n' +
             'perdición de las almas. Amén.'
    },
    {
      id: 'letanias',
      titulo: 'Letanías de la Humildad',
      texto: 'Letanía de la humildad\n\nQue el Cardenal Merry del Val solía recitar después de celebrar la Santa Misa.\n\nOh Jesús, manso\ny humilde de corazón, Escucha mi plegaria\nDel deseo de sentirme apreciado, Líbrame Jesús\nDel deseo de sentirme amado,\nDel deseo de ser ensalzado,\nDel deseo de ser elogiado,\nDel deseo de ser alabado,\nDel deseo de ser preferido,\nDel deseo de ser consultado,\nDel deseo de ser aplaudido,\nDel temor a la humillación,\nDel temor al desprecio,\nDel temor al reproche,\nDel temor a la calumnia,\nDel temor al olvido,\nDel temor al ridículo,\nDel temor al agravio,\nDel temor al recelo,\nQue los demás sean\nmás amados que yo, Ayúdame, Jesús, a desearlo\nQue los demás se sean\nmás apreciados que yo,\nQue los demás crezcan\ny yo disminuya a los ojos del mundo,\nQue los demás sean alabados\ny yo pase oculto,\nQue los demás sean preferidos\na mí en todo,\nQue los demás sean más santos que yo,\nsiempre que yo alcance la santidad que Tú quieres.\n'
    }
  ];

  if (oracionSeleccionada) {
    return (
      <>
        <Stack.Screen 
          options={{
            title: oracionSeleccionada.titulo,
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerBackTitle: 'Atrás'
          }}
        />
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.tituloOracion}>{oracionSeleccionada.titulo}</Text>
            <Text style={styles.textoOracion}>{oracionSeleccionada.texto}</Text>
            <Pressable
              style={styles.botonVolver}
              onPress={() => setOracionSeleccionada(null)}
            >
              <Text style={styles.textoBotonVolver}>Volver a la lista</Text>
            </Pressable>
          </View>
        </ScrollView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Acción de Gracias',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {oraciones.map((oracion) => (
            <Pressable
              key={oracion.id}
              style={styles.opcion}
              onPress={() => setOracionSeleccionada(oracion)}
            >
              <Text style={styles.opcionTexto}>{oracion.titulo}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  opcion: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  opcionTexto: {
    color: Colors.primary,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tituloOracion: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  textoOracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 30,
  },
  botonVolver: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoBotonVolver: {
    color: Colors.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
}); 