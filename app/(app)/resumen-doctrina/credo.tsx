import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CredoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'El Credo del Pueblo de Dios',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.title}>El Credo del Pueblo de Dios</Text>
            <Text style={styles.subtitle}>San Pablo VI, Papa</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Unidad y Trinidad de Dios</Text>
            <Text style={styles.text}>
              Creemos en un solo Dios, Padre, Hijo y Espíritu Santo, Creador de las cosas visibles —como es este mundo en que pasamos nuestra breve vida— y de las cosas invisibles —como son los espíritus puros, que llamamos también ángeles— y también Creador, en cada hombre, del alma espiritual e inmortal.
            </Text>
            <Text style={styles.text}>
              Creemos que este Dios único es tan absolutamente uno en su santísima esencia como en todas sus demás perfecciones: en su omnipotencia, en su ciencia infinita, en su providencia, en su voluntad y caridad. Él es el que es, como él mismo reveló a Moisés (cf. Ex 3,14), él es Amor, como nos enseña el apóstol Juan (cf. 1Jn 4,8): de tal manera que estos dos nombres, Ser y Amor, expresan inefablemente la misma divina esencia de aquel que quiso manifestarse a sí mismo a nosotros y que, "habitando en una luz inaccesible" (cf. 1Tim 6,16), está en sí mismo sobre todo nombre y sobre todas las cosas e inteligencias creadas. Solo Dios puede otorgarnos un conocimiento recto y pleno de sí mismo, revelándose a sí mismo como Padre, Hijo y Espíritu Santo, de cuya vida eterna estamos llamados por la gracia a participar, aquí, en la tierra, en la oscuridad de la fe y, después de la muerte, en la luz sempiterna. Los vínculos mutuos que constituyen a las tres personas desde toda la eternidad, cada una de las cuales es el único y mismo ser divino, son la vida íntima y dichosa del Dios santísimo, la cual supera infinitamente todo aquello que nosotros podemos entender de modo humano.
            </Text>
            <Text style={styles.text}>
              Sin embargo, damos gracias a la divina bondad de que tantísimos creyentes puedan testificar con nosotros ante los hombres la unidad de Dios, aunque no conozcan el misterio de la Santísima Trinidad.
            </Text>
            <Text style={styles.text}>
              Creemos, pues, en Dios, que en toda la eternidad engendra al Hijo; creemos en el Hijo, Verbo de Dios, que es engendrado desde la eternidad; creemos en el Espíritu Santo, persona increada, que procede del Padre y del Hijo como Amor sempiterno de ellos. Así, en las tres personas divinas, que son eternas entre sí e iguales entre sí, la vida y la felicidad de Dios enteramente uno abundan sobremanera y se consuman con excelencia suma y gloria propia de la esencia increada; y siempre hay que venerar la unidad en la trinidad y la trinidad en la unidad.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Cristología</Text>
            <Text style={styles.text}>
              Creemos en nuestro Señor Jesucristo, el Hijo de Dios. Él es el Verbo eterno, nacido del Padre antes de todos los siglos y consustancial al Padre, u homousios to Patri; por quien han sido hechas todas las cosas. Y se encarnó por obra del Espíritu Santo, de María la Virgen, y se hizo hombre: igual, por tanto, al Padre según la divinidad, menor que el Padre según la humanidad, completamente uno, no por confusión (que no puede hacerse) de la sustancia, sino por unidad de la persona.
            </Text>
            <Text style={styles.text}>
              El mismo habitó entre nosotros lleno de gracia y de verdad. Anunció y fundó el reino de Dios, manifestándonos en sí mismo al Padre. Nos dio su mandamiento nuevo de que nos amáramos los unos a los otros como él nos amó. Nos enseñó el camino de las bienaventuranzas evangélicas, a saber: ser pobres en espíritu y mansos, tolerar los dolores con paciencia, tener sed de justicia, ser misericordiosos, limpios de corazón, pacíficos, padecer persecución por la justicia. Padeció bajo Poncio Pilato; Cordero de Dios, que lleva los pecados del mundo, murió por nosotros clavado a la cruz, trayéndonos la salvación con la sangre de la redención. Fue sepultado, y resucitó por su propio poder al tercer día, elevándonos por su resurrección a la participación de la vida divina, que es la gracia. Subió al cielo, de donde ha de venir de nuevo, entonces con gloria, para juzgar a los vivos y a los muertos, a cada uno según los propios méritos: los que hayan respondido al amor y a la piedad de Dios irán a la vida eterna, pero los que los hayan rechazado hasta el final serán destinados al fuego que nunca cesará.
            </Text>
            <Text style={styles.sectionSubtitle}>Y su reino no tendrá fin</Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>El Espíritu Santo</Text>
            <Text style={styles.text}>
              Creemos en el Espíritu Santo, Señor y vivificador que, con el Padre y el Hijo, es juntamente adorado y glorificado. Que habló por los profetas; nos fue enviado por Cristo después de su resurrección y ascensión al Padre; ilumina, vivifica, protege y rige la Iglesia, cuyos miembros purifica con tal que no desechen la gracia. Su acción, que penetra lo íntimo del alma, hace apto al hombre de responder a aquel precepto de Cristo: "Sed perfectos como también es perfecto vuestro Padre celeste" (cf Mt 5,48).
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Mariología</Text>
            <Text style={styles.text}>
              Creemos que la bienaventurada María, que permaneció siempre Virgen, fue la Madre del Verbo encarnado, Dios y Salvador nuestro, Jesucristo y que ella, por su singular elección, en atención a los méritos de su Hijo redimida de modo más sublime, fue preservada inmune de toda mancha de culpa original y que supera ampliamente en don de gracia eximia a todas las demás criaturas.
            </Text>
            <Text style={styles.text}>
              Ligada por un vínculo estrecho e indisoluble al misterio de la encarnación y de la redención, la Beatísima Virgen María, Inmaculada, terminado el curso de la vida terrestre, fue asunta en cuerpo y alma a la gloria celeste, y hecha semejante a su Hijo, que resucitó de los muertos, recibió anticipadamente la suerte de todos los justos; creemos que la Santísima Madre de Dios, nueva Eva, Madre de la Iglesia, continúa en el cielo ejercitando su oficio materno con respecto a los miembros de Cristo, por el que contribuye para engendrar y aumentar la vida divina en cada una de las almas de los hombres redimidos.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Pecado original</Text>
            <Text style={styles.text}>
              Creemos que todos pecaron en Adán; lo que significa que la culpa original cometida por él hizo que la naturaleza, común a todos los hombres, cayera en un estado tal en el que padece las consecuencias de aquella culpa. Este estado ya no es aquel en el que la naturaleza humana se encontraba al principio en nuestros primeros padres, ya que estaban constituidos en santidad y justicia, y en el que el hombre estaba exento del mal y de la muerte. Así, pues, esta naturaleza humana, caída de esta manera, destituida del don de la gracia del que antes estaba adornada, herida en sus mismas fuerzas naturales y sometida al imperio de la muerte, es dada a todos los hombres; por tanto, en este sentido, todo hombre nace en pecado.
            </Text>
            <Text style={styles.text}>
              Mantenemos, pues, siguiendo al Concilio de Trento, que el pecado original se transmite, juntamente con la naturaleza humana, por propagación, no por imitación, y que se halla como propio en cada uno.
            </Text>
            <Text style={styles.text}>
              Creemos que nuestro Señor Jesucristo nos redimió, por el sacrificio de la cruz, del pecado original y de todos los pecados personales cometidos por cada uno de nosotros, de modo que se mantenga verdadera la afirmación del Apóstol: Donde abundó el pecado sobreabundó la gracia (cf Rom 5,20).
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>El Bautismo</Text>
            <Text style={styles.text}>
              Confesamos un solo bautismo instituido por nuestro Señor Jesucristo para el perdón de los pecados. Que el bautismo hay que conferirlo también a los niños, que todavía no han podido cometer por sí mismos ningún pecado, de modo que, privados de la gracia sobrenatural en el nacimiento nazcan de nuevo, del agua y del Espíritu Santo, a la vida divina en Cristo Jesús.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>La Iglesia</Text>
            <Text style={styles.text}>
              Creemos en la Iglesia una, santa, católica y apostólica, edificada por Jesucristo sobre la piedra, que es Pedro. Ella es el Cuerpo místico de Cristo, sociedad visible, equipada de órganos jerárquicos, y, a la vez, comunidad espiritual; Iglesia terrestre, Pueblo de Dios peregrinante aquí en la tierra e Iglesia enriquecida por bienes celestes, germen y primicia del reino de Dios por el que obra y los sufrimientos de la redención se continúan a través de la historia humana, y que con todas sus fuerzas anhela la consumación perfecta, que ha de ser conseguida después del fin de los tiempos en la gloria celeste. Durante el transcurso de los tiempos el Señor Jesús forma a su Iglesia por medio de los sacramentos, que manan de su plenitud. Por ellos hace que los miembros de su Cuerpo crezcan en la vida de la gracia hasta que Cristo sea formado en ellos plenamente. Por ellos hace que sus miembros participen del misterio de la muerte y la resurrección de Jesucristo, por la gracia del Espíritu Santo, que la vivifica y la mueve. Es, pues, santa, aunque abarque en su seno pecadores, porque ella no goza de otra vida que de la vida de la gracia; sus miembros, ciertamente, si se alimentan de esta vida, se santifican; si se apartan de ella, contraen pecados y manchas del alma que impiden que la santidad de ella se difunda radiante. Por lo que se aflige y hace penitencia por aquellos pecados, teniendo poder de librar de ellos a sus hijos por la sangre de Cristo y el don del Espíritu Santo.
            </Text>
            <Text style={styles.text}>
              Heredera de las divinas promesas e hija de Abrahán según el Espíritu, por medio de aquel Israel cuyos libros sagrados conserva con amor y cuyos patriarcas y profetas venera con piedad; edificada sobre el fundamento de los apóstoles, cuya palabra siempre viva y cuyos propios poderes de pastores transmite fielmente a través de los siglos en el sucesor de Pedro y en los obispos que guardan la comunión con él; gozando finalmente de la perpetua asistencia del Espíritu Santo, compete a la Iglesia la misión de conservar, enseñar, explicar y difundir aquella verdad que, bosquejada hasta cierto punto por los profetas, Dios reveló a los hombres plenamente por el Señor Jesús. Nosotros creemos todas aquellas cosas que se contienen en la palabra de Dios escrita o transmitida y son propuestas por la Iglesia, o con juicio solemne o con magisterio ordinario y universal, para ser creídas como divinamente reveladas. Nosotros creemos en aquella infalibilidad de que goza el Sucesor de Pedro cuando habla ex cathedra [22] y que reside también en el Cuerpo de los obispos cuando ejerce con él mismo el supremo magisterio.
            </Text>
            <Text style={styles.text}>
              Nosotros creemos que la Iglesia, que Cristo fundó y por la que rogó, es sin cesar una por la fe, y el culto, y el vínculo de la comunión jerárquica. La abundantísima variedad de ritos litúrgicos en el seno de esta Iglesia o la diferencia legítima de patrimonio teológico y espiritual y de disciplinas peculiares no solo no dañan a la unidad de la misma, sino más bien la manifiestan.
            </Text>
            <Text style={styles.text}>
              Nosotros también, reconociendo que fuera de la estructura de la Iglesia de Cristo se encuentran muchos elementos de santificación y verdad, que como dones propios de la misma Iglesia empujan a la unidad católica, y creyendo en la acción del Espíritu Santo, que suscita en todos los discípulos de Cristo el deseo de esta unidad, esperamos que los cristianos que no gozan todavía de la plena comunión de la única Iglesia se unan finalmente en un solo rebaño con un solo Pastor.
            </Text>
            <Text style={styles.text}>
              Nosotros creemos que la Iglesia es necesaria para la salvación. Porque solo Cristo es el Mediador y el camino de salvación que, en su Cuerpo, que es la Iglesia, se nos hace presente [28]. Pero el propósito divino de salvación abarca a todos los hombres: y aquellos que, ignorando sin culpa el Evangelio de Cristo y su Iglesia, buscan, sin embargo, a Dios con corazón sincero y se esfuerzan, bajo el influjo de la gracia, por cumplir con obras su voluntad, conocida por el dictamen de la conciencia, ellos también, en un número ciertamente que solo Dios conoce, pueden conseguir la salvación eterna.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Eucaristía</Text>
            <Text style={styles.text}>
              Nosotros creemos que la misa que es celebrada por el sacerdote representando la persona de Cristo, en virtud de la potestad recibida por el sacramento del orden, y que es ofrecida por él en nombre de Cristo y de los miembros de su Cuerpo místico, es realmente el sacrificio del Calvario, que se hace sacramentalmente presente en nuestros altares. Nosotros creemos que, como el pan y el vino consagrados por el Señor en la última Cena se convirtieron en su cuerpo y su sangre, que en seguida iban a ser ofrecidos por nosotros en la cruz, así también el pan y el vino consagrados por el sacerdote se convierten en el cuerpo y la sangre de Cristo, sentado gloriosamente en los cielos; y creemos que la presencia misteriosa del Señor bajo la apariencia de aquellas cosas, que continúan apareciendo a nuestros sentidos de la misma manera que antes, es verdadera, real y sustancial.
            </Text>
            <Text style={styles.text}>
              En este sacramento, Cristo no puede hacerse presente de otra manera que por la conversión de toda la sustancia del pan en su cuerpo y la conversión de toda la sustancia del vino en su sangre, permaneciendo solamente íntegras las propiedades del pan y del vino, que percibimos con nuestros sentidos. La cual conversión misteriosa es llamada por la santa Iglesia conveniente y propiamente transubstanciación. Cualquier interpretación de teólogos que busca alguna inteligencia de este misterio, para que concuerde con la fe católica, debe poner a salvo que, en la misma naturaleza de las cosas, independientemente de nuestro espíritu, el pan y el vino, realizada la consagración, han dejado de existir, de modo que, el adorable cuerpo y sangre de Cristo, después de ella, están verdaderamente presentes delante de nosotros bajo las especies sacramentales del pan y del vino, como el mismo Señor quiso, para dársenos en alimento y unirnos en la unidad de su Cuerpo místico.
            </Text>
            <Text style={styles.text}>
              La única e indivisible existencia de Cristo, el Señor glorioso en los cielos, no se multiplica, pero por el sacramento se hace presente en los varios lugares del orbe de la tierra, donde se realiza el sacrificio eucarístico. La misma existencia, después de celebrado el sacrificio, permanece presente en el Santísimo Sacramento, el cual, en el tabernáculo del altar, es como el corazón vivo de nuestros templos. Por lo cual estamos obligados, por obligación ciertamente suavísima, a honrar y adorar en la Hostia Santa que nuestros ojos ven, al mismo Verbo encarnado que ellos no pueden ver, y que, sin haber dejado los cielos, se ha hecho presente delante de nosotros.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Escatología</Text>
            <Text style={styles.text}>
              Confesamos igualmente que el reino de Dios, que ha tenido en la Iglesia de Cristo sus comienzos aquí en la tierra, no es de este mundo (cf. Jn 18,36), cuya figura pasa (cf. 1Cor 7,31); y también que sus crecimientos propios no pueden juzgarse idénticos al progreso de la cultura de la humanidad o de las ciencias o de las artes técnicas, sino que consiste en que se conozcan cada vez más profundamente las riquezas insondables de Cristo, en que se ponga cada vez con mayor constancia la esperanza en los bienes eternos, en que cada vez más ardientemente se responda al amor de Dios; finalmente, en que la gracia y la santidad se difundan cada vez más abundantemente entre los hombres. Pero con el mismo amor es impulsada la Iglesia para interesarse continuamente también por el verdadero bien temporal de los hombres. Porque, mientras no cesa de amonestar a todos sus hijos que no tienen aquí en la tierra ciudad permanente (cf. Heb 13,14), los estimula también, a cada uno según su condición de vida y sus recursos, a que fomenten el desarrollo de la propia ciudad humana, promuevan la justicia, la paz y la concordia fraterna entre los hombres y presten ayuda a sus hermanos, sobre todo a los más pobres y a los más infelices. Por lo cual, la gran solicitud con que la Iglesia, Esposa de Cristo, sigue de cerca las necesidades de los hombres, es decir, sus alegrías y esperanzas, dolores y trabajos, no es otra cosa sino el deseo que la impele vehementemente a estar presente a ellos, ciertamente con la voluntad de iluminar a los hombres con la luz de Cristo, y de congregar y unir a todos en aquel que es su único Salvador. Pero jamás debe interpretarse esta solicitud como si la Iglesia se acomodase a las cosas de este mundo o se resfriase el ardor con que ella espera a su Señor y el reino eterno.
            </Text>
          </View>

          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>La vida eterna</Text>
            <Text style={styles.text}>
              Creemos en la vida eterna. Creemos que las almas de todos aquellos que mueren en la gracia de Cristo —tanto las que todavía deben ser purificadas con el fuego del purgatorio como las que son recibidas por Jesús en el paraíso en seguida que se separan del cuerpo, como el Buen Ladrón— constituyen el Pueblo de Dios después de la muerte, la cual será destruida totalmente el día de la resurrección, en el que estas almas se unirán con sus cuerpos.
            </Text>
            <Text style={styles.text}>
              Creemos que la multitud de aquellas almas que con Jesús y María se congregan en el paraíso, forma la Iglesia celeste, donde ellas, gozando de la bienaventuranza eterna, ven a Dios como Él es, y participan también, ciertamente en grado y modo diverso, juntamente con los santos ángeles, en el gobierno divino de las cosas, que ejerce Cristo glorificado, como quiera que interceden por nosotros y con su fraterna solicitud ayudan grandemente a nuestra flaqueza.
            </Text>
            <Text style={styles.text}>
              Creemos en la comunión de todos los fieles cristianos, es decir, de los que peregrinan en la tierra, de los que se purifican después de muertos y de los que gozan de la bienaventuranza celeste, y que todos se unen en una sola Iglesia; y creemos igualmente que en esa comunión está a nuestra disposición el amor misericordioso de Dios y de sus santos, que siempre ofrecen oídos atentos a nuestras oraciones, como nos aseguró Jesús: Pedid y recibiréis (cf. Lc 10,9-10; Jn 16,24). Profesando esta fe y apoyados en esta esperanza, esperamos la resurrección de los muertos y la vida del siglo venidero.
            </Text>
            <Text style={styles.text}>
              Bendito sea Dios, santo, santo, santo. Amén.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.gray,
    marginTop: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 15,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
}); 