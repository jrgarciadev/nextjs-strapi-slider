function ArrowRight({ width, height, ...props }: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={width || 15.8} height={height || 6.8} viewBox="0 0 15.8 6.8" {...props}>
      <path d="M11.6 0l-.7.8 2.7 2.1H0v1h13.6L10.9 6l.7.8 4.2-3.4z" />
    </svg>
  );
}

export default ArrowRight;
