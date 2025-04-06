# 🧠 AI-Powered Resume Generator

An intelligent, full-stack resume builder that uses **DeepSeek** (via **Ollama**) to generate customized resumes based on user prompts. This project integrates a robust **Spring Boot** backend with a modern **React.js** frontend styled using **Tailwind CSS** and **DaisyUI**, delivering a seamless and dynamic resume-building experience.

---

## 🚀 Features

- 🔍 **AI-Powered Resume Generation**  
  Generate professional resumes instantly from a simple user prompt using DeepSeek models.

- ⚙️ **Real-Time Editing & Customization**  
  View and edit each resume section (Experience, Education, Skills, etc.) in form format after generation.

- 🎨 **Modern & Responsive UI**  
  Built with Tailwind CSS and DaisyUI to ensure clean design and mobile responsiveness.

- 🔗 **Modular Full-Stack Architecture**  
  Seamless communication between the React frontend and Spring Boot backend.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, DaisyUI  
- **Backend:** Spring Boot (Java), RESTful APIs  
- **AI Integration:** DeepSeek via Ollama  
- **Data Format:** JSON for structured resume content  

---

## 🔄 System Flow

```mermaid
graph TD
    A[📝 User Enters Prompt] --> B[📤 Send Prompt to DeepSeek via Ollama]
    B --> C[🧠 DeepSeek Generates Resume in JSON Format]
    C --> D[📥 Spring Boot Receives and Processes Response]
    D --> E[🌐 React Frontend Displays Resume]
    E --> F[🧾 Resume Sections Shown as Editable Forms]
