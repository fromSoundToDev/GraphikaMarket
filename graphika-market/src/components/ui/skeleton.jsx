
function Skeleton(props) {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${props.className || ""}`}
      {...props}
    />
  );
}

export { Skeleton };
