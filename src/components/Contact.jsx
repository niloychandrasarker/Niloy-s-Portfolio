import React from "react";

const socialLinks = [
  {
    label: "WhatsApp",
    url: "https://wa.me/8801700000000", // Replace with actual WhatsApp number
    color: "bg-green-200 text-green-800",
    icon: `<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 32 32'><path d='M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8 0 2.26.617 4.463 1.786 6.384l-1.89 6.9 7.08-1.864c1.86 1.02 3.96 1.56 6.024 1.56h.001c7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2c-1.86 0-3.68-.48-5.28-1.38l-.38-.22-4.2 1.104 1.18-4.1-.24-.38c-1.08-1.7-1.66-3.66-1.66-5.724 0-6.08 4.944-11.024 11.024-11.024s11.024 4.944 11.024 11.024-4.944 11.024-11.024 11.024zm6.16-7.36c-.34-.17-2.02-.99-2.33-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.09-.34-.17-1.44-.53-2.74-1.68-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.62-.09-.19-.81-1.95-1.11-2.67-.29-.68-.58-.59-.8-.6-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.43-.33.34-1.26 1.23-1.26 2.99 0 1.76 1.28 3.46 1.46 3.7.17.23 2.53 3.86 6.13 5.27.86.37 1.53.59 2.06.75.87.28 1.66.24 2.29.15.7-.1 2.17-.86 2.48-1.7.31-.83.31-1.54.22-1.7-.09-.15-.34-.24-.71-.41z'/></svg>`,
  },
  {
    label: "GitHub",
    url: "https://github.com/niloychandrasarker",
    color: "bg-gray-900 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.373-12-12-12z'/></svg>",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/niloy-chandra-sarker-01a0aa257/",
    color: "bg-blue-800 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 10.268h-3v-4.604c0-2.368-3-2.184-3 0v4.604h-3v-9h3v1.235c1.396-2.586 7-2.777 7 2.476v5.289z'/></svg>",
  },
  {
    label: "Gmail",
    url: "mailto:niloychandrasarker@gmail.com",
    color: "bg-red-500 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M12 13.065l-8-6.065V19a2 2 0 002 2h12a2 2 0 002-2V7l-8 6.065zM20 5a2 2 0 00-2-2H6a2 2 0 00-2 2v.217l8 6.066 8-6.066V5z'/></svg>",
  },
  {
    label: "Facebook",
    url: "https://facebook.com/niloychandrasarker",
    color: "bg-blue-700 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M24 12.073c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/></svg>",
  },
  {
    label: "Blog",
    url: "https://rabitlog.vercel.app/",
    color: "bg-blue-500 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M4 19.5A2.5 2.5 0 016.5 17H20' /><path d='M6.5 17A2.5 2.5 0 004 14.5V6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8A2.5 2.5 0 0117.5 17' /></svg>",
  },
  {
    label: "FB Page",
    url: "#",
    color: "bg-blue-600 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0'/></svg>",
  },
  {
    label: "Twitter",
    url: "#",
    color: "bg-blue-400 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z'/></svg>",
  },
  {
    label: "Discord",
    url: "https://discord.com/users/1121447718129238036",
    color: "bg-indigo-600 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M20.317 4.369A19.791 19.791 0 0016.885 3.1a.074.074 0 00-.079.037c-.34.607-.719 1.395-.984 2.01a18.524 18.524 0 00-5.456 0 12.51 12.51 0 00-.988-2.01.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.369a.07.07 0 00-.032.027C.533 9.093-.32 13.579.099 18.057a.082.082 0 00.031.056c2.137 1.568 4.21 2.51 6.29 3.155a.077.077 0 00.084-.027c.484-.66.915-1.356 1.289-2.084a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 01.079-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 01.08.009c.119.099.245.198.372.292a.077.077 0 01-.006.127c-.603.343-1.221.645-1.874.892a.076.076 0 00-.04.105c.375.728.806 1.424 1.288 2.084a.076.076 0 00.084.028c2.08-.645 4.153-1.587 6.29-3.155a.077.077 0 00.031-.055c.5-5.177-.838-9.623-3.548-13.661a.061.061 0 00-.031-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z'/></svg>",
  },
  {
    label: "Instagram",
    url: "#",
    color: "bg-pink-200 text-pink-700",
    icon: `<svg class='w-5 h-5 mr-2' fill='none' stroke='currentColor' stroke-width='1.5' viewBox='0 0 24 24'><rect x='2' y='2' width='20' height='20' rx='5' stroke='currentColor' stroke-width='1.5' fill='none'/><path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' stroke='currentColor' stroke-width='1.5' fill='none'/><circle cx='17.5' cy='6.5' r='1.5' fill='currentColor'/></svg>`,
  },
  {
    label: "Spotify",
    url: "#",
    color: "bg-green-500 text-white",
    icon: "<svg class='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm5.297 17.438c-.221.364-.691.482-1.055.262-2.891-1.771-6.543-2.168-10.818-1.176-.414.094-.832-.162-.926-.576-.094-.414.162-.832.576-.926 4.646-1.062 8.668-.625 11.828 1.262.363.221.481.691.262 1.056zm1.5-2.625c-.276.447-.857.592-1.304.316-3.312-2.047-8.375-2.646-12.25-1.426-.5.154-1.025-.127-1.18-.627-.154-.5.127-1.025.627-1.18 4.312-1.326 9.875-.68 13.625 1.563.447.277.592.857.316 1.274zm1.625-2.75c-.342.553-1.07.729-1.623.387-3.789-2.342-10.625-2.553-14.375-1.377-.607.184-1.254-.146-1.438-.754-.184-.607.146-1.254.754-1.438 4.188-1.27 11.5-1.033 15.75 1.5.553.342.729 1.07.387 1.623z'/></svg>",
  },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/niloychandrasarker",
    color: "bg-blue-200 text-blue-800",
    icon: `<svg class='w-5 h-5 mr-2' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_212_2)'><rect width='40' height='40' rx='8' fill='#1F8ACB'/><rect x='6' y='6' width='28' height='28' rx='6' fill='white'/><rect x='9' y='9' width='22' height='22' rx='4' fill='#1F8ACB'/><rect x='12' y='12' width='16' height='16' rx='2' fill='white'/><rect x='15' y='15' width='10' height='10' rx='1' fill='#1F8ACB'/><rect x='17' y='17' width='6' height='6' rx='1' fill='#FFD700'/></g><defs><clipPath id='clip0_212_2'><rect width='40' height='40' rx='8' fill='white'/></clipPath></defs></svg>`,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pt-10 pb-5 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Info */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-500 text-base mb-2">
            If you want to hire me or have other queries, then knock me anytime.
            I try to reply within 24 hours.
          </p>
          <div className="text-2xl md:text-3xl font-light text-gray-400 mb-8 select-all">
            niloysarker.cs@gmail.com
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-lg px-3 py-1.5 font-medium shadow-sm hover:scale-105 transition-all duration-200 ${item.color}`}
                dangerouslySetInnerHTML={{ __html: item.icon + item.label }}
              />
            ))}
          </div>
        </div>
        {/* Right: Mail Icon and Decoration */}
        <div className="flex-1 flex justify-center items-center min-w-[220px]">
          <div className="relative animate-float-smooth">
            <svg
              width="160"
              height="150"
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="30"
                width="120"
                height="80"
                rx="12"
                stroke="#7C3AED"
                strokeWidth="6"
                fill="none"
              />
              <polyline
                points="20,30 80,80 140,30"
                stroke="#7C3AED"
                strokeWidth="6"
                fill="none"
              />
            </svg>
            {/* Decorative dots and shapes */}
            <span
              className="absolute top-0 left-0 w-3 h-3 bg-purple-200 rounded-full opacity-60"
              style={{ transform: "translate(-30px, -20px)" }}
            ></span>
            <span
              className="absolute top-0 right-0 w-2 h-2 bg-purple-200 rounded-full opacity-60"
              style={{ transform: "translate(30px, -10px)" }}
            ></span>
            <span
              className="absolute bottom-0 left-1/2 w-16 h-3 bg-purple-100 rounded-full opacity-40"
              style={{ transform: "translate(-50%, 30px)" }}
            ></span>
            <span
              className="absolute bottom-0 right-0 w-3 h-3 bg-purple-100 rounded-full opacity-40"
              style={{ transform: "translate(20px, 20px)" }}
            ></span>
            <span
              className="absolute top-1/2 left-0 w-2 h-2 bg-purple-100 rounded-full opacity-40"
              style={{ transform: "translate(-20px, -10px)" }}
            ></span>
            <span
              className="absolute top-1/2 right-0 w-2 h-2 bg-purple-100 rounded-full opacity-40"
              style={{ transform: "translate(20px, -10px)" }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Add custom animation to Tailwind
// In your global CSS (e.g., src/App.css), add:
/*
@keyframes bounce-smooth {
  0%, 100% { transform: translateY(0); }
  20% { transform: translateY(-18px); }
  40% { transform: translateY(-28px); }
  60% { transform: translateY(-18px); }
  80% { transform: translateY(-8px); }
}
.animate-bounce-smooth {
  animation: bounce-smooth 1.8s infinite cubic-bezier(0.6,0.05,0.28,0.91);
}

@keyframes float-smooth {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float-smooth {
  animation: float-smooth 3s infinite ease-in-out;
}
*/
