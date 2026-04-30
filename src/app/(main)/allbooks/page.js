import BookCard from "@/components/Ui/BookCard";


const AllBooks = async () => {

    const res = await fetch('https://book-flow-seven.vercel.app/booksData.json')
    const allBooksData = await res.json()

    return (
       <div className="w-11/12 mx-auto min-h-screen pt-10 pb-20">

    <h2 className="text-2xl font-bold mb-5">All Books</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allBooksData.map(item => <BookCard key={item.id} books={item} />)}
    </div>

</div>
    );
};

export default AllBooks;