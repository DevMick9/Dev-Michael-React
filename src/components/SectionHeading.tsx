interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 
      bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 
      bg-clip-text text-transparent tracking-wide">
      {title}
    </h2>
  );
}
