const Footer = () => {
  return (
    <div className="p-4 w-3/4 mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src={`./spicy.svg`}
          alt={`spicy logo`}
          title={'spicy'}
          className="h-8 w-8"
        />
        <p>
          <span className="text-red-500">*</span>Means Very Spicy. Proceed with
          caution and ask for ice if necessary.
        </p>
      </div>
      <div className="text-center">
        <p>200 Varick St, New York, NY 10014</p>
        <p>(666)-666-666</p>
      </div>
    </div>
  );
};

export default Footer;
