import Image from 'next/image';
import myImage from '../public/nextjs.png'; // Place nextjs.png in the public folder

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is the home page.</p>
      <Image src={myImage} alt="Next.js Logo" width={200} height={200} />
    </div>
  );
}