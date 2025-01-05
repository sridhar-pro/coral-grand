import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="CORAL GRAND PROPERTY DEVELOPERS" invert={invert}>
          XXXX
          <br />
          Coimbatore
          <br />
          XXXX
        </Office>
      </li>
      <li>
        <Office name="Phone" invert={invert}>
        +91 86677 66020
          <br />
         <Office name="Email" invert={invert}>
         admin@coral.com
         </Office>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
