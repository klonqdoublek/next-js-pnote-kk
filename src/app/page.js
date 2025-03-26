
import DogCard from '../components/DogCard';

export default async function Home() {
  const response = await fetch("https://dogapi.dog/api/v2/breeds")
  const resJson = await response.json()
  const dogs = resJson.data

console.log(dogs)


  return (
    <>
  
      {/* Dog Cards Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Dog Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogs.map(dog => (
            <DogCard 
              key={dog.id}
              name={dog.attributes.name} 
              description={dog.attributes.description} 
            />
          ))}
        </div>
      </div>

    </>
  );
}