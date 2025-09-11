import {
  Terminal as TerminalIcon,
  User,
  Code,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";


export const commands = {
  help: () => (
    <div className="space-y-2">
      <div className="text-green-500 font-bold">Available Commands:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-yellow-400">help</span> - Show this help message
        </div>
        <div>
          <span className="text-yellow-400">sudo</span> - about me
        </div>
        <div>
          <span className="text-yellow-400">skills</span> - View my technical
          skills
        </div>
        <div>
          <span className="text-yellow-400">projects</span> - See my projects
        </div>
        <div>
          <span className="text-yellow-400">education</span> - My educational
          background
        </div>
        <div>
          <span className="text-yellow-400">experience</span> - Work experience
        </div>
        <div>
          <span className="text-yellow-400">contact</span> - Get in touch
        </div>
        <div>
          <span className="text-yellow-400">social</span> - Social media links
        </div>
        <div>
          <span className="text-yellow-400">clear</span> - Clear the terminal
        </div>
        <div>
          <span className="text-yellow-400">resume</span> - Download my resume
        </div>
      </div>
    </div>
  ),

  sudo: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> About Me
      </div>
      <div className="text-gray-300 leading-relaxed">
        <p>
          Hello! I'm Neha Bawankar , A Full Stack Developer with expertise
          in modern web technologies.
        </p>
        {/* <p className="mt-2">
            I love creating elegant solutions to complex problems and building
            applications that make a difference.
          </p>
          <p className="mt-2">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying a good cup of coffee.
          </p> */}
      </div>
    </div>
  ),

  skills: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Technical Skills
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-yellow-400 font-semibold mb-2">
            Programming Languages
          </div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• Java</div>
            <div>• JavaScript (ES6+)</div>
            <div>• TypeScript</div>
            <div>• SQL</div>
            <div>• Flutter</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-2">Frontend</div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• React.js</div>
            <div>• HTML5 / CSS3</div>
            <div>• Tailwind CSS</div>
            
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-2">Backend</div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• Spring Boot</div>
            <div>• Express.js</div>
            <div>• Postman</div>
            <div>• JPA/Hibernet</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-2">Databases</div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• MongoDB</div>
            <div>• SQL</div>
            <div>• PostgreSQL</div>
            <div>• DBMS</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-2">
            Tools & Platforms
          </div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• AWS </div>
            <div>• Eclipse </div>
            <div>• Git / GitHub</div>
            <div>• Figma</div>
            <div>• VS Code</div>
            <div>• Intellij Idea</div>
          </div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-2">
            Development Practices
          </div>
          <div className="text-gray-300 text-sm space-y-1">
            <div>• RESTful APIs</div>
            <div>• Agile Development</div>
            
          </div>
        </div>
      </div>
    </div>
  ),

  projects: () => (
    <div className="space-y-4">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Featured Projects
      </div>
      <div className="space-y-4 flex flex-col gap-2">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-gray-600 p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Portfolio website
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              A personal portfolio website built with React and TypeScript,
              featuring an interactive terminal interface for exploring my
              skills, projects, and experience in a unique and engaging way.
            </div>
            <div className="text-xs text-gray-400 mt-4">
              React • TypeScript • Tailwind CSS • Render • Three.js
            </div>
          </div>
        </a>

        <a
          href="https://github.com/Neha-bawankar/Genie-Gen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-gray-600 p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Genie- Gen
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              Developed an AI-driven dashboard that generates optimized content for social media and other domains using GeminiAI. The system provides a "fit percentage" score along with actionable improvement suggestions to enhance content quality and relevance
            </div>
            <div className="text-xs text-gray-400 mt-4">
              ReactJs • NodeJs • MongoDB • Google Gemini AI • Razorpay • Postman
            </div>
          </div>
        </a>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-gray-600 p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
               Async Image Proceesing
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              //Under Proceesing
            </div>
            <div className="text-xs text-gray-400 mt-4">
              React • Spring Boot • MySQL • Multithreading
            </div>
          </div>
        </a>

        {/*<a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-gray-600 p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                PDF-Summarizer
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              jhjyvfcc
            </div>
            <div className="text-xs text-gray-400 mt-4">
              Python • Streamlit • PyPDF2 • Langchain • Hugging Face
              Transformers • OpenAI API
            </div>
          </div>
        </a>*/}

     {/*}   <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border border-gray-600 p-3 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Code size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                /
              </span>
            </div>
            <div className="text-gray-300 text-sm mb-2">
              /
            </div>
            <div className="text-xs text-gray-400 mt-4">
              HTML • CSS • JavaScript • Bootstrap • React
            </div>
          </div>
        </a>*/}
      </div>
    </div>
  ),

  education: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Education
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap size={16} className="text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Masters of Computer Application (MCA)
            </span>
          </div>
          <div className="text-gray-300 text-sm">
            JABALPUR ENGINEERING COLLEGE, JABALPUR
          </div>
          <div className="text-gray-400 text-xs">CGPA: 7.57 (2023-2025)</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap size={16} className="text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Bachelor of Computer Science (BCS)
            </span>
          </div>
          <div className="text-gray-300 text-sm">
            RAJA SANKAR SHAH UNIVERSITY(CHHINDWARA UNIVERSITY), CHHINDWARA
          </div>
          <div className="text-gray-400 text-xs">CGPA: 69.33(2019-2022)</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap size={16} className="text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Higher Secondary Education (12th Grade)
            </span>
          </div>
          <div className="text-gray-300 text-sm">STATE BOARD • 2019</div>
          <div className="text-gray-400 text-xs">GPA: 78.6%</div>
        </div>
        <div>
          <div className="text-yellow-400 font-semibold mb-1">
            Certifications
          </div>
          <div className="text-gray-300 text-sm space-y-1">
            
            <div>
              • Career Essentials in Generative AI by Microsoft and LinkedIn:
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  experience: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Work Experience
      </div>
      <div className="space-y-4 border border-gray-600 p-3 rounded">
        <div>
          <div className="text-yellow-400 font-semibold text-xl">
            Full Stack Developer
          </div>
          <div className="text-gray-300 text-md font-semibold my-1">
            Castallio . (A Education Consultant), Pune{" "}
            <span className="font-medium italic text-sm">
              • (July 2025 – Present)
            </span>
          </div>
          {/* <div>
              <MapPin size={16} className="text-yellow-400" />
            </div> */}
          <div className="text-gray-400 text-sm mt-1">
            • Built and maintained scalable Education Web page with modern
            frontend tech, improving data visibility and.
            <br />
            • Integrated RESTful APIs and optimized state management for
            real-time UI updates.
            <br />• Gained strong EduTech domain knowledge to align technical
            solutions with business needs.
          </div>
        </div>
      </div>
    </div>
  ),

  contact: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Contact Information
      </div>
      <div className="space-y-2">
        <a href="mailto:lakshitjain.dev@gmail.com">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-yellow-400" />
            <span className="text-gray-300 hover:text-yellow-400">
              nehabawankar88@gmail.com
            </span>
          </div>
        </a>
        <div className="flex items-center gap-2">
          <User size={16} className="text-yellow-400" />
          <span className="text-gray-300">+91 7999724775</span>
        </div>
        <div className="text-gray-400 text-sm mt-3">
          Feel free to reach out! I'm always open to discussing new
          opportunities or interesting projects.
        </div>
      </div>
    </div>
  ),

  social: () => (
    <div className="space-y-3">
      <div className="text-green-500 font-bold flex items-center gap-2">
        <TerminalIcon /> Social Links
      </div>
      <div className="space-y-2">
        <a
          href="https://github.com/Neha-bawankar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Github size={16} className="text-yellow-400" />

          {/* <span
              className="text-gray-300 hover:text-yellow-400 transition-all duration-500 bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-left"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "background-size 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              
            </span> */}

          <span className="text-gray-300">github.com/Neha-Bawankar</span>
          <ExternalLink size={12} className="text-gray-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/neha-n-bawankar-2282891b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Linkedin size={16} className="text-yellow-400" />
          <span className="text-gray-300">linkedin.com/in/Neha_N_Bawankar</span>
          <ExternalLink size={12} className="text-gray-500" />
        </a>
      {/*  <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <TerminalIcon size={16} className="text-yellow-400" />
          <span className="text-gray-300"></span>
          <ExternalLink size={12} className="text-gray-500" />
        </a>*/}
      </div>
    </div>
  ),

  resume: () => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/file/d/1wlvwOhVq6i9CR6ToOeeTRC0LJNZMCOe2/view?usp=drive_link";
      link.download = "Neha_Bawankar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1800);

    return (
      <div className="space-y-3">
        <div className="text-green-500 font-bold flex items-center gap-2">
          <TerminalIcon /> Resume
        </div>
        <div className="text-gray-300 flex items-center gap-2">
          <span>
            Resume download initiated..., Or you can visit here to see the
            resume.
          </span>
          <a
            href="https://drive.google.com/file/d/1wlvwOhVq6i9CR6ToOeeTRC0LJNZMCOe2/view?usp=drive_link/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} className="text-gray-500" />
          </a>
        </div>
      </div>
    );
  },

  clear: () => null,
};
