import Link from "next/link";

const BookSidebar = async () => {

    const res = await fetch('https://book-flow-seven.vercel.app/booksData.json')
    const allBooksData = await res.json()

    const uniqueCategories = ["All", ...new Set(allBooksData.map((item) => item.category))];

    // console.log(uniqueCategories);

    return (
        <aside className="md:col-span-3 md:sticky md:top-10">
            <h2 className="text-2xl w-full font-bold mb-4 px-2">
                Categories
            </h2>

            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {uniqueCategories.map((items, index) => (
                   <Link key={index} href={`/allbooks?category=${items}`} > 
                   <button className="md:w-full btn"
                    >{items}</button>
                    </Link>
                ))}
            </div>
        </aside>
    );

};

export default BookSidebar;