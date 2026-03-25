import { motion } from 'motion/react';
import { 
  Play, 
  Radio, 
  Users, 
  TrendingUp, 
  Music, 
  Globe, 
  Rocket, 
  Star, 
  ChevronDown, 
  Mail, 
  MessageCircle,
  Headphones,
  Phone,
  X,
  Instagram,
  Youtube,
  Facebook,
  Twitch
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.4-1.5-5.5-1.8-9.1-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 4-.9 7.4-.5 10.1 1.1.3.2.4.6.3.9zm1.3-2.9c-.2.4-.7.5-1.1.3-2.8-1.7-7.1-2.2-10.5-1.2-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.1 8.7-.5 11.9 1.4.3.2.5.7.1 1.1zm.1-3c-3.3-2-8.8-2.2-12-1.2-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 3.7-1.1 9.8-.9 13.6 1.4.5.3.6.9.3 1.4-.3.5-.9.6-1.2.3z"/>
  </svg>
);

const WhatsAppModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name} da empresa ${company}. Vim pelo site e gostaria de informações sobre como anunciar no Labirinto Acústico.`;
    const url = `https://wa.me/5541988710303?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-cosmic-card border border-alien-green/30 p-8 rounded-2xl w-full max-w-md relative shadow-[0_0_30px_rgba(57,255,20,0.15)]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-alien-green/20 rounded-full flex items-center justify-center text-alien-green">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-white">Falar no WhatsApp</h3>
        </div>
        <p className="text-gray-400 mb-6">Preencha os dados abaixo para iniciarmos o atendimento.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Seu Nome</label>
            <input 
              required 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="w-full bg-cosmic-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-alien-green transition-colors" 
              placeholder="Ex: João Silva" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Sua Empresa</label>
            <input 
              required 
              type="text" 
              value={company} 
              onChange={e => setCompany(e.target.value)} 
              className="w-full bg-cosmic-bg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-alien-green transition-colors" 
              placeholder="Ex: Pizzaria do João" 
            />
          </div>
          <button type="submit" className="w-full bg-alien-green text-cosmic-bg font-bold py-3 rounded-lg hover:bg-pizza-orange hover:text-white transition-colors mt-4 shadow-[0_0_15px_var(--color-alien-green-glow)]">
            Iniciar Conversa
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cosmic-bg/90 backdrop-blur-md border-b border-alien-green/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Radio className="text-alien-green w-8 h-8" />
          <span className="font-bold text-xl tracking-wider text-white">LABIRINTO<span className="text-alien-green">ACÚSTICO</span></span>
        </div>
        <button onClick={onOpenModal} className="bg-alien-green text-cosmic-bg px-6 py-2 rounded-full font-bold hover:bg-pizza-orange hover:text-white transition-colors duration-300 shadow-[0_0_15px_var(--color-alien-green-glow)]">
          Anuncie Conosco
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block border border-alien-green/50 bg-alien-green/10 text-alien-green px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Rádio Clube Pontagrossense & Redes Sociais
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
            Sua marca no <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-alien-green to-pizza-orange">Centro do Universo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Conecte sua empresa a uma audiência engajada. Mais de 80 mil ouvintes mensais e 1 milhão de curtidas no TikTok. O espaço perfeito para você decolar.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={onOpenModal} className="bg-alien-green text-cosmic-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-pizza-orange hover:text-white transition-all duration-300 shadow-[0_0_20px_var(--color-alien-green-glow)] flex items-center gap-2">
              <Rocket className="w-5 h-5" /> Quero Decolar
            </button>
            <a href="#sobre" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
              Saber Mais <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-video bg-cosmic-card rounded-2xl border border-alien-green/30 shadow-[0_0_30px_rgba(57,255,20,0.15)] relative overflow-hidden">
            <video 
              className="w-full h-full object-cover outline-none"
              controls
              poster="/video-thumb.jpg"
            >
              <source src="/pitch-video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pizza-orange/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-alien-green/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { icon: <Headphones />, value: "80k+", label: "Ouvintes Mensais" },
    { icon: <TrendingUp />, value: "1M+", label: "Curtidas no TikTok" },
    { icon: <Radio />, value: "4 Dias", label: "Ao Vivo por Semana" },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cosmic-card/80 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl text-center hover:border-alien-green/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-alien-green/10 text-alien-green mb-6">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 relative z-10 bg-gradient-to-b from-transparent to-cosmic-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">O que é o <span className="text-alien-green">Labirinto Acústico?</span></h2>
          <p className="text-xl text-gray-300">
            Muito mais que um programa de rádio. Somos uma experiência multiplataforma que mistura a atitude do Rock, curiosidades da História, as últimas da Tecnologia e muita resenha de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-alien-green/20 p-2 rounded-lg text-alien-green"><Music className="w-6 h-6" /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">A Base é o Rock</h4>
                <p className="text-gray-400">Mas a variedade é a nossa marca. Tocamos o que há de melhor para manter a energia sempre no alto.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-pizza-orange/20 p-2 rounded-lg text-pizza-orange"><Globe className="w-6 h-6" /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">História & Tecnologia</h4>
                <p className="text-gray-400">Conteúdo inteligente que prende a atenção do ouvinte. Informação com entretenimento.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400"><Users className="w-6 h-6" /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Apresentação Dinâmica</h4>
                <p className="text-gray-400">Comandado por <strong>Cortelete</strong> (Davi Cortelete) e <strong>Joy</strong> (Joyci Almeida), a química perfeita para uma resenha inesquecível.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 bg-cosmic-card rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center group"
          >
            <img src="/hosts.jpg" alt="Cortelete e Joy" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-white font-bold text-xl drop-shadow-lg">Cortelete & Joy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Lore = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="bg-cosmic-card/80 backdrop-blur-md border border-alien-green/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alien-green/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <img src="/jack-planet.jpg" alt="Jack Planet" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-pizza-orange font-bold tracking-widest uppercase text-sm mb-4">
                <Star className="w-4 h-4" /> O Mascote
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">A Lenda de <span className="text-alien-green">Jack Planet</span></h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Imagine um alienígena entediado com o silêncio do cosmos. Jack Planet viajou por galáxias e buracos negros procurando a batida perfeita, até que seus radares captaram algo diferente: o Planeta Terra.
                </p>
                <p>
                  Agora, ele aterrissou no Labirinto Acústico com uma missão: descobrir tudo sobre música, rock e a cultura humana.
                </p>
                <p className="font-medium text-white border-l-4 border-alien-green pl-4 py-2 bg-alien-green/5">
                  Com sua guitarra cósmica e surfando em uma fatia de pizza derretida, Jack é a cara do nosso programa: irreverente, faminto por novidades e de outro mundo!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RadioInfo = () => {
  return (
    <section className="py-20 relative z-10 bg-gradient-to-b from-cosmic-card/50 to-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Radio className="w-12 h-12 text-pizza-orange mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-6">Transmitido pela <span className="text-pizza-orange">Rádio Clube Pontagrossense</span></h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Uma das emissoras mais tradicionais e respeitadas de Ponta Grossa e região. Estar na Rádio Clube significa credibilidade instantânea para a sua marca, unindo a força do rádio FM com o nosso alcance explosivo nas redes sociais.
          </p>
          <p className="mt-4 text-alien-green font-bold text-lg">De Segunda a Quinta-feira, das 22h às 23h.</p>
        </motion.div>
      </div>
    </section>
  );
};

