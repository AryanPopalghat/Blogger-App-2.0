import React from 'react';

const About = () => {
  return (
    <div className="container-fluid mx-auto my-4">
      <h2 className="text-center mb-4">About the Website</h2>
      <p className="text-justify">
        When you open the website for the first time, you will see two blogs. You can add your own blogs by filling out the form on the main page. You can also delete a blog. Please note that all three entries in the form (blog title, description, and image link) are required. If you leave any field blank and try to submit the form, you will receive an alert to fill in the missing entry. Your blog will only be added when you have filled in all the required fields.
      </p>
      <p className="text-justify">
        When making changes to the blog list, such as deleting blogs, please exercise caution as the changes are stored in the backend and will persist even if you reload the page. If you update the blog list, such as adding a new blog, the updated list will be displayed upon reloading the page. If you delete all the blogs, a message will be shown indicating that there are no blogs to display.
      </p>
      <p className="text-justify">
        Feel free to explore all the features of the website and try out all the options available.
      </p>
      <p className="text-center mt-4">
        Happy blogging!
      </p>
    </div>
  );
};

export default About;

