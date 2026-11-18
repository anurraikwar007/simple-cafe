
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <span className="section-label">{eyebrow}</span>
      )}

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
