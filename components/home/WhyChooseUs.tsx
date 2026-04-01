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
          subtitle="Nie najta\u0144si, ale jedni z najlepszych"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatedCounter end={15} suffix="+" label="Lat do\u015bwiadczenia" />
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
          Stawiamy na jako\u015b\u0107, terminowo\u015b\u0107 i profesjonalne podej\u015bcie
          do ka\u017cdego zlecenia. Dzia\u0142amy na terenie wojew\u00f3dztwa
          kujawsko-pomorskiego oraz cz\u0119\u015bci wojew\u00f3dztwa wielkopolskiego.
          Ka\u017cde zlecenie traktujemy indywidualnie, dbaj\u0105c o najwy\u017csz\u0105
          jako\u015b\u0107 wykonania.
        </motion.p>
      </div>
    </section>
  );
}
