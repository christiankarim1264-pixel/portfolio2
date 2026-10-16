type PostCardProps = {
    textContent: string;
    imgSrc: string;
    avatarSrc: string;
    author: string;
    date: string;
    numLikes: number;
    numComments: number;
    numShares:number;
}

export default function PostCard2({ textContent, imgSrc, avatarSrc, author, date, numLikes, numComments, numShares} : PostCardProps){
    return(
        <div className='bg-[#252728] text-[#e2e5e9]'>
            {/* post header */}
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div>

                        </div>
                        <div>
                            {/* svgs */}

                        </div>
                    </div>
                    <div>{textContent}</div>
                </div>
            </div>
            {/* optional image */}
            {imgSrc && (
            <div>
                <img src={imgSrc} width={600} height={400}/>
            </div>
            )}

            {/* likes comments shares */}
            <div>
                {/* likes */}
                <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox="0 0 24 24"
                strokeWidth={1.3}
                stroke='currentColor'
                className='size-5'
                />
                {/* comments */}
                {/* reposts */}
            </div>
        </div>
    );
}