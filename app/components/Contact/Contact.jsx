import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Container from "./Container";

const ContactPage = () => {
    return (
      <>
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactDetails />
            <ContactForm />
          </div>
        </Container>
      </>
    );
  };
  
  export default ContactPage;