export default function About() {
  return (
    <section id="about" className="pt-24 py-20 px-6 bg-[#FFEBC8] text-center md:text-left">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://media.istockphoto.com/id/871704344/photo/mobile-connect-with-security-camera.jpg?s=1024x1024&w=is&k=20&c=acok8EeYiG1q5dfgJkRsocQKqnzzQz6sdZXrEne7W8Q="
          alt="Technician installing CCTV camera"
          className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div>
          <h2 className="text-4xl font-bold text-[#F59E0B] mb-4">About XtraVision</h2>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-4">
            XtraVision is a trusted leader in camera installation and smart surveillance systems.
            We provide secure, reliable, and professional CCTV solutions for homes and businesses.
          </p>
          <p className="text-[#4B5563] text-lg leading-relaxed">
            Our certified technicians handle everything — from installation to configuration and
            maintenance — ensuring your security systems perform flawlessly every time.
          </p>
        </div>
      </div>
    </section>
  );
}

