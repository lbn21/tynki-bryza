interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-light text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 bg-accent rounded-full ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
