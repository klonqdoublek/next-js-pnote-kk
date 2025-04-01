export default function CocktailCard({Drink = 'drink',Category = 'cocktail',Ingredient1 = 'alcohol',Ingredient2 = 'syrup', img ,Instructions = 'No Instruction'}) {
    return (
        <div className="shadow-md rounded-[8px] p-[16px] flex-items-center gap-[8px]">
            <div className="text-[16px] font-bold">{Drink}</div>
            <div> <img src={img ='https://coffee.alexflipnote.dev/random'} className="w-[48px] rounded-[10px] "/> </div>
            <div><span className="font-bold">Category:</span> {Category}</div>
            <div><span className="font-bold">Ingredient1:</span> {Ingredient1}</div>
            <div><span className="font-bold"> Ingredient2:</span> {Ingredient2}</div>
            <div><span className="font-bold"> Instruction:</span> {Instructions}</div>
        </div>
    )
}