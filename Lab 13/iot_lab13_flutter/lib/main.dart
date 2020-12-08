import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IOT Lab 13',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Living Room'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool isLightOn = false;
  bool isAcOn = false;
  bool isAudioOn = false;

  double slider1 = 0;
  double slider2 = 0;
  double slider3 = 0;
  String lightText = "Off";
  String acText = "0C";
  String audioText = "Off";

  Function slider1Func = null;
  Function slider2Func = null;
  Function slider3Func = null;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Center(child: Text(widget.title)),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            Flexible(
              child: FractionallySizedBox(
                widthFactor: 1,
                heightFactor: 0.5,
                child: FittedBox(
                  fit: BoxFit.cover,
                  child: Image.network(
                      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/living-room-ideas-rds-work-queens-road-01-1594233253.jpg?crop=1.00xw:0.803xh;0,0.176xh&resize=640:*'),
                ),
              ),
            ),
            Card(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Column(
                    children: [
                      Icon(Icons.lightbulb_outline_sharp),
                    ],
                  ),
                  Column(
                    children: [Text("Light")],
                  ),
                  Column(
                    children: [Text(lightText)],
                  ),
                  Column(
                    children: [
                      Switch(
                        value: isLightOn,
                        onChanged: (bool value) {
                          setState(() {
                            isLightOn = value;
                            if (value) {
                              lightText = "On";
                              slider1Func = (double value) {
                                setState(() {
                                  slider1 = value;
                                });
                              };
                            } else {
                              lightText = "Off";
                              slider1Func = null;
                            }
                          });
                        },
                      )
                    ],
                  ),
                  Column(
                    children: [
                      Slider(
                        value: slider1,
                        onChanged: slider1Func,
                      )
                    ],
                  )
                ],
              ),
            ),
            Card(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Column(
                    children: [
                      Icon(Icons.ac_unit_sharp),
                    ],
                  ),
                  Column(
                    children: [Text("AC")],
                  ),
                  Column(
                    children: [Text(acText)],
                  ),
                  Column(
                    children: [
                      Switch(
                        value: isAcOn,
                        onChanged: (bool value) {
                          setState(() {
                            isAcOn = value;
                            if (value) {
                              slider2Func = (double value) {
                                setState(() {
                                  var s = value.toStringAsFixed(1);
                                  acText = "$s C";
                                  slider2 = value;
                                });
                              };
                            } else {
                              slider2Func = null;
                            }
                          });
                        },
                      )
                    ],
                  ),
                  Column(
                    children: [
                      Slider(
                        max: 50.0,
                        value: slider2,
                        onChanged: slider2Func,
                      )
                    ],
                  )
                ],
              ),
            ),
            Card(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Column(
                    children: [
                      Icon(Icons.speaker_group_sharp),
                    ],
                  ),
                  Column(
                    children: [Text("Audio")],
                  ),
                  Column(
                    children: [Text(audioText)],
                  ),
                  Column(
                    children: [
                      Switch(
                        value: isAudioOn,
                        onChanged: (bool value) {
                          setState(() {
                            isAudioOn = value;
                            if (value) {
                              audioText = "On";
                              slider3Func = (double value) {
                                setState(() {
                                  slider3 = value;
                                });
                              };
                            } else {
                              audioText = "Off";
                              slider3Func = null;
                            }
                          });
                        },
                      )
                    ],
                  ),
                  Column(
                    children: [
                      Slider(
                        max: 50.0,
                        value: slider3,
                        onChanged: slider3Func,
                      )
                    ],
                  )
                ],
              ),
            )
          ],
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
