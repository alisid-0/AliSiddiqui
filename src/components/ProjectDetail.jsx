import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { ArrowLeft, GithubLogo, Globe, Book, Sparkle, Lightning, Check, CaretRight } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import upstreamInspectionsImage1 from '../assets/upstreaminspectionsmobileapp/IMG_7993.PNG'
import upstreamInspectionsImage2 from '../assets/upstreaminspectionsmobileapp/IMG_7994.PNG'
import upstreamMobilityImage1 from '../assets/upstreammobility/Screenshot 2025-10-07 151533.png'
import upstreamMobilityImage2 from '../assets/upstreammobility/Screenshot 2025-10-07 151606.png'
import upstreamMobilityImage3 from '../assets/upstreammobility/Screenshot 2025-10-07 152134.png'
import sipOfSilkImage from '../assets/sipofsilk/Screenshot 2025-10-07 151211.png'
import firstChoiceImage from '../assets/firstchoice.png'
import butterChickenImage from '../assets/butter.png'
import jarvisImage from '../assets/JARVIS/Screenshot 2025-10-07 203902.png'
import windsweptImage1 from '../assets/Windswept/Screenshot 2025-10-17 165606.png'
import windsweptImage2 from '../assets/Windswept/Screenshot 2025-10-17 165654.png'
import windsweptImage3 from '../assets/Windswept/Screenshot 2025-10-17 170013.png'
import windsweptVideo1 from '../assets/Windswept/uncapped_MedalTVUnrealEngine202510171659441.mp4'
import windsweptVideo2 from '../assets/Windswept/uncapped_MedalTVUnrealEngine20251017165944.mp4'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false)

  // Project data (same as in Projects.jsx)
  const projects = {
    "upstream-inspections": {
      id: "upstream-inspections",
      title: "Upstream Inspections Mobile App",
      description: "Cross-platform React Native field solution with offline-first inspection workflow and conflict resolution. Features OBD2 integration, biometric authentication, GPS tracking, and sophisticated SQLite sync algorithms for complete offline functionality.",
      tags: ["React Native", "Expo", "OBD2", "Biometric Auth", "SQLite", "Offline-First", "GPS Tracking", "JavaScript"],
      images: [upstreamInspectionsImage1, upstreamInspectionsImage2],
      gradient: "transparent",
      accentColor: "#667EEA",
      impact: "Enabled complete offline field operations",
      category: "Mobile Enterprise",
      layout: "portrait",
      detailedDescription: `Upstream Inspections Mobile App is a comprehensive field inspection solution built with React Native and Expo. The application provides complete offline functionality, allowing field technicians to conduct inspections without internet connectivity.

Key Features:
• Offline-first architecture with sophisticated SQLite sync algorithms
• OBD2 integration for vehicle diagnostics and data collection
• Biometric authentication for secure access
• GPS tracking for location-based inspections
• Conflict resolution system for data synchronization
• Real-time data capture and validation

The app revolutionized field operations by enabling technicians to work in remote locations with limited connectivity, significantly improving productivity and data accuracy. The offline-first approach ensures continuous operation regardless of network conditions.`,
      techStack: [
        "React Native", "Expo", "JavaScript", "SQLite", "expo-sqlite", 
        "expo-camera", "expo-image-manipulator", "expo-local-authentication", "expo-secure-store", 
        "React Navigation", "CryptoJS", "axios", "Azure Functions", "Azure Blob Storage", "Azure SQL Server"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      },
      architecture: {
        title: "UPSTREAM INSPECTIONS MOBILE - COMPLETE ARCHITECTURE BREAKDOWN",
        layers: [
          {
            title: "LAYER 1: REACT NATIVE + EXPO FRAMEWORK (App.js)",
            description: "Framework: React Native 0.81.4 + Expo SDK 54\nCreates a cross-platform mobile app (iOS & Android)\nUses Expo managed workflow for development and deployment\nApp runs on device with native capabilities exposed via Expo modules\nEntry point: node_modules/expo/AppEntry.js\nCurrent version: 4.0.5"
          },
          {
            title: "LAYER 2: NAVIGATION ARCHITECTURE (App.js)",
            description: "Two-tier navigation system using React Navigation:\n\nSTACK NAVIGATOR (Outer layer):\nControls authentication flow\nConditionally renders based on isLoggedIn state\nPre-auth: Login → Register → Account Settings\nPost-auth: Main (TabNavigator) + all inspection screens\n\nBOTTOM TAB NAVIGATOR (Inner layer - MainTabScreen):\nHome (Queues view) - Car icon\nNew Inspection - Add circle icon\nProfile - Person icon\nUses BlurView background on iOS for frosted glass effect\nCustom styling with rounded corners and transparent backdrop\n\nSTACK SCREENS (Post-authentication):\nInspection workflow: Edit → Options → Info → Damages → Paints → Tires → Keys → Photos → Videos → Complete\nUtility: Camera, Queues, Account Settings, Unavailable"
          },
          {
            title: "LAYER 3: GLOBAL STATE MANAGEMENT (Context.js)",
            description: "Uses React Context API for app-wide state - 1,875 lines of state logic\n\nSTATE CATEGORIES:\nUser State:\nuser, firstName, lastName, isLoggedIn, userFunction, env\nuserDetails (full profile with address, phone, title, etc.)\n\nInspection State (70+ fields):\nBasic: vin, inspectionID, inspectionStatus, localStatus\nVehicle: year, make, model, trim, stockNumber, bodyType, doors\nTechnical: cylinders, displacement, transmission, driveType, fuelType\nAssessment: odometer, interiorColor, exteriorColor, engineStarts, driveable\nLocation: customer, customerID, lotLocation, orderDate\n\nFindings State:\ndamagesList: [{Type, Location, Condition, Severity, ImageURL, ImageBase64}]\npaintsList: [{Location, Condition, ImageURL}]\nkeysList: [{Type, Quantity}]\nOBD2List: [{CODE_TYPE, OBD2_CODE, OBD2_DESC}]\noptions: {AC, CRUISE_CONTROL, POWER_WINDOWS, etc. - 23 options}\n\nTires State:\ntiresMatch boolean\ncond/man/tread/size objects with LF/LR/RF/RR/SP properties\n\nPhotos State:\nphotos: 10 predefined positions (Front, Rear, Sides, VIN, Odometer)\nphotosAdditional: unlimited additional photos\nEach photo: {VIN, Inspection_ID, SortIndex, Location, Description, ImageURL, ImageBase64, DateCreated}\n\nVideo State:\nvideoURL, videoBase64"
          },
          {
            title: "LAYER 4: LOCAL DATABASE (SQLite via expo-sqlite)",
            description: "Client-side persistence using SQLite database: \"UpstreamInspections.db\"\n\n8 TABLES STRUCTURE:\nINSPECTIONS (Primary table - 70+ columns):\nPrimary Key: VIN (unique)\nContains all vehicle and inspection data\nTracks Local_Status: INCOMPLETE / AWAITING SYNC / SYNCED\nTracks Inspection_Status: PENDING / ESTIMATION / COMPLETE\nIncludes device metadata (Device_Type, OS, App_Version, Network_Type)\nStores VIDEO_BASE64 (can be large)\n\nDAMAGES:\nPrimary Key: ImageURL\nLinked to VIN\nFields: Type, Description, Condition, Severity, ConditionCode, SeverityCode\nImageBase64 stored locally, ImageURL for server images\nImageFormatFlag: 'Local' or 'Server'\n\nPAINTS:\nPrimary Key: ImageURL\nPrior paint damage tracking\nFields: Location, Condition, DamageCode, ImageBase64\n\nKEYS:\nPrimary Key: Type\nTracks key types and quantities\n\nOBD2_CODES:\nAuto-incrementing ID\nDiagnostic codes: CODE_TYPE, OBD2_CODE, OBD2_DESC\n\nOBD2_PHOTOS:\nPhotos of OBD2 scanner screen\n\nOPTIONS:\nVehicle features (AC, Power Windows, Navigation, etc.)\nEach option is a separate row\n\nPHOTOS:\nPrimary Key: ImageURL\nSortIndex determines position (1-10 required, 11+ additional)\nSupports both Local (ImageBase64) and Server (ImageURL) images"
          },
          {
            title: "LAYER 5: AUTHENTICATION & SECURITY (LoginScreen.js)",
            description: "Multi-factor authentication system:\n\nBIOMETRIC AUTHENTICATION (Face ID / Fingerprint):\nUses expo-local-authentication\nChecks for hardware support\nAttempts biometric login on app launch\nCredentials stored securely in expo-secure-store (OS keychain)\nFalls back to manual login if biometric fails\n\nPASSWORD AUTHENTICATION:\nUsername + Password sent to Azure backend\nPassword hashed using CryptoJS.SHA256 before transmission\nEndpoint: AuthenticateInspectorMobileApp\nResponse codes:\n0/Y: Success → set isLoggedIn = true\n1: User doesn't exist\n3: Password is NULL (needs first-time setup)\n4: Incorrect credentials\n2: Server error\n\nSESSION MANAGEMENT:\nSuccessful login saves credentials to SecureStore\nUser context (userDetails) stored in memory\nNo token system - relies on credential storage"
          },
          {
            title: "LAYER 6: BACKEND API COMMUNICATION (Functions.js)",
            description: "Azure Functions HTTP API integration:\n\nCONFIGURATION:\nDevelopment: https://upstreaminspections-ws-dev.azurewebsites.net/api/\nProduction: https://upstreaminspections-ws.azurewebsites.net/api/\nEach request includes API code and clientId=InspectionsMobileApp\n\nKEY ENDPOINTS:\nAuthentication:\nAuthenticateInspectorMobileApp (POST)\nPassword hashing: SHA256(password)\n\nVehicle Data:\nDecodeVIN (POST) - Gets vehicle specs from VIN\nReturns: year, make, model, trim, body_type, engine specs, transmission\n\nInspection Management:\nCreateNewInspection (POST)\ngetInspectionCrByInspectionId (POST) - Fetch complete inspection\ngetVehiclesByStatusAndInspectorSummarized (POST) - Queue listings\nupdateInspectionToPendingStatus (POST)\nmarkInspectionAsComplete (POST)\nmarkInspectionAsUnavailable (POST)\n\nPicklist Data:\ngetPicklist (POST) - Dropdown options (colors, tire conditions, etc.)\npicklistGetDamages (POST) - Hierarchical damage codes\nStep 1: Get locations by classification (EXT/INT/MECH)\nStep 2: Get conditions by location\nStep 3: Get severity by condition\n\nFile Upload:\nuploadToAzureBlobStorage (POST) - Multipart form data\nUsed for syncing complete inspections with photos/videos"
          },
          {
            title: "LAYER 7: CAMERA & MEDIA CAPTURE (camera.js)",
            description: "Custom camera implementation using expo-camera:\n\nCAPABILITIES:\nPhoto capture (3024x4032 or device max)\nVideo recording (up to 60 seconds, auto-stop)\nFront/back camera flip\nFlash control (on/off)\nTap-to-focus\nReal-time recording timer display\n\nPERMISSIONS REQUIRED:\nCamera, Microphone, Media Library\nRequested on component mount\nBlocks usage if not granted\n\nPHOTO FLOW:\ntakePictureAsync() captures image\nImage saved to device gallery (MediaLibrary.createAssetAsync)\nAlbum created: \"UpstreamInspections\" (if doesn't exist)\nURI stored in photos state\nImageBase64 left empty initially (filled on sync for bandwidth)\nNavigation back to calling screen with photo URI\n\nVIDEO FLOW:\nrecordAsync() starts recording\nStop recording after user tap or 60-second timeout\nVideo saved to gallery\nvideoURL updated in context\nNavigate to InspectionVideo screen for review"
          },
          {
            title: "LAYER 8: INSPECTION WORKFLOW",
            description: "Multi-step inspection process:\n\nSTEP 1: NEW INSPECTION (NewInspectionScreen.js)\nEnter/scan VIN (17 characters)\nCall DecodeVIN API → auto-populate vehicle specs\nManual entry for missing fields\nSelect inspector (customer)\nNavigate to Info screen to continue\n\nSTEP 2: VEHICLE INFORMATION (Info.js)\nOdometer reading\nInterior/Exterior colors\nEngine condition (starts/doesn't start)\nDriveable status\nOil condition, odor\n\nSTEP 3: OPTIONS (Options.js)\nChecklist of 23 vehicle features\nCheckbox toggle for each option\nStored as individual rows in OPTIONS table\n\nSTEP 4: DAMAGES (Damages.js)\nClassification: Exterior/Interior/Mechanical\nLocation picker (hierarchical based on classification)\nCondition picker (depends on location)\nSeverity picker (depends on condition)\nCamera capture for each damage\nDamage list with edit/delete\n\"No damage\" checkboxes to skip categories\n\nSTEP 5-13: PAINTS → TIRES → KEYS → AUTOGRADE → OBD2 → PHOTOS → ADDITIONAL PHOTOS → VIDEO → COMPLETE\nEach step follows similar pattern: data collection → validation → storage → navigation"
          },
          {
            title: "LAYER 9: QUEUE MANAGEMENT & SYNC (Queues.js)",
            description: "Central hub for inspection management - 1,609 lines\n\nTHREE QUEUE TYPES:\nINCOMPLETE (Local SQLite):\nInspections started but not completed\nLocal_Status = 'INCOMPLETE'\nEditable, deletable\nClicking loads inspection into context\n\nPENDING (Server):\nFetched from backend: InspectionStatus = 'PENDING'\nAssigned to this inspector\nClick to download and start work\nfetchInspectionData() pulls complete data\nCreates local SQLite entry with Local_Status = 'INCOMPLETE'\n\nAWAITING SYNC (Local SQLite):\nCompleted inspections waiting to upload\nLocal_Status = 'AWAITING SYNC'\nClicking blocked (or warns in dev mode)\nSync button visible\n\nSYNC PROCESS:\nUser taps sync button → Alert confirmation\nCheck internet connectivity (expo-network)\nBuild inspection JSON from SQLite tables\nCompress images:\nRead ImageBase64 or convert from ImageURL\nResize to max 1920x1080 using expo-image-manipulator\nQuality 0.5 JPEG compression\nEncode as base64\nBuild multipart form data:\ninspectionJson: all data\nphotos: array of base64 images\ndamages: array of base64 images\npaints: array of base64 images\nvideo: base64 video file\nPOST to uploadToAzureBlobStorage\nBackend processes and stores in Azure Blob Storage + SQL Server\nOn success: deleteInspection() removes from SQLite\nOn failure: keep local data, show error Toast"
          },
          {
            title: "LAYER 10: NOTIFICATIONS SYSTEM (HomeScreen.js + App.js)",
            description: "Expo Notifications for sync reminders:\n\nNOTIFICATION HANDLER:\nSet in App.js on launch\nShows alert, plays sound, sets badge\n\nSCHEDULING LOGIC:\nTriggered when Local_Status = 'AWAITING SYNC' exists\nUses moment-timezone for America/Chicago timezone\nSchedules first notification at next half-hour mark\nRepeating notification every 30 minutes\nStops at 9 PM Central Time\nCancels all if no unsynced inspections\n\nNOTIFICATION CONTENT:\nTitle: \"Inspections waiting to be synced!\"\nBody: \"Tap here to view your unsynced inspections...\"\nData: {screen: 'Queues', passedQueue: 'AWAITING SYNC'}\n\nTAP HANDLING:\nresponseListener in App.js\nExtracts screen and passedQueue from data\nnavigationRef.navigate(screen, {passedQueue})\nOpens Queues screen filtered to AWAITING SYNC\n\nBACKGROUND TASK:\nTaskManager.defineTask for background notifications\nNOTIFICATION_TASK handles notification in background"
          }
        ],
        technologies: {
          frontend: ["React Native 0.81.4", "Expo SDK 54", "React Navigation 6", "React Context API"],
          database: ["SQLite", "expo-sqlite 16.0.8", "Local Storage", "Offline-First Architecture"],
          media: ["expo-camera 17.0.8", "expo-image-manipulator 14.0.7", "expo-media-library 18.2.0"],
          security: ["expo-local-authentication 17.0.7", "expo-secure-store 15.0.7", "CryptoJS SHA256"],
          backend: ["Azure Functions", "Azure Blob Storage", "Azure SQL Server", "Multipart Upload"],
          networking: ["axios 1.6.7", "expo-network 8.0.7", "HTTP REST APIs"],
          notifications: ["expo-notifications 0.32.12", "expo-task-manager 14.0.7", "Background Tasks"]
        },
        flowExample: {
          command: "Complete Vehicle Inspection Workflow",
          steps: [
            "USER LOGS IN with biometric authentication",
            "APP STORES credentials in SecureStore (OS keychain)",
            "USER SCANS VIN and calls DecodeVIN API",
            "VEHICLE SPECS auto-populate from VIN database",
            "USER COMPLETES 13-step inspection workflow",
            "ALL DATA stored locally in SQLite database",
            "PHOTOS saved to device gallery with URIs",
            "VIDEO recorded and stored locally",
            "INSPECTION marked as AWAITING SYNC",
            "NOTIFICATIONS scheduled every 30 minutes",
            "USER TAPS SYNC when internet available",
            "IMAGES compressed and converted to base64",
            "MULTIPART FORM DATA built with all inspection data",
            "UPLOAD sent to Azure Functions endpoint",
            "BACKEND stores in Azure Blob Storage + SQL Server",
            "LOCAL DATA deleted after successful sync",
            "INSPECTION available for review and processing"
          ]
        }
      }
    },
    "sipofsilk": {
      id: "sipofsilk",
      title: "SipOfSilk Coffee Shop",
      description: "Serverless Firebase Functions-based platform with automated scaling. Features coffee menu management with spice level categorization, user authentication with RBAC, and brand-consistent design system with real-time persistence.",
      tags: ["React 18+", "Firebase", "Firestore", "Serverless", "RBAC", "Cultural Branding", "Material-UI"],
      images: [sipOfSilkImage],
      gradient: "transparent",
      accentColor: "#2ECC71",
      impact: "Complete coffee shop management system",
      category: "Serverless Platform",
      detailedDescription: `SipOfSilk Coffee Shop is a comprehensive serverless platform built with Firebase Functions and Firestore. The application provides complete coffee shop management with cultural branding and automated scaling capabilities.

Key Features:
• Serverless architecture with Firebase Functions for automated scaling
• Coffee menu management with spice level categorization
• Role-based access control (RBAC) for different user types
• Brand-consistent design system reflecting cultural heritage
• Real-time data persistence with Firestore
• Inventory management and order tracking

The platform represents a complete coffee shop management solution that scales automatically based on demand while maintaining cultural authenticity in design and functionality.`,
      techStack: [
        "React 18+", "Firebase Functions", "Firestore", "Firebase Auth", 
        "Material-UI", "JavaScript", "Node.js"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "upstream-mobility": {
      id: "upstream-mobility",
      title: "Upstream Mobility Platform",
      description: "Real-time analytics and tracking system with Guardian API integration. Features battery health testing, automated certification generation, role-based dashboards, and sales analytics with predictive modeling for 40% dealer efficiency improvement.",
      tags: ["React", "TypeScript", "Real-time Analytics", "PDF Generation", "Predictive Modeling", "Guardian API"],
      images: [upstreamMobilityImage1, upstreamMobilityImage2, upstreamMobilityImage3],
      gradient: "transparent",
      accentColor: "#4FACFE",
      impact: "40% dealer efficiency improvement",
      category: "Enterprise Analytics",
      detailedDescription: `Upstream Mobility Platform is a comprehensive analytics and tracking system designed for automotive dealerships. The platform integrates with Guardian API to provide real-time insights into vehicle performance, battery health, and dealer operations.

Key Features:
• Real-time analytics dashboard with customizable metrics
• Battery health testing and performance monitoring
• Automated certification generation for compliance
• Role-based access control for different user types
• Sales analytics with predictive modeling capabilities
• Integration with Guardian API for vehicle data

The platform achieved a 40% improvement in dealer efficiency by providing actionable insights and automating previously manual processes. The predictive modeling capabilities help dealers make informed decisions about inventory and sales strategies.`,
      techStack: [
        "React", "TypeScript", "Node.js", "Express", 
        "Guardian API", "PDFKit", "Chart.js", "Recharts", "Styled-Components"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "atlas-ai": {
      id: "atlas-ai",
      title: "ATLAS AI Assistant",
      description: "Cross-platform voice-controlled AI assistant available as both React Native mobile app and Electron.js desktop application. Features Google Gemini integration, comprehensive Windows service architecture, and system automation including power management, window controls, and office automation.",
      tags: ["Electron.js", "React Native", "Google Gemini AI", "Voice Recognition", "System Automation", "Windows Services"],
      images: [jarvisImage],
      gradient: "transparent",
      accentColor: "#F093FB",
      impact: "Personal productivity assistant",
      category: "AI Innovation",
      detailedDescription: `ATLAS AI Assistant is a comprehensive voice-controlled AI system built with Google Gemini integration. Available as both a React Native mobile app and an Electron.js desktop application, it provides seamless Windows system automation and office productivity features through natural language processing. The showcase demonstrates the Electron.js desktop version.

Key Features:
• Cross-platform availability (React Native mobile + Electron.js desktop)
• Voice-controlled interface with Google Gemini AI
• Windows service architecture for deep system integration
• Power management and system controls
• Office automation and productivity tools
• Real-time voice recognition and processing
• Customizable automation workflows

The assistant transforms daily computer interactions by enabling hands-free control of system functions, office applications, and productivity tasks through natural speech commands.`,
      techStack: [
        "Electron.js", "React Native", "Google Gemini AI", "Node.js", "Express", 
        "Azure Speech SDK", "Web Speech API", "C#", ".NET", "Windows API", "PowerShell"
      ],
      links: {
        demo: "#",
        github: "https://github.com/alisid-0/ATLAS-WIN",
        documentation: "#"
      },
      architecture: {
        title: "ATLAS VOICE ASSISTANT - COMPLETE ARCHITECTURE BREAKDOWN",
        layers: [
          {
            title: "LAYER 1: ELECTRON DESKTOP APPLICATION (main.js)",
            description: "Framework: Electron (Chromium + Node.js)\nCreates a native Windows desktop window (1200x800px)\nLoads the React app from src/index.html\nEnables Node.js integration in the browser context\nThis gives the web app access to Node.js modules and desktop APIs"
          },
          {
            title: "LAYER 2: REACT UI LAYER (VoiceAssistant.js)",
            description: "Single React component managing the entire UI\nState management for:\n• isListening (mic active/inactive)\n• commandHistory (conversation log)\n• textInput (typed commands)\n• spokenText/response (current interaction)\n\nTwo input methods:\n1. Voice input via microphone button\n2. Text input via keyboard\n3. Quick action buttons (predefined commands)"
          },
          {
            title: "LAYER 3A: SPEECH INPUT (Browser Web Speech API)",
            description: "When user clicks mic button or says 'turn off monitors':\n\n1. toggleListening() activates Web Speech Recognition API\n   - Uses browser's built-in speech-to-text (Chrome/Edge)\n   - Configured for: en-US, non-continuous, final results only\n\n2. Browser listens to microphone and converts speech to text\n   - Real-time audio capture from system microphone\n   - Uses Chrome's cloud-based speech recognition\n\n3. onresult event fires with transcribed text\n   - Extract transcript: 'turn off monitors'\n   - Passes to handleCommand(text)"
          },
          {
            title: "LAYER 4: COMMAND ROUTING (commandProcessor.js)",
            description: "processCommand(text) receives: 'turn off monitors'\n\nDecision tree:\n1. Check if empty → return error\n2. Convert to lowercase: 'turn off monitors'\n3. Check if starts with 'atlas' → NO, so go to AI Service\n4. SPECIAL CASE: Check for monitor control regex pattern\n   - Pattern matches: /(turn off|turn on|disable|enable)\\s+(primary|secondary|all|both)?\\s*monitors?/\n   - MATCH FOUND: 'turn off' + 'monitors'\n   - Extract: action = 'turn off', isOff = true\n   \n5. DIRECT HTTP CALL (bypassing AI):\n   - Sends: fetch('http://192.168.1.104:3000/system/monitor/off')\n   - This goes to a separate backend server on my network from an installed windows service I built\n   - Returns response: 'I've turned off the monitor for you.'\n\nALTERNATE PATH (for non-monitor commands):\n- If no special pattern matches, forwards to aiService.getResponse(text)"
          },
          {
            title: "LAYER 5: AI INTELLIGENCE LAYER (aiService.js)",
            description: "Only triggered for commands that need AI interpretation:\n\n1. INITIALIZATION:\n   - Google Gemini Pro AI (gemini-pro model)\n   - Maintains conversation history for context\n\n2. CONTEXT PROMPT:\n   - AI is given extensive system prompt defining available commands\n   - Lists all command types: sound, media, window, monitor, app, system,\n     workspace, browser, clipboard, keyboard, mouse, notification, voice,\n     theme, preset\n   - Provides JSON schema for command structure\n\n3. PROMPT CONSTRUCTION:\n   - Combines system context + conversation history + user command\n   - Example: 'You are ATLAS... [all commands]... User: launch chrome'\n\n4. AI PROCESSING:\n   - Sends to Google Gemini API\n   - AI understands intent and generates JSON response\n\n5. JSON PARSING & COMMAND EXECUTION:\n   - Extracts JSON from AI response\n   - Routes to appropriate HTTP API endpoints\n   - All commands sent to: http://192.168.1.104:3000/[endpoint]"
          },
          {
            title: "LAYER 6: BACKEND API SERVER (external - not in this codebase)",
            description: "Located at: http://192.168.1.104:3000\n\nThis is a separate Node.js server that:\n- Receives HTTP requests from the Electron app\n- Translates them into Windows system commands\n- Executes PowerShell/CMD commands to control:\n  • Display monitors (DDC/CI or Windows API)\n  • Application launching (start chrome.exe)\n  • Media controls (keyboard simulation)\n  • Window management (Win32 API)\n  • System operations (shutdown, sleep, etc.)\n\nFor monitor control specifically:\n- Receives: GET /system/monitor/off\n- Executes Windows commands to turn off display"
          },
          {
            title: "LAYER 7: SPEECH OUTPUT (speechService.js)",
            description: "After command executes, response goes back to React:\n\n1. handleCommand() receives text response\n2. Updates UI (adds to commandHistory, displays in chat)\n3. Calls speechService.speak(response)\n4. AZURE COGNITIVE SERVICES:\n   - Voice: en-GB-RyanNeural (British male voice)\n   - SSML generation for ATLAS-like voice characteristics\n5. AZURE TTS:\n   - Sends SSML to Azure Speech Service\n   - Generates high-quality audio using neural voice\n   - Audio played through system speakers\n6. FALLBACK:\n   - If Azure fails, uses browser's SpeechSynthesis API"
          }
        ],
        technologies: {
          frontend: ["Electron", "React 19", "Webpack", "Web Speech API"],
          ai: ["Google Gemini Pro", "Azure Cognitive Services Speech SDK"],
          backend: ["Node.js + Express", "Windows PowerShell", "Win32 API", "HTTP REST API"],
          communication: ["HTTP fetch()", "JSON", "SSML"]
        },
        flowExample: {
          command: "Turn off monitors",
          steps: [
            "USER SPEAKS into microphone",
            "BROWSER (Web Speech API) converts speech to text",
            "REACT UI receives text and calls handleCommand()",
            "COMMAND PROCESSOR detects monitor control pattern",
            "Makes HTTP request to backend server",
            "BACKEND SERVER executes Windows command to turn off display",
            "COMMAND PROCESSOR returns success message",
            "REACT UI updates conversation history",
            "AZURE SPEECH SERVICE generates ATLAS-style voice audio",
            "MONITOR TURNS OFF"
          ]
        }
      }
    },
    "windswept": {
      id: "windswept",
      title: "Windswept",
      description: "Immersive action-adventure game built in Unreal Engine 5 featuring a custom Kuwahara filter for hand-painted visuals, fluid combat system, and meticulously crafted world with dynamic 3D audio.",
      tags: ["Unreal Engine 5", "C++", "Blueprints", "Game Development", "3D Audio", "Custom Shaders"],
      images: [windsweptImage1, windsweptImage2, windsweptImage3],
      videos: [windsweptVideo1, windsweptVideo2],
      gradient: "transparent",
      accentColor: "#8B5CF6",
      impact: "Independent game development",
      category: "Game Development",
      detailedDescription: `Windswept is an ambitious action-adventure game developed in Unreal Engine 5, showcasing advanced technical and artistic capabilities. The project represents years of passion for game development, combining custom rendering techniques with fluid gameplay mechanics.

Key Features:
• Custom Kuwahara filter implementation creating a unique hand-painted art style
• Fluid combat system with responsive controls and dynamic animations
• Carefully designed game world with attention to environmental storytelling
• Comprehensive UI/UX design for immersive player experience
• Advanced 3D spatial audio system for environmental immersion
• Performance-optimized for smooth gameplay

This project demonstrates the culmination of a game development journey that began at age 11 with GameMaker Studio, evolved through CryEngine and Unreal Engine, balancing solo development with professional work and personal life.`,
      techStack: [
        "Unreal Engine 5", "C++", "Blueprints", "HLSL", "Niagara VFX", 
        "MetaSounds", "Animation Blueprints", "UMG", "Nanite", "Lumen"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    },
    "car-id": {
      id: "car-id",
      title: "Car-ID",
      description: "Enterprise-grade vehicle delivery tracking app that opened new revenue streams. Features user-based workflows for remarketers, inspectors, and delivery drivers with comprehensive liability tracking for vehicle condition management.",
      tags: ["React Native", "Enterprise", "Workflow Management", "Liability Tracking", "GPS Tracking", "Push Notifications"],
      images: [firstChoiceImage, butterChickenImage],
      gradient: "transparent",
      accentColor: "#FF8C00",
      impact: "Opened new revenue streams",
      category: "Enterprise Revenue",
      detailedDescription: `Car-ID is an enterprise-grade vehicle delivery tracking application designed to streamline automotive logistics and create new revenue opportunities. The platform serves multiple user types with specialized workflows and comprehensive liability management.

Key Features:
• Role-based workflows for remarketers, inspectors, and delivery drivers
• Comprehensive liability tracking for vehicle condition management
• Real-time delivery status updates and notifications
• Photo documentation and condition reporting
• Integration with existing automotive systems
• Revenue generation through premium features

The application successfully opened new revenue streams by providing essential tracking and documentation services to the automotive industry, improving operational efficiency and reducing liability risks.`,
      techStack: [
        "React Native", "Expo", "Node.js", "Express", "PostgreSQL", 
        "AWS S3", "AWS Lambda", "Firebase Cloud Messaging", "expo-location", "expo-camera"
      ],
      links: {
        demo: "#",
        github: "#",
        documentation: "#"
      }
    }
  }

  const project = projects[projectId]

  // Combine images and videos for gallery - videos first, then images
  const allMedia = project ? [
    ...(project.videos ? project.videos.slice().reverse() : []), // Reverse video order
    ...(project.images || [])
  ] : []

  // Keyboard navigation for image gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project || allMedia.length <= 1) return
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentImageIndex(prev => 
          prev === 0 ? allMedia.length - 1 : prev - 1
        )
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentImageIndex(prev => 
          prev === allMedia.length - 1 ? 0 : prev + 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [allMedia.length])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (project?.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [project])

  if (!project) {
    return (
      <ErrorContainer>
        <ErrorContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <BackButton onClick={() => navigate('/')}>
            <ArrowLeft size={24} weight="bold" />
            Back to Home
          </BackButton>
        </ErrorContent>
      </ErrorContainer>
    )
  }

  const features = project.detailedDescription
    .split('\n')
    .filter(line => line.trim().startsWith('•'))
    .map(line => line.replace('•', '').trim())

  return (
    <DetailContainer>
      {/* Animated Background Elements */}
      <FloatingOrb style={{ top: '10%', left: '10%' }} color={project.accentColor} delay={0} />
      <FloatingOrb style={{ top: '60%', right: '15%' }} color={project.accentColor} delay={2} />

      <TopBar>
        <BackButton 
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} weight="bold" />
          Back
        </BackButton>

        {(project.links.demo !== "#" || project.links.github !== "#" || project.links.documentation !== "#") && (
          <LinkContainer>
            {project.links.demo !== "#" && (
              <ActionLink 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                primary
              >
                <Globe size={18} weight="bold" />
                Demo
              </ActionLink>
            )}
            {project.links.github !== "#" && (
              <ActionLink 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GithubLogo size={18} weight="bold" />
                Code
              </ActionLink>
            )}
            {project.links.documentation !== "#" && (
              <ActionLink 
                href={project.links.documentation} 
                target="_blank" 
                rel="noopener noreferrer"
                accentColor={project.accentColor}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Book size={18} weight="bold" />
                Docs
              </ActionLink>
            )}
          </LinkContainer>
        )}
      </TopBar>

      {/* Content Grid - Main Layout or Architecture View */}
      {!isArchitectureExpanded ? (
        <MainGrid>
          {/* Left Column - Header + Image */}
          <LeftColumn>
            <HeroSection>
              <CategoryBadge
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Sparkle size={14} weight="fill" />
                {project.category}
              </CategoryBadge>
              
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.title}
              </Title>
              
              <ImpactBadge
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Lightning size={18} weight="fill" />
                {project.impact}
              </ImpactBadge>
              
              <ShortDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </ShortDescription>
            </HeroSection>

            <ImageSection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ImageGallery layout={project.layout}>
                {project.layout === 'portrait' ? (
                  <IPhoneFrame
                    accentColor={project.accentColor}
                    whileHover={{ scale: 1.02, rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IPhoneScreen>
                      {allMedia[currentImageIndex] && allMedia[currentImageIndex].includes('.mp4') ? (
                        <ProjectVideo
                          as={motion.video}
                          src={allMedia[currentImageIndex]}
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7 }}
                          isPortrait={true}
                          controls
                          muted
                          loop
                        />
                      ) : (
                        <ProjectImage
                          as={motion.img}
                          src={allMedia[currentImageIndex]}
                          alt={`${project.title} - Media ${currentImageIndex + 1}`}
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7 }}
                          isPortrait={true}
                        />
                      )}
                    </IPhoneScreen>
                    <IPhoneNotch />
                  </IPhoneFrame>
                ) : (
                  <MonitorFrame
                    whileHover={{ scale: 1.02, rotateY: 0, rotateX: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MonitorScreen>
                      {allMedia[currentImageIndex] && allMedia[currentImageIndex].includes('.mp4') ? (
                        <ProjectVideo
                          as={motion.video}
                          src={allMedia[currentImageIndex]}
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7 }}
                          accentColor={project.accentColor}
                          controls
                          muted
                          loop
                        />
                      ) : (
                        <ProjectImage
                          as={motion.img}
                          src={allMedia[currentImageIndex]}
                          alt={`${project.title} - Media ${currentImageIndex + 1}`}
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.7 }}
                          accentColor={project.accentColor}
                        />
                      )}
                    </MonitorScreen>
                    <MonitorStand />
                    <MonitorBase />
                  </MonitorFrame>
                )}
                {project && allMedia.length > 1 && (
                  <ImageIndicators>
                    <ImageCounter>
                      {currentImageIndex + 1} / {allMedia.length}
                    </ImageCounter>
                    {allMedia.map((_, index) => (
                      <Indicator
                        key={`indicator-${index}`}
                        active={index === currentImageIndex}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          console.log('Indicator clicked:', index, 'Current:', currentImageIndex)
                          setCurrentImageIndex(index)
                        }}
                        accentColor={project.accentColor}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View media ${index + 1} of ${allMedia.length}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setCurrentImageIndex(index)
                          }
                        }}
                      />
                    ))}
                  </ImageIndicators>
                )}
              </ImageGallery>
            </ImageSection>
          </LeftColumn>

          {/* Right Column - Details */}
          <RightColumn
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TagContainer>
              {project.tags.map((tag, i) => (
                <Tag 
                  key={i}
                  accentColor={project.accentColor}
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {tag}
                </Tag>
              ))}
            </TagContainer>

            {features.length > 0 && (
              <Section>
                <SectionTitle accentColor={project.accentColor}>
                  Key Features
                </SectionTitle>
                <FeaturesList>
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    >
                      <FeatureIcon accentColor={project.accentColor}>
                        <Check size={14} weight="bold" />
                      </FeatureIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </Section>
            )}

            <Section>
              <SectionTitle accentColor={project.accentColor}>
                Tech Stack
              </SectionTitle>
              <TechStackGrid>
                {project.techStack.map((tech, index) => (
                  <TechItem
                    key={index}
                    accentColor={project.accentColor}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    {tech}
                  </TechItem>
                ))}
              </TechStackGrid>
            </Section>

            {/* Architecture Section */}
            {project.architecture && (
              <ArchitectureSection>
                <ArchitectureHeader
                  onClick={() => setIsArchitectureExpanded(!isArchitectureExpanded)}
                  accentColor={project.accentColor}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArchitectureTitle accentColor={project.accentColor}>
                    System Architecture
                  </ArchitectureTitle>
                  <ExpandIcon
                    animate={{ rotate: isArchitectureExpanded ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretRight size={20} weight="bold" />
                  </ExpandIcon>
                </ArchitectureHeader>
              </ArchitectureSection>
            )}
          </RightColumn>
        </MainGrid>
      ) : (
        /* Architecture View - Full Screen */
        <ArchitectureViewContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArchitectureBackButton
            onClick={() => setIsArchitectureExpanded(false)}
            accentColor={project.accentColor}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <CaretRight size={20} weight="bold" />
            Back to Project
          </ArchitectureBackButton>

          <ArchitectureTitleMain>{project.architecture.title}</ArchitectureTitleMain>
          
          <ArchitectureLayers>
            {project.architecture.layers.map((layer, index) => (
              <LayerCard
                key={index}
                accentColor={project.accentColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LayerTitle accentColor={project.accentColor}>
                  {layer.title}
                </LayerTitle>
                <LayerDescription>
                  {layer.description.split('\n').map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line}
                      {lineIndex < layer.description.split('\n').length - 1 && <br />}
                    </div>
                  ))}
                </LayerDescription>
              </LayerCard>
            ))}
          </ArchitectureLayers>

          <TechnologiesSection>
            <TechnologiesTitle accentColor={project.accentColor}>
              Key Technologies
            </TechnologiesTitle>
            <TechnologiesGrid>
              {Object.entries(project.architecture.technologies).map(([category, techs]) => (
                <TechCategory key={category}>
                  <TechCategoryTitle accentColor={project.accentColor}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TechCategoryTitle>
                  <TechCategoryList>
                    {techs.map((tech, index) => (
                      <TechCategoryItem
                        key={index}
                        accentColor={project.accentColor}
                      >
                        {tech}
                      </TechCategoryItem>
                    ))}
                  </TechCategoryList>
                </TechCategory>
              ))}
            </TechnologiesGrid>
          </TechnologiesSection>

          {project.architecture.flowExample && (
            <FlowExampleSection>
              <FlowExampleTitle accentColor={project.accentColor}>
                Example Flow: &quot;{project.architecture.flowExample.command}&quot;
              </FlowExampleTitle>
              <FlowSteps>
                {project.architecture.flowExample.steps.map((step, index) => (
                  <FlowStep
                    key={index}
                    accentColor={project.accentColor}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <FlowStepNumber accentColor={project.accentColor}>
                      {index + 1}
                    </FlowStepNumber>
                    <FlowStepText>{step}</FlowStepText>
                    {index < project.architecture.flowExample.steps.length - 1 && (
                      <FlowArrow accentColor={project.accentColor}>↓</FlowArrow>
                    )}
                  </FlowStep>
                ))}
              </FlowSteps>
            </FlowExampleSection>
          )}
        </ArchitectureViewContainer>
      )}
    </DetailContainer>
  )
}

