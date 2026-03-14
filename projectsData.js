window.projectsData = window.projectsData || {};
window.projectsData = Object.assign(window.projectsData || {}, {
  1: {
    syllabus: ["Electricity basics", "Voltage, current, resistance", "LED working principle", "Resistor use", "Arduino digital output", "Delay function", "Basic circuit connection"],
    tools: ["Arduino Uno/Nano", "LED", "220 ohm resistor", "Breadboard", "Jumper wires", "USB cable", "Arduino IDE"]
  },
  2: {
    syllabus: ["LED interfacing", "Multiple digital outputs", "Timing sequence logic", "Basic pattern programming", "Loop function"],
    tools: ["Arduino Uno/Nano", "2 LEDs", "2 resistors", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  3: {
    syllabus: ["RGB LED basics", "PWM concept", "Analog-style brightness control", "Color mixing logic", "Arduino output pins"],
    tools: ["Arduino Uno/Nano", "RGB LED", "Resistors", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  4: {
    syllabus: ["Push button working", "Digital input reading", "Pull-up/pull-down concept", "Conditional statements", "LED output control"],
    tools: ["Arduino Uno/Nano", "Push button", "LED", "Resistors", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  5: {
    syllabus: ["Sequential logic", "Timed output control", "LED interfacing", "Real-world automation basics", "Loop and delay concepts"],
    tools: ["Arduino Uno/Nano", "Red, yellow, green LEDs", "Resistors", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  6: {
    syllabus: ["Buzzer basics", "Digital output", "Tone generation basics", "Alert logic", "Simple sound signaling"],
    tools: ["Arduino Uno/Nano", "Buzzer", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  7: {
    syllabus: ["LDR sensor basics", "Analog input reading", "Threshold-based automation", "Light sensing concept", "Output switching"],
    tools: ["Arduino Uno/Nano", "LDR", "Resistor", "LED/lamp module", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  8: {
    syllabus: ["Temperature sensor basics", "Analog/digital sensor input", "Data reading", "Calibration basics", "Serial monitor output"],
    tools: ["Arduino Uno/Nano", "Temperature sensor (LM35/DHT11)", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  9: {
    syllabus: ["Temperature sensing", "LCD/OLED display basics", "Sensor value conversion", "Real-time display update", "Basic library use"],
    tools: ["Arduino Uno/Nano", "Temperature sensor", "16x2 LCD or OLED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  10: {
    syllabus: ["Ultrasonic sensor working", "Echo and trigger concept", "Distance calculation", "Basic math in Arduino", "Display/serial output"],
    tools: ["Arduino Uno/Nano", "HC-SR04 ultrasonic sensor", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  11: {
    syllabus: ["IR sensor basics", "Reflection principle", "Digital signal reading", "Object detection logic", "Indicator control"],
    tools: ["Arduino Uno/Nano", "IR sensor module", "LED/buzzer", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  12: {
    syllabus: ["PIR sensor basics", "Motion sensing logic", "Alarm triggering", "Event-based programming", "Output signaling"],
    tools: ["Arduino Uno/Nano", "PIR sensor", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  13: {
    syllabus: ["Capacitive touch basics", "Sensor input reading", "Toggle logic", "LED/lamp switching", "Basic automation"],
    tools: ["Arduino Uno/Nano", "Touch sensor module", "LED/lamp module", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  14: {
    syllabus: ["Water level sensing basics", "Analog input", "Threshold levels", "Multi-level indication", "Basic monitoring logic"],
    tools: ["Arduino Uno/Nano", "Water level sensor", "LEDs/buzzer", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  15: {
    syllabus: ["Soil moisture sensing", "Analog data reading", "Agriculture automation intro", "Calibration basics", "Threshold-based indication"],
    tools: ["Arduino Uno/Nano", "Soil moisture sensor", "Breadboard", "Jumper wires", "LED/display optional", "Arduino IDE"]
  },
  16: {
    syllabus: ["Rain sensor basics", "Water conductivity sensing", "Alert system logic", "Outdoor sensing intro", "Event triggering"],
    tools: ["Arduino Uno/Nano", "Rain sensor module", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  17: {
    syllabus: ["Flame sensing basics", "IR flame sensor principle", "Safety alert systems", "Digital sensor interfacing", "Alarm logic"],
    tools: ["Arduino Uno/Nano", "Flame sensor", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  18: {
    syllabus: ["Gas sensor basics", "Air quality/gas monitoring intro", "Analog sensor reading", "Safety threshold logic", "Alert systems"],
    tools: ["Arduino Uno/Nano", "MQ gas sensor", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  19: {
    syllabus: ["Sound sensor basics", "Analog/digital sound detection", "Signal thresholding", "Visual/audio response logic", "Sensor monitoring"],
    tools: ["Arduino Uno/Nano", "Sound sensor module", "LEDs", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  20: {
    syllabus: ["Potentiometer basics", "Analog input", "PWM output", "Brightness control", "Mapping input to output"],
    tools: ["Arduino Uno/Nano", "Potentiometer", "LED", "Resistor", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  21: {
    syllabus: ["Servo motor basics", "PWM signal basics", "Angle control", "Servo library use", "Motion sequencing"],
    tools: ["Arduino Uno/Nano", "Servo motor", "External power optional", "Breadboard/jumper wires", "Arduino IDE"]
  },
  22: {
    syllabus: ["DC motor basics", "PWM speed control", "Motor driver basics", "Power separation", "Direction and speed logic"],
    tools: ["Arduino Uno/Nano", "DC motor", "Motor driver (L298N/L293D)", "Battery", "Jumper wires", "Arduino IDE"]
  },
  23: {
    syllabus: ["DC fan control basics", "PWM concept", "Speed variation", "Motor safety basics", "User input control"],
    tools: ["Arduino Uno/Nano", "Small DC fan/motor", "Motor driver/transistor", "Potentiometer optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  24: {
    syllabus: ["LDR sensing", "Automation logic", "Ambient light threshold", "Output control", "Basic smart lighting concept"],
    tools: ["Arduino Uno/Nano", "LDR", "LED/lamp module", "Resistor", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  25: {
    syllabus: ["Sound input basics", "Signal threshold detection", "Toggle logic", "Output switching", "Event-based control"],
    tools: ["Arduino Uno/Nano", "Sound sensor", "LED/relay output", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  26: {
    syllabus: ["Magnetic reed switch basics", "Open/close state detection", "Security system basics", "Alert logic", "Input monitoring"],
    tools: ["Arduino Uno/Nano", "Reed switch", "Magnet", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  27: {
    syllabus: ["Ultrasonic object detection", "Servo motor control", "Automation sequence", "Distance-based activation", "Smart utility design basics"],
    tools: ["Arduino Uno/Nano", "Ultrasonic sensor", "Servo motor", "Dustbin prototype", "Jumper wires", "Arduino IDE"]
  },
  28: {
    syllabus: ["IR remote basics", "IR receiver module", "Command decoding basics", "Remote-based control logic", "LED output switching"],
    tools: ["Arduino Uno/Nano", "IR remote", "IR receiver", "LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  29: {
    syllabus: ["Random number logic", "Display basics", "Button input", "Simple game logic", "Output visualization"],
    tools: ["Arduino Uno/Nano", "Push button", "LEDs / 7-segment / LCD", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  30: {
    syllabus: ["Input/output timing", "Delay and millis basics", "Human response measurement", "Event capture", "Simple scoring logic"],
    tools: ["Arduino Uno/Nano", "LED", "Push button", "Buzzer optional", "LCD optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  31: {
    syllabus: ["7-segment display basics", "Number representation", "Output pin mapping", "Counting logic", "Multiplexing intro (optional)"],
    tools: ["Arduino Uno/Nano", "7-segment display", "Resistors", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  32: {
    syllabus: ["Timing logic", "Start/stop/reset input", "Millis function", "Display output", "State handling basics"],
    tools: ["Arduino Uno/Nano", "Push buttons", "LCD/7-segment display", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  33: {
    syllabus: ["Countdown timer logic", "User input basics", "Alarm triggering", "Display handling", "Time-based events"],
    tools: ["Arduino Uno/Nano", "Push buttons/keypad", "LCD/OLED", "Buzzer", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  34: {
    syllabus: ["Keypad interfacing", "Password matching logic", "Basic security systems", "Servo/lock control", "Access control flow"],
    tools: ["Arduino Uno/Nano", "Keypad", "Servo/electronic lock", "LCD optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  35: {
    syllabus: ["RFID basics", "Tag reading", "Unique ID matching", "Access authorization logic", "Embedded security intro"],
    tools: ["Arduino Uno/Nano", "RFID reader (RC522)", "RFID card/tag", "Servo/lock/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  36: {
    syllabus: ["LCD basics", "Character display interfacing", "Library usage", "Text output", "Basic embedded UI"],
    tools: ["Arduino Uno/Nano", "16x2 LCD", "I2C module optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  37: {
    syllabus: ["OLED basics", "Sensor reading display", "I2C communication intro", "Library usage", "Compact data visualization"],
    tools: ["Arduino Uno/Nano", "OLED display", "Sensor module", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  38: {
    syllabus: ["IR/beam interruption sensing", "Counting logic", "Entry detection", "Display output", "Event processing basics"],
    tools: ["Arduino Uno/Nano", "IR sensor pair", "LCD/OLED/7-segment", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  39: {
    syllabus: ["Object presence detection", "Occupancy logic", "Multi-slot indication basics", "LED/display status", "Smart parking concept intro"],
    tools: ["Arduino Uno/Nano", "IR/ultrasonic sensors", "LEDs/display", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  40: {
    syllabus: ["Voltage measurement basics", "Analog input", "Voltage divider concept", "Battery percentage estimation", "Safe measurement basics"],
    tools: ["Arduino Uno/Nano", "Battery", "Resistors", "Display optional", "Breadboard", "Jumper wires", "Arduino IDE", "Multimeter"]
  },
  41: {
    syllabus: ["Keypad interfacing", "Basic arithmetic logic", "Input parsing", "Displaying results", "Embedded UI basics"],
    tools: ["Arduino Uno/Nano", "Keypad", "LCD/OLED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  42: {
    syllabus: ["Touchless detection", "Servo/pump control", "Distance sensing", "Practical automation design", "Hygiene device basics"],
    tools: ["Arduino Uno/Nano", "Ultrasonic/IR sensor", "Servo/pump motor", "Sanitizer bottle prototype", "Jumper wires", "Arduino IDE"]
  },
  43: {
    syllabus: ["Switch input", "Output indication", "Alert system logic", "Simple event signaling", "Home automation basics"],
    tools: ["Arduino Uno/Nano", "Push button", "LED/buzzer", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  44: {
    syllabus: ["Temperature sensing", "Threshold comparison", "Alert logic", "Monitoring system design", "Embedded condition checking"],
    tools: ["Arduino Uno/Nano", "Temperature sensor", "Buzzer/LED/display", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  45: {
    syllabus: ["Magnetometer basics", "I2C communication", "Direction sensing", "Heading calculation", "Sensor calibration intro"],
    tools: ["Arduino Uno/Nano", "Compass module (HMC5883L or similar)", "OLED/LCD optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  46: {
    syllabus: ["Tilt sensor basics", "Motion/position detection", "Alert triggering", "State change logic", "Sensor interfacing"],
    tools: ["Arduino Uno/Nano", "Tilt sensor", "Buzzer/LED", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  47: {
    syllabus: ["Accelerometer basics", "Motion detection", "Signal thresholding", "Counting logic", "Wearable sensor intro"],
    tools: ["Arduino/ESP32", "Accelerometer/IMU", "OLED optional", "Jumper wires", "Arduino IDE"]
  },
  48: {
    syllabus: ["Pulse sensor basics", "Analog signal reading", "Basic bio-signal display", "Real-time monitoring", "Intro to filtering concept"],
    tools: ["Arduino Uno/Nano", "Pulse sensor", "OLED/LCD optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  49: {
    syllabus: ["Color sensor basics", "RGB measurement", "Basic classification logic", "Sensor calibration", "Object property detection"],
    tools: ["Arduino Uno/Nano", "Color sensor (TCS3200 etc.)", "LED/display optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  50: {
    syllabus: ["LDR/light sensing", "Differential sensor reading", "Basic robot movement", "Motor driver basics", "Reactive robotics intro"],
    tools: ["Arduino Uno/Nano", "2 LDRs", "Robot chassis", "DC motors", "Motor driver", "Battery", "Jumper wires", "Arduino IDE"]
  },
  51: {
    syllabus: ["IR sensor array basics", "Line detection logic", "Differential drive robot", "Motor control", "Robot chassis basics", "Path tracking intro"],
    tools: ["Arduino Uno/Nano", "IR sensors", "Robot chassis", "DC motors", "Wheels", "Motor driver", "Battery pack", "Arduino IDE"]
  },
  52: {
    syllabus: ["Ultrasonic sensing", "Obstacle detection", "Reactive decision logic", "Differential drive control", "Basic autonomous robotics"],
    tools: ["Arduino Uno/Nano", "Ultrasonic sensor", "Robot chassis", "DC motors", "Motor driver", "Battery", "Servo optional", "Arduino IDE"]
  },
  53: {
    syllabus: ["Bluetooth communication basics", "Serial command control", "Mobile-to-robot interface", "Motor control", "Robot chassis basics"],
    tools: ["Arduino Uno/Nano", "HC-05/HC-06 Bluetooth module", "Robot chassis", "DC motors", "Motor driver", "Battery", "Mobile phone", "Arduino IDE"]
  },
  54: {
    syllabus: ["Wi-Fi basics", "Network-controlled robotics", "Command parsing", "Motor driving", "Basic IoT robotics"],
    tools: ["ESP32/NodeMCU/Arduino + Wi-Fi", "Robot chassis", "DC motors", "Motor driver", "Battery", "Mobile/web control interface", "Arduino IDE"]
  },
  55: {
    syllabus: ["IR remote decoding", "Manual robot control", "Command mapping", "Motor direction control", "Embedded communication basics"],
    tools: ["Arduino Uno/Nano", "IR receiver + remote", "Robot chassis", "DC motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  56: {
    syllabus: ["Basic voice command interface", "Mobile speech-to-text/control concept", "Robot motion commands", "Wireless control", "Command-action mapping"],
    tools: ["Arduino/ESP32", "Bluetooth/Wi-Fi module", "Robot chassis", "DC motors", "Motor driver", "Mobile app with voice control", "Battery", "Arduino IDE"]
  },
  57: {
    syllabus: ["Maze logic", "Sensor-based path detection", "Decision making", "Left/right hand rule basics", "Autonomous path navigation"],
    tools: ["Arduino", "IR/ultrasonic sensors", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  58: {
    syllabus: ["Cliff/edge detection", "IR reflective sensing", "Safety navigation logic", "Reactive robotics", "Surface contrast detection"],
    tools: ["Arduino", "IR sensors facing downward", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  59: {
    syllabus: ["Robot movement basics", "Coverage movement idea", "Surface cleaning concept", "Obstacle/edge awareness", "Practical service robot intro"],
    tools: ["Arduino/ESP32", "Robot chassis", "Cleaning brush/pad", "Motors", "Motor driver", "Battery", "IR/ultrasonic sensors", "Arduino IDE"]
  },
  60: {
    syllabus: ["Autonomous floor robot concept", "Path coverage basics", "Obstacle avoidance", "Edge detection", "Small robot design"],
    tools: ["Arduino/ESP32", "Mini chassis", "DC motors", "Fan/suction unit small", "Motor driver", "IR/ultrasonic sensors", "Battery", "Arduino IDE"]
  },
  61: {
    syllabus: ["Flame sensing", "Robot movement toward target", "Pump/fan control basics", "Safety robotics intro", "Simple target response systems"],
    tools: ["Arduino", "Flame sensor", "Robot chassis", "DC motors", "Motor driver", "Water pump/fan", "Battery", "Arduino IDE"]
  },
  62: {
    syllabus: ["Distance maintenance logic", "Side sensing", "Motor correction", "Robot navigation basics", "Closed-loop intro"],
    tools: ["Arduino", "Ultrasonic/IR sensors", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  63: {
    syllabus: ["Accelerometer basics", "Gesture signal processing", "Wireless robot control", "Motion-based commands", "Robot actuation basics"],
    tools: ["Arduino/ESP32", "Accelerometer glove/controller", "Bluetooth/RF module", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  64: {
    syllabus: ["Smartphone sensors intro", "Mobile-controlled robotics", "Bluetooth/Wi-Fi communication", "Motion/tilt command logic", "Robot control mapping"],
    tools: ["ESP32/Arduino", "Smartphone app", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  65: {
    syllabus: ["Basic gripper concept", "Robot movement + arm integration", "Object handling basics", "Servo control", "Task sequence logic"],
    tools: ["Arduino", "Robot chassis", "Servo arm/gripper", "DC motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  66: {
    syllabus: ["Servo joints", "Gripper mechanism basics", "Basic robotic arm motion", "Pick-and-place intro", "Joint angle control"],
    tools: ["Arduino", "Servo motors", "Gripper", "Arm frame", "External power", "Jumper wires", "Arduino IDE"]
  },
  67: {
    syllabus: ["Color sensing", "Object classification", "Sorting logic", "Servo/arm/diverter mechanism", "Basic automation flow"],
    tools: ["Arduino", "Color sensor", "Servo motors / diverter", "Conveyor/chassis optional", "Breadboard", "Jumper wires", "Arduino IDE"]
  },
  68: {
    syllabus: ["Basic object categorization", "Sensor-based sorting", "Robot bin/diverter logic", "Practical automation intro", "Waste segregation concept"],
    tools: ["Arduino/ESP32", "Sensors/color sensor optional", "Servo/diverter system", "Chassis optional", "Battery", "Arduino IDE"]
  },
  69: {
    syllabus: ["Guided path movement", "Item carrying concept", "Line following", "Small logistics robot intro", "Motion stability basics"],
    tools: ["Arduino", "IR line sensors", "Robot chassis", "Motors", "Motor driver", "Carrying platform", "Battery", "Arduino IDE"]
  },
  70: {
    syllabus: ["Industrial counting basics", "Sensor trigger detection", "Conveyor automation intro", "Counting and display logic", "Object throughput basics"],
    tools: ["Arduino", "IR/optical sensor", "Conveyor model", "Display optional", "Motor driver if conveyor motor used", "Arduino IDE"]
  },
  71: {
    syllabus: ["Indoor robot transport basics", "Guided navigation", "Load carrying design basics", "Motor control", "Path following intro"],
    tools: ["Arduino/ESP32", "Robot chassis", "Motors", "Motor driver", "Battery", "Sensors for path/obstacle", "Arduino IDE"]
  },
  72: {
    syllabus: ["RFID basics", "Checkpoint-based navigation", "Embedded decision logic", "Guided robotics intro", "Tag-action mapping"],
    tools: ["Arduino", "RFID module", "RFID tags", "Robot chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  73: {
    syllabus: ["Person-following concept", "Assistive robotics intro", "Proximity tracking basics", "Mobile platform design", "Human-robot interaction intro"],
    tools: ["Arduino/ESP32/Raspberry Pi", "Ultrasonic/vision tracking", "Robot cart/chassis", "Motors", "Motor driver", "Battery", "Arduino IDE / Python for advanced version"]
  },
  74: {
    syllabus: ["Soil sensing", "Mobile robot irrigation concept", "Water pump control", "Agriculture automation basics", "Task sequencing"],
    tools: ["Arduino/ESP32", "Soil moisture sensor", "Water pump", "Chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  75: {
    syllabus: ["Servo/dispenser mechanism", "Scheduled feeding basics", "Automation logic", "RTC intro", "Smart home robotics concept"],
    tools: ["Arduino", "Servo motor", "RTC module optional", "Food dispenser model", "Breadboard/jumper wires", "Arduino IDE"]
  },
  76: {
    syllabus: ["Mobile surveillance basics", "Motion detection", "Patrol route concept", "Sensor-based alert", "Security robotics intro"],
    tools: ["Arduino/ESP32/Raspberry Pi", "PIR/camera optional", "Chassis", "Motors", "Motor driver", "Battery", "Wireless module optional", "Arduino IDE / Python for camera"]
  },
  77: {
    syllabus: ["Camera module basics", "Live video transmission concept", "Robot teleoperation", "Wireless networking basics", "Remote surveillance intro"],
    tools: ["ESP32-CAM / Raspberry Pi", "Robot chassis", "Motors", "Motor driver", "Battery", "Wi-Fi", "Mobile/web interface", "Python optional"]
  },
  78: {
    syllabus: ["Mobile monitoring systems", "Camera-based inspection", "Remote robot operation", "Basic patrol behavior", "Wireless communication"],
    tools: ["Raspberry Pi/ESP32-CAM", "Chassis", "Motors", "Motor driver", "Camera", "Battery", "Wi-Fi", "Python / web streaming stack"]
  },
  79: {
    syllabus: ["Servo pan movement", "Light/torch control", "Remote/basic autonomous scan concept", "Practical field robot accessory design", "Motion sequence basics"],
    tools: ["Arduino", "Servo motor", "LED light/torch", "Chassis optional", "Battery", "Jumper wires", "Arduino IDE"]
  },
  80: {
    syllabus: ["Edge/stair detection", "Downward sensing", "Safety navigation", "Mobile robot awareness", "Sensor placement basics"],
    tools: ["Arduino", "IR/downward sensors", "Chassis", "Motors", "Motor driver", "Battery", "Arduino IDE"]
  },
  81: {
    syllabus: ["Waypoint concept", "Obstacle avoidance", "Basic localization idea", "Autonomous indoor robotics intro", "Path planning basics"],
    tools: ["Arduino/ESP32/Raspberry Pi", "Ultrasonic/IR sensors", "Chassis", "Motors", "Motor driver", "Battery", "Arduino IDE / Python for advanced"]
  },
  82: {
    syllabus: ["Solar energy basics", "DC motor basics", "Small renewable robotics concept", "Energy conversion basics", "Power management intro"],
    tools: ["Solar panel", "DC motor", "Small chassis", "Wheels", "Battery optional", "Switch/wires", "Basic tools"]
  },
  83: {
    syllabus: ["Outdoor service robot concept", "Motor + blade safety basics", "Path coverage basics", "Obstacle handling", "Smart field maintenance intro"],
    tools: ["Arduino/ESP32", "Chassis", "DC motors", "Motor driver", "Cutting blade demo unit", "Battery", "Ultrasonic sensors", "Arduino IDE"]
  },
  84: {
    syllabus: ["Manual path teaching", "Motion recording logic", "Replay systems", "Memory storage basics", "Robot route repeat concept"],
    tools: ["Arduino/ESP32", "Chassis", "Motors", "Motor driver", "Memory module optional", "Battery", "Control interface", "Arduino IDE"]
  },
  85: {
    syllabus: ["Target following basics", "Proximity/vision tracking", "Mobile assistive robotics", "Real-time correction", "Human following concept"],
    tools: ["Arduino/ESP32/Raspberry Pi", "Ultrasonic/IR/camera", "Chassis", "Motors", "Motor driver", "Battery", "Arduino IDE / Python for vision version"]
  },
  86: {
    syllabus: ["Service robot concept", "Fixed-route delivery", "Mobile platform stability", "Object carrying design", "User interaction basics"],
    tools: ["Arduino/ESP32", "Chassis", "Tray platform", "Motors", "Motor driver", "Battery", "Path sensors/obstacle sensors", "Arduino IDE"]
  },
  87: {
    syllabus: ["Indoor logistics robotics", "Safe navigation", "Delivery workflow basics", "Service robotics in healthcare", "Obstacle handling"],
    tools: ["Raspberry Pi/ESP32", "Chassis", "Motors", "Motor driver", "Battery", "Ultrasonic/camera optional", "Wi-Fi module", "Python/Arduino IDE"]
  },
  88: {
    syllabus: ["Agricultural robotics intro", "Terrain movement basics", "Field sensing", "Outdoor robot design", "Agriculture automation concept"],
    tools: ["Arduino/ESP32/Raspberry Pi", "Rugged chassis", "Motors", "Motor driver", "Soil/environment sensors", "Battery", "Arduino IDE / Python"]
  },
  89: {
    syllabus: ["Agriculture automation", "Dispensing mechanism basics", "Position spacing concept", "Mobile robotics in farming", "Actuator control"],
    tools: ["Arduino/ESP32", "Chassis", "Motors", "Motor driver", "Servo/dispenser", "Battery", "Frame/mechanical parts", "Arduino IDE"]
  },
  90: {
    syllabus: ["Spray control basics", "Agriculture service robot concept", "Pump control", "Terrain rover basics", "Safety awareness in robotics"],
    tools: ["Arduino/ESP32", "Chassis", "Motors", "Motor driver", "Pump/spray system", "Tank prototype", "Battery", "Arduino IDE"]
  },
  91: {
    syllabus: ["Soil moisture sensing", "Automated irrigation logic", "Mobile agriculture robot concept", "Pump control", "Sensor-driven decisions"],
    tools: ["Arduino/ESP32", "Chassis", "Motors", "Motor driver", "Soil moisture sensor", "Pump", "Battery", "Arduino IDE"]
  },
  92: {
    syllabus: ["Environmental robotics intro", "Floating robot concept", "Waste collection mechanism basics", "Water-surface mobility idea", "Eco-robotics application"],
    tools: ["Waterproof/floating model base", "DC motors/propulsion demo", "Collection net/mechanism", "Battery", "Arduino/ESP32 optional", "Mechanical frame tools"]
  },
  93: {
    syllabus: ["Surface cleaning robot concept", "Terrain mobility basics", "Collection mechanism design", "Environmental service robotics", "Outdoor robot structure basics"],
    tools: ["Chassis", "Motors", "Motor driver", "Collection tray/mechanism", "Battery", "Arduino/ESP32", "Arduino IDE"]
  },
  94: {
    syllabus: ["Inspection robotics intro", "Narrow-space mobility", "Camera/sensing basics", "Mechanical compact design", "Remote monitoring concept"],
    tools: ["Small chassis/custom frame", "Motors", "Camera", "Arduino/ESP32/Raspberry Pi", "Battery", "Lighting LEDs", "Python/Arduino IDE"]
  },
  95: {
    syllabus: ["Low-light inspection robotics", "Camera navigation basics", "Remote-controlled monitoring", "Chassis stability", "Inspection system design"],
    tools: ["Robot chassis", "Camera", "LEDs", "Motors", "Motor driver", "Battery", "Raspberry Pi/ESP32-CAM", "Python / Arduino IDE"]
  },
  96: {
    syllabus: ["Remote scouting robot concept", "Rugged mobile robot basics", "Surveillance robotics intro", "Sensor and camera integration", "Field robot communication basics"],
    tools: ["Rugged chassis / tracked base", "Camera", "Motors", "Motor driver", "Battery", "Wireless link", "Arduino/ESP32/Raspberry Pi"]
  },
  97: {
    syllabus: ["Remote manipulator arm basics", "Gripper control", "Precision movement intro", "Hazard-handling robot concept", "Manual teleoperation basics"],
    tools: ["Robotic arm", "Servo motors", "Gripper", "Chassis optional", "Joystick/remote control", "Arduino/ESP32", "External power", "Arduino IDE"]
  },
  98: {
    syllabus: ["Search and rescue robotics intro", "Survivor detection concept", "Mobile inspection", "Camera/sensor fusion intro", "Disaster robot basics"],
    tools: ["Chassis / tracked platform", "Camera", "Ultrasonic/thermal/gas optional", "Motors", "Motor driver", "Battery", "Raspberry Pi/Arduino"]
  },
  99: {
    syllabus: ["Rough terrain robotics", "Rescue navigation basics", "Obstacle crossing concept", "Camera-based monitoring", "Emergency robotics intro"],
    tools: ["Tracked/rugged chassis", "Motors", "Motor driver", "Camera", "Battery", "Arduino/ESP32/Raspberry Pi", "Sensors optional"]
  },
  100: {
    syllabus: ["Hidden object detection concept", "Sensor-based scanning", "Safety robotics basics", "Terrain scanning intro", "Remote robot operation"],
    tools: ["Chassis", "Metal detector/proximity demo sensor", "Motors", "Motor driver", "Battery", "Arduino/ESP32", "Alert module", "Arduino IDE"]
  }
});
window.projectsData = Object.assign(window.projectsData || {}, {
  201: {
    syllabus: ["Voice command basics", "Speech-to-text intro", "Command mapping", "Home robot interaction basics", "Mobile/voice control flow", "Simple assistant logic"],
    tools: ["ESP32 / Raspberry Pi", "Microphone", "Speaker optional", "Robot chassis optional", "Wi-Fi/Bluetooth", "Python / Arduino IDE", "Speech recognition library"]
  },
  202: {
    syllabus: ["Speech recognition basics", "Action command parsing", "Robot control via voice", "Event-response programming", "Human-robot interaction basics"],
    tools: ["Raspberry Pi / laptop + Arduino", "Microphone", "Speaker optional", "Robot chassis", "Motors + motor driver", "Python", "Arduino IDE"]
  },
  203: {
    syllabus: ["Text-to-speech basics", "Basic chatbot flow", "Voice response system", "Robot personality interaction basics", "Human-computer communication"],
    tools: ["Raspberry Pi", "Microphone", "Speaker", "Display optional", "Python", "TTS/STT libraries"]
  },
  204: {
    syllabus: ["FAQ system basics", "Speech input/output", "Intent matching basics", "Rule-based assistant design", "Small knowledge base concept"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Speaker", "Python", "Simple database / text file", "STT/TTS libraries"]
  },
  205: {
    syllabus: ["Wake word basics", "Speech trigger systems", "Event activation logic", "Voice interaction design", "Assistant responsiveness basics"],
    tools: ["Raspberry Pi / ESP32", "Microphone", "Speaker optional", "Python", "Wake word library"]
  },
  206: {
    syllabus: ["Multilingual assistant basics", "Language selection flow", "Speech synthesis basics", "Input/output localization", "Human interaction design"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Speaker", "Python", "TTS/STT libraries", "Translation API/library optional"]
  },
  207: {
    syllabus: ["Assistive robotics basics", "Voice command control", "Safe navigation concept", "Motor drive control", "Accessibility-focused system design"],
    tools: ["ESP32 / Raspberry Pi / Arduino", "Wheelchair model/base", "Motors + motor driver", "Microphone", "Battery", "Python / Arduino IDE"]
  },
  208: {
    syllabus: ["Robotic arm basics", "Voice command mapping", "Servo control", "Human-machine interface", "Robotic action selection"],
    tools: ["Arduino/ESP32 + Raspberry Pi optional", "Servo arm", "Microphone", "Power supply", "Python / Arduino IDE"]
  },
  209: {
    syllabus: ["Home automation basics", "Voice control integration", "Relay control", "Device switching logic", "IoT automation intro"],
    tools: ["ESP32 / Arduino + Wi-Fi", "Relay module", "Microphone", "Smart appliances demo load", "Arduino IDE / Python"]
  },
  210: {
    syllabus: ["Voice classification basics", "Command categorization", "Audio response systems", "Robotics command workflow", "Assistant logic design"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Speaker optional", "Python", "Audio libraries"]
  },
  211: {
    syllabus: ["Wake word concepts", "Always-listening assistant basics", "Trigger-action pipeline", "Audio signal processing intro", "Event activation logic"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Python", "Wake word engine/library"]
  },
  212: {
    syllabus: ["Speech-to-text basics", "Text storage", "Note management basics", "Assistant productivity tools", "Voice UI design"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Python", "Text file/database", "STT library"]
  },
  213: {
    syllabus: ["Chat flow basics", "Rule-based conversation design", "Prompt-response mapping", "Basic assistant states", "Human-robot dialogue intro"],
    tools: ["Raspberry Pi / laptop", "Python", "Speaker/display optional", "Text/voice interface"]
  },
  214: {
    syllabus: ["Command validation", "Safety confirmation logic", "Voice assistant workflow", "Error prevention basics", "Reliable control design"],
    tools: ["Raspberry Pi / ESP32", "Microphone", "Speaker", "Python", "Robot controller optional"]
  },
  215: {
    syllabus: ["Voice commands for destinations", "Navigation command flow", "Robot movement planning basics", "Indoor guidance concept", "Human-robot interaction"],
    tools: ["Raspberry Pi / ESP32", "Microphone", "Robot chassis", "Motors + driver", "Battery", "Python / Arduino IDE"]
  },
  216: {
    syllabus: ["Educational chatbot basics", "Prompt-response system", "Topic suggestion logic", "Learning assistant UX", "Basic AI assistant integration"],
    tools: ["Laptop / mobile / Raspberry Pi", "Python / web app stack", "Chat UI", "Database optional", "AI API integration optional"]
  },
  217: {
    syllabus: ["Reception robot concept", "Greeting flow", "Voice interaction basics", "Information query handling", "Human-facing robotics intro"],
    tools: ["Raspberry Pi", "Display", "Microphone", "Speaker", "Camera optional", "Python"]
  },
  218: {
    syllabus: ["Voice search basics", "Inventory data structure", "Query-response flow", "Productivity assistant design", "Data retrieval basics"],
    tools: ["Raspberry Pi / laptop", "Microphone", "Speaker/display", "Python", "CSV/database"]
  },
  219: {
    syllabus: ["Classroom automation basics", "Reminder and assistant logic", "Voice/display interaction", "Educational support robot concept", "Scheduling basics"],
    tools: ["Raspberry Pi / ESP32", "Display", "Speaker", "Microphone optional", "Python / Arduino IDE"]
  },
  220: {
    syllabus: ["Healthcare assistant robot basics", "Voice/direction support", "Human interaction design", "Safe public robotics", "FAQ/intents handling"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Microphone", "Python", "Camera optional"]
  },
  221: {
    syllabus: ["IoT basics", "Sensor-to-cloud flow", "Home monitoring systems", "Wi-Fi communication", "Dashboard basics"],
    tools: ["ESP32", "Temperature/gas/motion sensors", "Wi-Fi", "Dashboard platform", "Arduino IDE"]
  },
  222: {
    syllabus: ["Cloud robotics basics", "Remote status sync", "Data upload basics", "Robot telemetry intro", "Web/app dashboard concept"],
    tools: ["ESP32 / Raspberry Pi", "Robot chassis optional", "Sensors", "Wi-Fi", "Cloud platform", "Python / Arduino IDE"]
  },
  223: {
    syllabus: ["Agriculture IoT basics", "Temperature/humidity/moisture sensing", "Greenhouse automation intro", "Remote monitoring", "Alert system basics"],
    tools: ["ESP32", "DHT sensor", "Soil moisture sensor", "Wi-Fi", "Dashboard/app", "Arduino IDE"]
  },
  224: {
    syllabus: ["Camera streaming basics", "Remote monitoring dashboard", "Telemetry + video integration", "Security robotics intro", "Web/mobile interface basics"],
    tools: ["Raspberry Pi / ESP32-CAM", "Camera", "Wi-Fi", "Dashboard/web app", "Python"]
  },
  225: {
    syllabus: ["Robot telemetry basics", "Mobile app UI basics", "Battery/sensor/mode display", "Embedded-to-app communication", "Status monitoring systems"],
    tools: ["ESP32 / Arduino + Bluetooth/Wi-Fi", "Mobile app", "Sensors", "Battery monitor", "Arduino IDE / app builder"]
  },
  226: {
    syllabus: ["GPS basics", "Location data parsing", "Outdoor robot tracking", "Map coordinates basics", "Telemetry systems"],
    tools: ["ESP32 / Arduino", "GPS module", "Chassis optional", "Wi-Fi/GSM optional", "Battery", "Arduino IDE"]
  },
  227: {
    syllabus: ["Geofencing concept", "GPS boundary logic", "Alert systems", "Location-based automation", "Remote safety monitoring"],
    tools: ["ESP32 / Arduino", "GPS module", "Buzzer/app notification", "Wi-Fi/GSM optional", "Arduino IDE"]
  },
  228: {
    syllabus: ["IoT agriculture basics", "Soil moisture automation", "Pump control", "Remote dashboard", "Sensor-driven irrigation logic"],
    tools: ["ESP32", "Soil moisture sensor", "Relay", "Water pump", "Dashboard/cloud platform", "Arduino IDE"]
  },
  229: {
    syllabus: ["Energy monitoring basics", "Current/voltage sensing", "Data logging", "IoT dashboard systems", "Smart utility monitoring"],
    tools: ["ESP32 / Arduino", "Current sensor", "Voltage sensing circuit", "Dashboard/cloud", "Arduino IDE"]
  },
  230: {
    syllabus: ["IoT network basics", "Distributed sensing", "Industrial monitoring intro", "Node communication basics", "Warehouse automation concepts"],
    tools: ["ESP32 nodes", "Sensors", "Wi-Fi/MQTT", "Dashboard", "Arduino IDE"]
  },
  231: {
    syllabus: ["Waste monitoring systems", "Fill-level sensing", "Smart city IoT basics", "Threshold alerts", "Dashboard integration"],
    tools: ["ESP32", "Ultrasonic sensor", "Dashboard/app", "Battery/power supply", "Arduino IDE"]
  },
  232: {
    syllabus: ["Agriculture robotics", "Animal monitoring basics", "Environmental sensing", "Mobile IoT systems", "Field data collection"],
    tools: ["ESP32 / Raspberry Pi", "Sensors", "Camera optional", "Chassis", "Wi-Fi/GPS optional", "Python / Arduino IDE"]
  },
  233: {
    syllabus: ["Weather sensing basics", "Temperature/humidity/pressure sensors", "Data logging", "IoT dashboards", "Environmental monitoring basics"],
    tools: ["ESP32 / Arduino", "DHT/BMP sensor", "Wi-Fi", "Dashboard/cloud", "Arduino IDE"]
  },
  234: {
    syllabus: ["Industrial monitoring basics", "Sensor-based machine observation", "Vibration/temperature/current sensing intro", "Predictive monitoring basics", "IoT telemetry"],
    tools: ["ESP32 / Arduino", "Vibration/temp/current sensors", "Dashboard", "Arduino IDE"]
  },
  235: {
    syllabus: ["Smart lighting automation", "LDR-based switching", "Time-based control optional", "IoT street systems intro", "Energy-saving logic"],
    tools: ["ESP32 / Arduino", "LDR", "Relay", "Wi-Fi optional", "Arduino IDE"]
  },
  236: {
    syllabus: ["Environmental sensing", "Mobile robot monitoring", "Gas/air quality basics", "Field data collection", "IoT robotics intro"],
    tools: ["ESP32 / Arduino", "Gas sensor / air quality sensor", "Robot chassis", "Motors + driver", "Battery", "Dashboard optional"]
  },
  237: {
    syllabus: ["Water monitoring basics", "pH/turbidity concept", "Environmental sensing", "Mobile/remote water survey systems", "Data logging"],
    tools: ["ESP32 / Arduino", "Water quality sensors", "Floating or mobile base optional", "Dashboard/cloud", "Arduino IDE"]
  },
  238: {
    syllabus: ["Delivery robot basics", "IoT telemetry", "Task status updates", "Navigation + app integration", "Smart logistics intro"],
    tools: ["ESP32 / Raspberry Pi", "Chassis", "Motors + driver", "Wi-Fi", "App/dashboard", "Battery"]
  },
  239: {
    syllabus: ["Arm telemetry basics", "Joint monitoring", "Remote command/status panel", "IoT robotics", "Dashboard visualization basics"],
    tools: ["ESP32 / Arduino", "Robotic arm", "Servo motors", "Wi-Fi dashboard", "Power supply"]
  },
  240: {
    syllabus: ["Parking automation basics", "Slot occupancy sensing", "Remote guidance logic", "Smart city system intro", "Dashboard/indicator integration"],
    tools: ["ESP32 / Arduino", "IR/ultrasonic sensors", "LEDs/display", "Dashboard optional", "Arduino IDE"]
  },
  241: {
    syllabus: ["Reinforcement learning basics", "Agent-environment concept", "Reward system", "Navigation AI intro", "Simulation-based training basics"],
    tools: ["Python", "Jupyter / VS Code", "RL libraries optional", "Maze simulator / robot optional"]
  },
  242: {
    syllabus: ["Path planning basics", "Grid maps", "Search algorithms intro", "Robot navigation theory", "Obstacle avoidance planning"],
    tools: ["Python", "VS Code / Jupyter", "Plotting library", "Simulation environment"]
  },
  243: {
    syllabus: ["SLAM basics", "Localization + mapping concept", "Sensor-based mapping intro", "Robotics perception", "Simulation-based understanding"],
    tools: ["Python / ROS", "Simulation environment", "LiDAR/camera optional", "Ubuntu optional"]
  },
  244: {
    syllabus: ["Occupancy map basics", "Sensor-based environment modeling", "Grid representation", "Obstacle detection logic", "Mobile robot mapping basics"],
    tools: ["Python / Arduino + Python", "Ultrasonic/LiDAR optional", "Simulation or robot platform", "Plotting tools"]
  },
  245: {
    syllabus: ["Localization basics", "Robot pose concept", "Odometry intro", "Position estimation", "Mapping relation basics"],
    tools: ["Python", "Simulation environment", "Encoders optional", "Plotting tools"]
  },
  246: {
    syllabus: ["Grid world basics", "Search algorithms", "Target path solving", "Navigation logic", "Robotics decision systems"],
    tools: ["Python", "Jupyter / VS Code", "Visualization libraries"]
  },
  247: {
    syllabus: ["A* algorithm", "Heuristic search basics", "Path optimization", "Robot navigation logic", "Grid map planning"],
    tools: ["Python", "Jupyter / VS Code", "Robot/simulator optional"]
  },
  248: {
    syllabus: ["Dijkstra algorithm", "Graph search basics", "Shortest path concept", "Map-based navigation", "Path planning fundamentals"],
    tools: ["Python", "Visualization tools", "Jupyter / VS Code"]
  },
  249: {
    syllabus: ["Autonomous return concept", "Docking alignment basics", "Sensor-guided navigation", "Robot recharging systems intro", "Mobile robotics automation"],
    tools: ["Arduino/ESP32/Raspberry Pi", "Sensors (IR/vision/ultrasonic)", "Chassis", "Motors + driver", "Battery + charging dock model"]
  },
  250: {
    syllabus: ["Goal-based navigation", "Target heading logic", "Mobile robot planning", "Autonomous path correction basics", "Sensor-guided movement"],
    tools: ["Arduino/ESP32", "Chassis", "Sensors", "Motors + driver", "Battery", "Arduino IDE"]
  },
  251: {
    syllabus: ["Swarm robotics basics", "Robot-to-robot communication", "Shared task systems intro", "Multi-agent coordination basics", "Wireless messaging"],
    tools: ["Multiple ESP32/Arduino bots", "RF/Wi-Fi/Bluetooth communication", "Chassis optional", "Battery", "Arduino IDE"]
  },
  252: {
    syllabus: ["Multi-robot coordination", "Formation maintenance basics", "Leader-follower concepts", "Relative positioning", "Swarm behavior intro"],
    tools: ["Multiple robot platforms", "ESP32 / Raspberry Pi", "Wireless communication", "Motors + driver", "Battery"]
  },
  253: {
    syllabus: ["Leader-follower logic", "Relative movement basics", "Tracking behavior", "Multi-robot communication", "Coordinated robotics intro"],
    tools: ["2 robot platforms", "Sensors / wireless modules", "Motors + drivers", "Battery", "Arduino IDE"]
  },
  254: {
    syllabus: ["Cooperative robotics basics", "Shared load handling", "Motion synchronization", "Team robotics intro", "Multi-bot control"],
    tools: ["2 robot platforms", "Motors + drivers", "Communication modules", "Shared object/box", "Battery"]
  },
  255: {
    syllabus: ["Area coverage basics", "Task division", "Multi-agent path planning intro", "Swarm search concepts", "Distributed robotics basics"],
    tools: ["Multiple robots or simulator", "Python / ROS optional", "Communication modules", "Chassis optional"]
  },
  256: {
    syllabus: ["Multi-robot coordination", "Ball tracking basics", "Game logic intro", "Mobile robot control", "Team behavior systems"],
    tools: ["Multiple mini robots", "Ball arena", "Motors + drivers", "Camera optional", "Wireless communication"]
  },
  257: {
    syllabus: ["Search strategy basics", "Cooperative robotics", "Multi-robot exploration", "Distributed decision making intro", "Target discovery logic"],
    tools: ["Multiple bots or simulator", "Python / ESP32 / ROS", "Communication modules", "Sensors optional"]
  },
  258: {
    syllabus: ["Multi-robot path conflict basics", "Coordination logic", "Traffic control concepts", "Queueing and priority intro", "Swarm safety basics"],
    tools: ["Multiple robots/simulator", "ESP32 / Python", "Communication modules", "Motors + drivers"]
  },
  259: {
    syllabus: ["Distributed sensing basics", "Data sharing between bots", "Networked robotics", "Team-based environment monitoring", "Sensor fusion intro"],
    tools: ["Multiple ESP32/Arduino nodes", "Sensors", "Wireless communication", "Dashboard optional"]
  },
  260: {
    syllabus: ["Multi-arm coordination", "Time synchronization basics", "Motion mirroring", "Industrial automation intro", "Joint control coordination"],
    tools: ["2 robotic arms", "Arduino/ESP32", "Servo motors", "Power supply", "Control software"]
  },
  261: {
    syllabus: ["Underwater robotics intro", "Buoyancy basics", "Water-safe design", "Propulsion concepts", "Remote underwater sensing basics"],
    tools: ["Waterproof body concept/model", "Motors/propellers", "Arduino/ESP32 optional", "Battery", "Frame materials"]
  },
  262: {
    syllabus: ["Surface water robotics", "Floating mechanism basics", "Waste collection concept", "Environmental robotics intro", "Propulsion basics"],
    tools: ["Floating platform", "Motors/propellers", "Collection net/mechanism", "Arduino optional", "Battery"]
  },
  263: {
    syllabus: ["Floating robot basics", "Remote patrol systems", "Water navigation concept", "Surface mobility", "Environmental monitoring intro"],
    tools: ["Floating base", "Propulsion motors", "Remote control / ESP32", "Battery", "Frame materials"]
  },
  264: {
    syllabus: ["Hybrid locomotion basics", "Land and water movement concept", "Mechanical design challenges", "Robotics adaptability intro", "Power management basics"],
    tools: ["Hybrid chassis concept", "Motors", "Waterproofing materials", "Arduino/ESP32 optional", "Battery"]
  },
  265: {
    syllabus: ["Tracked locomotion basics", "Rough terrain robotics", "Rescue robot design", "Stability on uneven ground", "Search robot intro"],
    tools: ["Tracked chassis", "Motors + drivers", "Battery", "Arduino/ESP32", "Camera optional"]
  },
  266: {
    syllabus: ["Climbing robot basics", "Grip mechanism concepts", "Adhesion/friction basics", "Vertical robotics intro", "Mechanical design fundamentals"],
    tools: ["Custom climbing frame", "Grippers/suction/adhesion concept", "Motors/servos", "Arduino optional"]
  },
  267: {
    syllabus: ["Bio-inspired robotics basics", "Segmented motion", "Wave locomotion intro", "Multi-joint control", "Gait pattern basics"],
    tools: ["Multiple servos", "Snake frame segments", "Arduino Mega", "Power supply", "Arduino IDE"]
  },
  268: {
    syllabus: ["Legged robotics basics", "Gait planning", "Multi-leg coordination", "Stability in walking robots", "Servo synchronization"],
    tools: ["Hexapod frame", "Many servo motors", "Arduino Mega / ESP32", "External power", "Arduino IDE"]
  },
  269: {
    syllabus: ["Four-leg robot basics", "Gait and balance", "Servo joint planning", "Walking sequence design", "Legged robotics intro"],
    tools: ["Quadruped frame", "Servo motors", "Arduino/ESP32", "Power supply", "Arduino IDE"]
  },
  270: {
    syllabus: ["Multi-leg locomotion", "Obstacle sensing", "Reactive path changes", "Legged robot control basics", "Integrated sensing in walkers"],
    tools: ["Spider bot frame", "Servos", "Ultrasonic/IR sensor", "Arduino/ESP32", "Power supply"]
  },
  271: {
    syllabus: ["Vertical mobility concepts", "Adhesion/grip basics", "Small climbing robot design", "Surface movement intro", "Mechanical robotics design"],
    tools: ["Mini climbing frame", "Suction/magnetic/gecko concept", "Motors", "Arduino optional", "Battery"]
  },
  272: {
    syllabus: ["Cable/rope mobility basics", "Inspection robot design", "Mechanical grip systems", "Narrow-path robotics intro", "Maintenance robotics basics"],
    tools: ["Rope clamp frame", "Motors", "Camera optional", "Arduino/ESP32", "Battery"]
  },
  273: {
    syllabus: ["Pipe inspection robotics", "Circular grip mechanics", "Climbing motion basics", "Maintenance robot concepts", "Compact navigation design"],
    tools: ["Pipe climbing frame", "Motors", "Wheels/grippers", "Arduino/ESP32", "Battery"]
  },
  274: {
    syllabus: ["Surface cleaning robotics", "Adhesion/climbing concepts", "Path coverage basics", "Practical service robot design", "Safety basics"],
    tools: ["Cleaning pad/mechanism", "Suction/magnet concept", "Motors", "Arduino/ESP32", "Battery"]
  },
  275: {
    syllabus: ["Inspection robotics", "Camera surveying basics", "Terrain mobility", "Structural monitoring intro", "Robotics in infrastructure"],
    tools: ["Chassis", "Camera", "Motors + drivers", "Arduino/ESP32/Raspberry Pi", "Battery"]
  },
  276: {
    syllabus: ["Exoskeleton basics", "Human joint assistance concepts", "Wearable robotics intro", "Motion support mechanics", "Assistive technology basics"],
    tools: ["Frame/exoskeleton concept", "Servo/actuator system", "Arduino/ESP32", "Sensors optional", "Power supply"]
  },
  277: {
    syllabus: ["Prosthetic basics", "Finger actuation", "Human hand motion concepts", "Assistive robotics intro", "Basic control interface"],
    tools: ["Hand frame", "Servos / tendon system", "Arduino/ESP32", "Sensors optional", "Power supply"]
  },
  278: {
    syllabus: ["Assistive mobility basics", "Obstacle alert systems", "Accessibility design", "Sensor-based feedback", "Practical wearable robotics intro"],
    tools: ["Cane model", "Ultrasonic sensor", "Buzzer / vibration motor", "Arduino/ESP32", "Battery"]
  },
  279: {
    syllabus: ["Vision assistance basics", "Camera-based obstacle detection", "Assistive robotics design", "Audio feedback systems", "Human-centered AI basics"],
    tools: ["Camera", "Raspberry Pi", "Speaker/earpiece", "Python", "Battery"]
  },
  280: {
    syllabus: ["Rehab robotics intro", "Repetitive guided motion", "Assistive movement systems", "Human-safe actuation basics", "Healthcare robotics concepts"],
    tools: ["Servo/actuator setup", "Arduino/ESP32", "Frame/mechanical support", "Sensors optional", "Power supply"]
  },
  281: {
    syllabus: ["Plotting basics", "Face contour simplification", "Arm/path drawing", "Coordinate conversion", "Creative robotics intro"],
    tools: ["Robotic arm / XY plotter", "Python", "OpenCV optional", "Arduino", "Pen mount"]
  },
  282: {
    syllabus: ["Timed actuation basics", "Audio rhythm mapping", "Robotic interaction with instruments", "Sequence control", "Creative robotics"],
    tools: ["Arduino", "Actuators/solenoids/servos", "Instrument/demo setup", "Power supply"]
  },
  283: {
    syllabus: ["Rhythmic timing", "Repeated actuator control", "Stroke force basics", "Creative robotics motion", "Sequence automation"],
    tools: ["Servo/solenoid arm", "Drum pad", "Arduino", "Power supply"]
  },
  284: {
    syllabus: ["Precision timing", "Key mapping", "Multi-actuator control", "Musical automation basics", "Robotic finger/arm concept"],
    tools: ["Servo/solenoid setup", "Keyboard/piano demo", "Arduino", "Power supply"]
  },
  285: {
    syllabus: ["Motion choreography basics", "Multi-joint timing", "Humanoid/dance robot concepts", "Pose sequencing", "Rhythm synchronization"],
    tools: ["Servo robot/humanoid frame", "Arduino Mega", "Audio sync optional", "Power supply"]
  },
  286: {
    syllabus: ["LED animation basics", "Movement + light coordination", "Timing control", "Creative electronics", "Event robotics design"],
    tools: ["Arduino/ESP32", "LEDs / RGB strips", "Servo/motors optional", "Power supply"]
  },
  287: {
    syllabus: ["Smooth linear motion", "Camera automation basics", "Motor control", "Timed movement", "Media robotics intro"],
    tools: ["Slider rail", "Stepper/DC motor", "Motor driver", "Arduino", "Camera mount"]
  },
  288: {
    syllabus: ["Timed image capture", "Mobile robot movement", "Camera integration", "Patrol photography basics", "Remote or automated control"],
    tools: ["Robot chassis", "Camera", "Raspberry Pi / ESP32-CAM", "Motors + driver", "Battery"]
  },
  289: {
    syllabus: ["Event robotics basics", "Motion automation", "Stage interaction concepts", "Reliable actuation", "Presentation support systems"],
    tools: ["Arduino/ESP32", "Motors/servos", "Frame/prop setup", "Remote control optional"]
  },
  290: {
    syllabus: ["Public interaction robotics", "Voice/display information systems", "Guided motion basics", "Human-facing UI", "Service robot concepts"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Chassis optional", "Camera/microphone optional", "Python"]
  },
  291: {
    syllabus: ["Simulation basics", "UI for robot controls", "Virtual motion logic", "Software-only robotics concepts", "Visualization basics"],
    tools: ["Python / JavaScript / Flutter", "VS Code", "GUI framework", "Simulation library optional"]
  },
  292: {
    syllabus: ["Forward kinematics", "Joint-link relationships", "Visualization of motion", "Robotics math basics", "Coordinate systems intro"],
    tools: ["Python", "Matplotlib / GUI tools", "VS Code / Jupyter"]
  },
  293: {
    syllabus: ["Sensor/motion data plotting", "Angle tracking basics", "Data visualization", "Real-time graph concepts", "Motion analytics intro"],
    tools: ["Python", "Plotting libraries", "Arduino optional for live data", "VS Code / Jupyter"]
  },
  294: {
    syllabus: ["Servo angle tuning", "Calibration basics", "Mechanical offset correction", "Precision setup", "Practical robotics testing"],
    tools: ["Arduino", "Servo motor", "Calibration UI optional", "Arduino IDE / Python optional"]
  },
  295: {
    syllabus: ["Motor testing basics", "RPM/current comparison", "Simple performance logging", "UI for motor analysis", "Practical robotics diagnostics"],
    tools: ["Arduino/ESP32", "Motor + encoder", "Python/app UI", "Power supply", "Plotting tools"]
  },
  296: {
    syllabus: ["Motion recording basics", "Playback systems", "Robot route memory", "UI/data storage basics", "Mobile robot software tools"],
    tools: ["Python / app framework", "Robot data source optional", "Storage/database", "VS Code"]
  },
  297: {
    syllabus: ["Robotic arm planning basics", "Kinematics simulation", "Path visualization", "Motion validation before hardware", "Software robotics tools"],
    tools: ["Python", "Simulation framework", "Plotting/GUI", "VS Code / Jupyter"]
  },
  298: {
    syllabus: ["Inverse kinematics theory", "Link lengths and target position", "Joint angle solving", "Robotics math basics", "Coordinate geometry"],
    tools: ["Python", "Math libraries", "GUI optional", "VS Code / Jupyter"]
  },
  299: {
    syllabus: ["Dashboard design basics", "Sensor data display", "Control panel design", "Robotics UI/UX basics", "Live telemetry visualization"],
    tools: ["Flutter / React / Python GUI", "Sensors/robot optional", "Charts/UI components", "VS Code"]
  },
  300: {
    syllabus: ["Mobile robotics UI", "App-to-robot communication", "Button/joystick control logic", "Wireless command flow", "Human-robot control design"],
    tools: ["Flutter / Android Studio / React Native", "ESP32 / Bluetooth/Wi-Fi robot", "VS Code / Android Studio"]
  }
});
window.projectsData = Object.assign(window.projectsData || {}, {
  301: {
    syllabus: ["Attendance automation basics", "Mobile robot navigation intro", "Face/ID based attendance concept", "Data logging basics", "Classroom service robotics"],
    tools: ["Raspberry Pi / ESP32 / Arduino", "Camera or RFID module", "Robot chassis", "Motors + motor driver", "Battery", "Python / Arduino IDE"]
  },
  302: {
    syllabus: ["Educational robot basics", "Quiz logic and scoring", "Voice/display interaction", "User input handling", "Classroom assistant design"],
    tools: ["Raspberry Pi / Arduino", "Display", "Speaker optional", "Buttons / touchscreen optional", "Python / Arduino IDE"]
  },
  303: {
    syllabus: ["Indoor delivery robotics", "Route following basics", "Obstacle avoidance", "Load carrying design", "Smart hostel automation intro"],
    tools: ["ESP32 / Raspberry Pi", "Robot chassis", "Motors + driver", "Battery", "Ultrasonic/IR sensors", "Python / Arduino IDE"]
  },
  304: {
    syllabus: ["Library automation basics", "Shelf identification", "Basic navigation", "Search and indexing concept", "Service robot interaction basics"],
    tools: ["Raspberry Pi", "Camera / barcode scanner optional", "Robot chassis optional", "Display", "Python"]
  },
  305: {
    syllabus: ["Patrol route logic", "Outdoor/indoor monitoring basics", "Security robot concepts", "Sensor/camera integration", "Alert handling basics"],
    tools: ["Raspberry Pi / ESP32", "Camera", "Robot chassis", "Motors + driver", "Battery", "GPS optional", "Python / Arduino IDE"]
  },
  306: {
    syllabus: ["Lab automation basics", "Object movement and delivery", "Basic robotic assistance", "Safe indoor robot behavior", "Small workflow design"],
    tools: ["Arduino / Raspberry Pi", "Chassis / arm optional", "Motors / servos", "Battery", "Python / Arduino IDE"]
  },
  307: {
    syllabus: ["Digital notice systems", "Display automation", "Scheduling basics", "Voice/display announcement concept", "Educational automation intro"],
    tools: ["Raspberry Pi / ESP32", "Display", "Speaker optional", "Wi-Fi", "Python / Arduino IDE"]
  },
  308: {
    syllabus: ["Air quality monitoring basics", "Classroom IoT systems", "Gas/temperature/humidity sensing", "Dashboard basics", "Safety alerts"],
    tools: ["ESP32 / Arduino", "Air quality sensor", "Temperature/humidity sensor", "Dashboard optional", "Arduino IDE"]
  },
  309: {
    syllabus: ["Monitoring robot basics", "Camera patrol systems", "Quiet indoor navigation", "Surveillance and event logging intro", "Rule-based monitoring"],
    tools: ["Raspberry Pi / ESP32-CAM", "Camera", "Chassis", "Motors + driver", "Battery", "Python / Arduino IDE"]
  },
  310: {
    syllabus: ["Reception interaction design", "Voice/display assistant basics", "FAQ handling", "Human-robot interaction", "Public service robot concept"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Microphone optional", "Python"]
  },
  311: {
    syllabus: ["Assistive robotics basics", "Reminder systems", "Scheduling logic", "Voice output systems", "Safe home robotics intro"],
    tools: ["Raspberry Pi / ESP32", "Speaker", "Display optional", "RTC optional", "Python / Arduino IDE"]
  },
  312: {
    syllabus: ["Healthcare delivery robotics", "Indoor logistics basics", "Scheduled tasks", "Safe carrying design", "Assistive robot workflow"],
    tools: ["ESP32 / Raspberry Pi", "Robot chassis", "Motors + driver", "Tray/container", "Battery", "Python / Arduino IDE"]
  },
  313: {
    syllabus: ["Fall detection basics", "IMU/motion sensing", "Emergency alert logic", "Assistive care systems", "Event-based monitoring"],
    tools: ["ESP32 / Arduino", "IMU / motion sensor", "Buzzer / GSM / app alert", "Battery", "Arduino IDE"]
  },
  314: {
    syllabus: ["Indoor guidance robotics", "Route/destination basics", "Voice/display instructions", "Human assistance robot design", "Navigation intro"],
    tools: ["Raspberry Pi / ESP32", "Display/speaker", "Chassis optional", "Motors + driver", "Battery", "Python / Arduino IDE"]
  },
  315: {
    syllabus: ["Companion robot basics", "Voice/display interaction", "Reminder and chat flow", "Human-centered robotics", "Smart home assistant intro"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Microphone", "Camera optional", "Python"]
  },
  316: {
    syllabus: ["Appliance monitoring basics", "Door/open-close sensing", "Temperature tracking", "Item tracking concept", "Smart kitchen IoT intro"],
    tools: ["ESP32 / Arduino", "Temperature sensor", "Reed switch / load sensor optional", "Wi-Fi optional", "Arduino IDE"]
  },
  317: {
    syllabus: ["Home safety automation", "Gas/smoke/heat monitoring", "Emergency alert logic", "Smart kitchen systems", "Sensor fusion basics"],
    tools: ["ESP32 / Arduino", "Gas sensor", "Flame/temp sensor", "Buzzer/app alert", "Arduino IDE"]
  },
  318: {
    syllabus: ["Home automation basics", "Motorized curtain systems", "Light/time based control", "Relay/motor driver basics", "Smart room automation"],
    tools: ["Arduino / ESP32", "Servo/DC motor", "LDR / RTC optional", "Driver module", "Arduino IDE"]
  },
  319: {
    syllabus: ["Entrance automation basics", "Presence detection", "Greeting logic", "Voice/display interaction", "Smart home robotics intro"],
    tools: ["ESP32 / Raspberry Pi", "PIR / ultrasonic sensor", "Speaker / display", "Camera optional", "Python / Arduino IDE"]
  },
  320: {
    syllabus: ["Service robot basics", "Delivery path following", "Safe load transport", "Obstacle avoidance", "Indoor robot design"],
    tools: ["ESP32 / Raspberry Pi", "Robot chassis", "Tray platform", "Motors + driver", "Battery", "Sensors", "Python / Arduino IDE"]
  },
  321: {
    syllabus: ["Traffic monitoring basics", "Object counting concept", "Computer vision or sensor counting", "Smart city analytics intro", "Data logging basics"],
    tools: ["Camera / IR sensor array", "Raspberry Pi / ESP32", "Python / Arduino IDE", "Dashboard optional"]
  },
  322: {
    syllabus: ["Accident/event detection basics", "Emergency alert flow", "Sensor-based anomaly detection", "Safety robotics concepts", "Fast notification systems"],
    tools: ["ESP32 / Arduino", "IMU / vibration sensor", "GPS/GSM optional", "Buzzer/app alerts", "Arduino IDE"]
  },
  323: {
    syllabus: ["Infrastructure inspection basics", "Camera-based surface analysis", "Mobile survey robot design", "Defect detection intro", "Field robotics basics"],
    tools: ["Raspberry Pi / ESP32-CAM", "Camera", "Chassis", "Motors + driver", "Battery", "Python / OpenCV"]
  },
  324: {
    syllabus: ["Structural inspection basics", "Image capture and analysis", "Surface defect inspection concept", "Infrastructure robotics intro", "Camera survey workflow"],
    tools: ["Camera", "Raspberry Pi", "Chassis optional", "Python", "OpenCV optional"]
  },
  325: {
    syllabus: ["Track inspection robotics", "Mobility on track paths", "Vision/sensor inspection basics", "Maintenance robotics intro", "Safety-aware robot design"],
    tools: ["Custom chassis", "Camera / sensors", "Motors + driver", "Raspberry Pi / ESP32", "Battery", "Python / Arduino IDE"]
  },
  326: {
    syllabus: ["Toll automation basics", "Vehicle presence detection", "Barrier control logic", "Smart transport systems", "Embedded automation intro"],
    tools: ["Arduino / ESP32", "IR/ultrasonic sensors", "Servo barrier model", "Display optional", "Arduino IDE"]
  },
  327: {
    syllabus: ["Delivery robot workflow", "Path following/navigation basics", "Load carrying systems", "Obstacle avoidance", "Smart logistics intro"],
    tools: ["Raspberry Pi / ESP32", "Chassis/cart base", "Motors + driver", "Battery", "Sensors", "Python / Arduino IDE"]
  },
  328: {
    syllabus: ["Person detection basics", "Camera-based awareness", "Robot safety response", "Computer vision in robotics", "Public-space robot intro"],
    tools: ["Camera", "Raspberry Pi", "OpenCV / detection model", "Robot chassis", "Motors + driver", "Battery"]
  },
  329: {
    syllabus: ["Smart traffic systems", "Vision-based rule detection", "Event recognition basics", "Camera analytics intro", "Urban monitoring systems"],
    tools: ["Camera", "Raspberry Pi / laptop", "Python", "OpenCV / model", "Display/dashboard optional"]
  },
  330: {
    syllabus: ["Parking assistance basics", "Mobile guide robot concept", "Obstacle-free navigation", "Smart city robot systems", "Indoor/outdoor guidance basics"],
    tools: ["ESP32 / Raspberry Pi", "Robot chassis", "Motors + driver", "Ultrasonic sensors", "Battery", "Arduino IDE / Python"]
  },
  331: {
    syllabus: ["Drone telemetry basics", "Dashboard design", "Real-time data visualization", "Remote control UI concepts", "Flight data monitoring basics"],
    tools: ["Flutter / React / Python GUI", "Telemetry input source", "VS Code / Android Studio / Jupyter"]
  },
  332: {
    syllabus: ["Drone propulsion basics", "ESC and brushless motor intro", "Safe motor testing", "Thrust measurement concept", "UAV systems basics"],
    tools: ["Brushless motor", "ESC", "Propeller test rig", "Arduino / flight controller optional", "Battery", "Safety frame"]
  },
  333: {
    syllabus: ["Quadcopter basics", "IMU and stabilization", "PID control in drones", "Flight dynamics intro", "Orientation control basics"],
    tools: ["Flight controller / ESP32 / Arduino", "IMU", "Brushless motors + ESCs", "Quadcopter frame", "Battery"]
  },
  334: {
    syllabus: ["UAV obstacle sensing basics", "Distance sensing", "Flight safety systems", "Alert-based navigation support", "Drone robotics intro"],
    tools: ["Ultrasonic / LiDAR sensor", "Drone demo setup", "ESP32 / flight controller", "Battery"]
  },
  335: {
    syllabus: ["Drone delivery basics", "Payload carrying concepts", "Flight control overview", "Logistics robotics intro", "Safe package handling"],
    tools: ["Drone frame/model", "Brushless motors + ESCs", "Flight controller", "Battery", "Payload mount"]
  },
  336: {
    syllabus: ["Aerial imaging basics", "Map stitching intro", "Drone survey workflows", "Geospatial data basics", "Vision-based mapping concepts"],
    tools: ["Drone / image dataset", "Camera", "Python", "Mapping/stitching tools", "Laptop"]
  },
  337: {
    syllabus: ["Visual marker detection", "Drone landing assistance", "Camera-based localization intro", "UAV vision basics", "Target alignment"],
    tools: ["Camera", "Raspberry Pi / laptop", "Python", "OpenCV", "Drone model optional"]
  },
  338: {
    syllabus: ["Agriculture drone basics", "Crop imaging concepts", "Field survey workflows", "Aerial robotics intro", "Data capture basics"],
    tools: ["Drone model / aerial image dataset", "Camera", "Python / analysis tools", "Laptop"]
  },
  339: {
    syllabus: ["Environmental sensing", "Drone-based data collection", "Mobile aerial monitoring", "Air quality basics", "IoT telemetry intro"],
    tools: ["Drone frame/model", "Air quality sensor", "ESP32 / flight controller", "Battery"]
  },
  340: {
    syllabus: ["Visual tracking basics", "UAV following behavior", "Camera-based control intro", "Object tracking", "Drone perception basics"],
    tools: ["Camera", "Raspberry Pi/laptop", "OpenCV", "Drone model optional", "Python"]
  },
  341: {
    syllabus: ["Wearable safety systems", "Sensor-based alerts", "Helmet electronics basics", "Smart wearable design", "Real-world assistive devices"],
    tools: ["ESP32 / Arduino", "Helmet model", "Sensors (IMU, gas, impact optional)", "Buzzer / LEDs", "Battery"]
  },
  342: {
    syllabus: ["Wearable robotics basics", "Gesture sensing", "Motion-to-command mapping", "Wireless control", "Human-machine interface basics"],
    tools: ["ESP32 / Arduino", "Accelerometer/IMU", "Glove/band prototype", "Bluetooth/Wi-Fi", "Battery"]
  },
  343: {
    syllabus: ["Glove-based gesture control", "Finger/hand motion sensing", "Teleoperation basics", "Robot command mapping", "Human-controlled robotics"],
    tools: ["Glove with flex/IMU sensors", "ESP32 / Arduino", "Robot/arm optional", "Wireless module", "Battery"]
  },
  344: {
    syllabus: ["EMG basics", "Bio-signal to motion concept", "Prosthetic control intro", "Signal reading basics", "Assistive robotics concepts"],
    tools: ["EMG sensor", "Arduino / ESP32", "Servo hand model", "Power supply", "Arduino IDE"]
  },
  345: {
    syllabus: ["Wearable health monitoring basics", "Pulse/temp sensing", "IoT data transmission", "Basic healthcare electronics", "Dashboard logging intro"],
    tools: ["ESP32", "Pulse / temperature sensor", "OLED optional", "Battery", "Dashboard/app"]
  },
  346: {
    syllabus: ["Assistive wearable robotics", "Finger support mechanics", "Human hand movement basics", "Actuator assistance concept", "Rehab robotics intro"],
    tools: ["Mechanical finger assist frame", "Servo/actuator setup", "Arduino / ESP32", "Power supply"]
  },
  347: {
    syllabus: ["Haptics basics", "Vibration feedback systems", "Human-machine interaction", "Tactile signaling basics", "Control interface design"],
    tools: ["ESP32 / Arduino", "Vibration motors", "Gloves/controller optional", "Battery", "Arduino IDE"]
  },
  348: {
    syllabus: ["Posture monitoring basics", "IMU use in wearables", "Health-tech alerts", "Human ergonomics intro", "Event detection logic"],
    tools: ["ESP32 / Arduino", "IMU sensor", "Buzzer/vibration motor", "Battery", "Arduino IDE"]
  },
  349: {
    syllabus: ["Wearable gesture control", "Presentation automation basics", "Human-computer interaction", "Small wearable electronics", "Wireless command transmission"],
    tools: ["ESP32 / Arduino", "IMU sensor", "Ring/band prototype", "Bluetooth", "Battery"]
  },
  350: {
    syllabus: ["Emergency wearable systems", "Alert triggering logic", "Sensor-based safety detection", "Remote notification basics", "Small portable electronics"],
    tools: ["ESP32 / Arduino", "Button / sensor module", "Buzzer / GSM / app alert", "Battery"]
  },
  351: {
    syllabus: ["ROS basics", "Nodes, topics, messages", "Mobile robot modeling", "Teleoperation basics", "Linux robotics workflow"],
    tools: ["Ubuntu PC / Raspberry Pi", "ROS", "Robot chassis optional", "Sensors optional", "Python / C++"]
  },
  352: {
    syllabus: ["Sensor fusion basics", "ROS topic subscription", "IMU + encoder + other sensor integration", "Robotics perception intro", "State estimation basics"],
    tools: ["Ubuntu + ROS", "Sensors", "Python / C++", "Robot optional"]
  },
  353: {
    syllabus: ["ROS navigation basics", "Mapping and localization intro", "Path planning basics", "Costmaps", "Mobile robot navigation workflow"],
    tools: ["Ubuntu", "ROS", "Gazebo/RViz", "Robot/LiDAR optional", "Python / C++"]
  },
  354: {
    syllabus: ["ROS robot arm basics", "Joint states and controllers", "Arm motion planning intro", "ROS topics/services", "Robotic arm integration"],
    tools: ["Ubuntu", "ROS", "Robot arm / simulation", "Python / C++", "RViz"]
  },
  355: {
    syllabus: ["ROS image pipeline basics", "Camera topics", "Computer vision integration", "OpenCV with ROS", "Vision robotics intro"],
    tools: ["Ubuntu", "ROS", "Camera", "OpenCV", "Python / C++"]
  },
  356: {
    syllabus: ["ROS SLAM basics", "Mapping + localization", "Sensor-driven map creation", "Mobile robot environment understanding", "RViz visualization"],
    tools: ["Ubuntu", "ROS", "LiDAR / camera optional", "Gazebo / RViz", "Python / C++"]
  },
  357: {
    syllabus: ["Teleoperation basics", "ROS command topics", "Keyboard/joystick robot control", "Mobile robot motion", "Linux robotics workflow"],
    tools: ["Ubuntu", "ROS", "Robot chassis or simulation", "Keyboard/joystick", "Python / C++"]
  },
  358: {
    syllabus: ["Multi-robot ROS basics", "Namespaces and topics", "Coordination concepts", "Distributed robotics intro", "ROS network basics"],
    tools: ["Ubuntu", "ROS", "Multiple simulated robots / real robots", "Python / C++"]
  },
  359: {
    syllabus: ["Warehouse robotics intro", "Navigation stack", "Indoor path planning", "ROS simulation workflow", "Logistics robot basics"],
    tools: ["Ubuntu", "ROS", "Gazebo / RViz", "Robot model", "Python / C++"]
  },
  360: {
    syllabus: ["Humanoid ROS basics", "Joint states publishing", "Robot model descriptions", "RViz visualization", "Humanoid simulation basics"],
    tools: ["Ubuntu", "ROS", "Humanoid model / URDF", "RViz", "Python / C++"]
  },
  361: {
    syllabus: ["Chatbot basics", "Educational AI flow", "Prompt-response systems", "Topic recommendation logic", "Study assistant UX"],
    tools: ["Web/mobile app stack", "Python / JavaScript", "Chat UI", "Database optional", "AI API optional"]
  },
  362: {
    syllabus: ["Recommendation logic basics", "Rule-based/project filtering", "User-level classification", "Educational product design", "AI assistant integration intro"],
    tools: ["Python / JavaScript", "Database / JSON dataset", "Web/mobile UI", "VS Code"]
  },
  363: {
    syllabus: ["Chat UI design", "AI assistant UX", "Prompt chip and action flow", "Input/output layout", "Voice/chat interface basics"],
    tools: ["Figma / Flutter / React Native", "VS Code / Android Studio", "Chat API optional"]
  },
  364: {
    syllabus: ["Programming help assistant basics", "Error categorization", "Explanation generation logic", "Educational tooling", "Developer UX basics"],
    tools: ["Python / JavaScript", "Web/mobile interface", "AI API optional", "Database optional"]
  },
  365: {
    syllabus: ["Learning path design", "Rule-based planning", "Topic dependency mapping", "Personalized educational systems", "Productivity UX"],
    tools: ["Python / JavaScript", "Web/mobile UI", "Database/JSON topic map"]
  },
  366: {
    syllabus: ["Hardware recommendation logic", "Project-to-component mapping", "Robotics hardware basics", "Rule-based assistant design", "Product support UX"],
    tools: ["Python / JavaScript", "Web/mobile UI", "Database/JSON components list"]
  },
  367: {
    syllabus: ["Educational content generation", "Topic classification", "Question template design", "Assessment basics", "Learning support systems"],
    tools: ["Python / JavaScript", "Web/mobile UI", "Question database / AI API optional"]
  },
  368: {
    syllabus: ["Quiz design basics", "MCQ structure", "Topic tagging", "Score calculation", "Educational app UX"],
    tools: ["Flutter / React / web app", "Database / JSON", "VS Code / Android Studio"]
  },
  369: {
    syllabus: ["Dashboard UX", "Progress tracking basics", "Educational analytics intro", "Goal setting systems", "Data visualization basics"],
    tools: ["Flutter / React / Python dashboard", "Charts/UI components", "Database / local storage"]
  },
  370: {
    syllabus: ["Study planning basics", "Reminder scheduling", "Revision cycle logic", "Learning productivity systems", "App UX basics"],
    tools: ["Flutter / React / Python app", "Calendar/reminder integration", "Database / local storage"]
  },
  371: {
    syllabus: ["Bio-inspired robotics", "Fish locomotion basics", "Underwater propulsion concepts", "Flexible tail motion", "Aquatic robotics intro"],
    tools: ["Fish body prototype", "Servo/motor", "Waterproofing concept", "Arduino optional"]
  },
  372: {
    syllabus: ["Farm automation basics", "Motion/sound-based deterrence", "Agricultural robotics intro", "Sensor/event triggering", "Practical field systems"],
    tools: ["ESP32 / Arduino", "PIR/camera optional", "Buzzer/sound module", "Servo optional", "Battery"]
  },
  373: {
    syllabus: ["Hive condition monitoring", "Environmental sensing", "IoT agriculture systems", "Data collection basics", "Smart farm tech intro"],
    tools: ["ESP32", "Temperature/humidity sensors", "Dashboard/cloud", "Battery / power supply"]
  },
  374: {
    syllabus: ["Animal monitoring basics", "Vision/tracking concepts", "Field robotics intro", "Mobile survey systems", "GPS/camera monitoring basics"],
    tools: ["Camera", "Raspberry Pi / ESP32", "Robot chassis optional", "GPS optional", "Battery", "Python / Arduino IDE"]
  },
  375: {
    syllabus: ["Aquarium IoT basics", "Water temperature/quality monitoring", "Automated alerts", "Smart environment control", "Embedded monitoring basics"],
    tools: ["ESP32 / Arduino", "Temp sensor / water quality sensor", "OLED optional", "Dashboard/app", "Arduino IDE"]
  },
  376: {
    syllabus: ["Agri automation basics", "Farm condition monitoring", "Feeding/environment control intro", "IoT field systems", "Smart agriculture robotics"],
    tools: ["ESP32 / Arduino", "Sensors", "Relay/pump/feeder optional", "Dashboard", "Arduino IDE"]
  },
  377: {
    syllabus: ["Pollination assistance concepts", "Agricultural robotics intro", "Controlled movement/actuation basics", "Precision farming concepts", "Environmental automation basics"],
    tools: ["Servo/actuator concept", "ESP32 / Arduino", "Greenhouse model", "Sensors optional"]
  },
  378: {
    syllabus: ["Agriculture mobile robot basics", "Row following logic", "Sensor/camera guidance intro", "Outdoor robotics navigation", "Field automation basics"],
    tools: ["Chassis", "IR/camera/GPS optional", "ESP32 / Raspberry Pi", "Motors + driver", "Battery"]
  },
  379: {
    syllabus: ["Agricultural computer vision basics", "Plant classification intro", "Field image analysis", "AI in agriculture", "Vision-assisted action systems"],
    tools: ["Camera", "Raspberry Pi / laptop", "Python", "OpenCV / ML model"]
  },
  380: {
    syllabus: ["Compost monitoring basics", "Temperature/moisture tracking", "IoT logging", "Agriculture environment sensing", "Dashboard systems"],
    tools: ["ESP32 / Arduino", "Temp/moisture sensors", "Dashboard", "Arduino IDE"]
  },
  381: {
    syllabus: ["Manufacturing automation basics", "Multi-device coordination", "Robotic cell concept", "Sensors + actuators integration", "Industrial systems intro"],
    tools: ["Arduino / ESP32 / PLC-like setup", "Conveyor / arm / sensors", "Motors/servos", "Power supply"]
  },
  382: {
    syllabus: ["Conveyor automation", "Inspection/counting systems", "Industrial QA basics", "Object counting logic", "Factory robotics intro"],
    tools: ["Conveyor model", "IR/camera sensor", "Arduino / Raspberry Pi", "Display/dashboard optional"]
  },
  383: {
    syllabus: ["Assembly support robotics", "Precision placement basics", "Human-robot collaboration intro", "Tool/part handling concepts", "Industrial process support"],
    tools: ["Arm / guided fixture", "Arduino / Raspberry Pi", "Servos/actuators", "Sensors optional"]
  },
  384: {
    syllabus: ["End effector basics", "Tool exchange concepts", "Robotic arm modularity", "Industrial arm workflow", "Mechanical interface basics"],
    tools: ["Robotic arm", "Tool holder concept", "Servo/actuator", "Arduino / Raspberry Pi"]
  },
  385: {
    syllabus: ["Digital twin basics", "Virtual-physical mapping", "Real-time state sync", "Robot telemetry intro", "Simulation-linked robotics"],
    tools: ["Python / dashboard / simulation", "Robot data source optional", "UI tools", "Database / WebSocket optional"]
  },
  386: {
    syllabus: ["Maintenance monitoring basics", "Sensor anomaly detection intro", "Vibration/temp/current sensing", "Machine health concepts", "Industrial AI/IoT intro"],
    tools: ["ESP32 / Arduino", "Vibration/temp/current sensors", "Dashboard", "Python optional"]
  },
  387: {
    syllabus: ["Industrial computer vision basics", "Object/defect inspection", "QA workflows", "Camera setup and lighting", "Automation intro"],
    tools: ["Camera", "Raspberry Pi / PC", "Python", "OpenCV / ML model", "Conveyor optional"]
  },
  388: {
    syllabus: ["Packaging automation basics", "Pick-place/sorting intro", "Industrial workflow concepts", "Motion and timing basics", "Mechatronics integration"],
    tools: ["Robotic arm / conveyor model", "Arduino / Raspberry Pi", "Motors/servos", "Sensors optional"]
  },
  389: {
    syllabus: ["Precision placement", "Repetitive industrial tasks", "Arm motion sequencing", "Packaging robotics basics", "End effector design"],
    tools: ["Robotic arm", "Servo/actuator", "Arduino / ESP32", "Labeling mock setup"]
  },
  390: {
    syllabus: ["Industrial safety monitoring", "Patrol robot basics", "Camera/sensor inspection", "Indoor navigation intro", "Event logging basics"],
    tools: ["Robot chassis", "Camera", "Sensors", "Raspberry Pi / ESP32", "Battery"]
  },
  391: {
    syllabus: ["Rover mechanics basics", "Terrain navigation concepts", "Space robotics intro", "Autonomous exploration basics", "Mobile robot design"],
    tools: ["Rugged chassis model", "Motors + driver", "Arduino / Raspberry Pi", "Sensors optional", "Battery"]
  },
  392: {
    syllabus: ["Rough terrain navigation", "Rover path planning basics", "Sensor-guided movement", "Planetary robotics intro", "Simulation/field testing basics"],
    tools: ["Chassis", "Motors + driver", "Sensors / camera optional", "Arduino / Raspberry Pi", "Battery"]
  },
  393: {
    syllabus: ["Sample collection robotics", "Small arm manipulation", "Rover + arm integration", "Field robotics basics", "Precision pickup concept"],
    tools: ["Rover chassis", "Mini robotic arm", "Servos", "Arduino / Raspberry Pi", "Battery"]
  },
  394: {
    syllabus: ["Simulation basics", "Low-gravity movement concepts", "Robotics modeling", "Motion physics intro", "Space robotics theory"],
    tools: ["Python / simulation software", "VS Code / Jupyter", "Plotting tools"]
  },
  395: {
    syllabus: ["Space maintenance robotics intro", "Surface cleaning concepts", "Precision movement", "Panel handling basics", "Space robotics design thinking"],
    tools: ["Mechanical concept model", "Servo/actuator optional", "Arduino optional", "CAD optional"]
  },
  396: {
    syllabus: ["Habitat service robotics", "Indoor assistance systems", "Human-robot interaction", "Space-support robotics concept", "Autonomous helper basics"],
    tools: ["Raspberry Pi / ESP32", "Chassis / assistant frame", "Display/speaker optional", "Python / Arduino IDE"]
  },
  397: {
    syllabus: ["Delivery rover concepts", "Terrain mobility basics", "Payload transport", "Planetary logistics intro", "Exploration robotics basics"],
    tools: ["Rugged chassis", "Motors + driver", "Arduino / Raspberry Pi", "Battery", "Payload tray"]
  },
  398: {
    syllabus: ["Solar tracking basics", "Light sensing", "Servo-based panel motion", "Renewable energy automation", "Angle optimization basics"],
    tools: ["Arduino / ESP32", "LDR sensors", "Servo motors", "Solar panel model", "Arduino IDE"]
  },
  399: {
    syllabus: ["Camera inspection robotics", "Remote imaging systems", "Terrain mobility", "Monitoring workflows", "Exploration support robots"],
    tools: ["Camera", "Chassis", "Motors + driver", "Raspberry Pi / ESP32-CAM", "Battery"]
  },
  400: {
    syllabus: ["Mapping basics", "Rover data collection", "Terrain survey robotics", "Sensor/camera-based mapping intro", "Exploration analytics basics"],
    tools: ["Chassis", "Camera / sensors", "Raspberry Pi / ESP32", "Python / Arduino IDE", "Battery"]
  }
});
window.projectsData = Object.assign(window.projectsData || {}, {
  401: {
    syllabus: ["App UI basics", "Project listing design", "Card layout and navigation", "Simple database/storage", "Educational product presentation basics"],
    tools: ["Flutter / React Native / React", "VS Code / Android Studio", "Firebase / local JSON optional", "Figma optional"]
  },
  402: {
    syllabus: ["Dashboard design", "Profile and project showcase", "Progress tracking basics", "Data visualization intro", "Personal branding for tech projects"],
    tools: ["Flutter / React / Web app", "Charts library", "VS Code", "Figma optional", "Firebase / local storage optional"]
  },
  403: {
    syllabus: ["Presentation structure basics", "Project documentation flow", "Automated text generation logic", "Productivity tool design", "Export/download concepts"],
    tools: ["Python / JavaScript", "Web app / desktop UI", "Text templates", "Optional AI API", "VS Code"]
  },
  404: {
    syllabus: ["API basics", "GitHub project metadata understanding", "Search/filter UI", "Repository card design", "Developer tool UX basics"],
    tools: ["React / Flutter / Python", "GitHub API", "VS Code", "JSON handling"]
  },
  405: {
    syllabus: ["Notes app design", "Topic-based categorization", "Search/filter basics", "Local storage/database concepts", "Study productivity UX"],
    tools: ["Flutter / React / Python GUI", "SQLite / local storage", "VS Code / Android Studio"]
  },
  406: {
    syllabus: ["Inventory management basics", "CRUD operations", "Product/category sorting", "Simple database design", "Utility app UX"],
    tools: ["Flutter / React / Python", "SQLite / Firebase", "VS Code / Android Studio"]
  },
  407: {
    syllabus: ["Expense tracking logic", "Budget planning basics", "Category management", "Data visualization intro", "Project management productivity tools"],
    tools: ["Flutter / React / Python", "SQLite / Firebase", "Charts library", "VS Code"]
  },
  408: {
    syllabus: ["Task tracking basics", "Checklist UX", "Completion state logic", "Project workflow design", "Productivity tool concepts"],
    tools: ["Flutter / React / Python", "Local storage / Firebase", "VS Code"]
  },
  409: {
    syllabus: ["Challenge/reward system basics", "Educational app flow", "Topic rotation logic", "Daily habit design", "Progress tracking basics"],
    tools: ["Flutter / React", "Local database / Firebase", "VS Code / Android Studio"]
  },
  410: {
    syllabus: ["Interview content structuring", "Question bank basics", "Topic filters", "Learning app UX", "Revision system basics"],
    tools: ["Flutter / React", "Database / JSON", "VS Code", "Optional AI API"]
  },
  411: {
    syllabus: ["Waste collection robotics basics", "Mobile robot mechanics", "Object detection/pickup concept", "Environmental robotics intro", "Navigation basics"],
    tools: ["Arduino / ESP32 / Raspberry Pi", "Chassis", "Motors + driver", "Collection mechanism", "Camera optional", "Battery"]
  },
  412: {
    syllabus: ["Environmental sensing basics", "Mobile monitoring robots", "Air quality sensors", "Field data logging", "IoT robotics intro"],
    tools: ["ESP32 / Arduino", "Air quality sensor", "Chassis", "Motors + driver", "Battery", "Dashboard optional"]
  },
  413: {
    syllabus: ["Agriculture/environment robotics", "Plant monitoring concepts", "Vision/sensor-based health checking", "Mobile survey systems", "Smart ecology tech basics"],
    tools: ["Raspberry Pi / ESP32", "Camera / sensors", "Chassis", "Motors + driver", "Battery", "Python / Arduino IDE"]
  },
  414: {
    syllabus: ["Leak detection basics", "Mobile inspection robot design", "Sensor integration", "Industrial/home maintenance robotics", "Alert systems"],
    tools: ["Arduino / ESP32", "Water/leak sensor", "Chassis", "Motors + driver", "Battery", "Buzzer/app alert optional"]
  },
  415: {
    syllabus: ["Flood monitoring basics", "Water level sensing", "Mobile disaster prevention systems", "Environmental warning systems", "Field robotics basics"],
    tools: ["ESP32 / Arduino", "Water level sensor", "Chassis optional", "Motors + driver", "Battery", "GSM/dashboard optional"]
  },
  416: {
    syllabus: ["Remote monitoring basics", "Environmental patrol robots", "Camera/sensor integration", "Smart surveillance systems", "Field robotics intro"],
    tools: ["Raspberry Pi / ESP32-CAM", "Camera", "Chassis", "Motors + driver", "Battery", "GPS optional"]
  },
  417: {
    syllabus: ["Landslide sensing concepts", "Soil/motion monitoring basics", "Remote alerts", "Environmental IoT basics", "Disaster monitoring systems"],
    tools: ["ESP32 / Arduino", "Soil moisture / tilt / vibration sensors", "Dashboard/GSM", "Battery / power module"]
  },
  418: {
    syllabus: ["Recycling automation basics", "Object sorting", "Sensor/vision-based classification", "Environmental robotics intro", "Waste segregation concepts"],
    tools: ["Arduino / Raspberry Pi", "Color sensor / camera", "Servo/diverter", "Conveyor optional", "Power supply"]
  },
  419: {
    syllabus: ["Water quality monitoring", "Environmental data collection", "Rover/boat monitoring concept", "Sensor integration basics", "Ecology robotics intro"],
    tools: ["ESP32 / Arduino", "Water quality sensors", "Floating/mobile platform", "Battery", "Dashboard optional"]
  },
  420: {
    syllabus: ["Wildlife monitoring basics", "Camera trap concepts", "Motion detection", "Outdoor robotics systems", "Environmental observation intro"],
    tools: ["Camera", "PIR sensor", "Raspberry Pi / ESP32-CAM", "Chassis optional", "Battery"]
  },
  421: {
    syllabus: ["Chess logic basics", "Board coordinate systems", "Robotic manipulation intro", "AI game logic concept", "Arm-board integration basics"],
    tools: ["Robotic arm", "Chessboard setup", "Python", "Camera optional", "Arduino / Raspberry Pi"]
  },
  422: {
    syllabus: ["Puzzle-solving logic basics", "Grid coordinate mapping", "Robotic writing/path planning", "Educational robotics intro", "Automation workflow design"],
    tools: ["Robotic arm / XY plotter", "Python", "Arduino", "Pen mount", "Puzzle input UI"]
  },
  423: {
    syllabus: ["Cube solving logic intro", "Mechanical manipulation basics", "Multi-axis robotic handling", "Puzzle automation concepts", "Algorithmic robotics basics"],
    tools: ["Custom mechanical frame", "Servo motors", "Arduino / Raspberry Pi", "Cube holder/gripper", "Power supply"]
  },
  424: {
    syllabus: ["Object recognition/sorting basics", "Puzzle piece differentiation", "Vision/classification intro", "Pick-and-place systems", "Educational automation concepts"],
    tools: ["Camera / color sensor", "Robotic arm / sorting mechanism", "Raspberry Pi / Arduino", "Python / Arduino IDE"]
  },
  425: {
    syllabus: ["Precision actuation", "Repetitive handling systems", "Entertainment robotics", "Timing control", "Small object manipulation basics"],
    tools: ["Servo/roller mechanism", "Arduino", "Card tray/dealer design", "Power supply"]
  },
  426: {
    syllabus: ["Board interaction systems", "Token movement basics", "Small object manipulation", "Game automation concepts", "Human-robot interaction basics"],
    tools: ["Robotic arm / XY platform", "Arduino / Raspberry Pi", "Camera optional", "Power supply"]
  },
  427: {
    syllabus: ["Game AI basics", "Human-facing interaction design", "Display and response logic", "Entertainment assistant systems", "Embedded AI UX basics"],
    tools: ["Raspberry Pi / tablet/display", "Speaker optional", "Python / app framework", "AI/game logic"]
  },
  428: {
    syllabus: ["Small actuation systems", "Entertainment robotics", "Timed motion", "Mechanical randomization", "Game assistant concepts"],
    tools: ["Servo / motor setup", "Arduino", "Dice chamber/mechanism", "Power supply"]
  },
  429: {
    syllabus: ["Claw mechanism basics", "XY control or suspension control", "Entertainment robot design", "Gripper timing", "User control systems"],
    tools: ["Servo/DC motors", "Arduino", "Frame + claw", "Joystick/buttons", "Power supply"]
  },
  430: {
    syllabus: ["Toy robotics basics", "Sound/light/motion interaction", "Kid-friendly robot behavior", "Simple sensor integration", "Embedded creativity"],
    tools: ["Arduino / ESP32", "LEDs", "Buzzer/speaker", "Servo/motors optional", "Sensors optional", "Battery"]
  },
  431: {
    syllabus: ["Bio-inspired robotics basics", "Small legged locomotion", "Insect movement mechanics", "Multi-leg coordination", "Robotics design inspiration"],
    tools: ["Small frame", "Servo motors", "Arduino / ESP32", "Battery", "Mechanical components"]
  },
  432: {
    syllabus: ["Jumping mechanism basics", "Spring/actuator concepts", "Bio-inspired motion", "Dynamic robotics intro", "Energy storage and release basics"],
    tools: ["Spring mechanism / actuator", "Arduino optional", "Frame", "Battery optional"]
  },
  433: {
    syllabus: ["Leg spring mechanics", "Jump robotics concepts", "Bio-inspired locomotion", "Balance during landing basics", "Experimental robot dynamics"],
    tools: ["Spring-loaded frame", "Servo/actuator optional", "Arduino optional", "Mechanical kit"]
  },
  434: {
    syllabus: ["Agile balance concepts", "Dynamic stabilization basics", "IMU intro", "Bio-inspired control systems", "Robotics motion analysis"],
    tools: ["IMU", "Servo robot frame", "Arduino / ESP32", "Power supply"]
  },
  435: {
    syllabus: ["Stabilization concepts", "Servo pan-tilt control", "Bio-inspired robotics", "Motion compensation basics", "IMU-based control intro"],
    tools: ["Arduino / ESP32", "IMU", "Pan-tilt servo frame", "Power supply"]
  },
  436: {
    syllabus: ["Soft robotics basics", "Flexible arm concepts", "Continuum robotics intro", "Bio-inspired actuation", "Material behavior basics"],
    tools: ["Soft material/silicone setup", "Pneumatic/servo actuation concept", "Arduino optional", "Mechanical prototype materials"]
  },
  437: {
    syllabus: ["Oscillatory locomotion basics", "Tail-driven propulsion concept", "Bio-inspired underwater robotics", "Motion frequency basics", "Aquatic robot design intro"],
    tools: ["Servo/motor tail mechanism", "Waterproof body concept", "Arduino / ESP32 optional", "Battery"]
  },
  438: {
    syllabus: ["Adhesion-inspired robotics", "Wall climbing concepts", "Surface interaction basics", "Bio-inspired materials intro", "Vertical movement design"],
    tools: ["Climbing frame", "Adhesive/suction concept", "Motors", "Arduino optional"]
  },
  439: {
    syllabus: ["Swarm intelligence basics", "Ant colony inspiration", "Multi-agent coordination", "Path optimization concepts", "Bio-inspired AI intro"],
    tools: ["Python simulation / multi-bot setup", "Visualization tools", "ESP32 bots optional"]
  },
  440: {
    syllabus: ["Finger joint anatomy basics", "Servo/tendon control", "Hand kinematics intro", "Assistive/humanoid robotics basics", "Fine manipulation concepts"],
    tools: ["Finger/hand model", "Servo motors / tendon strings", "Arduino", "Power supply"]
  },
  441: {
    syllabus: ["Smart city robotics basics", "Patrol/navigation systems", "Public monitoring concepts", "Camera/sensor integration", "Service robot operations"],
    tools: ["Raspberry Pi / ESP32", "Camera", "Chassis", "Motors + driver", "Battery", "GPS optional"]
  },
  442: {
    syllabus: ["Public guidance robots", "Indoor navigation basics", "Display/voice assistance", "Human-robot interaction", "Smart transit support systems"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Chassis optional", "Python"]
  },
  443: {
    syllabus: ["Person-following robotics", "Luggage handling concept", "Vision/proximity tracking", "Mobile assistive robot basics", "Transport robotics intro"],
    tools: ["Camera / ultrasonic / tracking sensors", "Raspberry Pi / ESP32", "Chassis/cart", "Motors + driver", "Battery"]
  },
  444: {
    syllabus: ["Hospitality robotics basics", "Delivery and guest interaction", "Indoor path following", "Voice/display interaction", "Service workflow design"],
    tools: ["ESP32 / Raspberry Pi", "Chassis", "Tray/container", "Display/speaker optional", "Battery", "Sensors"]
  },
  445: {
    syllabus: ["Service robot workflow", "Tray transport basics", "Indoor navigation", "Obstacle avoidance", "Hospitality automation intro"],
    tools: ["Chassis", "Motors + driver", "ESP32 / Raspberry Pi", "Tray platform", "Battery", "Sensors"]
  },
  446: {
    syllabus: ["Public interaction systems", "Information retrieval basics", "Voice/display assistant design", "Indoor helper robots", "Service UX basics"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Touch input optional", "Python"]
  },
  447: {
    syllabus: ["Queue logic basics", "Public guidance systems", "Voice/display instructions", "Smart service robot design", "Event management support"],
    tools: ["Raspberry Pi / ESP32", "Display", "Speaker", "Camera optional", "Chassis optional", "Python / Arduino IDE"]
  },
  448: {
    syllabus: ["Safety monitoring basics", "Patrol robot logic", "Camera/sensor-based alerts", "Public-space service robots", "Event detection basics"],
    tools: ["Chassis", "Camera/sensors", "Raspberry Pi / ESP32", "Motors + driver", "Battery"]
  },
  449: {
    syllabus: ["Cleaning robot basics", "Corridor path following", "Coverage motion concepts", "Obstacle avoidance", "Service robotics intro"],
    tools: ["Chassis", "Brush/cleaning module", "Motors + driver", "Arduino / ESP32", "Battery", "Sensors"]
  },
  450: {
    syllabus: ["Event service robotics", "Human-facing interaction", "Voice/display guidance", "Mobility basics", "Public assistant UX"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Camera optional", "Chassis optional", "Python"]
  },
  451: {
    syllabus: ["Chat screen UI basics", "Input/output conversation flow", "Error/loading states", "AI assistant UX", "Mobile app design basics"],
    tools: ["Flutter / React Native / React", "VS Code / Android Studio", "Chat backend/API optional", "Figma optional"]
  },
  452: {
    syllabus: ["Carousel UI design", "Card layout systems", "Horizontal scrolling UX", "Project tagging and filtering", "Mobile UI design basics"],
    tools: ["Flutter / React Native / React", "Figma", "VS Code / Android Studio"]
  },
  453: {
    syllabus: ["Home dashboard design", "Section hierarchy", "CTA button placement", "Educational UX basics", "App information architecture"],
    tools: ["Flutter / React Native", "Figma", "VS Code / Android Studio"]
  },
  454: {
    syllabus: ["Floating action button design", "Chat entry UX", "Accessibility basics", "App navigation patterns", "AI assistant interaction entry points"],
    tools: ["Flutter / React Native / React", "Figma", "VS Code / Android Studio"]
  },
  455: {
    syllabus: ["Progress visualization basics", "Dashboard cards", "Learning analytics intro", "Streak and goal tracking", "Educational app UX"],
    tools: ["Flutter / React", "Chart libraries", "Figma optional", "VS Code"]
  },
  456: {
    syllabus: ["Detail page layout", "Sectioned content design", "Components/steps/tags structure", "Readable educational UI", "CTA and navigation basics"],
    tools: ["Flutter / React", "Figma", "VS Code / Android Studio"]
  },
  457: {
    syllabus: ["Robotics dashboard design", "Joint state visualization", "Control panel layout", "Humanoid UI concepts", "Telemetry display basics"],
    tools: ["Flutter / React / Python dashboard", "Charts/knobs/sliders UI", "VS Code"]
  },
  458: {
    syllabus: ["Control panel design basics", "Sliders and input mapping", "Arm joint UX", "Robotics app interface design", "Manual control concepts"],
    tools: ["Flutter / React / Python GUI", "VS Code / Android Studio"]
  },
  459: {
    syllabus: ["Sensor telemetry basics", "Graph and card UI", "Real-time data display", "Dashboard UX", "Monitoring systems design"],
    tools: ["Flutter / React / Python dashboard", "Chart library", "ESP32/Arduino data source optional"]
  },
  460: {
    syllabus: ["Quiz UI design", "MCQ flow", "Score logic", "Educational interaction design", "Revision app concepts"],
    tools: ["Flutter / React / web app", "Local data / database", "VS Code / Android Studio"]
  },
  461: {
    syllabus: ["Medical robotics intro", "Precision robotic arm motion", "Simulation basics", "Human-safe robotics concepts", "Surgical assistance theory basics"],
    tools: ["Python simulation / robotic arm model", "GUI/visualization", "Optional robotic arm hardware", "VS Code / Jupyter"]
  },
  462: {
    syllabus: ["Medical targeting concepts", "Precision guidance basics", "Assistive healthcare robotics", "Human-safe motion planning", "Medical simulation basics"],
    tools: ["Simulation software / Python", "GUI/visualization", "Arm model optional"]
  },
  463: {
    syllabus: ["Dispensing system basics", "Timing and scheduling", "Controlled release mechanisms", "Healthcare automation intro", "Reminder and delivery concepts"],
    tools: ["Arduino / ESP32", "Servo/dispenser", "RTC optional", "Speaker/display optional", "Power supply"]
  },
  464: {
    syllabus: ["Assistive healthcare robot basics", "Reminder/info systems", "Human interaction design", "Safe bedside robotics", "Voice/display assistant flow"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Microphone optional", "Python"]
  },
  465: {
    syllabus: ["Healthcare logistics robotics", "Indoor delivery basics", "Contactless interaction", "Safe navigation", "Hospital automation intro"],
    tools: ["Chassis", "ESP32 / Raspberry Pi", "Motors + driver", "Tray", "Battery", "Sensors"]
  },
  466: {
    syllabus: ["Monitoring robot basics", "Health/environment sensing", "Indoor patrol systems", "Assistive healthcare robotics", "Alert workflow basics"],
    tools: ["Chassis", "Camera/sensors", "Raspberry Pi / ESP32", "Motors + driver", "Battery"]
  },
  467: {
    syllabus: ["Assistive mobility robotics", "Safer navigation basics", "Obstacle detection", "User-centered control systems", "Accessibility tech basics"],
    tools: ["Wheelchair model/base", "ESP32 / Raspberry Pi", "Sensors", "Motor driver", "Battery"]
  },
  468: {
    syllabus: ["Rehabilitation robotics", "Motion tracking basics", "Exercise repetition monitoring", "Assistive tech systems", "Healthcare data logging basics"],
    tools: ["IMU / angle sensors", "ESP32 / Arduino", "Display/app optional", "Battery"]
  },
  469: {
    syllabus: ["Telepresence systems basics", "Video/audio communication", "Remote interaction robotics", "Mobile healthcare assistant concepts", "Human-centered robot design"],
    tools: ["Raspberry Pi / tablet", "Camera", "Microphone", "Speaker", "Chassis optional", "Wi-Fi"]
  },
  470: {
    syllabus: ["Healthcare inventory automation", "Item tracking basics", "Delivery/logistics workflow", "Hospital support robotics", "Database basics"],
    tools: ["ESP32 / Raspberry Pi", "RFID/barcode optional", "Chassis optional", "Display", "Python / Arduino IDE"]
  },
  471: {
    syllabus: ["Service delivery robotics", "Load transport basics", "Hostel automation intro", "Indoor navigation", "Utility robot workflow"],
    tools: ["Chassis/cart", "Motors + driver", "ESP32 / Raspberry Pi", "Battery", "Sensors"]
  },
  472: {
    syllabus: ["Food delivery robot basics", "Indoor transport systems", "Tray stability basics", "Obstacle avoidance", "Service robotics workflow"],
    tools: ["Chassis", "Tray", "Motors + driver", "ESP32 / Raspberry Pi", "Battery", "Sensors"]
  },
  473: {
    syllabus: ["Waste management robotics", "Collection mechanism basics", "Outdoor/indoor patrol", "Smart campus automation", "Service robot basics"],
    tools: ["Chassis", "Collection tray", "Motors + driver", "ESP32 / Arduino", "Sensors optional", "Battery"]
  },
  474: {
    syllabus: ["Announcement system design", "Voice/display interaction", "Educational service robotics", "Mobile helper basics", "Scheduling and task flow"],
    tools: ["Raspberry Pi / ESP32", "Speaker", "Display optional", "Chassis optional", "Python / Arduino IDE"]
  },
  475: {
    syllabus: ["Attendance systems basics", "Face/RFID attendance concept", "Desk/terminal automation", "Educational tech systems", "Data logging basics"],
    tools: ["RFID module / camera", "Raspberry Pi / Arduino", "Display", "Servo optional", "Python / Arduino IDE"]
  },
  476: {
    syllabus: ["Room safety monitoring", "Gas/smoke/temp sensing", "IoT alerts", "Smart hostel automation", "Embedded monitoring basics"],
    tools: ["ESP32 / Arduino", "Gas/temp/flame sensors", "Buzzer / app alert", "Arduino IDE"]
  },
  477: {
    syllabus: ["Library service robotics", "Book handling basics", "Indoor delivery/logistics", "Educational automation", "Path guidance basics"],
    tools: ["Chassis/cart", "Motors + driver", "ESP32 / Raspberry Pi", "Battery", "Barcode/RFID optional"]
  },
  478: {
    syllabus: ["Asset tracking basics", "RFID/barcode systems", "Lab inventory automation", "Search and status systems", "Productivity robotics intro"],
    tools: ["RFID/barcode scanner", "ESP32 / Raspberry Pi", "Display/app optional", "Database"]
  },
  479: {
    syllabus: ["Presentation robotics basics", "Demo flow design", "Voice/display interaction", "Event support systems", "Human-facing robot UX"],
    tools: ["Raspberry Pi / ESP32", "Display", "Speaker", "Chassis optional", "Python / Arduino IDE"]
  },
  480: {
    syllabus: ["Interview prep assistant design", "Educational chatbot basics", "Topic-based question flow", "Productivity learning systems", "App UX basics"],
    tools: ["Flutter / React / Python app", "Database / JSON question bank", "AI API optional"]
  },
  481: {
    syllabus: ["Image classification basics", "Waste category detection", "Environmental AI intro", "Camera-based sorting concepts", "Model inference basics"],
    tools: ["Camera", "Python", "OpenCV / ML model", "Raspberry Pi / laptop"]
  },
  482: {
    syllabus: ["Office delivery robotics", "Item transport basics", "Path following", "Indoor automation concepts", "Utility robotics intro"],
    tools: ["Chassis", "Tray/document holder", "Motors + driver", "ESP32 / Arduino", "Battery", "Sensors"]
  },
  483: {
    syllabus: ["Small logistics robot basics", "Office/classroom automation", "Route-following basics", "Delivery workflow", "Smart campus robotics intro"],
    tools: ["Chassis", "Motors + driver", "ESP32 / Arduino", "Battery", "Line/path sensors optional"]
  },
  484: {
    syllabus: ["Educational robot design", "Voice/display teaching flow", "Child-friendly interaction basics", "Quiz and learning assistant systems", "Human-robot interaction basics"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Microphone optional", "Python"]
  },
  485: {
    syllabus: ["Cleaning robot basics", "Classroom path coverage", "Obstacle avoidance", "Service robot workflow", "Smart school automation intro"],
    tools: ["Chassis", "Cleaning brush/pad", "Motors + driver", "Arduino / ESP32", "Battery", "Sensors"]
  },
  486: {
    syllabus: ["Voice command processing", "Presentation control flow", "Productivity assistant design", "Human-computer interaction", "Voice automation basics"],
    tools: ["Laptop / Raspberry Pi", "Microphone", "Python", "Presentation software integration"]
  },
  487: {
    syllabus: ["Prompt generation basics", "Educational AI assistant design", "Topic suggestion logic", "Public speaking support tools", "App UX basics"],
    tools: ["Web/mobile app stack", "Python / JavaScript", "AI API optional", "Database optional"]
  },
  488: {
    syllabus: ["Mock interview flow design", "Question-response interaction", "Voice/chatbot interface basics", "Educational support robots", "Assessment UX basics"],
    tools: ["Raspberry Pi / app UI", "Display", "Speaker/microphone", "Python / Flutter / React"]
  },
  489: {
    syllabus: ["Recommendation logic basics", "Daily practice systems", "Educational productivity apps", "Rule-based assistant design", "Learning support UX"],
    tools: ["Flutter / React / Python app", "Database / JSON topic set", "VS Code"]
  },
  490: {
    syllabus: ["AI tutor basics", "Educational content generation", "Concept simplification design", "Robotics topic mapping", "Chat assistant UX"],
    tools: ["Web/mobile chat UI", "Python / JavaScript", "AI API optional", "Database/JSON concepts list"]
  },
  491: {
    syllabus: ["Digital twin basics", "Humanoid telemetry and visualization", "Joint state mapping", "Simulation-linked robotics", "Real-time sync concepts"],
    tools: ["Python / ROS / dashboard", "Humanoid model", "Visualization tools", "Sensors optional"]
  },
  492: {
    syllabus: ["Motion capture basics", "Human pose mapping", "Robot imitation intro", "Kinematics and joint transfer concepts", "Interactive robotics basics"],
    tools: ["Camera / motion sensors", "Python", "OpenCV / pose estimation", "Robot/humanoid model optional"]
  },
  493: {
    syllabus: ["Teleoperation basics", "Remote joint control", "User input to arm mapping", "Robotics control UI", "Safety and precision basics"],
    tools: ["Robotic arm", "Joystick / glove / UI", "Arduino / ESP32 / Raspberry Pi", "Power supply"]
  },
  494: {
    syllabus: ["Master-slave robotics basics", "Motion copying", "Joint synchronization", "Remote manipulation concepts", "Teleoperation fundamentals"],
    tools: ["2 arm models", "Potentiometers/encoders/servos", "Arduino / ESP32", "Power supply"]
  },
  495: {
    syllabus: ["Path correction basics", "Sensor/vision feedback", "AI-assisted control concepts", "Mobile robotics improvement", "Prediction-based adjustment intro"],
    tools: ["Camera/sensors", "Raspberry Pi / ESP32", "Chassis", "Motors + driver", "Battery", "Python / Arduino IDE"]
  },
  496: {
    syllabus: ["Humanoid service systems", "Information kiosk design", "Voice/display interaction", "Human-facing robotics UX", "Public assistant robot concepts"],
    tools: ["Raspberry Pi", "Display", "Speaker", "Camera/microphone optional", "Humanoid head/frame optional"]
  },
  497: {
    syllabus: ["Terrain-aware robotics", "Mobility adaptation basics", "Sensor-based motion adjustment", "Field robot design", "Advanced navigation intro"],
    tools: ["Rugged chassis", "Motors + driver", "IMU / sensors", "Raspberry Pi / ESP32", "Battery"]
  },
  498: {
    syllabus: ["Autonomous docking basics", "Charging station concepts", "Battery management basics", "Mobile robot autonomy", "Long-run robotics systems"],
    tools: ["Robot chassis", "Docking markers/sensors", "ESP32 / Raspberry Pi", "Battery + charging dock concept", "Motors + driver"]
  },
  499: {
    syllabus: ["Service robot systems integration", "Navigation + voice + handling basics", "Smart home robotics intro", "Human interaction design", "Multi-feature robotics product thinking"],
    tools: ["Raspberry Pi / ESP32", "Chassis", "Camera", "Microphone/speaker", "Arm/gripper optional", "Sensors", "Battery"]
  },
  500: {
    syllabus: ["Advanced AI robotics product design", "Multi-system integration", "Voice, vision, navigation, interaction", "Educational + assistive + service robotics", "Robotics system architecture basics"],
    tools: ["Raspberry Pi / Jetson / ESP32 combo", "Camera", "Microphone", "Speaker", "Robot chassis", "Arm/gripper optional", "Sensors suite", "Battery", "Python / ROS / app UI stack app me uplod karo"]
  }
});
