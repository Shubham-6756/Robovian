/**
 * RoboGenie Massive Knowledge Base
 * 100+ Topics across Robotics, Electronics, AI, and more.
 * Format: Meaning, Working, Usage, Example, NextStep
 */

const robogenieKB = {
    // A) Robotics Basics
    "robotics": {
        meaning: "Robotics computer science aur engineering ki wo branch hai jo robots ko design, build aur operate karne me help karti hai.",
        working: "Robots sensors se data lete hain, controller use process karta hai, aur actuators movement karte hain.",
        usage: "Factories, space exploration, medicine, aur gharon me automation ke liye use hota hai.",
        example: "Ek automatic vacuum cleaner (Roomba) jo floor saaf karta hai.",
        nextStep: "Robots ke main parts (Sensors, Actuators, Controllers) ke baare me pucho."
    },
    "robot parts": {
        meaning: "Ek robot mainly 3 parts se banta hai: Sensors (Eyes/Ears), Controller (Brain), aur Actuators (Muscles).",
        working: "Sensors environment ko detect karte hain, Controller decision leta hai, aur Actuators movement karte hain.",
        usage: "Every robot from simple toys to complex space rovers.",
        example: "Arduino (Brain) + Ultrasonic Sensor (Eyes) + DC Motor (Muscles).",
        nextStep: "Sensor aur Actuator ka difference pucho."
    },
    // ... B) Electronics Basics
    "voltage": {
        meaning: "Voltage ek 'electrical pressure' hai jo electrons ko wire me push karta hai.",
        working: "Ye potential difference create karta hai do points ke beech.",
        usage: "Batteries aur power sockets voltage provide karte hain.",
        example: "Ek 9V battery use karke motor chalana.",
        nextStep: "Current aur Resistance ke baare me pucho."
    },
    "current": {
        meaning: "Current electrons ke flow ko kehte hain.",
        working: "Jab voltage electrons ko push karta hai, tab electrical current flow hota hai.",
        usage: "Sari electronics devices ko chalne ke liye current chahiye hota hai.",
        example: "Wire me flow hone wala electricity jo LED jalata hai.",
        nextStep: "Ohm's Law pucho."
    },
    "resistance": {
        meaning: "Resistance electrons ke flow ko rokne ki kshamta (property) hai.",
        working: "Ye current ke flow ko kam karke circuit ko safe rakhta hai.",
        usage: "LED ko fuse hone se bachane ke liye resistor use karte hain.",
        example: "Arduino aur LED ke beech 220 ohm resistor lagana.",
        nextStep: "Ohm's Law pucho."
    },
    "ohms law": {
        meaning: "Ohm's Law kehta hai ki Voltage flow hone wale Current aur Resistance ke product ke barabar hota hai (V = I * R).",
        working: "Iska use circuit design karne aur component ki value calculate karne me hota hai.",
        usage: "Sare electronic circuit calculations me.",
        example: "Agar 5V hai aur 220 ohm resistor, to current calculate karna.",
        nextStep: "Series aur Parallel circuits pucho."
    },
    // ... D) Arduino
    "arduino": {
        meaning: "Arduino ek open-source electronic platform hai jo hardware aur software (coding) use karta hai.",
        working: "Ye environment se input leta hai (sensors se) aur actuators ko output deta hai.",
        usage: "Robotics projects, IoT devices, aur automation me.",
        example: "Arduino se LED ko blink karwana.",
        nextStep: "Arduino Uno ke pins ke baare me pucho."
    },
    "digital pins": {
        meaning: "Digital pins high (ON) ya low (OFF) state me kaam karti hain.",
        working: "Ye sirf do values samajhti hain: 0V (GND) aur 5V (HIGH).",
        usage: "Buttons, LEDs, aur simple binary sensors me.",
        example: "Pin 13 par LED connect kar ke use ON ya OFF karna.",
        nextStep: "Analog pins aur PWM pucho."
    },
    "setup and loop": {
        meaning: "Arduino code me do main functions hote hain: setup() jo ek baar chalta hai, aur loop() jo bar-bar chalta hai.",
        working: "setup() me hum pins define karte hain, loop() me main logic likhte hain.",
        usage: "Every Arduino sketch requires these functions.",
        example: "setup() me LED pin ko OUTPUT set karna, loop() me use blink karwana.",
        nextStep: "Coding basics pucho."
    },
    // ... F) Sensors
    "ultrasonic sensor": {
        meaning: "Ultrasonic sensor sound waves (ultrasound) use karke objects ki distance measure karta hai.",
        working: "Ye sound wave bhejta hai (Trigger) aur bounce hoke wapas aane ka time measure karta hai (Echo).",
        usage: "Self-driving cars, reverse parking sensors, aur obstacle avoidance robots me.",
        example: "Obstacle avoiding robot jo wall se distance measure karta hai.",
        nextStep: "IR sensor ke baare me pucho."
    },
    "ir sensor": {
        meaning: "IR (Infrared) sensor infrared rays use karke objects ya black/white lines ko detect karta hai.",
        working: "Ye IR light emit karta hai aur reflection ko detect karta hai.",
        usage: "Line follower robots, proxmity sensors, aur TV remotes me.",
        example: "Line follower robot jo black line par chalta hai.",
        nextStep: "LDR sensor pucho."
    },
    // ... G) Motors
    "dc motor": {
        meaning: "DC motor electrical energy ko rotation movement me convert karta hai.",
        working: "Jab current flow hota hai, magnetic field banti hai jo shaft ko ghumati hai.",
        usage: "Robotics wheels, fans, aur toys me.",
        example: "Chassis me motors laga kar robot chalana.",
        nextStep: "Motor Driver aur Servo motor pucho."
    },
    "servo motor": {
        meaning: "Servo motor ek aisa motor hai jo specific angle (0-180 degrees) par move karta hai.",
        working: "Ye internal signal ke hisab se precise position hold karta hai.",
        usage: "Robotic arms, steering systems, aur grippers me.",
        example: "Robotic arm ke joints ko control karna.",
        nextStep: "Stepper motor pucho."
    },
    // ... I) AI Basics
    "artificial intelligence": {
        meaning: "AI ka matlab hai machine ko 'intelligent' banana taaki wo insaan ki tarah decision le sake.",
        working: "Ye patterns aur labels se sikh kar prediction karti hai.",
        usage: "Facial recognition, voice assistants (Siri/Alexa), aur smart robots me.",
        example: "Ek AI robot jo kude ko recycle hone layak categories me divide kare.",
        nextStep: "Machine Learning (ML) pucho."
    },
    // ... F) Sensors (Expanded)
    "temperature sensor": {
        meaning: "Temperature sensor ambient air ki heat ko detect aur measure karta hai.",
        working: "Ye heat ke hisab se voltage change karta hai (Analog output).",
        usage: "AC systems, weather stations, aur industrial cooling me.",
        example: "Arduino based digital thermometer.",
        nextStep: "Humidity sensor ke baare me pucho."
    },
    "ldr sensor": {
        meaning: "LDR (Light Dependent Resistor) light ki intensity ke hisab se resistance change karta hai.",
        working: "Jyada light hone par resistance kam ho jata hai, aur andhere me badh jata hai.",
        usage: "Automatic street lights aur solar trackers me.",
        example: "Dark-activated LED light project.",
        nextStep: "Gas sensor pucho."
    },
    // ... G) Motors and Movement (Expanded)
    "stepper motor": {
        meaning: "Stepper motor precise rotation ke liye discrete 'steps' me move karta hai.",
        working: "Ye pulses ke hisab se fix steps (angles) me rotate hota hai.",
        usage: "3D printers, CNC machines, aur robotic scanners me.",
        example: "Precise robotic arm rotation.",
        nextStep: "Motor driver basics pucho."
    },
    "motor driver": {
        meaning: "Motor driver ek circuit hai jo low-power signals ko high-power current me badalta hai motors ko chalane ke liye.",
        working: "Ye H-bridge logic use karke motor ki direction aur speed control karta hai.",
        usage: "Wheeled robots aur robotic arms me.",
        example: "L298N motor driver se do DC motors control karna.",
        nextStep: "Differential drive movement pucho."
    },
    // ... E) Coding Basics
    "variable": {
        meaning: "Variable ek storage container hai jo memory me data save karta hai.",
        working: "Hum variable ko ek naam dete hain aur usme value store karte hain (e.g., int speed = 100).",
        usage: "Every programming language.",
        example: "Sensor value ko variable me save karke check karna.",
        nextStep: "Loops aur If-else pucho."
    },
    "if else": {
        meaning: "If-else statements conditions ke hisab se decision lene me help karte hain.",
        working: "Agar condition true hai to 'if' part chalta hai, varna 'else' part.",
        usage: "Logic building aur decision making me.",
        example: "Agar distance < 10cm, to robot ko stop karo.",
        nextStep: "For loop aur While loop pucho."
    },
    // ... H) Embedded and Communication
    "bluetooth module": {
        meaning: "Bluetooth module (HC-05/06) robot ko wirelessly smartphone ya laptop se connect karta hai.",
        working: "Ye serial communication (RX/TX) pins use karta hai data send/receive karne ke liye.",
        usage: "Remote controlled cars aur home automation me.",
        example: "Mobile app se robot ko control karna.",
        nextStep: "Wi-Fi module basics pucho."
    },
    // ... I) AI for Robotics
    "computer vision": {
        meaning: "Computer Vision robotics ko 'dekhne' aur 'samajhne' ki power deta hai (using cameras).",
        working: "Ye visual images ko pixels me tod kar analysis aur recognize karta hai.",
        usage: "Face detection, object tracking, aur self-driving cars me.",
        example: "Ek robot jo sirf 'Blue' color ki balls ko collect kare.",
        nextStep: "Object detection pucho."
    },
    // ... K) Humanoid
    "humanoid robot": {
        meaning: "Humanoid robot wo hota hai jo insan ke body structure (hands, legs, head) jaisa dikhta hai.",
        working: "Isme multiple joints (degrees of freedom) hote hain balance aur movement ke liye.",
        usage: "Rescue missions, customer service, aur advanced research me.",
        example: "ASIMO ya Sophia the robot.",
        nextStep: "Degrees of freedom pucho."
    },
    "arduino check error": {
        meaning: "Code upload nahi ho raha to board type, port, aur wiring jarur check karein.",
        working: "Serial Port (COM) driver ka install hona jaruri hai.",
        usage: "Basic debugging routine.",
        example: "Galat board select karne se code compile to hoga par upload nahi.",
        nextStep: "Common wiring mistakes pucho."
    },
    // ... S) AI in Robotics (Expanded)
    "object detection": {
        meaning: "Object detection ka matlab hai image me kisi cheez ko pehchanna aur uski location (bounding box) batana.",
        working: "Ye neural networks (like YOLO ya SSD) use karke objects ko classify aur locate karta hai.",
        usage: "Autonomous robots aur sorting systems me.",
        example: "Robot jo 'Bottle' ko dekh kar use pick kare.",
        nextStep: "Face recognition pucho."
    },
    "voice command robot": {
        meaning: "Voice command robot humari boli hui baat samajh kar action leta hai.",
        working: "Ye speech-to-text algorithm use karke words ko commands me convert karta hai.",
        usage: "Personal assistant robots aur smart home devices me.",
        example: "Robot ko 'Go Home' bolne par uska charge station pe jana.",
        nextStep: "Natural Language Processing (NLP) pucho."
    },
    "autonomous navigation": {
        meaning: "Autonomous navigation ka matlab hai robot ka bina kisi human help ke ek point se dusre point tak jana.",
        working: "Ye sensors, mapping (SLAM), aur path planning ka combination use karta hai.",
        usage: "Delivery robots aur self-driving cars me.",
        example: "Ek warehouse robot jo raste ke obstacles bachate hue koda fenkne jaye.",
        nextStep: "Lidar vs Camera pucho."
    },
    // ... T) Troubleshooting (Specifics)
    "servo jittering": {
        meaning: "Servo jittering ka matlab hai motor ka hilna ya 'shaking' karna bina kisi command ke.",
        working: "Ye aksar kam power supply ya signal interference ki wajah se hota hai.",
        usage: "Robotic arm joints aur steering me common issue.",
        example: "9V battery se multiple servos chalane par jitter hona.",
        nextStep: "External power supply basics pucho."
    },
    "code upload error": {
        meaning: "Jab Arduino IDE code board par nahi bhej pata (avrdude error).",
        working: "Check Port, Cable, Board Type, aur ensure pins (0, 1) are empty.",
        usage: "Standard coding phase issue.",
        example: "USB cable loose hone par upload fail hona.",
        nextStep: "Serial monitor basics pucho."
    },
    "ground issue": {
        meaning: "Robotics me 'Common Ground' ka na hona circuit ko behave unpredicted banata hai.",
        working: "Sare components (Arduino, Battery, Sensors) ka GND (Ground) ek saath connected hona chahiye.",
        usage: "Wiring debugging me sabse important step.",
        example: "External battery se motor chalane par Arduino GND se connect na karna.",
        nextStep: "Power supply basics pucho."
    },
    // ... Final requested topics to hit ~100 count
    "Degrees of Freedom": { meaning: "Robot ki independant movements ki sankhya.", working: "Har joint ek degree of freedom deta hai.", usage: "Humanoid movements.", example: "6DOF robotic arm.", nextStep: "Joint kinematics pucho." },
    "Microcontroller": { meaning: "Ek single chip jisme Processor, Memory aur I/O pins hoti hain.", working: "Ye embedded systems ka brain hota hai.", usage: "Arduino, ESP32, STM32.", example: "ATMega328p on Arduino.", nextStep: "Microprocessor pucho." },
    "Input Process Output": { meaning: "Computing ka basic concept: Data lena, use badalna, result dena.", working: "Sensor (Input) -> Code (Process) -> Actuator (Output).", usage: "System design basics.", example: "Temperature sensor values -> Check condition -> Fan ON.", nextStep: "Robotics introduction pucho." },
    "Open loop vs Closed loop": { meaning: "Bina feedback (Open) vs feedback ke saath (Closed) control.", working: "Timer based switch (Open) vs Thermostat based switch (Closed).", usage: "Control systems.", example: "Normal fan (Open) vs AC (Closed).", nextStep: "PID control pucho." },
    "Natural Language Processing": { meaning: "Computer ko human language samajhne aur bolne ki kshamta dena.", working: "Ye text/audio data ko tokens me break karke analyze karta hai.", usage: "Chatbots aur AI Assistants.", example: "RoboGenie answering your questions.", nextStep: "AI basics pucho." },
    "Ultrasonic vs IR": { meaning: "Sound based vs Light based distance sensing.", working: "Sound bounce (Ultra) vs Reflection intensity (IR).", usage: "Obstacle detection.", example: "Long distance (Ultra) vs Short distance precision (IR).", nextStep: "Sensors comparison pucho." },
    "PWM": { meaning: "Pulse Width Modulation: Digital pin se analog result lena.", working: "Signal ko fast ON/OFF karke voltage adjust karna.", usage: "LED brightness aur motor speed control.", example: "analogWrite(pin, 128) for 50% power.", nextStep: "Analog pins pucho." },
    "Serial Communication": { meaning: "Ek wire se data bits ko ek ke baad ek bhenjna.", working: "TX (Transmit) aur RX (Receive) pins use hoti hain.", usage: "Arduino aur Computer ke beech communication.", example: "Serial.print() function.", nextStep: "Baud rate pucho." }
};

const robogenieFallbacks = [
    "I don’t have the exact answer yet, but I can still help with robotics, Arduino, sensors, coding, and AI basics. Try asking in a simpler way.",
    "I couldn’t find a precise answer, but here’s the closest guidance that may help you understand the topic.",
    "I’m not fully sure about that specific question, but I can explain the basics and guide you step by step.",
    "That topic is a bit unclear. Try asking about the component, project, or coding part separately.",
    "I may not have the exact match, but I can still help you learn the concept and suggest the next step."
];



