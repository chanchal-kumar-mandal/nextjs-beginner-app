import Image from 'next/image';

export default function ImageOptimization() {
  return (
    <div>
      <h1>Next.js Image Optimization</h1>
      <p>This page demonstrates optimized image loading with Next.js.</p>
      <Image src="/nextjs.png" alt="Optimized Image" width={400} height={300} priority />
    </div>
  );
}