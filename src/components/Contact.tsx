import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const socialLinks = [
    { name: "Github", url: "https://github.com/cybershivaa" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/shivam-kumar-6286982b3" },
    { name: "Twitter", url: "https://x.com/Shivamkr2004" },
    { name: "Instagram", url: "https://www.instagram.com/krr._shivam" },
  ];

  return (
    <section id="contact" className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {/* Email Box */}
          <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-transparent border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-lg font-semibold text-white mb-4">Email</h3>
            <a
              href="mailto:shivamkumar07514@gmail.com"
              data-cursor="disable"
              className="text-cyan-400 hover:text-cyan-300 transition-colors break-all font-medium mb-6 block"
            >
              shivamkumar07514@gmail.com
            </a>
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Education</h4>
              <p className="text-gray-300 text-sm">
                B.Tech in Computer Science and Engineering
              </p>
            </div>
          </div>

          {/* Social Links Box */}
          <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-transparent border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  <MdArrowOutward className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Credit Box */}
          <div className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-transparent border border-pink-400/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                Designed and <br /> Developed by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Shivam Kumar</span>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