// Styled Components
const DetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, 
    #0a192f 0%, 
    #112240 20%, 
    #1a1a2e 40%, 
    #16213e 60%, 
    #0f3460 80%, 
    #000000 100%);
  color: #ffffff;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(100, 255, 218, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(189, 147, 249, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
  }
`

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color}40 0%, transparent 70%);
  filter: blur(60px);
  animation: float ${props => 6 + props.delay}s ease-in-out infinite;
  z-index: 0;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
  }
`

const ErrorContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0a192f 0%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  padding: 2rem;
`

const ErrorContent = styled(motion.div)`
  text-align: center;
  max-width: 500px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const LeftColumn = styled.div``

const RightColumn = styled(motion.div)``

const HeroSection = styled.header`
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const CategoryBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: ${props => `${props.accentColor}15`};
  border: 2px solid ${props => `${props.accentColor}40`};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.25rem;
  color: ${props => props.accentColor};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px ${props => `${props.accentColor}20`};
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.5rem 1.2rem;
    letter-spacing: 0.1em;
  }
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 0.4rem 1rem;
  }
`

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1.25rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`

const ImpactBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin-bottom: 1.25rem;
  padding: 0.7rem 1.5rem;
  background: ${props => `${props.accentColor}10`};
  border-radius: 50px;
  border: 2px solid ${props => `${props.accentColor}30`};
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px ${props => `${props.accentColor}25`};

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }
`

