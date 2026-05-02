

import BorrowButton from "@/components/Ui/BorrowButton";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

const BooksDetailsPage = async ({ params }) => {
    const { id } = await params;
    //    console.log(id);
    const res = await fetch('https://book-flow-seven.vercel.app/booksData.json');
    const allBooksData = await res.json();

    const book = allBooksData.find(item => String(item.id) === String(id))
    
    // console.log(book);


    return (
        <div className="w-11/12 mx-auto py-12 min-h-screen">
      <div className="bg-base-100 rounded-xl md:rounded-3xl overflow-hidden border-2 border-gray-200">

        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/3 relative h-[450px] lg:h-auto bg-gray-50">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <span className="badge badge-primary badge-outline px-4 py-3 font-semibold uppercase tracking-wider">
                {book.category}
              </span>           
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 leading-tight">
              {book.title}
            </h1>
            
            <p className="text-lg text-primary font-medium mb-6">
              Author - {book.author}
            </p>

            <div className="divider"></div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">
                About
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                {book.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-600">Available:  <span className={'text-lg font-bold text-green-600'}>
                   {book.available_quantity} Copies
                </span></span>
                
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <BorrowButton/>
              <button className="btn btn-outline btn-lg px-8 hover:bg-gray-100 transition-colors ">
                Add to Wishlist
              </button>
            </div>
          </div>

        </div>
      </div>
      <ToastContainer/>
    </div>
    );
};

export default BooksDetailsPage;