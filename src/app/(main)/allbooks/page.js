import BookSidebar from "@/components/Ui/BookSidebar";
import AllBooksData from "@/components/Ui/AllBooksData";

const AllBooksPage = async ({ searchParams }) => {
    const { category } = await searchParams;

    const res = await fetch('https://book-flow-seven.vercel.app/booksData.json');
    const allBooksData = await res.json();

    return (
        <div className="w-11/12 mx-auto min-h-screen py-8 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-16 gap-8 items-start">
                <BookSidebar />

                <main className="md:col-span-13">
                    <AllBooksData 
                        allBooksData={allBooksData} 
                        category={category} 
                    />
                </main>
            </div>
        </div>
    );
};

export default AllBooksPage;