const ShortDescription = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.55;
  }
`

const TagContainer = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`

const Tag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.95);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${props => `${props.accentColor}30`};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px ${props => `${props.accentColor}15`};

  &:hover {
    background: ${props => `${props.accentColor}15`};
    border-color: ${props => `${props.accentColor}60`};
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`

const LinkContainer = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const ActionLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.08)'};
  border: 2px solid ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.15)'};
  border-radius: 50px;
  color: ${props => props.primary ? '#000000' : '#ffffff'};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.primary 
    ? `0 4px 16px ${props.accentColor}50` 
    : '0 4px 16px rgba(0, 0, 0, 0.2)'};
  
  &:hover {
    background: ${props => props.primary ? props.accentColor : 'rgba(255, 255, 255, 0.15)'};
    box-shadow: ${props => props.primary 
      ? `0 8px 24px ${props.accentColor}60` 
      : '0 8px 24px rgba(0, 0, 0, 0.3)'};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`

const ImageSection = styled(motion.div)`
  margin-top: 1.5rem;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`

const ImageGallery = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.layout === 'portrait' ? '650px' : '500px'};
  pointer-events: auto;
  
  @media (max-width: 768px) {
    min-height: ${props => props.layout === 'portrait' ? '570px' : '400px'};
  }
  
  @media (max-width: 480px) {
    min-height: ${props => props.layout === 'portrait' ? '480px' : '320px'};
  }
