
import MenuBar from '../../components/MenuBar';

export default function About() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600">About Me</h1>
        <p className="mt-4 text-lg text-gray-700">I am Khaoklong</p>
      </main>
    </>
  );
}

