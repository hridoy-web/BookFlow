"use client"
import { toast } from "react-toastify";

const BorrowButton = () => {
    const handleBorrowbtn = () => {
        toast.success("Successfully Borrowed This Book!");
    }

    return (
        <button 
            onClick={handleBorrowbtn} 
            className="btn btn-primary btn-lg px-12 shadow-lg hover:scale-105 transition-transform duration-200"
        >
            Borrow This Book
        </button>
    );
};

export default BorrowButton;