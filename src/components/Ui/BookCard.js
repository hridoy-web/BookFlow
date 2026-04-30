import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({books}) => {

    const {image_url, author, category, title, id } = books;

    return (
        <div className="card bg-base-100 shadow-sm border border-gray-200">
      <figure className="h-48 overflow-hidden">
        <Image
        src={image_url}
        alt={title}
        width={340}
        height={200}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm opacity-70">By {author}</p>
        <div className="badge badge-soft badge-primary badge-outline">{category}</div>
        <div className="card-actions mt-4">
          <Link href={`/allbooks/${id}`} className="btn btn-primary btn-soft  font-bold w-full" >View Details</Link>
        </div>
      </div>
    </div>
    );
};

export default BookCard;