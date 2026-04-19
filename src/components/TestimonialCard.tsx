type Props = {
  text: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ text, name, role }: Props) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
      <div className="testimonial-quote-mark">&ldquo;</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-role">{role}</span>
      </div>
    </article>
  );
}
