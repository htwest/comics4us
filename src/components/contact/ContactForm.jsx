const ContactForm = () => {
  return (
    <form action="/">
      <label for="fname">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />

      <label for="lname">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." />

      <label for="reason">Reason For Contacting</label>
      <select id="reason" name="reason">
        <option value="concern">Concern</option>
        <option value="question">Question</option>
      </select>

      <label for="subject">Whats on your mind?</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
