/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { 
  Brain, 
  Heart, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  MessageSquare,
  ChevronRight,
  Send,
  Lock,
  ThumbsUp,
  FileText,
  UserCheck,
  Settings,
  Upload,
  Image,
  RotateCcw,
  Trash2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image generated path
const PSICOLOGA_PORTRAIT = "/src/assets/images/psicologa_giovana_1780868734442.png";

// Direct Logo SVG component following the provided branding:
// A profile with a brain in light mint/teal surrounded by delicate leafy branches.
function Logo({ className = "w-12 h-12", darkText = true, customLogoSrc = null as string | null }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {customLogoSrc ? (
        <img 
          src={customLogoSrc} 
          alt="Logo Dra. Giovana Guimara" 
          className="w-12 h-12 rounded-full object-cover border border-brand-100 bg-white" 
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg 
        viewBox="0 0 120 120" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle Frame (Very subtle) */}
        <circle cx="60" cy="60" r="54" stroke="#dff2ee" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Laurel/Leaves Branches wrapping around back of the head (Left and Top) */}
        <g stroke="#7bc5bd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Main stem left side */}
          <path d="M42 94C31 82 28 58 40 40C44 34 50 28 62 25" />
          {/* Stem top side */}
          <path d="M60 25C70 24 81 27 90 32" />
          
          {/* Leaves */}
          <path d="M40 92C37 87 36 80 40 76C44 72 49 76 49 84C49 92 40 92 40 92Z" fill="#8ecdc5" fillOpacity="0.4" />
          <path d="M33 78C29 74 27 66 31 62C35 58 40 62 40 70C40 78 33 78 33 78Z" fill="#8ecdc5" fillOpacity="0.6" />
          <path d="M30 60C26 56 24 49 28 45C32 41 37 45 37 52C37 59 30 60 30 60Z" fill="#8ecdc5" fillOpacity="0.5" />
          <path d="M35 44C32 39 33 32 38 29C43 26 47 31 46 38C46 45 35 44 35 44Z" fill="#8ecdc5" fillOpacity="0.7" />
          <path d="M48 32C45 28 48 21 53 19C58 17 61 22 59 29C59 36 48 32 48 32Z" fill="#8ecdc5" fillOpacity="0.5" />
          <path d="M64 25C63 19 67 14 73 13C79 12 81 17 78 24C78 31 64 25 64 25Z" fill="#8ecdc5" fillOpacity="0.6" />
          <path d="M82 30C82 24 87 20 92 21C97 22 98 28 94 34C94 40 82 30 82 30Z" fill="#8ecdc5" fillOpacity="0.4" />
        </g>

        {/* Human Profile Facing Right */}
        <path 
          d="M58 92C58 92 56 87 56 80C56 73 54 65 50 60C46 55 49 46 56 40C62 34 76 34 81 44C83 48 83 50 85 53C87 56 89 57 89 59C89 61 87 62 86 63C85 64 84 65 84 66C84 67 85 68 85 70C85 72 82 74 81 76C80 78 78 81 78 85C78 89 74 91 71 92" 
          stroke="#7bc5bd" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Brain Motif Inside the Head Profile */}
        <path 
          d="M62 46C60 47 58 49 57 51C56 53 56 55 58 56C60 57 61 56 62 55C63 54 64 54 65 55C66 56 65 58 64 59C62 60 60 60 59 62C58 63 58 65 60 66C62 67 64 66 65 64C66 63 68 63 69 64C70 65 70 67 69 68C68 69 66 70 66 72C66 74 68 75 70 74C72 73 74 71 75 69C76 67 78 66 80 67C82 68 82 70 81 72C80 74 78 76 77 78C76 80 77 82 79 82H81C82 82 83 80 84 79" 
          stroke="#429f95" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="#dff2ee"
        />
        <path 
          d="M68 50C69 49 71 49 72 50C73 51 73 53 72 54C71 55 69 55 68 54" 
          stroke="#429f95" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M74 54C75 53 77 53 78 54C79 55 79 57 78 58C77 59 75 59 74 58" 
          stroke="#429f95" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      )}
      <div className="flex flex-col select-none">
        <span className={`font-brand font-bold text-lg md:text-xl tracking-wide leading-none ${darkText ? 'text-brand-900' : 'text-white'}`}>
          Giovana Guimara
        </span>
        <span className={`font-sans text-[10px] md:text-[11px] font-semibold tracking-wider uppercase mt-1 leading-none ${darkText ? 'text-brand-600' : 'text-brand-100'}`}>
          Psicóloga e Neuropsicóloga
        </span>
        <span className={`font-mono text-[8px] tracking-widest uppercase mt-0.5 ${darkText ? 'text-gray-400' : 'text-brand-200/80'}`}>
          CRP 12/14529
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("neuro"); // 'neuro', 'psi', 'reab'
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  
  // Estados para imagens personalizadas (Foto e Logo originais que o usuário anexou)
  const [customPortrait, setCustomPortrait] = useState<string | null>(null);
  const [customLogo, setCustomLogo] = useState<string | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Carrega mídias locais do localStorage na inicialização
  useEffect(() => {
    const savedPortrait = localStorage.getItem("psicologa_foto_personalizada");
    const savedLogo = localStorage.getItem("psicologa_logo_personalizado");
    if (savedPortrait) setCustomPortrait(savedPortrait);
    if (savedLogo) setCustomLogo(savedLogo);
  }, []);

  const handlePortraitUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCustomPortrait(base64String);
        localStorage.setItem("psicologa_foto_personalizada", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCustomLogo(base64String);
        localStorage.setItem("psicologa_logo_personalizado", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetMedia = () => {
    if (window.confirm("Deseja voltar a usar as imagens padrão?")) {
      localStorage.removeItem("psicologa_foto_personalizada");
      localStorage.removeItem("psicologa_logo_personalizado");
      setCustomPortrait(null);
      setCustomLogo(null);
    }
  };

  // Interactive Self-Assessment Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Forms state
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "Avaliação Neuropsicológica",
    periodo: "Qualquer Período",
    mensagem: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Nav items list
  const navItems = [
    { label: "Início", id: "#inicio" },
    { label: "Sobre Mim", id: "#sobre" },
    { label: "Especialidades", id: "#especialidades" },
    { label: "Triagem Cognitiva", id: "#triagem" },
    { label: "Consultório", id: "#consultorio" },
    { label: "Dúvidas", id: "#FAQ" },
  ];

  // Self-Assessment content
  const quizQuestions = [
    {
      id: 1,
      category: "Atenção & Concentração",
      question: "Com que frequência você sente que sua mente dispersa facilmente em tarefas longas ou que exige esforço contínuo?",
      options: [
        { text: "Raramente / Quase nunca", score: 1, explanation: "Foco preservado na maior parte do tempo." },
        { text: "Às vezes / Situações pontuais", score: 2, explanation: "Instabilidade leve associada a cansaço." },
        { text: "Frequentemente / Atrapalha o dia a dia", score: 3, explanation: "Dispersão crônica com potencial prejuízo." }
      ]
    },
    {
      id: 2,
      category: "Memória Recente",
      question: "Percebe pequenos lapsos de memória recente, como esquecer onde colocou pertences comuns ou conversas ocorridas no mesmo dia?",
      options: [
        { text: "Raramente / Apenas sob muito estresse", score: 1 },
        { text: "Às vezes, moderadamente", score: 2 },
        { text: "Frequentemente, gerando angústia ou atrasos", score: 3 }
      ]
    },
    {
      id: 3,
      category: "Funções Executivas",
      question: "Tem dificuldade para se organizar, planejar etapas de projetos complexos, estimar o tempo ou evitar a procrastinação extrema?",
      options: [
        { text: "Consigo me organizar bem sem grandes percalços", score: 1 },
        { text: "Organizo-me com esforço adicional ou uso de lembretes constantes", score: 2 },
        { text: "Geralmente me sinto paralisado pela desorganização ou perco prazos", score: 3 }
      ]
    },
    {
      id: 4,
      category: "Regulação Emocional",
      question: "Como o estresse diário, ansiedade elevada ou oscilações de humor impactam sua rotina profissional e seus relacionamentos?",
      options: [
        { text: "Impacto mínimo, consigo lidar de forma saudável", score: 1 },
        { text: "Impacto moderado, gerando períodos curtos de exaustão ou apatia", score: 2 },
        { text: "Impacto severo, com fobias, apatia prolongada ou crises de estresse", score: 3 }
      ]
    },
    {
      id: 5,
      category: "Fadiga Mental",
      question: "Sente esgotamento mental inexplicável ou 'névoa cerebral' (fog cognitivo) em que os pensamentos parecem lentos ou turvos?",
      options: [
        { text: "Quase nunca, acordo revigorado", score: 1 },
        { text: "Esporadicamente, principalmente no final de semanas intensas", score: 2 },
        { text: "Diariamente, com sensação de exaustão logo no início do dia", score: 3 }
      ]
    }
  ];

  const handleSelectQuizOption = (optionScore: number) => {
    setQuizAnswers(prev => ({ ...prev, [currentQuizQuestion]: optionScore }));
    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const getQuizResult = () => {
    const totalScore = (Object.values(quizAnswers) as number[]).reduce((sum, score) => sum + score, 0);
    const maxScore = quizQuestions.length * 3;
    
    if (totalScore <= 7) {
      return {
        rating: "Equilibrado",
        level: "Nível de Bem-Estar Estável",
        description: "Seus relatos sugerem que suas funções cognitivas e regulação emocional encontram-se em um padrão saudável. Pequenos lapsos de atenção ou cansaço fazem parte do comportamento biológico natural.",
        recommendation: "A Psicoterapia Clínica voltada para o autoconhecimento e otimização pessoal pode ser excelente para expandir ainda mais sua performance e bem-estar."
      };
    } else if (totalScore <= 11) {
      return {
        rating: "Moderado",
        level: "Sinais de Alerta Cognitivo ou Emocional",
        description: "Suas respostas apontam para flutuações moderadas de foco, memória ou regulação emocional. É possível que sobrecarga de trabalho, ansiedade ou estresse contínuo estejam consumindo sua energia mental.",
        recommendation: "Indicamos realizar uma consulta inicial de Psicoterapia ou Orientação Psicológica para entender a raiz do estresse e implementar rotinas protetivas à sua saúde mental."
      };
    } else {
      return {
        rating: "Atenção",
        level: "Prejuízos Cognitivos Relevantes Detectados",
        description: "Há indicativos de dificuldades frequentes em processos de atenção, planejamento, memória ou regulação do humor que parecem afetar sensivelmente sua rotina e qualidade de vida.",
        recommendation: "Recomendamos fortemente a realização de uma Avaliação Neuropsicológica Completa. Este mapeamento científico de alta precisão identificará se existem quadros clínicos subjacentes (como TDAH, Transtornos de Aprendizagem, Ansiedade Crônica ou outros) e norteará intervenções assertivas."
      };
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setCurrentQuizQuestion(0);
    setQuizCompleted(false);
    setQuizStarted(false);
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone) return;
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/psicologa.giovanaguimara@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Nome Completo": formData.nome,
        "WhatsApp / Celular": formData.telefone,
        "E-mail de Contato": formData.email || "Não informado",
        "Serviço Pretendido": formData.servico,
        "Período Preferencial": formData.periodo,
        "Mensagem / Queixas": formData.mensagem || "Formulário enviado pelo portfólio digital."
      })
    })
    .then(() => {
      setFormSubmitted(true);
    })
    .catch((err) => {
      console.error("Erro ao enviar formulário por e-mail:", err);
      // Fallback: Proceed to submitted state so the user isn't kept waiting if there's an adblocker
      setFormSubmitted(true);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  // Prepares the WhatsApp prefilled text safely
  const getWhatsAppLink = () => {
    const baseText = `Olá Dra. Giovana Guimara, gostaria de solicitar uma consulta! 🌸\n\n` +
      `*Meus Dados:*\n` +
      `- Nome: ${formData.nome}\n` +
      `- E-mail: ${formData.email || "Não informado"}\n` +
      `- Whatsapp: ${formData.telefone}\n` +
      `- Serviço: ${formData.servico}\n` +
      `- Período Preferencial: ${formData.periodo}\n` +
      `- Mensagem: ${formData.mensagem || "Gostaria de agendar."}\n\n` +
      `_Enviado através do seu Portfólio Digital_`;
    
    return `https://wa.me/5547991127699?text=${encodeURIComponent(baseText)}`;
  };

  // Track active scrolls
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-brand-50/40 min-h-screen">
      
      {/* HEADER / NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-100 py-3" 
          : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Logo className="w-11 h-11 md:w-12 md:h-12" customLogoSrc={customLogo} />
          
          {/* DESKTOP MENU ITEMS */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.id}
                className="font-medium text-sm text-brand-900/85 hover:text-brand-500 transition-colors py-1.5 border-b-2 border-transparent hover:border-brand-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="mailto:contato@giovanapsicologia.com.br"
              className="text-sm font-semibold text-brand-800 hover:text-brand-500 transition-colors"
            >
              Fale Comigo
            </a>
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-900 rounded-lg hover:bg-brand-100/50 focus:outline-none"
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-brand-100 shadow-lg overflow-hidden absolute top-full left-0 right-0"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-base text-brand-950 hover:text-brand-500 hover:bg-brand-50/50 py-2.5 px-3 rounded-lg transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-brand-100 flex flex-col gap-3 px-3">
                  <a
                    href="#agendamento"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 bg-brand-400 hover:bg-brand-500 text-white font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Realizar Pré-Agendamento</span>
                  </a>
                  <a
                    href="https://wa.me/5547991127699"
                    target="_blank"
                    className="w-full text-center py-3 border border-brand-200 text-brand-800 font-semibold rounded-xl hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-green-500" />
                    <span>WhatsApp Direto</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION / APRESENTAÇÃO */}
      <section id="inicio" className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-100/50 via-white to-brand-50/30">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-brand-200/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -translate-x-12 translate-y-12 w-[400px] h-[400px] bg-brand-50 rounded-full blur-2xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT DETAILS */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 font-semibold text-xs uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Atendimento Presencial & Online</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-brand font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-brand-950 leading-[1.12]"
              >
                Equilíbrio mental, clareza cognitiva e <span className="text-brand-500 underline decoration-brand-200 underline-offset-4 decoration-wavy">cuidado humano</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-gray-650 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Bem-vindo(a) ao espaço de cuidado e ciência de <strong className="text-brand-900 font-semibold">Dra. Giovana Guimara</strong>. 
                Especializada em compreender o cérebro e acolher emoções, realizo Avaliação Neuropsicológica integrando rigor científico e acolhimento ético.
              </motion.p>

              {/* Badges container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4"
              >
                <div className="flex items-center gap-2 bg-white border border-brand-100 shadow-sm px-3.5 py-2 rounded-xl text-sm font-medium text-brand-800">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  <span>CRP 12/14529 Ativo</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-brand-100 shadow-sm px-3.5 py-2 rounded-xl text-sm font-medium text-brand-800">
                  <BookOpen className="w-4 h-4 text-brand-400" />
                  <span>Especialidade em Neuropsicologia</span>
                </div>
              </motion.div>

              {/* Dual button actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <a
                  href="#agendamento"
                  className="inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </a>
                <a
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-200 hover:border-brand-300 text-brand-800 font-bold text-base px-8 py-3.5 rounded-full transition-all hover:bg-brand-50/50"
                >
                  <UserCheck className="w-5 h-5 text-brand-400" />
                  <span>Fazer Triagem Rápida</span>
                </a>
              </motion.div>
            </div>

            {/* RIGHT PHOTO OF PSYCHOLOGIST */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-brand-200/40 rounded-full blur-xl" />
                <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 bg-brand-300/30 rounded-2xl" />
                
                {/* Decorative Leaf-like SVG Floating */}
                <svg viewBox="0 0 100 100" className="absolute -top-12 -right-8 w-20 h-20 text-brand-200 opacity-60 hidden md:block">
                  <path d="M50 80C65 50 85 45 90 20C75 40 50 35 30 10C20 35 35 60 50 80Z" fill="currentColor" />
                  <path d="M50 80C35 50 15 45 10 20C25 40 50 35 70 10C80 35 65 60 50 80Z" fill="currentColor" className="opacity-40" />
                </svg>

                {/* Primary Border Wrapper */}
                <div className="p-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-brand-100">
                  <div className="rounded-2xl overflow-hidden shadow-inner bg-brand-50/60 aspect-square w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96">
                    <img 
                      src={customPortrait || PSICOLOGA_PORTRAIT} 
                      alt="Dra. Giovana Guimara - Psicóloga e Neuropsicóloga" 
                      className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Extra info floating badge */}
                <div className="absolute -bottom-4 left-6 right-6 bg-white border border-brand-100/80 shadow-lg px-4 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                    <Heart className="w-5 h-5 fill-brand-300" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Local de Atendimento</p>
                    <p className="text-sm font-bold text-gray-800">Centro - Itajaí</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* STRIP STATS / VALUE STATEMENTS */}
      <section className="bg-brand-900 text-white py-10 relative overflow-hidden">
        <div className="absolute top-0 opacity-10 left-5">
          <Brain className="w-24 h-24 text-brand-300" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-800">
            <div className="pt-4 md:pt-0">
              <p className="font-brand font-bold text-3xl lg:text-4xl text-brand-200">CRP 12</p>
              <p className="text-xs sm:text-sm text-brand-100 font-medium tracking-wide mt-1">Registro Ativo de Psicologia</p>
            </div>
            <div>
              <p className="font-brand font-bold text-3xl lg:text-4xl text-brand-200">100%</p>
              <p className="text-xs sm:text-sm text-brand-100 font-medium tracking-wide mt-1">Ciência baseada em Evidências</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-brand font-bold text-3xl lg:text-4xl text-brand-200">Acolhimento</p>
              <p className="text-xs sm:text-sm text-brand-100 font-medium tracking-wide mt-1">Sem julgamentos, sigilo total</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-brand font-bold text-3xl lg:text-4xl text-brand-200">Flexível</p>
              <p className="text-xs sm:text-sm text-brand-100 font-medium tracking-wide mt-1">Sessões Virtuais e Presenciais</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MIM SECTION / DRA GIOVANA */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual background style card for credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative bg-brand-50 rounded-3xl p-8 border border-brand-100/50">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center font-bold text-brand-500 border border-brand-100">
                  <Award className="w-8 h-8 text-brand-400" />
                </div>
                
                <h3 className="font-brand font-bold text-brand-900 text-xl tracking-wide mb-4 flex items-center gap-2">
                  <span>Trilhas Acadêmicas</span>
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Formação Continuada em Psicologia Clínica</p>
                      <p className="text-xs text-gray-500">Abordagem pautada em dados e neurociências aplicadas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Especialização em Neuropsicologia</p>
                      <p className="text-xs text-gray-500">Mapeamento de funções cognitivas, atenção, autismo, TDAH e demências.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Treinamento em Reabilitação Cognitiva</p>
                      <p className="text-xs text-gray-500">Estimulação e melhora de foco, memória e dores neuropsicológicas.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-gray-800">Membro da Sociedade de Neuropsicologia</p>
                      <p className="text-xs text-gray-500">Atualização contínua com as melhores práticas nacionais.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Patient quote styling */}
              <div className="bg-brand-100/30 border-l-4 border-brand-400 rounded-r-2xl p-6 italic">
                <span className="font-serif text-3xl leading-none text-brand-400 select-none block h-2">“</span>
                <p className="text-gray-650 text-sm font-serif leading-relaxed px-2">
                  "Minha maior missão como neuropsicóloga é ser uma ponte entre a pesquisa científica do cérebro e as dores da alma, guiando meus pacientes a uma rotina produtiva, pacífica e com mais clareza."
                </p>
                <span className="text-right block text-xs font-semibold tracking-wider text-brand-700 mt-2">— Giovana Guimara</span>
              </div>
            </div>

            {/* Narrative explanation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-brand-500 uppercase tracking-widest flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="w-6 h-0.5 bg-brand-400 inline-block"></span>
                  <span>A Profissional</span>
                </p>
                <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950 text-center lg:text-left">
                  Dra. Giovana Guimara
                </h2>
              </div>

              <div className="space-y-4 text-gray-650 leading-relaxed text-base">
                <p>
                  Com anos de dedicação em atendimentos especializados, atuo como 
                  <strong> Psicóloga Clínica e Neuropsicóloga</strong> na bela região de Itajaí (SC), além de oferecer suporte a pessoas de todo o Brasil via telemedicina.
                </p>
                <p>
                  Minha abordagem une a sensibilidade humana do acolhimento psicológico com a precisão científica dos instrumentos psicométricos modernos. O comportamento e os processos mentais são complexos e, muitas vezes, precisamos ir além de um olhar superficial para mapear perfeitamente a inteligência, atenção, controle inibitório, memória e traços de personalidade.
                </p>
                <p>
                  Entendo que buscar ajuda de um psicólogo pode ser um passo delicado. Por isso, organizo meu consultório para ser um oásis de tranquilidade, carinho e respeito absoluto à sua história singular.
                </p>
              </div>

              {/* Core Philosophy Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 justify-start items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Empatia e Diálogo</h4>
                    <p className="text-xs text-gray-500 mt-1">Sessões personalizadas ao seu ritmo natural de evolução.</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-start items-start">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Rigor Científico</h4>
                    <p className="text-xs text-gray-500 mt-1">Uso de metodologias e baterias de testes validadas pelo SATEPSI.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-center lg:justify-start">
                <a
                  href="#agendamento"
                  className="inline-flex items-center gap-2 text-brand-800 font-bold hover:text-brand-500 transition-colors"
                >
                  <span>Saiba mais sobre meu atendimento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALTIES / SERVIÇOS SECTIONS */}
      <section id="especialidades" className="py-20 bg-brand-50/50 border-y border-brand-100/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Serviços Clínicos</p>
            <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950">
              Especialidades de Atuação
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
              Cada mente necessita de uma modalidade de escuta ou análise específica. Oferecemos intervenções e mapeamentos especializados.
            </p>
          </div>

          {/* TAB HEADERS */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-10 border-b border-brand-100 pb-2">
            <button
              onClick={() => setActiveTab("neuro")}
              className={`px-5 py-3 rounded-t-xl font-bold text-sm sm:text-base transition-all ${
                activeTab === "neuro" 
                  ? "text-brand-700 border-b-4 border-brand-400 bg-brand-100/50" 
                  : "text-gray-500 hover:text-brand-600 hover:bg-brand-50/20"
              }`}
            >
              Avaliação Neuropsicológica
            </button>
            <button
              onClick={() => setActiveTab("psi")}
              className={`px-5 py-3 rounded-t-xl font-bold text-sm sm:text-base transition-all ${
                activeTab === "psi" 
                  ? "text-brand-700 border-b-4 border-brand-400 bg-brand-100/50" 
                  : "text-gray-500 hover:text-brand-600 hover:bg-brand-50/20"
              }`}
            >
              Psicoterapia Individual
            </button>
            <button
              onClick={() => setActiveTab("reab")}
              className={`px-5 py-3 rounded-t-xl font-bold text-sm sm:text-base transition-all ${
                activeTab === "reab" 
                  ? "text-brand-700 border-b-4 border-brand-400 bg-brand-100/50" 
                  : "text-gray-500 hover:text-brand-600 hover:bg-brand-50/20"
              }`}
            >
              Reabilitação Cognitiva
            </button>
          </div>

          {/* TAB CONTENTS */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-brand-100 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "neuro" && (
                <motion.div
                  key="neuro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-brand-600">
                      <Brain className="w-6 h-6 shrink-0" />
                      <span className="font-brand font-bold text-lg">Mapeamento e Investigação do Cérebro</span>
                    </div>
                    <h3 className="font-brand font-bold text-xl sm:text-2xl text-brand-950">
                      O que é a Avaliação Neuropsicológica?
                    </h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      A avaliação neuropsicológica é uma investigação aprofundada das funções cognitivas, emocionais e do comportamento. Por meio de entrevistas clínicas especializadas e aplicação de testes com forte respaldo científico, criamos um <strong>mapeamento detalhado da arquitetura mental</strong>.
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Ideal para o diagnóstico preciso de transtornos persistentes ou avaliação após traumatismos e sequelas neurológicas.
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="font-bold text-sm text-gray-800">Sintomas comuns para indicação:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-650">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Suspeita de TDAH ou Autismo</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Esquecimentos e Lapsos Mentais</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Dificuldade escolar ou profissional</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Danos cerebrais (pós-AVC ou TCE)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-brand-50/50 p-6 rounded-2xl border border-brand-100 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="font-bold text-brand-900 border-b border-brand-100 pb-2">Como é o processo?</h4>
                      <div className="space-y-3">
                        <div className="flex gap-2 text-sm text-gray-600">
                          <span className="font-bold text-brand-500 bg-brand-100 w-5 h-5 rounded-full flex items-center justify-center shrink-0">1</span>
                          <span>Anamnese profunda (história de vida)</span>
                        </div>
                        <div className="flex gap-2 text-sm text-gray-600">
                          <span className="font-bold text-brand-500 bg-brand-100 w-5 h-5 rounded-full flex items-center justify-center shrink-0">2</span>
                          <span>Aplicação de testes de atenção, QI e memória</span>
                        </div>
                        <div className="flex gap-2 text-sm text-gray-600">
                          <span className="font-bold text-brand-500 bg-brand-100 w-5 h-5 rounded-full flex items-center justify-center shrink-0">3</span>
                          <span>Entrega conjunta de Laudo e encaminhamento</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#agendamento"
                        className="w-full text-center py-3 bg-brand-400 hover:bg-brand-500 transition-colors text-white font-semibold rounded-xl text-sm block"
                      >
                        Saber mais sobre Avaliação
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "psi" && (
                <motion.div
                  key="psi"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-brand-600">
                      <Heart className="w-6 h-6 shrink-0" />
                      <span className="font-brand font-bold text-lg">Acolhimento Emocional Clínico</span>
                    </div>
                    <h3 className="font-brand font-bold text-xl sm:text-2xl text-brand-950">
                      Psicoterapia Individual
                    </h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      Sessões semanais que oferecem suporte clínico e analítico. Sob a base da reestruturação cognitiva e autoanálise, ajudamos você a compreender padrões disfuncionais, lidar com feridas antigas, gerenciar picos de ansiedade e construir limites emocionais saudáveis direcionados ao autocuidado.
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Sessões de 50 minutos em ambiente virtual protegido ou moderno espaço presencial com alto padrão técnico e acolhedor.
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="font-bold text-sm text-gray-800">Principais Áreas de Ajuda:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-650">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Controle da Ansiedade e Estresse</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Tratamento para Depressão</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Esgotamento Trabalho (Burnout)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Desenvolvimento de Inteligência Emocional</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-brand-50/50 p-6 rounded-2xl border border-brand-100 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="font-bold text-brand-900 border-b border-brand-100 pb-2">Como é dividida a terapia?</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        No início, alinhamos as metas terapêuticas. Depois, avaliamos semanalmente novas estratégias de ação consciente para você implementar de maneira natural no seu dia-a-dia de negócios, estudos e família.
                      </p>
                      <div className="bg-white p-3 rounded-xl border border-brand-100 text-xs text-brand-800 font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Sessões semanais com duração de 50min</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#agendamento"
                        className="w-full text-center py-3 bg-brand-400 hover:bg-brand-500 transition-colors text-white font-semibold rounded-xl text-sm block"
                      >
                        Iniciar Minha Psicoterapia
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "reab" && (
                <motion.div
                  key="reab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-brand-600">
                      <Sparkles className="w-6 h-6 shrink-0" />
                      <span className="font-brand font-bold text-lg">Habilitação e Treino Cognitivo</span>
                    </div>
                    <h3 className="font-brand font-bold text-xl sm:text-2xl text-brand-950">
                      Reabilitação Cognitiva
                    </h3>
                    <p className="text-gray-650 text-sm sm:text-base leading-relaxed">
                      A reabilitação ou estimulação cognitiva consiste em um plano estruturado para exercitar e impulsionar funções enfraquecidas ou que precisam de aperfeiçoamento. Através de exercícios mentais dinâmicos, estratégias compensatórias e técnicas adaptativas, auxiliamos o cérebro a reconquistar foco e agilidade cognitiva.
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Focado no paciente sênior, adultos autistas/TDAH ou em recuperação de eventos médicos neurológicos variados.
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="font-bold text-sm text-gray-800">A quem se destina?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-650">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Pessoas que necessitam reabilitar memória</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Adultos com déficits em funções executivas</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Idosos em prevenção de demências</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>Pós-AVC ou traumatismos cranianos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-brand-50/50 p-6 rounded-2xl border border-brand-100 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h4 className="font-bold text-brand-900 border-b border-brand-100 pb-2">Resultados práticos</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Ajudamos as pessoas a gerirem a rotina de maneira autônoma, otimizando o uso de agendas, diminuindo a sensação de impotência cognitiva e fortalecendo as conexões sinápticas cruciais.
                      </p>
                    </div>
                    <div className="mt-8">
                      <a
                        href="#agendamento"
                        className="w-full text-center py-3 bg-brand-400 hover:bg-brand-500 transition-colors text-white font-semibold rounded-xl text-sm block"
                      >
                        Saber mais sobre Reabilitação
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* INTERACTIVE SELF-ASSESSMENT DRILL / WELLNESS TRIAZEM */}
      <section id="triagem" className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-brand-850 to-brand-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-200/10 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-2">
                <span className="font-brand font-bold text-xs text-brand-200 uppercase tracking-widest bg-brand-800/80 px-3 py-1 rounded-full border border-brand-700">
                  Ferramenta de Autoconhecimento
                </span>
                <h2 className="font-brand font-bold text-2xl sm:text-3xl text-white">
                  Triagem Cognitiva & Emocional
                </h2>
                <p className="text-sm sm:text-base text-brand-100/90 max-w-xl mx-auto">
                  Dúvida sobre qual atendimento é ideal para você? Responda a este breve questionário anônimo de 5 perguntas desenvolvido para analisar indicativos de sobrecarga ou lapsos de atenção.
                </p>
              </div>

              {/* INTERACTIVE COMPONENT SWITCH STATE */}
              {!quizStarted && !quizCompleted ? (
                <div className="flex flex-col items-center pt-4">
                  <div className="p-4 bg-white/10 rounded-2xl flex items-center gap-3 border border-white/10 mb-6 text-sm max-w-md">
                    <Lock className="w-5 h-5 text-brand-300 shrink-0" />
                    <span>Lembramos que este teste não é um diagnóstico clínico formal, mas sim um norteador psicoeducativo em total sigilo.</span>
                  </div>
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="inline-flex items-center gap-2 bg-brand-300 hover:bg-brand-200 text-brand-950 font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <span>Iniciar Triagem Gratuita</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ) : null}

              {/* QUIZ ACTIVE VIEW */}
              {quizStarted && !quizCompleted ? (
                <div className="bg-brand-950/40 border border-brand-800 rounded-2xl p-6 sm:p-8 space-y-6 relative">
                  
                  {/* Progress display */}
                  <div className="flex items-center justify-between text-xs text-brand-200">
                    <span>Etapa {currentQuizQuestion + 1} de {quizQuestions.length}</span>
                    <span className="font-bold">{quizQuestions[currentQuizQuestion].category}</span>
                  </div>

                  <div className="w-full bg-brand-900 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-200 h-full transition-all duration-300" 
                      style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  {/* Question */}
                  <h3 className="font-brand font-bold text-base sm:text-lg text-white">
                    {quizQuestions[currentQuizQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {quizQuestions[currentQuizQuestion].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuizOption(opt.score)}
                        className="text-left bg-brand-900 hover:bg-brand-800 hover:border-brand-300 border border-brand-800 transition-all rounded-xl p-4 text-sm font-medium flex items-center justify-between group"
                      >
                        <span className="group-hover:text-brand-150 transition-colors">{opt.text}</span>
                        <ChevronRight className="w-4 h-4 text-brand-300 group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>

                  {/* Cancel link button */}
                  <div className="flex justify-start">
                    <button 
                      onClick={resetQuiz} 
                      className="text-xs text-brand-200/80 hover:text-white underline"
                    >
                      Cancelar triagem
                    </button>
                  </div>

                </div>
              ) : null}

              {/* QUIZ COMPLETED REAL RESULTS VIEW */}
              {quizCompleted ? (
                <div className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-inner border border-brand-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-100 pb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Seu indicativo final</p>
                      <h3 className="font-brand font-bold text-lg sm:text-xl text-brand-950 flex items-center gap-2 mt-0.5">
                        <Brain className="w-5 h-5 text-brand-500" />
                        <span>{getQuizResult().level}</span>
                      </h3>
                    </div>
                    {/* Visual Badge Indicator */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold rounded-full bg-brand-100 text-brand-800">
                      <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                      <span>{getQuizResult().rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-700">Análise dos Relatos:</p>
                    <p className="text-sm text-gray-650 leading-relaxed bg-brand-50/50 p-4 rounded-xl border border-brand-100/60">
                      {getQuizResult().description}
                    </p>
                  </div>

                  <div className="space-y-2 border-l-4 border-brand-300 pl-4 py-1">
                    <p className="text-xs font-bold text-brand-800 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                      <span>Recomendação Educativa</span>
                    </p>
                    <p className="text-sm font-medium text-gray-700">
                      {getQuizResult().recommendation}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-brand-100">
                    <button
                      onClick={() => {
                        // Prefills consult request with quiz insights
                        const insight = getQuizResult().level;
                        setFormData(prev => ({
                          ...prev,
                          servico: insight.includes("Prejuízos") ? "Avaliação Neuropsicológica" : "Psicoterapia Individual",
                          mensagem: `Olá Dra. Giovana! Fiz a triagem no seu site e recebi o resultado de "${insight}". Gostaria de agendar uma consulta inicial.`
                        }));
                        window.location.hash = "#agendamento";
                      }}
                      className="flex-1 text-center py-3.5 bg-brand-400 hover:bg-brand-500 transition-all text-white font-bold rounded-xl text-sm shadow-md"
                    >
                      Solicitar Consulta com esses Dados
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="px-5 py-3.5 border border-brand-200 hover:border-brand-300 text-gray-500 font-semibold rounded-xl text-sm transition-colors"
                    >
                      Refazer Triagem
                    </button>
                  </div>
                </div>
              ) : null}

            </div>

          </div>
        </div>
      </section>

      {/* CLINIC ROOM & VISUAL / MODELO DE ATENDIMENTO COM LOCALIZAÇÃO */}
      <section id="consultorio" className="py-20 bg-brand-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Atendimento Acolhedor</p>
                <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950">
                  Espaço Físico & Atendimento Online
                </h2>
                <p className="text-sm sm:text-base text-gray-500">
                  Facilitamos seu acesso à saúde mental e neuropsicologia no formato que melhor se adapta à sua comodidade.
                </p>
              </div>

              {/* Grid styles for cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-650 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-950 text-base">Presencial em Itajaí</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Consultório moderno, climatizado e preparado para o maior sigilo acústico. Situado no coração do Centro de Itajaí, no Edifício Manhattan.
                  </p>
                  <p className="text-xs font-bold text-brand-600">
                    Rua Uruguai, 223 - Sala 1107, Edifício Manhattan, Centro
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-650 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-bold text-brand-950 text-base">Atendimento Online Seguros</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Consultas via videochamada criptografada utilizando ferramentas que atendem às resoluções do conselho (CFP). Ideal para quem viaja ou reside noutras capitais.
                  </p>
                  <p className="text-xs font-bold text-brand-600">
                    Segurança de dados padrão HIPAA
                  </p>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-brand-100/40 border border-brand-200 text-xs sm:text-sm text-brand-850 flex items-start gap-2.5">
                <Clock className="w-5 h-5 shrink-0 mt-0.5 text-brand-600" />
                <div>
                  <p className="font-bold">Horário de Operação:</p>
                  <p className="mt-0.5">Segunda a Sexta-feira: 08h às 20h. Consultas exclusivamente agendadas com antecedência.</p>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Map Rendering */}
            <div className="lg:col-span-5 bg-white p-4 rounded-3xl shadow-sm border border-brand-100 space-y-4">
              <div className="bg-brand-50 w-full rounded-2xl overflow-hidden border border-brand-100/50 flex flex-col justify-center items-center relative aspect-video sm:aspect-square">
                
                {/* Visual map graphics represented via clean CSS and icons */}
                <div className="absolute inset-0 bg-brand-100/20 opacity-80" />
                <div className="absolute inset-x-0 top-1/2 h-4 sm:h-6 bg-brand-200/40 -translate-y-1/2 transform skew-y-3 shadow-inner" />
                <div className="absolute inset-y-0 left-1/3 w-4 sm:w-6 bg-brand-200/40 transform -skew-x-3 shadow-inner" />
                <div className="absolute top-[28%] inset-x-0 h-1 bg-white opacity-40" />
                <div className="absolute left-[54%] inset-y-0 w-1 bg-white opacity-40" />
                
                {/* Nearby landmarks mock tags */}
                <div className="absolute top-8 left-12 bg-white/90 border border-brand-100 rounded-full px-2.5 py-0.5 text-[9px] font-semibold text-gray-505 shadow">
                  Rua Uruguai (Centro)
                </div>
                <div className="absolute bottom-12 right-12 bg-white/90 border border-brand-100 rounded-full px-2.5 py-0.5 text-[9px] font-semibold text-gray-505 shadow">
                  Prefeitura / Itajaí Shopping
                </div>

                {/* Primary pinpoint on map */}
                <motion.div 
                  initial={{ scale: 0.9, y: 3 }}
                  animate={{ scale: [0.95, 1.05, 0.95], y: [2, -4, 2] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="z-10 bg-white border-2 border-brand-400 p-2.5 rounded-full shadow-lg flex items-center justify-center relative cursor-help"
                >
                  <MapPin className="w-6 h-6 text-brand-500 fill-brand-100" />
                  <div className="absolute -top-1 right-0 w-3.5 h-3.5 bg-brand-400 rounded-full animate-ping" />
                </motion.div>

                {/* Pin detail overlay */}
                <div className="absolute bottom-4 inset-x-4 bg-white/95 border border-brand-150 p-2.5 rounded-xl shadow text-center text-xs">
                  <p className="font-bold text-gray-800">Dra. Giovana Guimara - Clínica</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Rua Uruguai, 223 / Sala 1107 - Edifício Manhattan</p>
                </div>
                
              </div>
              <div className="flex items-center justify-between px-2 text-xs">
                <span className="text-gray-500 font-semibold">Itajaí / SC</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Abrir no Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ETHICAL TESTIMONIALS / CLIENT STORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Transformações</p>
            <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950">
              Relatos e Histórias de Superação
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Testemunhos fictícios baseados em casos anônimos reais de sucesso terapêutico clínico, preservando o sigilo exigido éticamente pelo CFP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-brand-50/40 p-8 rounded-3xl border border-brand-100/60 relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-brand-650 bg-brand-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Avaliação Neuropsicológica
                </span>
                <p className="text-sm sm:text-base text-gray-650 italic font-serif leading-relaxed pt-2">
                  "Sempre convivi com a sensação de preguiça e desorganização crônica. A avaliação neuropsicológica com a Dra. Giovana me deu a resposta técnica para o TDAH que ninguém via. Um diagnóstico totalmente libertador."
                </p>
              </div>
              <div className="pt-6 border-t border-brand-100 mt-6 flex justify-between items-center text-xs">
                <span className="font-bold text-gray-800">C. M. S., 29 anos</span>
                <span className="text-gray-450 uppercase">Engenheiro</span>
              </div>
            </div>

            <div className="bg-brand-50/40 p-8 rounded-3xl border border-brand-100/60 relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-brand-650 bg-brand-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Tratamento de Ansiedade
                </span>
                <p className="text-sm sm:text-base text-gray-650 italic font-serif leading-relaxed pt-2">
                  "As crises de pânico me impediam de dirigir e crescer na carreira. No consultório dela encontrei a segurança física para falar e as rotinas cognitivo-comportamentais me ajudaram a reconquistar o asfalto e a mim mesma."
                </p>
              </div>
              <div className="pt-6 border-t border-brand-100 mt-6 flex justify-between items-center text-xs">
                <span className="font-bold text-gray-800">A. K. G., 34 anos</span>
                <span className="text-gray-450 uppercase">Arquiteta</span>
              </div>
            </div>

            <div className="bg-brand-50/40 p-8 rounded-3xl border border-brand-100/60 relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[11px] font-bold text-brand-650 bg-brand-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Déficits de Atenção Sênior
                </span>
                <p className="text-sm sm:text-base text-gray-650 italic font-serif leading-relaxed pt-2">
                  "Após sofrer pequenas isquemias cerebrais esquecia o nome dos netos. Iniciamos as sessões sistemáticas de exercitação e plasticidade cognitiva e hoje sinto-me lúcido, ativo e voltando a ler meus romances favoritos."
                </p>
              </div>
              <div className="pt-6 border-t border-brand-100 mt-6 flex justify-between items-center text-xs">
                <span className="font-bold text-gray-800">J. P. Q., 71 anos</span>
                <span className="text-gray-450 uppercase">Aposentado</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DÚVIDAS FREQUENTES / FAQ ACCORDIONS */}
      <section id="FAQ" className="py-20 bg-brand-50/40 border-t border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Informações Úteis</p>
            <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950">
              Dúvidas Frequentes
            </h2>
            <p className="text-sm text-gray-500">
              Separamos as dúvidas mais frequentes trazidas pelos pacientes no primeiro contato.
            </p>
          </div>

          <div className="space-y-4">
            
            {[
              {
                q: "Como sei se preciso de uma Avaliação Neuropsicológica ou Psicoterapia?",
                a: "A Avaliação Neuropsicológica é uma investigação concentrada (geralmente com 4 a 6 sessões de testagem reguladas) para diagnosticar dores intelectuais estruturais, como TDAH, Transtorno do Espectro Autista ou declínios de memória associados à idade. A Psicoterapia consiste num processo semanal contínuo e sem limite pré-definido, focado na regulação de emoções comuns à depressão, estresses no trabalho e conflitos relacionais."
              },
              {
                q: "A Dra. Giovana atende convênios médicos / planos de saúde?",
                a: "Os serviços de laudos e terapias são estruturados de forma particular de modo a garantir o maior tempo de dedicação exclusiva a cada prontuário. No entanto, fornecemos Recibo Clínico e Laudo Detalhado completos para os pacientes solicitarem reembolso aos seus planos de saúde parceiros (como Bradesco Saúde, SulAmérica, Unimed, Amil, etc), reavendo parcial ou totalmente o valor investido."
              },
              {
                q: "Quantos anos tem de validade a minha escala final de laudo neuropsicológico?",
                a: "Para adultos, os laudos de triagem e mapeamento cognitivo têm excelente durabilidade e servem como farta documentação jurídica para concursos ou aquisição de direitos sociais (Autismo). Recomenda-se realizar revisões após intercorrências cerebrais severas ou a cada 3 a 5 anos para idosos com doenças degenerativas."
              },
              {
                q: "Como posso iniciar o processo de reabilitação se já tenho um laudo externo?",
                a: "Você pode agendar uma anamnese inicial portando seu laudo emitido por outro profissional ou médico neurologista/psiquiatra. Baseados naqueles déficits relatados, planejaremos etapas com exercícios que estimulam as redes afetadas."
              },
              {
                q: "É possível agendar consultas aos finais de semana?",
                a: "Por questões de saúde laboral, os horários clínicos ocorrem predominantemente em dias úteis no período diurno e noturno (até 20h). Casos atípicos de avaliações emergenciais urgentes podem ser submetidos à análise direta via formulário de contato."
              }
            ].map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-brand-100 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-bold text-sm sm:text-base text-brand-950 flex justify-between items-center gap-3 transition-colors hover:bg-brand-50/20"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-650 leading-relaxed border-t border-brand-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* RESERVATIONS & CLINICAL INTEREST SCHEDULE CONTROLLER */}
      <section id="agendamento" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            
            {/* Left side explanatory block */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-xs font-bold text-brand-500 uppercase tracking-widest">Inicie o Cuidado</p>
                <h2 className="font-brand font-bold text-2xl sm:text-3xl text-brand-950">
                  Agende sua Primeira Consulta
                </h2>
                <p className="text-sm sm:text-base text-gray-500">
                  Preencha o formulário eletrônico ao lado para que possamos traçar o seu interesse clínico e retornar o contato em até 4 horas úteis.
                </p>
              </div>

              {/* Steps overview */}
              <div className="space-y-4 pt-4">
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-brand-100 rounded-xl flex items-center justify-center font-bold text-brand-650">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">1. Preenchimento de Dados</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Defina se precisa de atendimento presencial, laudo ou psicoterapia regular.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-brand-100 rounded-xl flex items-center justify-center font-bold text-brand-650">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">2. Contato de Confirmação</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Dra. Giovana ou sua assessora retornarão oferecendo opções de datas livres.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-brand-100 rounded-xl flex items-center justify-center font-bold text-brand-650">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">3. Consulta de Acolhimento</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Sua primeira sessão para alinhamento profissional e estabelecimento de rapport de confiança.</p>
                  </div>
                </div>

              </div>

              {/* Safety notice in sidebar */}
              <div className="pt-6 border-t border-brand-100/60 text-xs text-gray-400 space-y-2">
                <p className="flex items-center gap-1">
                  <Lock className="w-4 h-4 shrink-0 text-brand-400" />
                  <span>Criptografia de dados de ponta-a-ponta.</span>
                </p>
                <p>Nenhuma informação deste formulário é transmitida publicamente ou coletada para fins publicitários corporativos.</p>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-50/50 p-6 sm:p-10 rounded-3xl border border-brand-100/80">
                
                {/* Form state handling */}
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nome" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          placeholder="Ex: João da Silva"
                          value={formData.nome}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefone" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          placeholder="Ex: (47) 99112-7699"
                          value={formData.telefone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                        E-mail de Contato (Opcional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ex: joao@email.com"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="servico" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                          Serviço Desejado
                        </label>
                        <select
                          id="servico"
                          name="servico"
                          value={formData.servico}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm"
                        >
                          <option>Avaliação Neuropsicológica</option>
                          <option>Psicoterapia Individual</option>
                          <option>Reabilitação Cognitiva</option>
                          <option>Outros / Indeciso</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="periodo" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                          Período de Preferência
                        </label>
                        <select
                          id="periodo"
                          name="periodo"
                          value={formData.periodo}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm"
                        >
                          <option>Qualquer Período</option>
                          <option>Manhã (08h às 12h)</option>
                          <option>Tarde (13h às 18h)</option>
                          <option>Noite (18h às 20h)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="block text-xs font-bold text-gray-650 uppercase tracking-wider mb-1">
                        Detalhes adicionais ou sua queixa (Opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        placeholder="Fique à vontade para relatar um pouco do que sente de forma resumida..."
                        value={formData.mensagem}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-brand-200 rounded-xl bg-white focus:ring-2 focus:ring-brand-300 focus:outline-none transition-all text-sm resize-none"
                      />
                    </div>

                     <button
                       type="submit"
                       disabled={isSubmitting}
                       className={`w-full inline-flex items-center justify-center gap-2 transition-colors text-white font-bold py-3.5 px-6 rounded-xl shadow-md text-base cursor-pointer ${
                         isSubmitting ? "bg-brand-300 cursor-not-allowed" : "bg-brand-400 hover:bg-brand-500"
                       }`}
                     >
                       {isSubmitting ? (
                         <>
                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                           <span>Enviando...</span>
                         </>
                       ) : (
                         <>
                           <Send className="w-4 h-4" />
                           <span>Enviar Solicitação por Formulário</span>
                         </>
                       )}
                     </button>

                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow border border-brand-100"
                  >
                    <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <ThumbsUp className="w-8 h-8 text-brand-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-brand font-bold text-xl text-brand-950">Agendamento Pré-Solicitado!</h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
                        Seus dados foram integrados com sucesso. Para acelerar seu atendimento e conversar diretamente com nossa recepção por canal expresso, clique no botão do WhatsApp abaixo:
                      </p>
                    </div>

                    <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-left text-xs sm:text-sm space-y-1 max-w-sm mx-auto">
                      <p><strong>Paciente:</strong> {formData.nome}</p>
                      <p><strong>Serviço solicitado:</strong> {formData.servico}</p>
                      <p><strong>Janela de horário:</strong> {formData.periodo}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-3.5 rounded-xl shadow text-sm"
                      >
                        <Phone className="w-4 h-4 fill-white" />
                        <span>Abrir Conversa do WhatsApp</span>
                      </a>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            nome: "",
                            telefone: "",
                            email: "",
                            servico: "Avaliação Neuropsicológica",
                            periodo: "Qualquer Período",
                            mensagem: ""
                          });
                        }}
                        className="px-5 py-3.5 border border-brand-200 hover:border-brand-300 text-gray-500 font-semibold rounded-xl text-xs transition-colors"
                      >
                        Novo Agendamento
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER & DIRECTORY REGISTRATION COUNCIL INFO */}
      <footer className="bg-brand-900 text-brand-100 pt-16 pb-8 border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-800 items-start">
            
            <div className="md:col-span-5 space-y-3">
              <Logo darkText={false} className="w-10 h-10" customLogoSrc={customLogo} />
              <p className="text-xs sm:text-sm text-brand-200/90 leading-relaxed max-w-md pt-2">
                Dra. Giovana Guimara fornece cuidados clínicos robustos em neuropsicologia, testes de déficit de foco, avaliação para concursos públicos, autismo e reabilitação cognitiva com sensibilidade ética.
              </p>
              <div className="pt-2 flex gap-4 text-xs font-mono text-brand-300">
                <span>CRP 12/14529</span>
                <span>•</span>
                <span>COFIP / SATEPSI Ativos</span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="font-brand font-bold text-white text-sm tracking-wider uppercase">Menu</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-200">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.id} className="hover:text-white transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h4 className="font-brand font-bold text-white text-sm tracking-wider uppercase">Informações de Contato</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-200">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-300" />
                  <span>(47) 99112-7699 (WhatsApp Recepção)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-300" />
                  <span>contato@giovanapsicologia.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                  <span>Rua Uruguai, 223 - Sala 1107, Edifício Manhattan - Centro, Itajaí - SC</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-300/80">
            <p>
              &copy; {new Date().getFullYear()} Dra. Giovana Guimara - Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <span>Laudos Éticos CFP</span>
              <span>•</span>
              <a href="#FAQ" className="hover:underline hover:text-white transition-colors">Termos de Reembolso do Convênio</a>
            </div>
          </div>

        </div>
      </footer>

      {/* PAINEL DE AJUSTE DE IMAGENS ORIGINAIS (FLUTUANTE) */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCustomizerOpen(!isCustomizerOpen)}
          className="bg-brand-600 hover:bg-brand-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-brand-500"
          title="Personalizar Imagens com seus Arquivos Originais"
        >
          <Settings className={`w-6 h-6 ${isCustomizerOpen ? 'rotate-90' : ''} transition-transform duration-500`} />
        </motion.button>

        <AnimatePresence>
          {isCustomizerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white border border-brand-100 rounded-3xl shadow-2xl p-6 overflow-hidden z-50 font-sans"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-brand-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-brand-600" />
                  <h3 className="font-brand font-bold text-gray-950 text-base">Portfólio Personalizável</h3>
                </div>
                <button
                  onClick={() => setIsCustomizerOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-650"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Insira abaixo a <strong>sua foto original</strong> e o seu <strong>logotipo</strong> enviados no chat para vê-los aplicados no site perfeitamente! Os arquivos ficarão guardados com segurança no seu navegador.
              </p>

              {/* Upload 1: Portrait */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-bold text-gray-750 flex items-center gap-1.5">
                  <Image className="w-3.5 h-3.5 text-brand-500" />
                  <span>Foto de Perfil (Psicóloga)</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                    {customPortrait ? (
                      <img src={customPortrait} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <img src={PSICOLOGA_PORTRAIT} alt="Default" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    )}
                  </div>
                  <label className="flex-1 border border-dashed border-brand-200 hover:border-brand-400 rounded-xl px-3 py-2 bg-brand-50/20 text-center cursor-pointer transition-colors">
                    <span className="text-xs text-brand-600 font-semibold flex items-center justify-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      Escolher foto original
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePortraitUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Upload 2: Logo */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-bold text-gray-755 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-brand-500" />
                  <span>Logotipo Original</span>
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100 p-1">
                    {customLogo ? (
                      <img src={customLogo} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="text-[10px] text-brand-600 font-semibold">Vetor</span>
                    )}
                  </div>
                  <label className="flex-1 border border-dashed border-brand-200 hover:border-brand-400 rounded-xl px-3 py-2 bg-brand-50/20 text-center cursor-pointer transition-colors">
                    <span className="text-xs text-brand-600 font-semibold flex items-center justify-center gap-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      Escolher logo original
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Reset Control */}
              <div className="flex gap-2 border-t border-brand-100 pt-4">
                {(customPortrait || customLogo) && (
                  <button
                    onClick={handleResetMedia}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 border border-red-200 hover:bg-red-50 text-red-600 text-xs font-semibold py-2 px-3 rounded-xl transition-all cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Resetar Padrão
                  </button>
                )}
                <button
                  onClick={() => setIsCustomizerOpen(false)}
                  className="flex-1 bg-brand-400 hover:bg-brand-500 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors text-center cursor-pointer font-bold"
                >
                  Confirmar Ajustes
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTAO FLUTUANTE DO WHATSAPP (LADO DIREITO) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          href="https://wa.me/5547991127699"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA56] text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-[#1cb04f] group"
          title="Falar no WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3.15 5.362.151 5.494 0 9.966-4.471 9.97-9.963.003-2.661-1.031-5.163-2.91-7.045C17.21 .41 14.71-.622 12.007-.621c-5.493 0-9.961 4.471-9.965 9.962 0 2.072.541 4.098 1.568 5.795L2.623 21.05l6.024-1.896zm9.293-6.83c-.279-.139-1.647-.812-1.9-.904-.253-.093-.437-.139-.619.139-.181.278-.702.883-.86 1.066-.158.183-.317.206-.596.066-.28-.139-1.18-.435-2.247-1.387-.83-.739-1.389-1.651-1.552-1.93-.163-.278-.017-.429.122-.568.126-.125.279-.327.42-.491.14-.163.187-.278.28-.464.093-.186.047-.348-.023-.487-.07-.139-.619-1.493-.848-2.046-.224-.537-.451-.462-.619-.47-.163-.008-.35-.011-.538-.011-.188 0-.494.07-.753.353-.259.283-1.011.988-1.011 2.41 0 1.42 1.033 2.794 1.174 2.98.14.187 2.032 3.102 4.921 4.35.688.297 1.224.474 1.644.607.691.22 1.32.19 1.817.115.553-.083 1.647-.674 1.882-1.325.235-.652.235-1.21.164-1.325-.07-.115-.259-.187-.538-.327z"/>
          </svg>
          <span className="absolute right-16 bg-brand-950 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 scale-90 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-brand-800">
            Falar pelo WhatsApp
          </span>
        </motion.a>
      </div>

    </div>
  );
}