`

const MonitorFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: perspective(1000px) rotateY(-2deg) rotateX(1deg);
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 500px;
    transform: perspective(800px) rotateY(0deg) rotateX(0deg);
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    transform: none;
    
    &:hover {
      transform: scale(1.01);
    }
  }
`

const MonitorScreen = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 16px;
  padding: 22px;
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.5),
    0 25px 50px rgba(0, 0, 0, 0.4),
    inset 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 0 rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
  }
`

const MonitorStand = styled.div`
  width: 110px;
  height: 78px;
  background: linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%);
  margin-top: -1px;
  clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
  box-shadow: 
    0 8px 22px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    width: 70px;
    height: 55px;
  }
`

const MonitorBase = styled.div`
  width: 260px;
  height: 14px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 7px;
  margin-top: -1px;
  box-shadow: 
    0 12px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 170px;
    height: 12px;
  }
`

const ProjectImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: ${props => props.isPortrait ? '100%' : '100%'};
  height: ${props => props.isPortrait ? '100%' : 'auto'};
  object-fit: ${props => props.isPortrait ? 'cover' : 'contain'};
  border-radius: ${props => props.isPortrait ? '0' : '8px'};
  box-shadow: ${props => props.isPortrait ? 'none' : 'inset 0 0 20px rgba(0, 0, 0, 0.3)'};
  display: block;
`

const ProjectVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  width: ${props => props.isPortrait ? '100%' : '100%'};
  height: ${props => props.isPortrait ? '100%' : 'auto'};
  object-fit: ${props => props.isPortrait ? 'cover' : 'contain'};
  border-radius: ${props => props.isPortrait ? '0' : '8px'};
  box-shadow: ${props => props.isPortrait ? 'none' : 'inset 0 0 20px rgba(0, 0, 0, 0.3)'};
  display: block;
`

const IPhoneFrame = styled(motion.div)`
  position: relative;
  width: 320px;
  height: 650px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 45px;
  padding: 12px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.6),
      0 20px 40px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 45px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 260px;
    height: 530px;
    border-radius: 38px;
    transform: perspective(800px) rotateY(0deg) rotateX(0deg);
  }
  
  @media (max-width: 480px) {
    width: 220px;
    height: 450px;
    border-radius: 35px;
  }
`

const IPhoneScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #000000;
  border-radius: 38px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 38px;
  }
`

const IPhoneNotch = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 30px;
  background: #000000;
  border-radius: 0 0 20px 20px;
  z-index: 10;
  box-shadow: 
    0 2px 5px rgba(0, 0, 0, 0.5),
    inset 0 -2px 5px rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 20px;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, rgba(100, 150, 255, 0.3) 0%, transparent 70%);
    border-radius: 50%;
  }
