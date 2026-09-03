# Omar Alhalawani — Engineering Portfolio

Personal engineering portfolio focused on **ASIC verification, RTL and digital design, embedded systems, instrumentation, and engineering automation**.

🌐 **Live Site:** [omar-alhalawani.github.io/omar-portfolio](https://omar-alhalawani.github.io/omar-portfolio/)
💻 **GitHub:** [github.com/Omar-Alhalawani](https://github.com/Omar-Alhalawani)
🔗 **LinkedIn:** [linkedin.com/in/omar-alhalawani](https://linkedin.com/in/omar-alhalawani)

---

## About

I'm **Omar Alhalawani**, a Computer Systems Engineering student at Carleton University interested in the layers of computing closest to the hardware.

My work spans:

* ASIC verification
* RTL and FPGA design
* SystemVerilog and UVM
* Python-based verification and automation
* Embedded systems
* Sensors and data acquisition
* Linux and real-time systems
* Robotics and hardware integration

The portfolio is designed to show not only completed projects, but also the engineering ideas behind them: **signal flow, verification, control logic, instrumentation, and hardware/software interaction**.

---

## ASIC Verification Experience

My Summer 2026 co-op at **Ciena** focused on Digital Verification Methodology within Methodology & Automation.

Public-safe highlights include:

* Researched **PyUVM and cocotb** as Python-based alternatives to SystemVerilog UVM for AI-assisted verification workflows.
* Developed self-checking verification environments from RTL specifications and verification plans.
* Implemented fault injection and performance testing.
* Investigated verification-methodology limitations and bottlenecks.
* Documented findings and presented recommendations to engineers and management.

> No proprietary RTL, internal source code, confidential architectures, or internal benchmark data are published in this portfolio.

---

# Featured Projects

## Synchronous FIFO RTL Design & Verification

A parameterized synchronous FIFO implemented in SystemVerilog and validated with a self-checking verification environment.

**Focus:**
`SystemVerilog` `RTL` `FIFO` `Verification` `Waveform Debugging`

[View project source](https://github.com/Omar-Alhalawani/sync-fifo-rtl-verification)

---

## FPGA Arithmetic Display System

An FPGA-based arithmetic system built around a structured datapath and controller FSM with seven-segment output.

**Focus:**
`Verilog` `FPGA` `FSM` `Datapath` `Vivado`

[View project source](https://github.com/Omar-Alhalawani/FPGA-Based-Arithmetic-Display-System)

---

## EMG Signal Acquisition & Processing

An end-to-end biomedical instrumentation pipeline for acquiring EMG signals through a microcontroller and processing and visualizing the resulting stream in Python.

**Focus:**
`Sensors` `Arduino` `Serial Communication` `Python` `Signal Processing`

[View project source](https://github.com/Omar-Alhalawani/EMG-Signal-Acquisition-and-Processing)

---

## LumaLink

A real-time optical communication system involving high-speed light signaling, camera capture, and local processing.

**Focus:**
`QNX` `Raspberry Pi` `Camera Systems` `Optical Communication` `Real-Time Systems`

[View project source](https://github.com/Omar-Alhalawani/lumalink)

---

## Mini-Lysimeter Research GUI

A research-oriented data acquisition interface integrating NI-DAQ and Arduino hardware with Python.

**Focus:**
`Python` `NI-DAQ` `Arduino` `Data Acquisition` `Research Instrumentation`

[View project source](https://github.com/Omar-Alhalawani/GUI-NI-DAQ)

---

## CubeX Trio RepRap Conversion

A discontinued CubeX Trio rebuilt into a repairable, open-source 3D-printing platform using modern controller electronics and Marlin firmware.

**Focus:**
`Hardware Repair` `Motion Control` `Marlin` `Embedded Systems`

[View project source](https://github.com/Omar-Alhalawani/CubeX-Trio-Revival)

---

## Additional Projects

The portfolio also includes:

* Autonomous / IoT Robotic Car
* Verbal-Responsive Robot Dog
* Arduino Simon-Says Memory Game

---

# Interactive Engineering Visualizations

Project cards include lightweight animated visualizations that illustrate the engineering concepts behind each system.

Examples include:

* FIFO read/write activity and pointer movement
* FSM and datapath progression
* Synthetic raw vs. filtered EMG waveforms
* Optical signal transmission
* Sensor-to-DAQ data pipelines
* 3D-printer toolpath movement
* Robotic sensing and routing
* Robot command-state visualization
* Simon-Says sequences

These animations are **illustrative** and are not presented as real measurement or benchmark data.

---

# Technology Tracing

The portfolio includes an interactive technology relationship system.

Technologies such as:

* `SystemVerilog`
* `UVM`
* `Python`
* `RTL`
* `FPGA`
* `Embedded Systems`

can be visually connected to the projects and experience where they are actually used.

The goal is to make technical skills **evidence-based** rather than represent them using arbitrary percentage bars.

---

# Motion System

The site uses a custom motion and interaction system built using native browser technologies.

Features include:

* Page transitions
* Progressive section reveals
* Semiconductor-inspired signal animations
* Animated verification pipelines
* Scroll-linked experience timelines
* Interactive project cards
* Responsive pointer lighting
* Hero inspection effects
* Animated project filtering
* PCB-style background routing
* Signal propagation between interface elements
* Reduced-motion support

The animation system is intentionally based around **hardware, verification, and digital-system concepts** rather than generic website effects.

---

# FAULT//HUNT — Tapeout Protocol

The portfolio contains a hidden game:

## `FAULT//HUNT: TAPEOUT PROTOCOL`

It is intentionally not exposed through the primary navigation.

The game takes place inside a fictional processor called **ASTERION**.

You control **VERA-7**, an internal verification unit attempting to contain a regression cascade caused by a rogue process called **NULL**.

Current gameplay includes:

* Top-down movement
* TRACE BEAM combat
* Dashing
* Coverage scanning
* Breakpoint abilities
* Multiple enemy types
* Sector progression
* Boss encounters
* Verification-themed puzzles
* Checkpoints
* Local progress storage
* Desktop and touch controls

### Campaign

1. `BOOT SECTOR`
2. `CONTROL GRID`
3. `MEMORY VAULT`
4. `CLOCKWORK`
5. `BUS NEXUS`
6. `UNKNOWN DEPTHS`
7. `VERIFICATION LAB`
8. `REGRESSION CORE`
9. `SILICON GATE`

The entire game runs client-side and remains compatible with static GitHub Pages hosting.

---

# Tech Stack

The portfolio intentionally remains lightweight.

## Front End

* HTML5
* CSS3
* Vanilla JavaScript

## Browser APIs

* Canvas 2D
* Web Audio API
* IntersectionObserver
* requestAnimationFrame
* View Transitions API
* localStorage
* Fullscreen API

## Fonts

* Space Grotesk
* Inter
* JetBrains Mono

## Hosting

* GitHub Pages

No React application, backend server, database, or runtime framework is required.

---

# Why Vanilla JavaScript?

This portfolio intentionally does not use React or another SPA framework.

The site does not require:

* Authentication
* Application-wide state management
* Server-side rendering
* A database
* Complex client-side routing

Using HTML, CSS, and vanilla JavaScript keeps the portfolio:

* Lightweight
* Fast
* Easy to deploy
* Easy to maintain
* Fully compatible with free GitHub Pages hosting

More advanced interactions such as the motion system, project simulations, and FAULT//HUNT are implemented directly using browser APIs.

---

# Project Structure

```text
omar-portfolio/
│
├── index.html
├── experience.html
├── projects.html
├── project-details.html
├── about.html
├── resume.html
├── contact.html
├── services.html
├── 404.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── main.css
│   │   ├── motion.css
│   │   ├── advanced.css
│   │   └── fault-hunt.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── motion.js
│   │   ├── project-visuals.js
│   │   │
│   │   └── game/
│   │       ├── fault-hunt.js
│   │       └── fault-hunt-levels.js
│   │
│   ├── img/
│   │
│   └── resume/
│       └── Resume_Omar_Alhalawani.pdf
│
└── README.md
```

---

# JavaScript Architecture

## `main.js`

Core site behavior:

* Navigation
* Mobile navigation
* Scroll state
* Project filtering
* Contact form behavior
* Background circuit rendering

## `motion.js`

Site-wide interaction and motion:

* Reveal system
* Hero animation
* Project-card pointer effects
* Timeline progression
* Project-directory state
* General motion behavior

## `project-visuals.js`

Engineering-specific interaction:

* Project mini-simulations
* Technology relationships
* Project telemetry
* Project-specific visualization behavior

## `game/`

Isolated FAULT//HUNT implementation and campaign configuration.

---

# Accessibility

The portfolio includes support for:

* Keyboard navigation
* Visible focus states
* Semantic navigation and forms
* Responsive layouts
* Touch interfaces
* Reduced-motion preferences
* Decorative graphics hidden from assistive technologies where appropriate

Animations are progressive enhancements.

The technical content remains accessible without them.

---

# Responsive Design

The site is designed for:

* Desktop monitors
* Laptops
* Tablets
* Phones
* High-DPI displays

Desktop receives richer pointer interactions and parallax effects, while mobile receives simplified animation and touch-friendly controls.

FAULT//HUNT also includes dedicated mobile movement and action controls.

---

# Performance

Despite its animation-heavy visual design, the portfolio is designed to remain lightweight.

The implementation prioritizes:

* `transform` and `opacity` animations
* `requestAnimationFrame`
* `IntersectionObserver`
* Off-screen animation suspension
* Capped device-pixel ratios
* Limited simultaneous project simulations
* Pausing portfolio animation while FAULT//HUNT is active
* Progressive enhancement instead of framework-heavy rendering

---

# Running Locally

Clone the repository:

```bash
git clone https://github.com/Omar-Alhalawani/omar-portfolio.git
cd omar-portfolio
```

Start a local HTTP server.

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using a local HTTP server instead of opening the HTML files directly ensures browser APIs and JavaScript modules behave consistently.

---

# Deployment

The production site is deployed using **GitHub Pages**.

Production URL:

https://omar-alhalawani.github.io/omar-portfolio/

The site is designed to work correctly from the GitHub Pages repository subpath:

```text
/omar-portfolio/
```

No backend infrastructure is required.

---

# Design Direction

The visual language is based around:

> **Semiconductor lab + digital verification interface + engineering instrumentation**

rather than generic cyberpunk styling.

Core motifs include:

* PCB traces
* Waveforms
* Logic-state labels
* Chip interfaces
* Verification pipelines
* Signal propagation
* Technical telemetry
* Dark silicon-like surfaces

### Palette

* Deep navy / near-black
* Electric cyan
* Violet
* Controlled magenta
* Green system-status accents
* Amber warning accents

---

# Contact

**Omar Alhalawani**
Computer Systems Engineering
Carleton University

📧 [omar.alhalawani2006@gmail.com](mailto:omar.alhalawani2006@gmail.com)

💻 [github.com/Omar-Alhalawani](https://github.com/Omar-Alhalawani)

🔗 [linkedin.com/in/omar-alhalawani](https://linkedin.com/in/omar-alhalawani)

---

# Usage

The source code for this personal portfolio is publicly viewable for reference.

Project-specific repositories may contain their own licensing or usage terms.

Personal content, photographs, branding, written portfolio content, and project media should not be reused or represented as another person's work.
