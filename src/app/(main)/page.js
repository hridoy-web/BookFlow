import Banner from "@/components/Home/Banner";
import BookCard from "@/components/Ui/BookCard";

const HomePage = async () => {

  const res = await fetch('https://book-flow-seven.vercel.app/booksData.json')
  const allBooksData = await res.json()
  const topBooks = allBooksData.slice(0, 4)

  return (
    <div>
      <Banner />

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12 ">
          {
            topBooks.map(books => <BookCard key={books.id} books={books} />)
          }
        </div>
      </section>

    </div>
  );
};

export default HomePage;