`

const ImageIndicators = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  z-index: 1000;
  pointer-events: auto;
  width: 100%;
  justify-content: center;
  padding: 0.5rem;
`

const ImageCounter = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const Indicator = styled(motion.button)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.active ? props.accentColor : 'rgba(255, 255, 255, 0.6)'};
  border: ${props => props.active ? `3px solid ${props.accentColor}` : '3px solid rgba(255, 255, 255, 0.8)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? `0 0 25px ${props.accentColor}80` : '0 0 15px rgba(255, 255, 255, 0.4)'};
  outline: none;
  position: relative;
  pointer-events: auto !important;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  flex-shrink: 0;
  min-width: 20px;
  min-height: 20px;

  &:hover {
    background: ${props => props.active ? props.accentColor : 'rgba(255, 255, 255, 0.9)'};
    transform: scale(1.15);
    box-shadow: ${props => props.active ? `0 0 30px ${props.accentColor}90` : '0 0 20px rgba(255, 255, 255, 0.6)'};
  }

  &:focus {
    outline: 3px solid ${props => props.accentColor};
    outline-offset: 3px;
  }

  &:active {
    transform: scale(0.9);
  }
`

const Section = styled.div`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50%;
    height: 3px;
    background: ${props => props.accentColor};
    border-radius: 2px;
    box-shadow: 0 0 15px ${props => `${props.accentColor}60`};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem 0.8rem;
  }
