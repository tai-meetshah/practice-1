
import { ReactNode } from 'react';

export default function LemonLayout({ children }: { children: ReactNode }) {
    return (
      <div>
        <h2 text-4xl text-green-800 bg-amber-100 inline-block>Inner layout</h2>
        {children}
      </div>
    );
  }
