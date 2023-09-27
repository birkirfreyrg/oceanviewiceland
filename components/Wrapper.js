export default function Wrapper({ children }) {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-0">
      <div>{children}</div>
    </div>
  );
}
