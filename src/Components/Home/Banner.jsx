import { useFirebaseContext } from "react-firebase-auth-hook/FirebaseContext";

const Banner = () => {
    const { user, loading } = useFirebaseContext();
    console.log(loading);
    const data = [
        {
            name: '',
            imgUrl: 'https://i.ibb.co/nL65gWD/image.png'
        },
        {
            name: 'Iron-Man',
            imgUrl: 'https://i.ibb.co/VmyhdHn/image.png'
        },
        {
            name: 'Captain America',
            imgUrl: 'https://i.ibb.co/Kw3zLzj/image.png'
        },
        {
            name: 'Thor',
            imgUrl: 'https://i.ibb.co/Y8vR5SD/image.png'
        },
        {
            name: 'Doctor Strange',
            imgUrl: 'https://i.ibb.co/j6kbpp3/image.png'
        },
    ]
    return (
        <>
            <div className="2xl:container mx-auto">

                <div className="carousel w-full h-[680px]">
                    {
                        data.map((item, index) => <div
                            key={item.name}
                            id={`slide-${index}`}
                            className="carousel-item relative w-full">

                            {/* image  */}
                            <img src={item.imgUrl} className="w-full" />
                            {/* caption  */}
                            <div className="absolute w-full bottom-[80px] flex justify-center items-end">
                                <h1 className="text-5xl font-bold bg-red-600 p-1 text-white">{item.name.toUpperCase()}</h1>

                            </div>
                        </div>)
                    }

                </div>
            </div>
        </>
    );
};

export default Banner;