`

const FeatureIcon = styled.div`
  min-width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${props => `${props.accentColor}20`};
  border: 2px solid ${props => `${props.accentColor}40`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.accentColor};
  box-shadow: 0 0 15px ${props => `${props.accentColor}30`};
  margin-top: 1px;
`

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`

const TechItem = styled(motion.div)`
  padding: 0.9rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${props => `${props.accentColor}20`};
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px ${props => `${props.accentColor}10`};

  &:hover {
    background: ${props => `${props.accentColor}15`};
    border-color: ${props => `${props.accentColor}50`};
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
    color: ${props => props.accentColor};
  }
`

// Architecture Section Styled Components
const ArchitectureSection = styled.div`
  margin-top: 2rem;
`

const ArchitectureHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
    border-color: ${props => props.accentColor}40;
  }
`

const ArchitectureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ExpandIcon = styled(motion.div)`
  color: ${props => props.accentColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ArchitectureViewContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

const ArchitectureBackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: ${props => props.accentColor};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
    border-color: ${props => props.accentColor}50;
    box-shadow: 0 4px 16px ${props => `${props.accentColor}30`};
  }
`

const ArchitectureTitleMain = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 2rem 0;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`

const ArchitectureLayers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const LayerCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.accentColor}40;
    box-shadow: 0 8px 32px ${props => `${props.accentColor}20`};
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`

const LayerTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1rem 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`

const LayerDescription = styled.div`
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-line;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`

const TechnologiesSection = styled.div`
  margin: 2rem 0;
`

const TechnologiesTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1.5rem 0;
  text-align: center;
`

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const TechCategory = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.2rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem;
  }
`

const TechCategoryTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 0.8rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const TechCategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TechCategoryItem = styled.li`
  color: #e0e0e0;
  font-size: 0.85rem;
  padding: 0.3rem 0;
  border-left: 2px solid ${props => props.accentColor}40;
  padding-left: 0.8rem;
  margin-bottom: 0.3rem;

  &:hover {
    color: ${props => props.accentColor};
    border-left-color: ${props => props.accentColor};
  }
`

const FlowExampleSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const FlowExampleTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.accentColor};
  margin: 0 0 1.5rem 0;
  text-align: center;
`

const FlowSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FlowStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.accentColor}40;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  }
`

const FlowStepNumber = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.accentColor} 0%, ${props => props.accentColor}CC 100%);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
`

const FlowStepText = styled.div`
  color: #e0e0e0;
  font-size: 0.9rem;
  flex: 1;
`

const FlowArrow = styled.div`
  color: ${props => props.accentColor};
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: auto;
`

export default ProjectDetail
