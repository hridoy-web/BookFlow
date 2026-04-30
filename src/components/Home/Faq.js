import React from 'react';

const Faq = () => {
    return (
        <section className="my-16 md:my-20">

            <div className="w-11/12 mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
                    <p className="text-gray-500 max-w-72 mx-auto md:text-lg mt-3">Everything you need to know about our library system.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="collapse collapse-plus bg-base-200 rounded-2xl">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title md:text-xl font-semibold">How many books can I borrow at once?</div>
                        <div className="collapse-content text-gray-600">
                            <p>You can borrow up to 3 books at a time. Once you return a book, you can borrow another one.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200 rounded-2xl">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title md:text-xl font-semibold">Is there any late return fee?</div>
                        <div className="collapse-content text-gray-600">
                            <p>We encourage timely returns to help other readers, but we currently do not charge late fees.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-200 rounded-2xl">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title md:text-xl font-semibold">Can I suggest a new book?</div>
                        <div className="collapse-content text-gray-600">
                            <p>Yes! You can contact us to suggest any title you would like to see in our collection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;