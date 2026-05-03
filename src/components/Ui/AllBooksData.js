"use client";
import React, { useState } from 'react';
import BookCard from "@/components/Ui/BookCard";
import { ImSearch } from 'react-icons/im';
import { BiConfused } from 'react-icons/bi';

const AllBooksData = ({ allBooksData, category }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBooks = allBooksData.filter(book => {
        const matchesCategory = (!category || category === "All") ? true : book.category.toLowerCase() === category.toLowerCase();

        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            {/* Search Box */}
            <div className="mb-10 w-full max-w-2xl mx-auto relative">
                <input
                    type="text"
                    placeholder="Search books by title..."
                    className="input input-bordered input-primary w-full p-8 pr-14 text-xl rounded-2xl shadow-sm focus:ring-1 focus:ring-primary/50 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none">
                    <ImSearch />
                </div>
            </div>

            {/* Books Card*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((item) => (
                        <BookCard key={item.id} books={item} />
                    ))
                ) : (
                    <div className="col-span-full flex items-center text-center justify-center py-16 text-gray-600 text-lg md:text-xl gap-2">
                       <BiConfused size={25} /> Sorry! No books found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllBooksData;