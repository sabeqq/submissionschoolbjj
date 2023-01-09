
export default function contact() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;

    });
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData)
  }
  return (
    <section className="py-8 h-100 whitespace-normal " id="contact">

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-4xl md:text-4xl font-bold font-sans md:font-sans mb-5 text-center">Contact Us</h2>

        <p className="mb-8 lg:mb-16 font-light text-center text-black-500 dark:text-black sm:text-xl">Contact us directly for more information about Submission School BJJ</p>
        <form method="post" action="#" className="space-y-8" onSubmit={handleOnSubmit}>
          <div>
            <label for="name" className="block mb-2 text-sm font-medium text-black dark:text-black">Full Name</label>
            <input type="text" id="name" name="name" className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-white-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium  text-black dark:text-black">Your email</label>
            <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border text-black  text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@submissionschoolbjj.com" required />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium  text-black dark:text-black">Subject</label>
            <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-black  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium  text-black dark:text-black">Your message</label>
            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-black  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-orange-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
    </section>
  )
}
