import { useEffect } from 'react';

interface ErrorComponentProps {
  error?: Partial<Error & { digest?: string }>;
  reset: () => void;
}

export default function ErrorComponent({ error = {}, reset }: ErrorComponentProps) {
  const { digest } = error;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again!</button>
      {digest && <p>Digest: {digest}</p>}
    </div>
  );
}