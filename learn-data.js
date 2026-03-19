const learnData = {
    beginner: [
        {
            id: "b1",
            category: "Basics",
            title: "What is Robotics?",
            explanation: "Robotics is an interdisciplinary branch of computer science and engineering that involves design, construction, operation, and use of robots.",
            keyConcepts: ["Definition", "History", "Laws of Robotics"],
            difficulty: "Beginner",
            duration: "10 min",
            prerequisite: "None",
            nextLesson: "b2",
            quiz: {
                question: "Who coined the term 'Robotics'?",
                options: ["Isaac Asimov", "Nikola Tesla", "Alan Turing", "Elon Musk"],
                answer: 0
            },
            practiceTask: "Research three real-world applications of robots today.",
            projectLink: "None"
        },
        {
            id: "b2",
            category: "Basics",
            title: "Types of Robots",
            explanation: "Robots come in various shapes and sizes depending on their application, from industrial arms to autonomous drones.",
            keyConcepts: ["Industrial", "Service", "Mobile", "Autonomous"],
            difficulty: "Beginner",
            duration: "15 min",
            prerequisite: "What is Robotics?",
            nextLesson: "b3",
            quiz: {
                question: "Which type of robot is primarily used in factories?",
                options: ["Domestic", "Industrial", "Medical", "Entertainment"],
                answer: 1
            },
            practiceTask: "Categorize five different robots you know.",
            projectLink: "None"
        },
        {
            id: "b3",
            category: "Electronics",
            title: "Voltage and Current",
            explanation: "Voltage is the pressure that pushes electricity through a circuit, while current is the flow of electrons.",
            keyConcepts: ["Volts (V)", "Amperes (A)", "Ohm's Law"],
            difficulty: "Beginner",
            duration: "20 min",
            prerequisite: "None",
            nextLesson: "b4",
            quiz: {
                question: "What is the unit of electric current?",
                options: ["Volt", "Ohm", "Ampere", "Watt"],
                answer: 2
            },
            practiceTask: "Draw a simple circuit diagram with a battery and LED.",
            projectLink: "1" 
        },
        {
            id: "b4",
            category: "Electronics",
            title: "LED Basics",
            explanation: "A Light Emitting Diode (LED) is a semiconductor light source that emits light when current flows through it.",
            keyConcepts: ["Anode/Cathode", "Forward Bias", "Current Limiting Resistor"],
            difficulty: "Beginner",
            duration: "15 min",
            prerequisite: "Voltage and Current",
            nextLesson: "b5",
            quiz: {
                question: "Which leg of an LED is usually longer?",
                options: ["Cathode (-)", "Anode (+)", "Both are same", "None"],
                answer: 1
            },
            practiceTask: "Identify the anode and cathode on a physical LED.",
            projectLink: "1"
        },
        {
            id: "b5",
            category: "Arduino",
            title: "Arduino Introduction",
            explanation: "Arduino is an open-source electronics platform based on easy-to-use hardware and software.",
            keyConcepts: ["Microcontroller", "IDE", "USB Interface"],
            difficulty: "Beginner",
            duration: "15 min",
            prerequisite: "None",
            nextLesson: "b6",
            quiz: {
                question: "What is the most popular Arduino board for beginners?",
                options: ["Mega", "Nano", "Uno", "Due"],
                answer: 2
            },
            practiceTask: "Install the Arduino IDE on your computer.",
            projectLink: "None"
        },
        {
            id: "b6",
            category: "Sensors",
            title: "Ultrasonic Sensor",
            explanation: "Ultrasonic sensors measure distance by sending out a sound wave at a high frequency and timing how long it takes for the echo to return.",
            keyConcepts: ["Trig Pin", "Echo Pin", "Speed of Sound"],
            difficulty: "Beginner",
            duration: "20 min",
            prerequisite: "Arduino Basics",
            nextLesson: "b7",
            quiz: {
                question: "What does the Trigger pin do?",
                options: ["Receives echo", "Sends pulse", "Powers sensor", "None"],
                answer: 1
            },
            practiceTask: "Create a distance meter using Serial Monitor.",
            projectLink: "15"
        }
    ],
    intermediate: [
        {
            id: "i1",
            category: "Control",
            title: "Line Follower Logic",
            explanation: "Line followers use IR sensors to detect the contrast between a dark line and a light surface to steer.",
            keyConcepts: ["IR Threshold", "Differential Drive", "Error Correction"],
            difficulty: "Intermediate",
            duration: "30 min",
            prerequisite: "IR Sensor Basics",
            nextLesson: "i2",
            quiz: {
                question: "How many sensors are typically used for a basic line follower?",
                options: ["1", "2", "5", "8"],
                answer: 1
            },
            practiceTask: "Write a pseudo-code for line following logic.",
            projectLink: "17"
        },
        {
            id: "i2",
            category: "Motors",
            title: "Motor Drivers (L298N)",
            explanation: "Motor drivers allow a low-power microcontroller to control high-power DC motors.",
            keyConcepts: ["H-Bridge", "PWM Speed Control", "External Power"],
            difficulty: "Intermediate",
            duration: "25 min",
            prerequisite: "DC Motor Basics",
            nextLesson: "i3",
            quiz: {
                question: "What does an H-Bridge allow a motor to do?",
                options: ["Go faster", "Reverse direction", "Stop instantly", "Consume less power"],
                answer: 1
            },
            practiceTask: "Connect a motor to L298N and test both directions.",
            projectLink: "16"
        },
        {
            id: "i3",
            category: "Vision",
            title: "OpenCV Intro",
            explanation: "OpenCV is an open-source library for computer vision, used for image processing and object detection.",
            keyConcepts: ["Pixels", "Greyscale", "Thresholding"],
            difficulty: "Intermediate",
            duration: "40 min",
            prerequisite: "Python Basics",
            nextLesson: "i4",
            quiz: {
                question: "What is an image made of?",
                options: ["Vectors", "Pixels", "Waves", "Lines"],
                answer: 1
            },
            practiceTask: "Load and display an image using Python OpenCV.",
            projectLink: "201"
        }
    ],
    advanced: [
        {
            id: "a1",
            category: "Humanoid",
            title: "Inverse Kinematics",
            explanation: "Inverse Kinematics (IK) translates the desired position of a robot's end effector into joint angles.",
            keyConcepts: ["Trigonometry", "Jacobian Matrix", "Degrees of Freedom"],
            difficulty: "Advanced",
            duration: "60 min",
            prerequisite: "Forward Kinematics",
            nextLesson: "a2",
            quiz: {
                question: "What is the goal of Inverse Kinematics?",
                options: ["Finding position from angles", "Finding angles from position", "Moving faster", "Conserving energy"],
                answer: 1
            },
            practiceTask: "Calculate joint angles for a 2-DOF arm given coordinates.",
            projectLink: "250"
        },
        {
            id: "a2",
            category: "ROS",
            title: "ROS Basics",
            explanation: "Robot Operating System (ROS) provides a framework for writing robot software with nodes and topics.",
            keyConcepts: ["Nodes", "Topics", "Publish/Subscribe", "Messages"],
            difficulty: "Advanced",
            duration: "90 min",
            prerequisite: "Linux Basics",
            nextLesson: "a3",
            quiz: {
                question: "How do ROS nodes communicate?",
                options: ["Variables", "Topics", "Wired connection", "Function calls"],
                answer: 1
            },
            practiceTask: "Create a simple Talker/Listener node in ROS.",
            projectLink: "None"
        },
        {
            id: "a3",
            category: "AI",
            title: "SLAM Intro",
            explanation: "Simultaneous Localization and Mapping (SLAM) is how a robot builds a map while keeping track of its location.",
            keyConcepts: ["Lidar", "Odometry", "Point Clouds"],
            difficulty: "Advanced",
            duration: "120 min",
            prerequisite: "Computer Vision",
            nextLesson: "None",
            quiz: {
                question: "What does SLAM stand for?",
                options: ["Simple Local Area Map", "Simultaneous Localization and Mapping", "Super Linear Adaptive Motion", "None"],
                answer: 1
            },
            practiceTask: "Simulate a basic SLAM algorithm in Python.",
            projectLink: "310"
        }
    ]
};
