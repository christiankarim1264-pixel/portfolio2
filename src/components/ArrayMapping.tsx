export default function ArrayMapping(){
    const nums = [11,22,33,44,55,66];
    const winners = [
        {
            firstName: 'john',
            lastName:'smith'
        },
        {
            firstName: 'harry',
            lastName:'luo'
        },
        {
            firstName: 'sai',
            lastName:'michael'
        }
    ]

    return(
        <>
        <h2>Winning Lottery Numbers</h2>
        <div className='flex gap-x-4 font-bold text-green-900'>
            {/* <span className='hover:text-green-600 underline'>11</span>
            <span className='hover:text-green-600 underline'>22</span>
            <span className='hover:text-green-600 underline'>33</span>
            <span className='hover:text-green-600 underline'>44</span>
            <span className='hover:text-green-600 underline'>55</span>
            <span className='hover:text-green-600 underline'>66</span> */}
            {
            nums.map((num) => <span className='hover:text-green-600 underline size-6 hover:bg-slate-400 rounded-full'>{num}</span>)
            }
        </div>
        <h2>Past Lottery Winners</h2>
        <div>
            {winners.map(
                (winner) => <p>{winner.firstName} {winner.lastName}</p>
            )}
        </div>
        </>
    );
}