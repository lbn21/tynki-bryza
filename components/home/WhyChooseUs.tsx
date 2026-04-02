'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Dlaczego my?"
          subtitle="Nie najtańsi, ale jedni z najlepszych"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatedCounter end={15} suffix="+" label="Lat doświadczenia" />
          <AnimatedCounter end={9} label="Lat na rynku" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="font-heading font-bold text-4xl md:text-5xl text-accent mb-2">
              Gratis
            </div>
            <div className="text-text-light font-medium">Wycena i dojazd</div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-text-light max-w-2xl mx-auto leading-relaxed"
        >
          Stawiamy na jakość, terminowość i profesjonalne podejście
          do każdego zlecenia. Działamy na terenie województwa
          kujawsko-pomorskiego oraz części województwa wielkopolskiego.
          Każde zlecenie traktujemy indywidualnie, dbając o najwyższą
          jakość wykonania.
        </motion.p>
      </div>
    </section>
  );
}
