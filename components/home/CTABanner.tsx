import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          Potrzebujesz profesjonalnych tynków?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Skontaktuj się z nami — wycena i dojazd gratis!
        </p>

        {/* {TELEFON} - uzupełnić numer telefonu */}
        <p className="text-accent-light font-heading font-bold text-2xl md:text-3xl mb-8">
          <a href="tel:+48XXXXXXXXX" className="hover:text-accent transition-colors">
            +48 XXX XXX XXX
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="tel:+48XXXXXXXXX" variant="primary">
            Zadzwoń teraz
          </Button>
          <Button href="/kontakt" variant="outlined-white">
            Wyślij zapytanie
          </Button>
        </div>
      </div>
    </section>
  );
}
