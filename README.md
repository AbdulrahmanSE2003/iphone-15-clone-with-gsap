# 📱 iPhone 15 Pro – High-End Creative Landing Page

This project is a high-fidelity visual exploration of the iPhone 15 Pro landing page. It focuses on recreating Apple's signature "Cinematic" feel through advanced web animations and 3D rendering.

### ✨ Key Highlights
* **GSAP & ScrollTrigger:** Implemented complex scroll-bound animations where elements move and transform based on user interaction.
* **Three.js Integration:** Features a fully interactive 3D model of the iPhone 15 Pro, allowing users to view the device from any angle with realistic textures.
* **Dynamic Video Carousel:** Custom-built video player with state-controlled playback and smooth transitions between product features.
* **Responsive Storytelling:** The layout adjusts dynamically to maintain the "premium" feel on mobile, tablet, and desktop.
* **Performance Tuning:** Utilized React Suspense and specialized loaders to ensure high-resolution 3D models don't lag the UI.

### 🧪 Technical Challenges
* **3D Optimization:** Managing the memory footprint of GLTF models within a React lifecycle.
* **Animation Synchronization:** Coordinating multiple GSAP timelines to trigger exactly at specific scroll percentages.

### 🛠️ Development Stack
* **Core:** React.js
* **Animation:** GSAP (GreenSock)
* **3D Graphics:** Three.js & React Three Fiber
* **Styling:** Tailwind CSS
