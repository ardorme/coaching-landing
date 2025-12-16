import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, Star, Menu, X } from 'lucide-react';

const CoachingLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Coach
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#programs" className="hover:text-blue-400 transition">프로그램</a>
            <a href="#about" className="hover:text-blue-400 transition">소개</a>
            <a href="#reviews" className="hover:text-blue-400 transition">후기</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">
              상담 신청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md px-6 py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              <a href="#programs" className="hover:text-blue-400 transition">프로그램</a>
              <a href="#about" className="hover:text-blue-400 transition">소개</a>
              <a href="#reviews" className="hover:text-blue-400 transition">후기</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full w-full">
                상담 신청
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            당신의 잠재력을<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              깨우는 여정
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            1:1 맞춤형 코칭으로 당신의 목표를 현실로 만듭니다
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition"
          >
            무료 상담 시작하기
            <ArrowRight size={20} />
          </motion.button>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              프로그램
            </h2>
            <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto">
              당신에게 맞는 최적의 코칭 프로그램을 선택하세요
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: "목표 설정 코칭",
                description: "명확한 목표 설정과 실행 계획을 통해 당신의 비전을 현실로 만듭니다.",
                features: ["1:1 맞춤 코칭", "주간 피드백", "실행 플랜 제공"]
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "리더십 코칭",
                description: "효과적인 리더십 스킬과 팀 관리 능력을 개발합니다.",
                features: ["리더십 진단", "실전 케이스", "지속 관리"]
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "커리어 코칭",
                description: "커리어 전환과 성장을 위한 전략적 접근을 제공합니다.",
                features: ["커리어 분석", "이력서 컨설팅", "면접 준비"]
              }
            ].map((program, i) => (
              <FadeInSection key={i} delay={i * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-400 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl">
                      👤
                    </div>
                    <h3 className="text-2xl font-bold">김코치</h3>
                    <p className="text-blue-400">전문 코칭 전문가</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                10년 경력의<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  전문 코치
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                수백 명의 고객과 함께 성장하며 쌓은 경험과 노하우로 
                당신의 성공을 돕겠습니다.
              </p>
              <div className="space-y-4">
                {[
                  "국제 코칭 연맹 (ICF) 인증 코치",
                  "500+ 코칭 세션 진행",
                  "주요 기업 임원 코칭 경력",
                  "저서: '변화를 만드는 코칭의 힘'"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              고객 후기
            </h2>
            <p className="text-xl text-gray-400 text-center mb-20">
              실제 고객들의 생생한 변화 스토리
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "박지현",
                role: "IT 기업 팀장",
                text: "코칭을 통해 리더십 스타일을 완전히 바꿨습니다. 팀원들과의 관계도 개선되고 성과도 2배 이상 향상되었어요.",
                rating: 5
              },
              {
                name: "이민수",
                role: "스타트업 대표",
                text: "막막했던 커리어 전환 과정에서 명확한 방향을 찾았습니다. 지금은 제가 원하던 일을 하며 행복합니다.",
                rating: 5
              },
              {
                name: "최수진",
                role: "프리랜서 디자이너",
                text: "목표 설정 코칭 덕분에 1년 안에 수입이 3배 증가했어요. 체계적인 실행 플랜이 정말 효과적이었습니다.",
                rating: 5
              }
            ].map((review, i) => (
              <FadeInSection key={i} delay={i * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-400">{review.role}</div>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <FadeInSection>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              지금 시작하세요
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              첫 상담은 무료입니다. 당신의 목표와 고민을 들려주세요.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-5 rounded-full text-xl font-semibold inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-500/50 transition"
            >
              무료 상담 신청하기
              <ArrowRight size={24} />
            </motion.button>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="mb-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Coach
          </div>
          <p className="mb-4">© 2024 Coach. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Fade In Section Component
const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default CoachingLanding;