const Pitch = () => {
  const benefits = [
    {
      title: "Sorteios Semanais",
      desc: "Engajamento garantido. Sua marca pode patrocinar prêmios, gerando tráfego direto e simpatia do público."
    },
    {
      title: "Podcast em Breve",
      desc: "Estamos expandindo. Anunciantes atuais terão prioridade e condições especiais no nosso novo formato."
    },
    {
      title: "Público Fiel",
      desc: "Nossos ouvintes não apenas escutam, eles interagem, comentam e confiam nas nossas indicações."
    },
    {
      title: "Custo-Benefício",
      desc: "Alcance de rádio grande com métricas de internet. O melhor investimento para o seu marketing."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Por que sua marca deve <span className="text-alien-green">anunciar aqui?</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Não vendemos apenas espaço, vendemos atenção e influência.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cosmic-card border border-gray-800 p-6 rounded-2xl hover:border-pizza-orange/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-pizza-orange/20 group-hover:text-pizza-orange transition-colors duration-300">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <footer id="contato" className="relative z-10 bg-cosmic-card border-t border-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-black text-white mb-6">Pronto para <span className="text-alien-green">decolar?</span></h2>
            <p className="text-xl text-gray-400 mb-8">
              Entre em contato com nossa equipe comercial e descubra o plano perfeito para o tamanho da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={onOpenModal} className="bg-alien-green text-cosmic-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-pizza-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-center">
                <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
              </button>
              <a href="mailto:labirintoacustico@gmail.com" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 text-center">
                <Mail className="w-5 h-5" /> Enviar E-mail
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.tiktok.com/@labirintoacustico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/labirintoacustico/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@LabirintoAc%C3%BAstico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587062987128" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://open.spotify.com/user/313lmghjbjiyr6nqmltzbjc4k3wq?si=45f8ef1d0e9a459b" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <SpotifyIcon className="w-5 h-5" />
              </a>
              <a href="https://www.twitch.tv/labirintoacustico" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-alien-green hover:text-cosmic-bg transition-colors">
                <Twitch className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-cosmic-bg p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-alien-green"><Phone className="w-5 h-5" /></div>
                <span>(41) 98871-0303</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-alien-green"><Mail className="w-5 h-5" /></div>
                <span>labirintoacustico@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-alien-green"><Radio className="w-5 h-5" /></div>
                <span>Rádio Clube Pontagrossense - Ponta Grossa, PR</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio className="text-alien-green w-6 h-6" />
            <span className="font-bold tracking-wider text-white">LABIRINTO<span className="text-alien-green">ACÚSTICO</span></span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Labirinto Acústico. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="stars-bg"></div>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Stats />
        <About />
        <Lore />
        <RadioInfo />
        <Pitch />
      </main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
