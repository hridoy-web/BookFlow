import BookCard from "@/components/Ui/BookCard";
import BookSidebar from "@/components/Ui/BookSidebar";


const AllBooksPage = async ({ searchParams }) => {

    const { category } = await searchParams;
    // console.log(category);

    const res = await fetch('https://book-flow-seven.vercel.app/booksData.json');
    const allBooksData = await res.json();

    const filterBooks = (category && category !== "All") ? allBooksData.filter(book => book.category.toLowerCase() === category.toLowerCase()) : allBooksData;

    return (
        <div className="w-11/12 mx-auto min-h-screen py-8 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-16 gap-8 items-start">

                <BookSidebar />

                <main className="md:col-span-13">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterBooks.map((item) => (
                            <BookCard key={item.id} books={item} />
                        ))}
                    </div>
                </main>

            </div>
        </div>

    );
};

export default AllBooksPage;